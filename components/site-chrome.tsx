import Link from "next/link";

export const COMMITTEE = "Friends of Noah Smith";
export const CONTACT_EMAIL = "nsfwcs3@gmail.com";

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
          <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
            Join the Campaign
          </a>
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
          </nav>
        </div>
        <p className="disclaimer">
          Paid for by <b>{COMMITTEE}</b>.
        </p>
      </div>
    </footer>
  );
}
