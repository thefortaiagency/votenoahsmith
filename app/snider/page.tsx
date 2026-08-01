import type { Metadata } from "next";
import { JoinCta, PrimaryCta, Rule } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Snider Stadium — Home At Last",
  description:
    "After 54 years, Snider's Panthers finally have a home field. The $30 million, 4,500-seat stadium opens Friday, August 28, 2026.",
};

const VIDEO_URL = "https://www.facebook.com/share/v/1Bevxs9fTV/?mibextid=wwXIfr";

const STATS = [
  { c: "var(--green)", n: "54", l: "Years waiting" },
  { c: "var(--orange)", n: "$30M", l: "Investment" },
  { c: "var(--sand)", n: "4,500", l: "Seats" },
  { c: "var(--sky)", n: "Aug 28", l: "First home game, 2026" },
];

const FEATURES = [
  {
    c: "var(--green)",
    title: "4,500 seats",
    body: "Room for the whole Snider family — students, alumni, and neighbors — under the lights.",
  },
  {
    c: "var(--orange)",
    title: "Secure ticketed entry",
    body: "Modern, controlled entrances designed for safety on game night.",
  },
  {
    c: "var(--sand)",
    title: "Panther Pride Spirit Store",
    body: "An on-site home for Snider gear and school pride.",
  },
  {
    c: "var(--sky)",
    title: "Concessions & restrooms",
    body: "Full modern amenities — no more making do on a borrowed field.",
  },
  {
    c: "var(--green)",
    title: "Trainer's room",
    body: "On-site athletic training and care for Snider's athletes.",
  },
  {
    c: "var(--orange)",
    title: "Team collaboration room",
    body: "A dedicated space for the team to prepare, review, and grow together.",
  },
];

const HISTORY = [
  {
    c: "var(--sand)",
    when: "Five decades",
    title: "Home games on Northrop's campus",
    body: "Snider hosts its “home” football at Spuller Stadium — never on its own grounds.",
  },
  {
    c: "var(--green)",
    when: "2023",
    title: "The board commits",
    body: "Fort Wayne Community Schools approves the $30 million stadium project — a long-overdue investment in Snider.",
  },
  {
    c: "var(--sky)",
    when: "March 2025",
    title: "Kept on campus",
    body: "FWCS weighs and declines a downtown riverfront alternative — choosing to build the stadium where it belongs: at Snider.",
  },
  {
    c: "var(--orange)",
    when: "May 2025",
    title: "Ground breaks",
    body: "Shovels in the dirt on Snider's campus — construction begins on the Panthers' first home stadium.",
  },
  {
    c: "var(--green)",
    when: "August 28, 2026",
    title: "Home opener",
    body: "For the first time in school history, the Panthers take their own field for a home game — Friday night, under Snider's own lights.",
  },
];

export default function SniderPage() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Snider High School · Fort Wayne</div>
          <h1>
            54 Years
            <br />
            <em>in the Making</em>
          </h1>
          <div className="hero-role">
            The Panthers finally have a home field
          </div>
          <p className="lede">
            After more than half a century, Snider football comes home — to a
            stadium of its own.
          </p>
          <div className="cta-row">
            <a
              className="btn"
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </div>
        </div>
      </section>

      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.l} style={{ ["--c" as string]: s.c }}>
            <b>{s.n}</b>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">The story</div>
            <h2>Half a century as the home team — without a home</h2>
          </div>
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              For more than fifty years, Snider&rsquo;s Panthers played their
              &ldquo;home&rdquo; games on someone else&rsquo;s field — busing
              across town to Spuller Stadium on Northrop&rsquo;s campus.
              Generations of Snider players, bands, and families never once
              walked out of their own locker room and onto their own turf under
              Friday-night lights.
            </p>
            <div className="quote">
              <p>&ldquo;54 years plus in the making.&rdquo;</p>
              <cite>— Dr. Mark Daniel, FWCS Superintendent</cite>
            </div>
            <p>
              Now it&rsquo;s real: a $30 million, 4,500-seat, multi-use stadium
              on Snider&rsquo;s own campus — and on{" "}
              <strong>Friday, August 28, 2026</strong>, the Panthers host their
              first true home game.
            </p>
            <div className="quote">
              <p>
                &ldquo;It&rsquo;s like Christmas. Everything is new and
                exciting&hellip; for the Snider community to have something to
                call its own.&rdquo;
              </p>
              <cite>— Kurt Tippmann, Snider Head Football Coach</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">What&rsquo;s inside</div>
            <h2>Built for the whole Panther community</h2>
          </div>
          <div className="cards">
            {FEATURES.map((f) => (
              <article
                className="card"
                key={f.title}
                style={{ ["--c" as string]: f.c }}
              >
                <h3>{f.title}</h3>
                <p style={{ marginTop: 8 }}>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">How we got here</div>
            <h2>From borrowed field to home turf</h2>
          </div>
          <ol className="timeline">
            {HISTORY.map((h) => (
              <li key={h.when} style={{ ["--c" as string]: h.c }}>
                <div className="when">{h.when}</div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">A note from Noah</div>
          </div>
          <div className="quote" style={{ background: "#fff", marginTop: 8 }}>
            <p style={{ fontSize: 20, fontWeight: 500 }}>
              &ldquo;I walked Snider&rsquo;s halls. My daughters graduated as
              Panthers. So bringing this stadium home — as a proud alum and a
              member of the board that made it happen — means more to me than
              almost anything we&rsquo;ve done. Fifty-four years is a long wait.
              Welcome home, Panthers.&rdquo;
            </p>
            <cite>
              — Noah Smith, Snider alumnus &amp; FWCS Board President
            </cite>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2>Welcome home, Panthers</h2>
          <p>
            Friday, August 28, 2026 — the first home game in Snider&rsquo;s
            history, on Snider&rsquo;s own field.
          </p>
          <div
            className="cta-row"
            style={{ justifyContent: "center", marginTop: 0 }}
          >
            <PrimaryCta />
            <JoinCta />
          </div>
        </div>
      </section>
    </main>
  );
}
