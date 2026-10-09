import type { Metadata } from "next";
import Link from "next/link";
import { JoinCta, PrimaryCta, Rule } from "@/components/site-chrome";
import { POSTS } from "@/lib/posts";

const post = POSTS.find((p) => p.slug === "principal-for-a-day-croninger")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `/news/${post.slug}` },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.excerpt,
    publishedTime: post.date,
    images: [{ url: post.og, width: post.ogW, height: post.ogH, alt: post.ogAlt }],
  },
  twitter: { card: "summary_large_image", images: [post.og] },
};

/**
 * The photographs, with the captions they will actually publish under.
 *
 * IN CHRONOLOGICAL ORDER, and every caption carries the minute its file was
 * taken. That is a promise the page has to keep: the first version of this
 * list ran robotics-club first and captioned it 8:01, which is the timestamp
 * belonging to robotics-build — the other photograph. Two files from the same
 * five minutes are trivially easy to swap, and a time printed under the wrong
 * picture is a small lie on a candidate's website. The times below are read
 * off the originals in ~/noah-workspace/inbox/croninger-2026-10-08/ and the
 * run is 8:01 to 9:31, which is the ninety minutes the section above claims.
 *
 * ⛔ A caption may only describe what is VISIBLE IN THE FRAME. The morning
 * included math, reading and Spanish immersion; no photograph here shows any
 * of them, so no caption claims them. The body copy is Noah's own account of
 * his morning and can say so; a caption sits directly beneath an image and is
 * read as a description of it.
 *
 * at-the-mics.jpg carries a BLURRED STUDENT ID BADGE. Noah cleared the
 * photograph on 2026-10-09 on condition the badge went; the original showed
 * her school portrait and "Croninger Elementary" legibly. It was destroyed by
 * pixelation before blurring (tools/blur-region.py) because a Gaussian blur
 * alone is reversible. Do not re-derive this file from the original by hand —
 * the cleared master is kept at
 * ~/noah-workspace/staging/croninger-held/announcements-BADGE-BLURRED.jpg.
 *
 * All seven photographs from the visit are now published; Noah cleared the
 * last two on 2026-10-09. Each was checked at full resolution first for name
 * badges, labelled work and anything else that would identify a child by
 * name. Do that check before adding an eighth.
 */
const GALLERY = [
  {
    src: "/news/croninger-2026-10-08/robotics-build.jpg",
    w: 1050,
    h: 1400,
    alt: "Two students assembling a blue and yellow motorised robot on the floor, with a tablet open beside them showing their program.",
    caption:
      "8:01 a.m. — the build and the code in one frame, changes tested the moment they are written.",
  },
  {
    src: "/news/croninger-2026-10-08/robotics-club.jpg",
    w: 1050,
    h: 1400,
    alt: "Three Croninger Elementary students and a coach sitting around a robotics practice mat, working on tablets and laptops.",
    caption:
      "8:05 a.m. — robotics club, down on the floor around the practice mat.",
  },
  {
    src: "/news/croninger-2026-10-08/classroom-morning.jpg",
    w: 1400,
    h: 1050,
    alt: "A Croninger Elementary classroom early in the morning, students moving between desks and cubbies as the day gets started.",
    caption: "8:11 a.m. — a classroom getting itself going for the day.",
  },
  {
    src: "/news/croninger-2026-10-08/the-studio.jpg",
    w: 1400,
    h: 1050,
    alt: "Noah Smith smiling in Croninger Elementary's video studio, green screen, overhead lighting rig and a wall monitor behind him.",
    caption:
      "8:44 a.m. — Croninger has a real studio. Green screen, lighting rig and all.",
  },
  {
    src: "/news/croninger-2026-10-08/candy-monster.jpg",
    w: 1050,
    h: 1400,
    alt: "A cart decorated with cardboard and paper to look like a monster with large teeth and red eyes, parked against a classroom wall.",
    caption:
      "9:00 a.m. — the candy monster, mid-construction, waiting on Trunk or Treat. Teeth already fitted.",
  },
  {
    src: "/news/croninger-2026-10-08/at-the-mics.jpg",
    w: 1400,
    h: 1050,
    alt: "Noah Smith and a Croninger Elementary student in a Crusaders polo, both grinning behind two studio microphones on boom arms.",
    caption: "9:11 a.m. — on the microphones with a Croninger Crusader.",
  },
  {
    src: "/news/croninger-2026-10-08/in-class.jpg",
    w: 1400,
    h: 1050,
    alt: "Noah Smith and a Croninger Elementary student in a classroom, a hand-lettered poster reading \u201cAll My Best Friends Represent Vertebrates\u201d on the wall behind them.",
    caption:
      "9:31 a.m. — amphibians, mammals, birds, reptiles and fish, spelled out on the wall behind us.",
  },
];
/** The four stops, in the order the morning happened. */
const STOPS = [
  {
    c: "var(--teal)",
    title: "Robotics club, first thing",
    body: "Students on the floor around a practice mat with tablets, a motor, and a half-built machine — running their program, watching it fail, changing one thing, running it again. This was the first stop of the morning, and it was already fully under way.",
  },
  {
    c: "var(--green)",
    title: "Math and reading",
    body: "The core of the day, and the part no visitor should skip past. Small groups, a teacher moving between them, and the ordinary unglamorous work that every other thing on this page is built on top of.",
  },
  {
    c: "var(--sand)",
    title: "Spanish immersion",
    body: "A classroom where the lesson is not Spanish — the lesson is in Spanish. Elementary students doing their schoolwork in a second language, as a matter of routine.",
  },
  {
    c: "var(--sky)",
    title: "Building the candy monster",
    body: "A cart, a lot of cardboard, and a set of teeth, destined for Croninger's Trunk or Treat. Exactly the kind of thing that makes a school feel like somewhere children want to be.",
  },
];

export default function CroningerPost() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">
            From the campaign · {post.dateHuman}
          </div>
          <h1>
            Principal
            <br />
            <em>for a Day</em>
          </h1>
          <div className="hero-role">Croninger Elementary · Fort Wayne</div>
          <p className="lede">
            A morning with the Crusaders — robotics club first thing,
            math and reading, Spanish immersion, and one very large candy
            monster.
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="prose" style={{ marginTop: 20 }}>
            <p>
              I spent Thursday morning as Principal for a Day at Croninger
              Elementary, and I want to be honest about why that matters to me
              more than it probably sounds like it should. Board members read
              about schools constantly — enrollment numbers, test data, budget
              lines, facilities reports. All of it is real. None of it is the
              same as standing in a hallway at eight in the morning watching
              what the building actually does.
            </p>
            <p>
              Croninger does a lot, and all of it was already going by the
              time I walked in.
            </p>
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">The morning</div>
            <h2>Four stops in ninety minutes</h2>
          </div>
          <div className="cards">
            {STOPS.map((s) => (
              <article
                className="card"
                key={s.title}
                style={{ ["--c" as string]: s.c }}
              >
                <h3>{s.title}</h3>
                <p style={{ marginTop: 8 }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">From the visit</div>
            <h2>Croninger, 8:01 to 9:31 a.m.</h2>
          </div>
          <div className="gallery">
            {GALLERY.map((g) => (
              <figure key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
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
              &ldquo;You cannot govern a district from a board table alone. The
              robotics club was going at eight in the morning because a teacher
              decided it should be and students decided to show up for it — and
              that is not a line item you will find in any report I read this
              year. Thank you to the staff, the families and the Crusaders at
              Croninger for letting me spend the morning with you.&rdquo;
            </p>
            <cite>
              — Noah Smith, FWCS Board President and At-Large candidate
            </cite>
          </div>
          <p className="note" style={{ marginTop: 26 }}>
            This is a campaign website published by Friends of Noah Smith. It is
            not a publication of Fort Wayne Community Schools and does not speak
            for the district or for Croninger Elementary.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2>Mornings like this are the whole job</h2>
          <p>
            The work on safety, teacher pay and career pathways exists so that a
            Thursday morning at Croninger looks like this one. Help us keep it
            going.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <PrimaryCta source="croninger-post" />
            <JoinCta />
          </div>
          <p style={{ marginTop: 26 }}>
            <Link href="/news" style={{ color: "#fff" }}>
              ← All campaign updates
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
