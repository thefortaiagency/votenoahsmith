import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { StructuredData } from "@/components/structured-data";
import { CANDIDATE, SITE_URL } from "@/lib/campaign";
import "./globals.css";

export const metadata: Metadata = {
  // ⛔ WITHOUT metadataBase, EVERY SHARE PREVIEW IS BLANK. Relative image paths
  // in Open Graph are resolved against this; with nothing to resolve against,
  // Facebook and iMessage get no picture — on the one surface a campaign is
  // actually shared on.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Noah Smith for FWCS Board of School Trustees",
    template: "%s · Noah Smith for FWCS",
  },
  description:
    "Re-elect Noah Smith — President, Fort Wayne Community Schools Board of School Trustees. Experience, fiscal discipline, and deep community roots for every FWCS family.",
  applicationName: "Noah Smith for FWCS",
  authors: [{ name: CANDIDATE.committee }],
  keywords: [
    "Noah Smith",
    "Fort Wayne Community Schools",
    "FWCS school board",
    "FWCS Board of School Trustees",
    "At-Large seat",
    "Allen County Indiana school board election",
    "November 3 2026 election",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Noah Smith for FWCS Board of School Trustees",
    description:
      "Experience, fiscal discipline, and deep community roots — working for every FWCS family, in every corner of the district.",
    type: "profile",
    url: SITE_URL,
    siteName: "Noah Smith for FWCS",
    locale: "en_US",
    images: [
      {
        url: "/noah-smith.jpg",
        width: 512,
        height: 769,
        alt: "Noah Smith, President of the Fort Wayne Community Schools Board of School Trustees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Smith for FWCS Board of School Trustees",
    description:
      "Experience, fiscal discipline, and deep community roots — working for every FWCS family.",
    images: ["/noah-smith.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Explicit, because the default is not what a phone wants: text should scale
// when someone pinches it, and the address bar should match the site rather
// than flashing white against it.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b3d2e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
