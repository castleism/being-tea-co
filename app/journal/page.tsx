import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { blogs } from "../content/blogs";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Tea Journal: Research, Culture & Practice",
  description:
    "Research-backed tea essays on the plant, processing, water, brewing, storage, teaware, cultural attribution, mindful practice, and caffeine.",
  path: "/journal",
  image: "/images/landing/journal.webp",
  imageAlt:
    "A tea journal, brewing tools, and leaves arranged for Being Tea Co. field notes.",
});

export default function JournalPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero journal-hero">
        <p className="eyebrow">Four months at the tea table</p>
        <h1>Field notes for<br /><em>better attention.</em></h1>
        <p>
          Twelve researched essays moving from the living plant through
          processing, preparation, storage, culture and the felt experience of
          drinking tea.
        </p>
      </section>
      <section className="journal-grid">
        {blogs.map((post, index) => (
          <Link className={index === 0 ? "featured-post" : ""} href={`/journal/${post.slug}`} key={post.id}>
            <img
              src={`/images/journal/${post.id.toLowerCase()}.webp`}
              alt={post.altText}
            />
            <div>
              <span>{post.category} · {post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.dek.replace(/\*/g, "")}</p>
              <em>{post.readTime} read</em>
            </div>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
