import Link from "next/link";
import {
  AmountLadder,
  GivingDisclaimer,
  JoinCta,
  PrimaryCta,
  Rule,
} from "@/components/site-chrome";

const STATS = [
  { c: "var(--green)", n: "2021", l: "Serving FWCS families since" },
  { c: "var(--orange)", n: "$12M", l: "Per year for school safety & mental health" },
  { c: "var(--sand)", n: "37", l: "Schools repaired under REPAIR FWCS" },
  { c: "var(--sky)", n: "$1.02", l: "Tax rate, down from $1.30" },
];

const SERVICE = [
  {
    c: "var(--green)",
    when: "January 2021",
    title: "Seated — District 3",
    body: "Appointed by the board to represent District 3, bringing a fresh, finance-grounded perspective to the trustees.",
  },
  {
    c: "var(--orange)",
    when: "January 2023",
    title: "Elected Board Secretary",
    body: "Chosen by his fellow trustees for his first officer role — the start of a steady, earned climb.",
  },
  {
    c: "var(--sand)",
    when: "2024",
    title: "Re-elected by District 3 voters",
    body: "Returned by the families he represents, and re-elected Secretary by the board.",
  },
  {
    c: "var(--sky)",
    when: "January 2025",
    title: "Elected Board Vice President",
    body: "Trusted by his peers with broader organizational and leadership responsibility.",
  },
  {
    c: "var(--green)",
    when: "January 2026",
    title: "Elected Board President",
    body: "Stepped into the presidency of Indiana's largest school district.",
  },
  {
    c: "var(--orange)",
    when: "May 2026",
    title: "Moved to the At-Large seat",
    body: "Kept the presidency and broadened his charge — from one district to advocating for families across the entire FWCS footprint.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <div className="eyebrow">
              Fort Wayne Community Schools · Board of School Trustees
            </div>
            <h1>
              Re-elect
              <br />
              <em>Noah Smith</em>
            </h1>
            <div className="hero-role">
              President, FWCS Board of School Trustees · At-Large Seat
            </div>
            <p className="lede">
              Rooted in Fort Wayne. Dedicated to every student — in every corner
              of our district.
            </p>
            <div className="cta-row">
              <PrimaryCta />
              <Link className="btn btn-ghost" href="/accomplishments">
                See the Record
              </Link>
            </div>
          </div>
          <div className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="portrait"
              src="/noah-smith.jpg"
              alt="Noah Smith, President of the Fort Wayne Community Schools Board of School Trustees"
              width={512}
              height={769}
            />
          </div>
        </div>
      </section>

      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.n} style={{ ["--c" as string]: s.c }}>
            <b>{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Donate</div>
            <h2>Help keep this work going</h2>
            <p>
              School board races are won on the ground — yard signs, literature
              at doors, and showing up at every forum in the district.
            </p>
          </div>
          <AmountLadder source="home" />
          <GivingDisclaimer />
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">The candidate</div>
            <h2>A product of the schools he now leads</h2>
          </div>
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              Noah Smith is a proud FWCS graduate, parent, and community leader.
              As President of the Board of School Trustees, he has worked to
              ensure every student in Fort Wayne receives a high-quality,
              equitable education.
            </p>
            <p>
              With deep family roots in the district and a career built in
              small-business finance, Noah brings a rare combination to the
              board: genuine community passion paired with disciplined fiscal
              oversight — the judgment it takes to steward a district budget and
              the capital projects behind it.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Why it matters</div>
            <h2>Fiscal stewardship, community roots</h2>
          </div>
          <div className="cards">
            <article className="card" style={{ ["--c" as string]: "var(--orange)" }}>
              <div className="card-tag">Fiscal oversight</div>
              <h3>He manages public dollars for a living</h3>
              <p>
                Noah&rsquo;s career is in small-business and community lending —
                hands-on financial discipline that carries directly into
                overseeing complex district budgets and long-term capital
                planning.
              </p>
            </article>
            <article className="card" style={{ ["--c" as string]: "var(--green)" }}>
              <div className="card-tag">Deep roots</div>
              <h3>Not an observer — a graduate</h3>
              <p>
                Noah didn&rsquo;t move to Fort Wayne to serve on its school
                board. He grew up in it, graduated from it, and raised his
                family in it — with three daughters who came up through FWCS
                schools.
              </p>
            </article>
            <article className="card" style={{ ["--c" as string]: "var(--sky)" }}>
              <div className="card-tag">Every corner</div>
              <h3>At-Large means all of us</h3>
              <p>
                Moving to the At-Large seat broadened the job from representing
                one district to advocating for students, teachers, and families
                across the whole FWCS footprint.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Record of service</div>
            <h2>A steady trajectory of leadership</h2>
          </div>
          <ol className="timeline">
            {SERVICE.map((s) => (
              <li key={s.when} style={{ ["--c" as string]: s.c }}>
                <div className="when">{s.when}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Beyond the boardroom</div>
            <h2>Advocating at every level</h2>
          </div>
          <div className="cards">
            <article className="card" style={{ ["--c" as string]: "var(--sand)" }}>
              <div className="card-tag">ISBA</div>
              <h3>Indiana School Boards Association — Legislative Committee</h3>
              <p>
                Helping shape the statewide advocacy agenda that fights for
                public-school funding and resources at the Statehouse.
              </p>
            </article>
            <article className="card" style={{ ["--c" as string]: "var(--sky)" }}>
              <div className="card-tag">Foundation</div>
              <h3>Board Liaison to the FWCS Foundation</h3>
              <p>
                Bridging community-generated resources directly to classroom
                academic excellence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2>Keep Fort Wayne moving forward</h2>
          <p>
            Experience, fiscal discipline, and deep community roots — working
            for every FWCS family, in every corner of the district.
          </p>
          <div
            className="cta-row"
            style={{ justifyContent: "center", marginTop: 0 }}
          >
            <PrimaryCta />
            <JoinCta />
            <Link className="btn btn-ghost" href="/snider">
              Snider&rsquo;s New Stadium
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
