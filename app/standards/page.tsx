import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Editorial Standards & Review Policy",
  description:
    "How Being Tea Co. handles evidence, cultural attribution, product reviews, commercial relationships, corrections, and AI-generated editorial imagery.",
  path: "/standards",
  image: "/images/landing/standards.webp",
  imageAlt:
    "Tea notes and tools representing the Being Tea Co. editorial standards.",
});

export default function StandardsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero standards-hero">
        <p className="eyebrow">How we work</p>
        <h1>Editorial<br /><em>standards.</em></h1>
        <p>
          Observation, evidence, cultural attribution, transparent reviews and
          visible commercial disclosures belong at the same table.
        </p>
      </section>
      <section className="policy-page">
        <p className="policy-lead">
          Being Tea Co. separates observation from evidence, tradition from
          universal claims, and useful recommendations from commercial
          incentives.
        </p>
        <div className="policy-grid">
          <section>
            <span>01</span><h2>Evidence</h2>
            <p>Scientific, safety and legal claims link to current primary or authoritative sources whenever possible. House recipes are labeled as starting points.</p>
          </section>
          <section>
            <span>02</span><h2>Culture</h2>
            <p>Practices are attributed to their communities, regions or schools. Personal monastery experience is not presented as lineage authority or institutional endorsement.</p>
          </section>
          <section>
            <span>03</span><h2>Reviews</h2>
            <p>Future reviews will identify the exact product or lot, purchase or gift status, price date, brewing parameters, strengths, limits and intended drinker.</p>
          </section>
          <section>
            <span>04</span><h2>Commerce</h2>
            <p>Paid relationships and gifted products are disclosed where the recommendation appears. Commission rate does not determine editorial ranking.</p>
          </section>
          <section>
            <span>05</span><h2>Corrections</h2>
            <p>Material errors will be corrected visibly with the date and nature of the change. Readers may send evidence or corrections to beingteaco@gmail.com.</p>
          </section>
          <section>
            <span>06</span><h2>AI imagery</h2>
            <p>Editorial illustrations may be generated, but they never stand in for photographs of an exact tea lot, maker, monastery, ceremony or tested product.</p>
          </section>
        </div>
        <section className="disclosure-panel">
          <p className="section-kicker">Affiliate disclosure</p>
          <p>
            Being Tea Co. may eventually use paid affiliate links. If you
            follow one and make a qualifying purchase, Being Tea Co. may
            receive a commission from the retailer. Retailers do not determine
            our conclusions. No affiliate links are active on this site today.
          </p>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
