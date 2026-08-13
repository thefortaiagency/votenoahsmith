"use client";

import { useState } from "react";
import { COMMITTEE, CONTACT_EMAIL } from "./site-chrome";

type State = "idle" | "sending" | "done" | "error";

/**
 * Supporter signup. Replaces the mailto: that used to sit behind every
 * "Join the Campaign" button — a mailto captures nothing and, on a phone,
 * mostly just bounces the visitor into a mail app they never come back from.
 *
 * Phone is optional, and texting requires its OWN explicit opt-in rather than
 * being implied by handing over a number. Political SMS sits under the TCPA,
 * where consent has to be knowing and separate — so the checkbox is unticked
 * by default and spells out what it signs the person up for.
 */
export function SignupForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    if (!data.email?.includes("@")) {
      setError("Please enter an email address we can reach you at.");
      setState("error");
      return;
    }

    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setState("done");
        form.reset();
        return;
      }

      // The endpoint is not configured yet. Rather than lose the signup,
      // hand it off as a pre-filled email so the person's effort still counts.
      if (res.status === 501 || body?.fallback) {
        const lines = [
          `Name: ${data.first ?? ""} ${data.last ?? ""}`.trim(),
          `Email: ${data.email ?? ""}`,
          `Phone: ${data.phone || "(not given)"}`,
          `OK to text: ${data.sms ? "YES" : "no"}`,
          `ZIP: ${data.zip || "(not given)"}`,
          data.note ? `Note: ${data.note}` : "",
        ].filter(Boolean);
        window.location.href =
          `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            "Campaign signup",
          )}&body=${encodeURIComponent(lines.join("\n"))}`;
        setState("done");
        return;
      }
      throw new Error(body?.error || "Something went wrong.");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="signup-done">
        <strong>You&rsquo;re in — thank you.</strong>
        <p>
          We&rsquo;ll be in touch. If you want to help sooner, reply to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and tell us
          whether you can host a yard sign.
        </p>
      </div>
    );
  }

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      {/* Honeypot. Hidden from people, irresistible to bots — the API accepts
          and discards anything that fills it, so spam does not retry. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
      />

      <div className="signup-row">
        <label>
          First name
          <input name="first" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="last" autoComplete="family-name" required />
        </label>
      </div>

      <div className="signup-row">
        <label>
          Email <span className="req">required</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          ZIP code
          <input
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={10}
          />
        </label>
      </div>

      <label>
        Mobile number <span className="opt">optional</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="260-555-0147" />
      </label>

      <label className="signup-check">
        <input type="checkbox" name="sms" value="yes" />
        <span>
          <strong>Yes, you can text me.</strong> By ticking this box I agree to
          receive recurring campaign text messages from {COMMITTEE} at the
          number above, including messages sent by an automated system.
          Message and data rates may apply. Reply STOP to stop, HELP for help.
        </span>
      </label>

      <label>
        Anything you&rsquo;d like us to know? <span className="opt">optional</span>
        <textarea name="note" rows={3} placeholder="I can host a yard sign…" />
      </label>

      {state === "error" && <p className="signup-error">{error}</p>}

      <button className="btn" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Join the Campaign"}
      </button>

      <p className="signup-legal">
        We never sell or share your information. Paid for by {COMMITTEE}.
      </p>
    </form>
  );
}
