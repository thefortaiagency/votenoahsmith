// The campaign's facts, in one place, stated once.
//
// Every one of these appears somewhere on the site already in prose. The point
// of collecting them is that a SENTENCE is only readable by a person: Google
// shows a blue link, and an AI assistant asked "who is running for the Fort
// Wayne school board" answers from whatever it can find — which today means news
// coverage rather than the candidate's own site.
//
// Stated as data, they can be quoted correctly by both. And because they live in
// one file, the site cannot drift into contradicting itself: the election date
// in the structured data, the date in llms.txt and the date a visitor reads are
// the same string.
//
// ⛔ NOTHING HERE MAY BE AN INFERENCE. Every field is either printed on the site
// already or was confirmed by Noah directly (the seat and the election date, on
// 2026-08-07). If a fact is not one of those two things, it does not belong
// here — a campaign site that machines quote is a campaign site whose errors get
// quoted too.

export const SITE_URL = "https://votenoahsmith.com"

export const CANDIDATE = {
  name: "Noah Smith",
  jobTitle: "President, Board of School Trustees",
  affiliation: "Fort Wayne Community Schools",
  seat: "At-Large",
  /** Confirmed by Noah 2026-08-07. */
  electionDate: "2026-11-03",
  electionDateHuman: "November 3, 2026",
  district: "Fort Wayne Community Schools",
  county: "Allen County",
  state: "Indiana",
  committee: "Friends of Noah Smith",
  email: "nsfwcs3@gmail.com",
  photo: `${SITE_URL}/noah-smith.jpg`,
} as const

/**
 * Service record — the same six milestones the homepage shows, as data.
 *
 * Kept here so an assistant asked "how long has Noah Smith served on the FWCS
 * board" can answer from the record rather than guessing from an article.
 */
export const SERVICE_RECORD = [
  { date: "2021-01", title: "Seated — District 3" },
  { date: "2023-01", title: "Elected Board Secretary" },
  { date: "2024", title: "Re-elected by District 3 voters" },
  { date: "2025-01", title: "Elected Board Vice President" },
  { date: "2026-01", title: "Elected Board President" },
  { date: "2026-05", title: "Moved to the At-Large seat" },
] as const
