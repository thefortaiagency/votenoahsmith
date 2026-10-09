import type { Metadata } from "next";
import Link from "next/link";
import { JoinCta, PrimaryCta, Rule } from "@/components/site-chrome";
import { POSTS_BY_DATE } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "School visits, board news and campaign updates from Noah Smith, President of the Fort Wayne Community Schools Board of School Trustees.",
  alternates: { canonical: "/news" },
};

export default function NewsIndex() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">Friends of Noah Smith</div>
          <h1>
            Campaign
            <br />
            <em>Updates</em>
          </h1>
          <p className="lede">
            School visits, board news, and what the work actually looks like
            from inside an FWCS building.
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <Rule />
          <div className="post-list">
            {POSTS_BY_DATE.map((p) => (
              <article className="post-card" key={p.slug}>
                <Link href={`/news/${p.slug}`} className="post-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    width={p.coverW}
                    height={p.coverH}
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="post-body">
                  <time dateTime={p.date}>{p.dateHuman}</time>
                  <h2>
                    <Link href={`/news/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p>{p.excerpt}</p>
                  <Link className="post-more" href={`/news/${p.slug}`}>
                    Read the update →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2>Every corner of the district</h2>
          <p>
            Fort Wayne Community Schools is Indiana&rsquo;s largest district.
            Serving it well means showing up in it.
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <PrimaryCta source="news" />
            <JoinCta />
          </div>
        </div>
      </section>
    </main>
  );
}
