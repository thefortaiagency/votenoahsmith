import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Noah Smith for FWCS Board of School Trustees",
    template: "%s · Noah Smith for FWCS",
  },
  description:
    "Re-elect Noah Smith — President, Fort Wayne Community Schools Board of School Trustees. Experience, fiscal discipline, and deep community roots for every FWCS family.",
  openGraph: {
    title: "Noah Smith for FWCS Board of School Trustees",
    description:
      "Experience, fiscal discipline, and deep community roots — working for every FWCS family, in every corner of the district.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
