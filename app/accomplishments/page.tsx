import type { Metadata } from "next";
import { JoinCta, PrimaryCta, Rule } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Accomplishments",
  description:
    "Noah Smith's record on the Fort Wayne Community Schools Board of School Trustees, 2021–2026: school safety, teacher pay, career pathways, capital projects, and fiscal discipline.",
};

const CYCLE = ["var(--green)", "var(--orange)", "var(--sand)", "var(--sky)"];

const MARQUEE = [
  {
    tag: "School safety & mental health",
    title: "Passed the Safer FWCS referendum",
    body: "November 2023, 53%–47%: up to $12 million a year for eight years — roughly 90 new positions including school resource officers, mental-health therapists, and student advocates, plus weapons detection at every school and the Peacemaker program in all five high schools.",
  },
  {
    tag: "Career readiness",
    title: "Ford Next Generation Learning designation",
    body: "A 16-month process involving more than 200 community members that produced the district's Portrait of a Graduate and its Master Plan.",
  },
  {
    tag: "Schools of Success",
    title: "Restructured all five high schools into career pathways",
    body: "Health Sciences & Human Services; Manufacturing, Engineering, Tech & Trades; and Business & the Arts — so every FWCS student graduates pointed somewhere.",
  },
  {
    tag: "College credit",
    title: "3DE by Junior Achievement in every high school",
    body: "Launched at North Side and Snider in 2022 and rolled out district-wide. Students earn up to 12 college credits toward Indiana Tech — about $16,000 in savings per student.",
  },
  {
    tag: "Teacher pay",
    title: "Off the bottom of the county, on the path to $50,000",
    body: "The 2023 contract moved the starting teacher salary off the lowest in the county to $46,627, with a path to a $50,000 starting wage set in 2025.",
  },
  {
    tag: "REPAIR FWCS",
    title: "Delivered building work across 37 schools",
    body: "HVAC, roofs, masonry, windows, and safety upgrades — the REPAIR FWCS program executed school by school across the district.",
  },
  {
    tag: "Protecting the classroom",
    title: "Absorbed state funding cuts without touching classrooms",
    body: "Opposed SB 1 and SB 518 in 2025, then cut roughly $18 million over six years out of the central office — not the classroom — to absorb the hit.",
  },
];

const PROGRAMS = [
  "Amp Lab @ Electric Works — launched the district's flagship innovation and maker campus.",
  "Surack Family Foundation Create Studio — a $625,000, five-year naming and sponsorship partnership (2022).",
  "Pearl Arts Innovation Institute — a music-industry entrepreneurship half-day program with Pearl Street Arts Center (2025).",
  "Fort Wayne Philharmonic partnership — Club-O and Kid-O music programming in every elementary school.",
  "STEM expansion — Arlington named a Project Lead The Way STEM school; new STEM labs at Jefferson and Arlington (2025).",
  "A new north-side Montessori school, planned in 2025.",
  "GEAR UP — the federal college-access program, brought to FWCS students.",
  "Naviance college and career readiness platform — three-year renewal, $187,000 (2025).",
  "Defined Learning — district-wide project-based learning platform, $401,000.",
  "Robots4Autism / RoboKind — a $74,300 IDOE grant for autism and behavior-support classrooms.",
  "Fort Wayne Museum of Art — appointed FWCS representatives to its board.",
];

const FACILITIES = [
  "Northrop High School renovation — $38.6 million.",
  "Blackhawk Middle School renovation — approximately $17 million.",
  "Forest Park Elementary accessibility and security program — an approximately $52 million construction-manager-as-constructor program.",
  "Arlington and Lincoln Elementary renovations — $14.1 million.",
  "Scott Academy expansion and Abbett Elementary addition.",
  "District-wide HVAC and energy improvements — $15.5 million in guaranteed energy savings.",
  "Whitney Young Early Childhood Center upgrades — $1.34 million.",
  "Adams Elementary office addition and renovation — $1.79 million.",
  "Multi-year roof replacement program — Northrop, Wayne, Lane Middle School, Fairfield and more.",
  "Snider and South Side High School HVAC — $1.86 million.",
  "Nutrition Processing Center warehouse expansion — $1.79 million, expanding student-meal capacity.",
  "District-wide safety, security and ADA accessibility project — security equipment and elevator lifts across multiple schools.",
  "District radio and communications tower upgrade — $399,000 for school safety.",
  "South Side Athletic Annex parking expansion — $683,000.",
  "Ongoing bus-fleet replacement — new buses added every year.",
  "Snider High School stadium — the $22.5 million, 4,500-seat home field, 54 years in the making, as part of a $55 million athletics and facilities bond issuance.",
];

const FISCAL = [
  "Responsibly grew and managed the budget of Indiana's largest district — $327 million in 2022 to $391 million in 2025.",
  "Consistently spent above the state average on direct classroom instruction.",
  "Funded major capital work while holding and then lowering the tax rate — from $1.30 to $1.02.",
  "Raises for the people who keep schools running — a minimum of 4% for two years, including bus drivers, nurses, and classified staff.",
  "Adopted disciplined three-year Capital Projects Plans and five-year Bus Replacement Plans every year.",
  "Secured major outside funding: Special Education Part B $9.7 million; Title II $1.67 million; Title IV $917,000; McKinney-Vento homeless-student support $193,000; Secured School Safety $92,500; Common School Fund technology loans $2 million; plus EARN, Refugee Impact and Robots4Autism grants.",
];

const RECOGNITION = [
  "The board adopted a 95% graduation goal for the district.",
  "South Side High School — Purple Star School award for military-family support.",
  "Memorial Park Middle School — ISSMA All-Music and Total Department Award two years running, one of only nine middle schools in Indiana.",
  "Wayne High School JROTC — SAR Distinguished Unit, its first since 1997, unlocking direct Air Force Academy nominations.",
  "Wayne High School 3DE team — top eight nationwide in the Home Depot Case Challenge, out of 6,300 students from 80 schools.",
  "35 FWCS scholarship recipients honored in 2026 — $500 to $40,000 from 16 community donors.",
  "National CTSO first-place winners across roughly 19 career and technical areas.",
  "New Tech Academy — ASA Data Challenge honorable mention; North Side band — top ten at ISSMA State Finals.",
];

const GOVERNANCE = [
  "Leadership stability — no superintendent turnover, and steady governance through a turbulent post-COVID period.",
  "Stood with teachers — passed a resolution to keep the FWEA curriculum partnership after the state removed the mandate (2023).",
];

function RecordList({ items }: { items: string[] }) {
  return (
    <ul className="record">
      {items.map((text, i) => (
        <li key={text} style={{ ["--c" as string]: CYCLE[i % CYCLE.length] }}>
          {text}
        </li>
      ))}
    </ul>
  );
}

export default function AccomplishmentsPage() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">2021 &ndash; 2026</div>
          <h1>
            The
            <br />
            <em>Record</em>
          </h1>
          <div className="hero-role">
            Fort Wayne Community Schools · Board of School Trustees
          </div>
          <p className="lede">
            Five years of votes, budgets, and buildings. Here is what got done
            for FWCS students, teachers, and families.
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="note">
            Every item on this page happened during Noah&rsquo;s service on the
            board and carries his vote. He served as a member and officer for
            most of it and as President from 2026 — this is work he helped
            oversee and approve alongside his fellow trustees, the
            superintendent, and district staff.
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Marquee wins</div>
            <h2>The seven that mattered most</h2>
          </div>
          <div className="cards">
            {MARQUEE.map((m, i) => (
              <article
                className="card"
                key={m.title}
                style={{ ["--c" as string]: CYCLE[i % CYCLE.length] }}
              >
                <div className="card-tag">{m.tag}</div>
                <h3>{m.title}</h3>
                <p style={{ marginTop: 10 }}>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Programs &amp; partnerships</div>
            <h2>Opening doors outside the classroom walls</h2>
          </div>
          <RecordList items={PROGRAMS} />
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Facilities &amp; capital projects</div>
            <h2>Buildings our kids deserve</h2>
            <p>
              Delivered on time and on budget while the tax rate came down.
            </p>
          </div>
          <RecordList items={FACILITIES} />
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Fiscal stewardship</div>
            <h2>Public dollars, handled like they are borrowed</h2>
          </div>
          <RecordList items={FISCAL} />
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Recognition &amp; student milestones</div>
            <h2>What FWCS students earned</h2>
          </div>
          <RecordList items={RECOGNITION} />
        </div>
      </section>

      <section className="tint">
        <div className="shell">
          <Rule />
          <div className="section-head">
            <div className="kicker">Governance &amp; community</div>
            <h2>Steady hands through hard calls</h2>
          </div>
          <RecordList items={GOVERNANCE} />
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2>There is more to do</h2>
          <p>
            Keep experience, fiscal discipline, and deep community roots working
            for every FWCS family.
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
