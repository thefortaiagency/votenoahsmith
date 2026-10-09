import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/campaign"
import { POSTS_BY_DATE } from "@/lib/posts"

// Hand Google the list instead of making it stumble across the pages. The site
// is small enough that it would find them eventually; there is no reason to
// make that a matter of luck during an election year.
//
// Posts are generated from lib/posts.ts rather than typed out again, because a
// news page whose whole purpose is to be fresh is exactly the page someone
// forgets to add here. lastModified is the DATE OF THE EVENT — a crawler
// treating `new Date()` as "changed today" on a month-old post learns to
// distrust the whole file.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/accomplishments`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: POSTS_BY_DATE[0] ? new Date(POSTS_BY_DATE[0].date) : now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/snider`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/donate`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...POSTS_BY_DATE.map((p) => ({
      url: `${SITE_URL}/news/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
