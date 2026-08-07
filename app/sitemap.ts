import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/campaign"

// Hand Google the list instead of making it stumble across the pages. Four
// pages is small enough that it would find them eventually; there is no reason
// to make that a matter of luck during an election year.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/accomplishments`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/snider`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/donate`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]
}
