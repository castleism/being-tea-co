import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/JsonLd";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { teaImageAlt } from "../../content/imageAlt";
import { teaFamilies } from "../../content/library";
import {
  breadcrumbJsonLd,
  pageMetadata,
} from "../../lib/site";

export function generateStaticParams() {
  return teaFamilies.map((tea) => ({ slug: tea.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tea = teaFamilies.find((item) => item.slug === slug);
  if (!tea) return {};

  return pageMetadata({
    title: `${tea.name}: Processing, Flavor, Brewing & Storage`,
    description: `${tea.definition} Learn representative styles, a measured brewing starting point, storage guidance, and questions to ask before buying.`,
    path: `/tea/${tea.slug}`,
    image: `/images/tea/${tea.slug}.webp`,
    imageAlt: teaImageAlt[tea.slug],
  });
}

export default async function TeaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tea = teaFamilies.find((item) => item.slug === slug);
  if (!tea) notFound();

  const current = teaFamilies.findIndex((item) => item.slug === slug);
  const next = teaFamilies[(current + 1) % teaFamilies.length];
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Tea library", path: "/learn" },
    { name: tea.name, path: `/tea/${tea.slug}` },
  ]);

  return (
    <main>
      <JsonLd data={breadcrumbs} />
      <SiteHeader />
      <article className="guide">
        <header
          className="guide-header"
          style={{
            backgroundImage: `linear-gradient(115deg, rgba(17,46,37,.97), rgba(39,73,57,.72)), url("/images/tea/${tea.slug}.webp")`,
          }}
        >
          <Link href="/learn">← Tea library</Link>
          <p className="eyebrow">{tea.eyebrow}</p>
          <h1>{tea.name}</h1>
          <p className="guide-dek">{tea.tagline}</p>
        </header>

        <div className="guide-body">
          <aside>
            <p className="section-kicker">In this guide</p>
            <a href="#definition">Definition</a>
            <a href="#process">Process</a>
            <a href="#styles">Style spectrum</a>
            <a href="#brew">Starting brew</a>
            <a href="#buy">Buying questions</a>
            <a href="#sources">Sources</a>
          </aside>
          <div className="guide-content">
            <section id="definition">
              <p className="lead">{tea.definition}</p>
              <div className="sensory-note">
                <span>In the cup</span>
                <p>{tea.cup}</p>
              </div>
            </section>
            <section id="process">
              <p className="section-kicker">Core process</p>
              <ol className="process-steps">
                {tea.process.map((step, index) => (
                  <li key={step}><span>{index + 1}</span>{step}</li>
                ))}
              </ol>
            </section>
            <section id="styles">
              <p className="section-kicker">Representative styles</p>
              <ul className="style-list">
                {tea.styles.map((style) => <li key={style}>{style}</li>)}
              </ul>
            </section>
            <section id="brew" className="brew-note">
              <p className="section-kicker">House starting point</p>
              <h2>Measure, taste, change one thing.</h2>
              <p>{tea.brew}</p>
              <p><strong>Storage:</strong> {tea.storage}</p>
              <small>
                These are house starting ranges, not universal standards. Use
                credible maker instructions when they are more specific.
              </small>
            </section>
            <section id="buy">
              <p className="section-kicker">Ask before buying</p>
              <ul className="question-list">
                {tea.questions.map((question) => <li key={question}>{question}</li>)}
              </ul>
            </section>
            <section id="sources" className="source-box">
              <p className="section-kicker">Sources</p>
              {tea.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                  {source.label} <span>↗</span>
                </a>
              ))}
            </section>
          </div>
        </div>
      </article>
      <Link className="next-guide" href={`/tea/${next.slug}`}>
        <span>Next family</span>
        <strong>{next.name}</strong>
        <b>→</b>
      </Link>
      <SiteFooter />
    </main>
  );
}
