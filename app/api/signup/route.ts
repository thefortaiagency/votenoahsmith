import { NextResponse } from "next/server";

/**
 * Supporter signup intake.
 *
 * Where submissions go is set by ONE environment variable, SIGNUP_ENDPOINT —
 * the same "gated on a single constant" shape as DONATE_URL, so turning it on
 * is a one-line change rather than a deploy of new code.
 *
 * Set it to a Google Apps Script web-app URL bound to a Sheet (free, the data
 * stays in Noah's own Drive, no third-party processor and no API key in the
 * repo). Instructions live in docs/signup-setup.md.
 *
 * Until it is set the route answers 501 and the form falls back to a
 * pre-filled email, so a supporter who fills it in is never silently dropped.
 */
export const runtime = "nodejs";

type Payload = {
  first?: string;
  last?: string;
  email?: string;
  phone?: string;
  zip?: string;
  sms?: string;
  note?: string;
  // honeypot: real people leave this empty
  website?: string;
};

const clean = (v: unknown, max = 200) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  // Bots fill every field they find. Accept it silently so they do not retry.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const email = clean(body.email, 254);
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const record = {
    submittedAt: new Date().toISOString(),
    first: clean(body.first, 80),
    last: clean(body.last, 80),
    email,
    phone: clean(body.phone, 40),
    smsConsent: clean(body.sms) === "yes",
    zip: clean(body.zip, 10),
    note: clean(body.note, 1000),
    source: "votenoahsmith.com",
  };

  const endpoint = process.env.SIGNUP_ENDPOINT;
  if (!endpoint) {
    // Not configured yet — tell the client to fall back rather than pretend.
    return NextResponse.json({ fallback: true }, { status: 501 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      // Apps Script answers a successful doPost with a 302 pointing at a
      // one-time result page on googleusercontent.com. The row has ALREADY
      // been written by the time that redirect is issued, and chasing it is
      // unreliable — the hop drops the POST method and the result URL often
      // 404s or 405s. So stop at the redirect and treat 3xx as success.
      redirect: "manual",
    });
    const wrote = res.ok || (res.status >= 300 && res.status < 400);
    if (!wrote) throw new Error(`endpoint returned ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("signup forward failed", err);
    // Do not lose the supporter: let the client fall back to email.
    return NextResponse.json({ fallback: true }, { status: 502 });
  }
}
