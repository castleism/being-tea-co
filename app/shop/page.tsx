import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Tea, Teaware & Books: Tested Recommendations",
  description:
    "Being Tea Co.’s transparent roadmap for tea, teaware, books, affiliate recommendations, and no-inventory branded merchandise. No paid product links are active yet.",
  path: "/shop",
  image: "/images/landing/shop.webp",
  imageAlt:
    "Tea, teaware, reading, and tasting tools arranged for Being Tea Co. recommendations.",
});

const partnerCandidates = [
  {
    name: "TeaVivre",
    use: "Chinese tea, Pu-erh, gongfu tools, and storage",
    terms: "12% · 45 days",
    note: "Awin 88687",
    url: "https://ui.awin.com/merchant-profile/88687",
  },
  {
    name: "Palais des Thés USA",
    use: "Single-estate, premium tea, gifts, and presentation",
    terms: "12% · 30 days",
    note: "Awin 48601",
    url: "https://ui.awin.com/merchant-profile/48601",
  },
  {
    name: "Art of Tea",
    use: "U.S. loose-leaf starters, samplers, and teaware",
    terms: "10% · 30 days",
    note: "Awin 85315",
    url: "https://ui.awin.com/merchant-profile/85315",
  },
  {
    name: "Bookshop.org",
    use: "Tea history, botany, craft, culture, and ceramics books",
    terms: "10% · 48 hours",
    note: "Direct · $20 payout minimum",
    url: "https://bookshop.org/affiliate_profile/introduction",
  },
  {
    name: "The Tea Spot",
    use: "Beginner loose leaf, infusers, and travel brewing",
    terms: "5% · 30 days",
    note: "Awin 87929",
    url: "https://ui.awin.com/merchant-profile/87929",
  },
  {
    name: "Teabloom",
    use: "Glass teaware, flowering tea, gifts, and presentation",
    terms: "12% · 45 days",
    note: "Awin 89953",
    url: "https://ui.awin.com/merchant-profile/89953",
  },
];

const merchCandidates = [
  {
    name: "Printful Quick Stores",
    use: "Best first U.S.-only mug, sticker, and notebook pilot",
    terms: "No setup or monthly fee · $25 payout",
    note: "Printful takes the customer payment and handles U.S. sales tax",
    url: "https://www.printful.com/quick-stores",
    status: "First pilot",
  },
  {
    name: "Spreadshop",
    use: "Best free branded storefront and custom-domain option",
    terms: "No setup or monthly fee · $10 payout",
    note: "Provider handles payment, production, shipping, and support",
    url: "https://www.spreadshop.com/sell-merch/",
    status: "Compare",
  },
  {
    name: "Zazzle Creator Store",
    use: "Best secondary source for an actual kitchen or tea towel",
    terms: "No upfront inventory · $50 PayPal payout",
    note: "Marketplace model; slower payout and less brand control",
    url: "https://www.zazzle.com/sell",
    status: "Sample first",
  },
];

export default function ShopPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero shop-hero">
        <p className="eyebrow">Tea, tools &amp; reading</p>
        <h1>Recommend less.<br /><em>Test more.</em></h1>
        <p>
          The Being Tea Co. shop will begin as a small, transparent field
          kit—not an endless shelf of products we have never used.
        </p>
      </section>

      <section className="shop-status">
        <div>
          <span className="status-dot" />
          <p><strong>Research stage</strong> · No paid product links are active today.</p>
        </div>
        <p>
          The links below open official program or application information.
          They are not commission links. No retailer has approved Being Tea
          Co., and no retailer logo is being used as an endorsement badge.
        </p>
      </section>

      <section className="kit-grid">
        <div>
          <span>01</span><h2>Leaf</h2>
          <p>Small samplers with named origin, maker, harvest, and processing information.</p>
          <em>First tests: Chinese oolong, Japanese green, and traceable small-lot tea.</em>
        </div>
        <div>
          <span>02</span><h2>Tools</h2>
          <p>A gram scale, dependable kettle, simple brewing vessel, and cups—nothing ornamental until it earns its place.</p>
          <em>Everyday function before collector language.</em>
        </div>
        <div>
          <span>03</span><h2>Reading</h2>
          <p>Annotated books on botany, processing, history, ceramics, culture, and practice.</p>
          <em>Context beside commerce.</em>
        </div>
      </section>

      <section className="partner-section">
        <div>
          <p className="section-kicker">Affiliate candidates</p>
          <h2>Six current application routes.</h2>
          <p>
            Live official terms were checked July 29, 2026. These are
            candidates, not partners. Five use Awin, which has no permanent
            publisher fee but currently requires a $5 refundable verification
            deposit. Bookshop.org presents no setup fee. Every dashboard
            agreement must be re-checked before acceptance.
          </p>
        </div>
        <div className="partner-list">
          {partnerCandidates.map((partner) => (
            <a href={partner.url} target="_blank" rel="noreferrer" key={partner.name}>
              <div>
                <strong>{partner.name}</strong>
                <span>{partner.use}</span>
                <small>{partner.note}</small>
              </div>
              <em>{partner.terms}</em>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="commerce-method">
        <div>
          <p className="section-kicker">How recommendations become paid links</p>
          <h2>Approval is only the beginning.</h2>
        </div>
        <ol>
          <li><span>01</span><div><strong>Verify</strong><p>Save the signed rate, attribution window, reversals, payout, brand rules, and image permissions.</p></div></li>
          <li><span>02</span><div><strong>Evaluate</strong><p>Buy or clearly label the exact sampled lot or item; record parameters, price date, strengths, and limitations.</p></div></li>
          <li><span>03</span><div><strong>Disclose</strong><p>Place a plain commission statement beside the recommendation and mark the outbound link as sponsored.</p></div></li>
        </ol>
      </section>

      <section className="merch-study">
        <img src="/images/merch-study.png" alt="Being Tea Co. concept study showing a sticker, tea tin, tasting cup, and notebook." />
        <div>
          <p className="section-kicker">Branded merchandise</p>
          <h2>Let the maker ship it.</h2>
          <p>
            The safest first collection is a logo mug, sticker, and tea-notes
            notebook. The customer pays the fulfillment provider, the provider
            makes and ships the product, and Being Tea Co. receives the
            remaining margin. No inventory is purchased in advance.
          </p>
          <ul>
            <li>The Being Tea Co. seal is prepared as a scalable site asset.</li>
            <li>Name and trademark clearance comes before uploading it to merchandise.</li>
            <li>Exact samples must pass print, shipping, wash, and use tests before launch.</li>
            <li>Tea towels and drinkware need product-specific quality checks.</li>
          </ul>
        </div>
      </section>

      <section className="partner-section merch-partners">
        <div>
          <p className="section-kicker">No-inventory fulfillment</p>
          <h2>Three lower-risk routes.</h2>
          <p>
            These programs let the buyer pay the provider directly. Printify
            Pop-Up remains conditional because Being Tea Co. would be the
            merchant of record and responsible for customer-side sales taxes.
            Fourthwall remains on hold until its conflicting official payout
            thresholds are resolved in writing.
          </p>
        </div>
        <div className="partner-list">
          {merchCandidates.map((partner) => (
            <a href={partner.url} target="_blank" rel="noreferrer" key={partner.name}>
              <div>
                <strong>{partner.name}</strong>
                <span>{partner.use}</span>
                <small>{partner.note}</small>
              </div>
              <em>{partner.status}<br />{partner.terms}</em>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="risk-register">
        <div>
          <p className="section-kicker">Programs held back</p>
          <h2>A long catalog is not the same as a safe shortlist.</h2>
        </div>
        <div>
          <p><strong>Verdant Tea</strong><span>Hold until product-level provenance and historic age claims can be independently supported.</span></p>
          <p><strong>Mountain Rose Herbs</strong><span>Current terms conflict with this AI-assisted editorial workflow.</span></p>
          <p><strong>VAHDAM, Plum Deluxe &amp; Whistling Kettle</strong><span>Public application routes or network terms are stale or internally inconsistent.</span></p>
          <p><strong>Fourthwall</strong><span>Otherwise promising, but current official documents disagree on the payout threshold.</span></p>
        </div>
      </section>

      <section className="affiliate-disclosure">
        <p className="section-kicker">Disclosure that will appear near paid links</p>
        <blockquote>
          Paid-link disclosure: Being Tea Co. may earn a commission if you buy
          through links in this section.
        </blockquote>
        <Link href="/disclosures">Read the full disclosure policy →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
