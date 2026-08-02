import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  AmountLadder,
  COMMITTEE,
  CONTACT_EMAIL,
  DONATE_URL,
  GivingDisclaimer,
  giveUrl,
  Rule,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support the campaign to re-elect Noah Smith to the Fort Wayne Community Schools Board of School Trustees. Paid for by ${COMMITTEE}.`,
};

/**
 * votenoahsmith.com/donate is the address that goes on yard signs, mailers and
 * texts. It forwards to Anedot rather than embedding it, so giving keeps Apple
 * Pay, Google Pay and PayPal — and if the processor ever changes, nothing
 * already printed breaks.
 *
 * Until the Anedot account clears this renders a holding page instead, so the
 * URL is safe to hand out today.
 */
export default function DonatePage() {
  if (DONATE_URL) {
    redirect(giveUrl({ source: "donate-page" }));
  }

  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Support the campaign</div>
          <h1>
            Chip in for
            <br />
            <em>FWCS kids</em>
          </h1>
          <div className="hero-role">Secure online giving opens this week</div>
          <p className="lede">
            Our secure donation page is being finalized right now. It will live
            at this exact address — bookmark it, and check back in a day or two.
          </p>
          <div className="cta-row">
            <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
              Email us to give now
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Choose an amount</div>
            <h2>Every dollar goes to reaching FWCS families</h2>
          </div>
          <AmountLadder source="donate-page" />
          <GivingDisclaimer />
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Where it goes</div>
            <h2>Yard signs, mailers, and showing up</h2>
          </div>
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              School board races are won on the ground — signs in yards,
              literature at doors, and being present at every forum and every
              school event across the district. Every dollar goes to reaching
              FWCS families directly.
            </p>
            <p>
              Want to give another way, or have a question about a contribution?
              Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
              we&rsquo;ll take care of it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
