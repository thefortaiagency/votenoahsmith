import Link from "next/link";

export const COMMITTEE = "Friends of Noah Smith";
export const CONTACT_EMAIL = "nsfwcs3@gmail.com";

/**
 * Anedot hosted Share URL — from Action Pages > Pages, or Builder > Share >
 * Copy Link. Anedot recommends the hosted page over the iframe embed: the
 * embedded version drops Apple Pay, Google Pay and PayPal and converts worse.
 *
 * EMPTY until the Anedot account clears (signed up 2026-08-01, 1-5 business
 * days). While it is empty every donate control disappears and /donate serves
 * a holding page instead of forwarding — so nothing on the live site points at
 * a payment form that does not exist yet. Paste the URL here and redeploy and
 * the whole flow turns on at once.
 */
export const DONATE_URL = "";

/** The clean, printable address. Forwards to Anedot once DONATE_URL is set. */
export const DONATE_PATH = "/donate";

/** The four-panel color bar lifted from the FWCS mark. */
export function Panels() {
  return (
    <div className="panels" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

/** Short version of the same motif, used to open a section. */
export function Rule() {
  return (
    <div className="rule" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

/**
 * The orange slot. Donate owns it once giving is live; until then the ask is
 * to join the campaign, so the button is never dead.
 */
export function PrimaryCta() {
  if (DONATE_URL) {
    return (
      <a
        className="btn"
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    );
  }
  return (
    <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
      Join the Campaign
    </a>
  );
}

/**
 * The volunteer/list ask, as the outlined secondary. Only rendered once Donate
 * has taken the primary slot — otherwise it would duplicate PrimaryCta.
 */
export function JoinCta() {
  if (!DONATE_URL) return null;
  return (
    <a className="btn btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
      Join the Campaign
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <Link href="/" className="wordmark">
          <strong>Noah Smith</strong>
          <span>FWCS Board of School Trustees</span>
        </Link>
        <nav>
          <Link href="/">Meet the Candidate</Link>
          <Link href="/accomplishments">Accomplishments</Link>
          <Link href="/snider">Snider Stadium</Link>
          {DONATE_URL ? (
            <a href={`mailto:${CONTACT_EMAIL}`}>Join the Campaign</a>
          ) : null}
          <PrimaryCta />
        </nav>
      </div>
      <Panels />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <strong>Re-elect Noah Smith</strong>
            FWCS Board of School Trustees · At-Large
            <br />
            Fort Wayne, Indiana
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <nav>
            <Link href="/">Meet the Candidate</Link>
            <Link href="/accomplishments">Accomplishments</Link>
            <Link href="/snider">Snider Stadium</Link>
            {DONATE_URL ? <Link href={DONATE_PATH}>Donate</Link> : null}
          </nav>
        </div>
        <p className="disclaimer">
          Paid for by <b>{COMMITTEE}</b>.
          {DONATE_URL
            ? " Contributions are not deductible as charitable contributions for federal income tax purposes."
            : ""}
        </p>
      </div>
    </footer>
  );
}
