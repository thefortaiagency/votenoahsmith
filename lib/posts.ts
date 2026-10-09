// The news index, as data.
//
// Each post is still a hand-written page under app/news/<slug>/ — the layout of
// a visit to a robotics club has nothing in common with the layout of a
// statement on a budget vote, and forcing both through one template would make
// each of them worse. What lives here is only the spine: what exists, when, and
// how it is summarised in a list.
//
// That spine is consumed in three places that would otherwise drift apart — the
// /news index, the sitemap, and public/llms.txt. Adding a post means adding one
// entry here and one page file; forget the entry and the post is invisible to
// Google even though it renders fine, which is the failure mode worth designing
// against.
//
// ⛔ Same rule as lib/campaign.ts: nothing here may be an inference. A date is
// the date the thing happened, taken from a photograph's timestamp or from
// Noah, never guessed from when the page was written.

export type Post = {
  slug: string
  title: string
  /** ISO 8601. The date of the EVENT, not of publication. */
  date: string
  /** How the date is written in prose. Kept beside the ISO form so the two cannot disagree. */
  dateHuman: string
  /** One or two sentences. Used on the index, in <meta description>, and in share previews. */
  excerpt: string
  /** Index thumbnail. Path under /public, with its true intrinsic pixel size. */
  cover: string
  coverW: number
  coverH: number
  coverAlt: string
  /**
   * The share card. Deliberately separate from `cover`: Facebook, iMessage and
   * Twitter all crop a share image toward landscape, so a portrait phone photo
   * used here gets its top and bottom sliced off. The thumbnail can be any
   * shape — the CSS crops it on purpose — but this one must be wider than it
   * is tall.
   */
  og: string
  ogW: number
  ogH: number
  ogAlt: string
}

export const POSTS: Post[] = [
  {
    slug: "principal-for-a-day-croninger",
    title: "Principal for a Day at Croninger Elementary",
    date: "2026-10-08",
    dateHuman: "October 8, 2026",
    excerpt:
      "A morning as Principal for a Day at Croninger Elementary — robotics club first thing, math and reading, Spanish immersion, and a candy monster being built for Trunk or Treat.",
    cover: "/news/croninger-2026-10-08/robotics-club.jpg",
    coverW: 1050,
    coverH: 1400,
    coverAlt:
      "Croninger Elementary students and a coach around a robotics practice mat, working on tablets and laptops.",
    og: "/news/croninger-2026-10-08/classroom-morning.jpg",
    ogW: 1400,
    ogH: 1050,
    ogAlt:
      "A Croninger Elementary classroom early in the morning, students moving between desks as the day gets started.",
  },
]

/** Newest first — the order a news index is read in. */
export const POSTS_BY_DATE = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
