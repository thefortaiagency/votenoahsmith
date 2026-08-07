import { CANDIDATE, SITE_URL, SERVICE_RECORD } from "@/lib/campaign"

/**
 * The site's facts in the form machines read.
 *
 * A visitor reads "Noah Smith, President of the Fort Wayne Community Schools
 * Board of School Trustees, running for the At-Large seat." A search engine sees
 * a paragraph, and an AI assistant asked about the race sees nothing it can
 * safely quote — so it reaches for a news article instead, and the campaign has
 * no say in what the answer is built from.
 *
 * This says the same thing in schema.org, which both understand:
 *   - who he is and what office he currently holds
 *   - which seat he seeks, in which district, and on what date
 *   - the questions people actually type, answered directly
 *
 * ⛔ EVERY VALUE COMES FROM lib/campaign.ts, which holds only facts printed on
 * this site or confirmed by Noah. Structured data is quoted verbatim and without
 * context by things that will not check it, so an embellishment here is worse
 * than one in prose — it travels further and arrives sounding official.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#noah-smith`,
      name: CANDIDATE.name,
      jobTitle: CANDIDATE.jobTitle,
      image: CANDIDATE.photo,
      url: SITE_URL,
      email: `mailto:${CANDIDATE.email}`,
      affiliation: {
        "@type": "EducationalOrganization",
        name: CANDIDATE.affiliation,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fort Wayne",
          addressRegion: CANDIDATE.state,
          addressCountry: "US",
        },
      },
      hasOccupation: {
        "@type": "Occupation",
        name: CANDIDATE.jobTitle,
        occupationLocation: {
          "@type": "AdministrativeArea",
          name: `${CANDIDATE.county}, ${CANDIDATE.state}`,
        },
      },
      description: SERVICE_RECORD.map((s) => `${s.date}: ${s.title}`).join(". "),
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#election`,
      name: `${CANDIDATE.district} Board of School Trustees election — ${CANDIDATE.seat} seat`,
      startDate: CANDIDATE.electionDate,
      endDate: CANDIDATE.electionDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: `${CANDIDATE.county}, ${CANDIDATE.state}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fort Wayne",
          addressRegion: CANDIDATE.state,
          addressCountry: "US",
        },
      },
      performer: { "@id": `${SITE_URL}/#noah-smith` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${CANDIDATE.name} for ${CANDIDATE.district}`,
      publisher: { "@type": "Organization", name: CANDIDATE.committee },
      inLanguage: "en-US",
    },
    {
      // The questions a voter actually types, answered in the words the site
      // already uses. This is the block an assistant can quote directly.
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: `Who is ${CANDIDATE.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${CANDIDATE.name} is the ${CANDIDATE.jobTitle} of ${CANDIDATE.affiliation}, Indiana's largest school district. He has served on the board since January 2021 and was elected Board President in January 2026.`,
          },
        },
        {
          "@type": "Question",
          name: `What seat is ${CANDIDATE.name} running for?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The ${CANDIDATE.seat} seat on the ${CANDIDATE.district} Board of School Trustees.`,
          },
        },
        {
          "@type": "Question",
          name: `When is the ${CANDIDATE.district} school board election?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${CANDIDATE.electionDateHuman}. The ${CANDIDATE.district} Board of School Trustees serves ${CANDIDATE.county}, ${CANDIDATE.state}.`,
          },
        },
        {
          "@type": "Question",
          name: `How can I support ${CANDIDATE.name}'s campaign?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Contributions are made to ${CANDIDATE.committee}. Visit ${SITE_URL}/donate. Contributions to a political campaign are not deductible as charitable contributions for federal income tax purposes.`,
          },
        },
      ],
    },
  ]

  return (
    <script
      type="application/ld+json"
      // Next renders this as-is; the content is generated from our own constants,
      // never from user input, so there is nothing here to inject.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  )
}
