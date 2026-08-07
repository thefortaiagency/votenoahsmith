import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/campaign"

// ⛔ AI CRAWLERS ARE DELIBERATELY WELCOME HERE.
//
// The instinct on a lot of sites now is to block them. That is exactly backwards
// for a candidate. When a voter asks an assistant "who is running for the Fort
// Wayne school board", it answers from whatever it was allowed to read. Block
// this site and the answer comes from news coverage and other people's
// summaries; allow it and the answer can come from the candidate's own record.
//
// There is nothing here that is not already public and intended to be read.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
