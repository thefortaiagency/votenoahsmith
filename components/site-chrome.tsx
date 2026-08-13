import Link from "next/link";

export const COMMITTEE = "Friends of Noah Smith";
export const CONTACT_EMAIL = "nsfwcs3@gmail.com";

/**
 * Anedot hosted Share URL — from Action Pages > Pages, or Builder > Share >
 * Copy Link. Anedot recommends the hosted page over the iframe embed: the
 * embedded version drops Apple Pay, Google Pay and PayPal and converts worse.
 *
 * EMPTY until the Anedot account clears. Signed up 2026-08-01; Noah finished
 * the setup 2026-08-09 and it is now waiting on bank (micro-deposit)
 * verification, which is the step with no fixed date — do not put an estimate
 * of it into user-facing copy.
 *
 * While it is empty every donate control disappears and /donate serves
 * a holding page instead of forwarding — so nothing on the live site points at
 * a payment form that does not exist yet. Paste the URL here and redeploy and
 * the whole flow turns on at once.
 */
// Annotated `string` deliberately: without it TypeScript narrows the empty
// literal to `never` inside the not-yet-live branches and the build fails.
export const DONATE_URL: string = "";

/** The clean, printable address. Forwards to Anedot once DONATE_URL is set. */
export const DONATE_PATH = "/donate";

/**
 * The ask ladder. Anchoring works: the amounts a donor sees move what they
 * give, so these are set deliberately rather than left to a default.
 *
 * Also set the same ladder inside the Anedot page builder. This constant is
 * belt and braces — it rides along on every link as `amounts=`, so the buttons
 * are right even if the dashboard is later edited by someone else.
 */
export const DONATION_AMOUNTS = [25, 50, 100, 250, 500];

/**
 * Build a link into Anedot. Verified against Anedot's URL-parameter docs:
 *   amount   — prefills a single amount, whole dollars, no cents
 *   amounts  — comma-separated list that sets the suggested buttons
 *   sc       — source code, so Noah can see which part of the site earned it
 *
 * Returns "" when giving is not live yet; callers use that to render nothing.
 */
export function giveUrl(opts: { amount?: number; source?: string } = {}) {
  if (!DONATE_URL) return "";
  const q = new URLSearchParams();
  q.set("amounts", DONATION_AMOUNTS.join(","));
  if (opts.amount) q.set("amount", String(opts.amount));
  q.set("sc", opts.source ?? "website");
  return `${DONATE_URL}${DONATE_URL.includes("?") ? "&" : "?"}${q.toString()}`;
}

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * The ask ladder, rendered. Once giving is live each chip drops the donor
 * straight onto Anedot's card form with that amount already filled in.
 *
 * Before it is live the same chips render as flat, unclickable previews with
 * an email fallback underneath — so the page is honest about not taking cards
 * yet, and the ladder is still reviewable.
 */
export function AmountLadder({ source }: { source?: string }) {
  const live = Boolean(DONATE_URL);
  return (
    <div className="ladder-wrap">
      <div className="ladder">
        {DONATION_AMOUNTS.map((amount) =>
          live ? (
            <a
              key={amount}
              className="chip"
              href={giveUrl({ amount, source })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {usd(amount)}
            </a>
          ) : (
            <span key={amount} className="chip chip-idle">
              {usd(amount)}
            </span>
          ),
        )}
        {live ? (
          <a
            className="chip chip-other"
            href={giveUrl({ source })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Other
          </a>
        ) : (
          <span className="chip chip-idle chip-other">Other</span>
        )}
      </div>
      {live ? null : (
        <p className="ladder-note">
          Card giving opens as soon as our processor finishes verifying the
          committee. To give before then, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </div>
  );
}

/** The contribution disclaimer that has to sit wherever money is asked for. */
export function GivingDisclaimer() {
  return (
    <p className="give-legal">
      All contributions are made to <strong>{COMMITTEE}</strong>. Contributions
      to a political campaign are not deductible as charitable contributions for
      federal income tax purposes.
    </p>
  );
}

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
export function PrimaryCta({ source }: { source?: string } = {}) {
  if (DONATE_URL) {
    return (
      <a
        className="btn"
        href={giveUrl({ source: source ?? "cta" })}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
    );
  }
  return (
    <Link className="btn" href="/join">
      Join the Campaign
    </Link>
  );
}

/**
 * The volunteer/list ask, as the outlined secondary. Only rendered once Donate
 * has taken the primary slot — otherwise it would duplicate PrimaryCta.
 */
export function JoinCta() {
  if (!DONATE_URL) return null;
  return (
    <Link className="btn btn-ghost" href="/join">
      Join the Campaign
    </Link>
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
          {DONATE_URL ? <Link href="/join">Join the Campaign</Link> : null}
          <PrimaryCta source="nav" />
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
