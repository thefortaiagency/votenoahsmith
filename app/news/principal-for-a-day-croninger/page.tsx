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
 * ⛔ A caption may only describe what is VISIBLE IN THE FRAME. The morning
 * included math, reading and Spanish immersion; none of those are in these
 * four pictures, so none of these four captions claim them. The body copy is
 * Noah's own account of his morning and can say so; a caption sits directly
 * beneath an image and is read as a description of it.
 *
 * Three further photographs from the same morning are close-up portraits of
 * individual students. They are deliberately NOT in this repository — see the
 * note in the commit message. Files in /public are served to anyone who asks
 * for the URL, so "added but not displayed" would not have held them back.
 */
const GALLERY = [
  {
    src: "/news/croninger-2026-10-08/robotics-club.jpg",
    w: 1050,
    h: 1400,
    alt: "Three Croninger Elementary students and a coach sit around a robotics practice mat, programming on tablets and laptops before school.",
    caption:
      "Robotics club, 8:01 a.m. — down on the floor around the practice mat, tablets out.",
  },
  {
    src: "/news/croninger-2026-10-08/robotics-build.jpg",
    w: 1050,
    h: 1400,
    alt: "Two students assembling a blue and yellow motorised robot on the floor, with a tablet open beside them showing their program.",
    caption:
      "The build and the code in the same frame — a tablet open beside the robot, changes tested the moment they are written.",
  },
  {
    src: "/news/croninger-2026-10-08/classroom-morning.jpg",
    w: 1400,
    h: 1050,
    alt: "A Croninger Elementary classroom early in the morning, students moving between desks and cubbies as the day gets started.",
    caption: "A classroom getting itself going for the day.",
  },
  {
    src: "/news/croninger-2026-10-08/candy-monster.jpg",
    w: 1050,
    h: 1400,
    alt: "A cart decorated with cardboard and paper to look like a monster with large teeth and red eyes, parked against a classroom wall.",
    caption:
      "The candy monster, mid-construction, waiting on Trunk or Treat. Teeth already fitted.",
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
            <h2>Croninger, Thursday morning</h2>
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
