import { PhotoHero } from "../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../lib/site";

const imageAlt =
  "An unbranded paper tea pouch, a plain wrapped gift, tea cup, and blank review notebook arranged separately on a wooden table.";

export const metadata = pageMetadata({
  title: "Affiliate, Product & AI Disclosures",
  description:
    "Being Tea Co. disclosure policy for affiliate links, gifted products, sponsorships, own merchandise, product imagery, reviews, and AI-generated editorial visuals.",
  path: "/disclosures",
  image: "/images/pages/disclosures.webp",
  imageAlt,
});

export default function DisclosuresPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Disclosures"
        title="Commerce,"
        emphasis="made visible."
        description="Readers should know who paid, what was gifted, what was tested, and when a purchase may benefit Being Tea Co."
        image="/images/pages/disclosures.webp"
        imageAlt={imageAlt}
      />

      <article className="prose-page legal-copy">
        <p className="policy-date">Last updated July 29, 2026</p>
        <div className="current-status">
          <span className="status-dot" />
          <div>
            <strong>Current status</strong>
            <p>
              No paid affiliate product links, paid sponsors, or Being Tea Co.
              products are active on this site today. Retailer application
              links on the Tea &amp; Tools page are research references, not
              commission links.
            </p>
          </div>
        </div>

        <h2>Affiliate links</h2>
        <p>
          If affiliate links are activated, Being Tea Co. may earn a
          commission when a reader buys through a qualifying link. The price
          should not increase because of the commission. The disclosure will
          appear close enough to the recommendation and link to be seen before
          a purchase decision—not only in a footer or separate policy.
        </p>
        <blockquote className="disclosure-example">
          <strong>Paid-link disclosure:</strong> Being Tea Co. may earn a
          commission if you buy through links in this section.
        </blockquote>
        <p>
          Paid links will also be marked for search engines with{" "}
          <code>rel=&quot;sponsored&quot;</code>. Being accepted into a
          program does not make the retailer a sponsor, and a commission does
          not determine editorial ranking.
        </p>

        <h2>Purchased and gifted products</h2>
        <p>
          A review will state whether Being Tea Co. purchased the exact item,
          received it free, received a discount, borrowed it, or used it over
          a longer period. A free sample is disclosed even when no affiliate
          link exists. Brands may correct factual product details, but may not
          buy a favorable conclusion.
        </p>

        <h2>Paid sponsorships</h2>
        <p>
          Sponsored work will be labeled “Advertisement” or “Paid
          sponsorship” before the endorsement. Social and video disclosures
          will appear in the content itself as well as near outbound links.
          Vague labels such as “collab” or “partner” will not replace a plain
          statement about payment or a free product.
        </p>

        <h2>Being Tea Co. merchandise</h2>
        <p>
          When Being Tea Co. sells its own design through a fulfillment
          provider, the product will say that it was designed for and sold by
          Being Tea Co. and that Being Tea Co. receives the profit. A
          manufacturer or retailer logo will not appear as a partner badge
          without written permission.
        </p>

        <h2>AI-generated editorial imagery</h2>
        <p>
          Some editorial images are AI-generated and are identified as concept
          imagery. They do not document a named garden, maker, historical
          object, tea lot, monastery, ceremony, or product test. Actual product
          reviews require photographs of the exact tested item whenever those
          details matter.
        </p>

        <h2>Claims and corrections</h2>
        <p>
          Tea is not marketed here as treatment or prevention for disease.
          Sensory experience is separated from medical or scientific claims,
          and caffeine dilution is not presented as caffeine removal. Material
          errors are corrected under the{" "}
          <a href="/standards">Editorial Standards</a>.
        </p>

        <p className="source-note">
          Reference:{" "}
          <a
            href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
            target="_blank"
            rel="noreferrer"
          >
            U.S. Federal Trade Commission endorsement guidance ↗
          </a>
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
