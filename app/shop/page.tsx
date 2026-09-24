import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Projects: Tea, Tools & Reading",
  description:
    "Being Tea Co.’s public project directions for tea education, practical tools, reading, and possible future merchandise. No shop or paid product links are active.",
  path: "/shop",
  image: "/images/landing/shop.webp",
  imageAlt:
    "Tea, teaware, reading, and tasting tools arranged for Being Tea Co. field studies.",
});

export default function ShopPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero shop-hero">
        <p className="eyebrow">Projects &amp; field studies</p>
        <h1>Build slowly.<br /><em>Show the work.</em></h1>
        <p>
          Being Tea Co. is exploring a small set of useful tea projects. This
          page records the direction without presenting research as a store,
          partnership, endorsement, or finished product.
        </p>
      </section>

      <section className="shop-status">
        <div>
          <span className="status-dot" />
          <p><strong>Planning stage</strong> · No shop, paid product link, or vendor partnership is active today.</p>
        </div>
        <p>
          Nothing on this page is an offer for sale. Any future recommendation
          or product must pass evidence, rights, sample-quality, disclosure,
          privacy, payment, tax, shipping, returns, and owner-approval checks
          before it can become public commerce.
        </p>
      </section>

      <section className="kit-grid">
        <div>
          <span>01</span><h2>Leaf</h2>
          <p>Research-led guides that help readers understand named origin, maker, harvest, processing, and storage.</p>
          <em>Education first; no tasting or provenance claim without evidence.</em>
        </div>
        <div>
          <span>02</span><h2>Tools</h2>
          <p>Practical brewing equipment evaluated for ordinary use, not a shelf of untested recommendations.</p>
          <em>Function, accessibility, and honest limitations before collector language.</em>
        </div>
        <div>
          <span>03</span><h2>Reading</h2>
          <p>Annotated sources on botany, processing, history, ceramics, culture, and tea practice.</p>
          <em>Context and attribution before commerce.</em>
        </div>
      </section>

      <section className="commerce-method">
        <div>
          <p className="section-kicker">Publication standard</p>
          <h2>A project has to earn its place.</h2>
        </div>
        <ol>
          <li><span>01</span><div><strong>Verify</strong><p>Confirm source, rights, exact item or tea lot, price date, terms, and any relationship that readers need to understand.</p></div></li>
          <li><span>02</span><div><strong>Evaluate</strong><p>Record what was actually reviewed or tested, the method used, strengths, limitations, and what remains unknown.</p></div></li>
          <li><span>03</span><div><strong>Disclose</strong><p>Label samples, sponsorship, affiliate compensation, and AI-assisted visuals beside the relevant claim or link.</p></div></li>
        </ol>
      </section>

      <section className="merch-study">
        <img
          src="/images/merch-study.png"
          alt="Being Tea Co. concept study showing a sticker, tea tin, tasting cup, and notebook."
          width="1536"
          height="1024"
        />
        <div>
          <p className="section-kicker">Possible future study</p>
          <h2>A small tea-notes kit.</h2>
          <p>
            A notebook, simple tasting aid, or modest brand object may be worth
            testing later. The image is a concept study, not a photograph of
            available inventory or proof that a manufacturer has been chosen.
          </p>
          <ul>
            <li>Confirm name and artwork rights before any vendor upload.</li>
            <li>Order and use exact samples before making quality claims.</li>
            <li>Document shipping, support, returns, taxes, and privacy responsibilities.</li>
            <li>Publish only after the owner approves the exact item, copy, price, and destination.</li>
          </ul>
        </div>
      </section>

      <section className="risk-register">
        <div>
          <p className="section-kicker">What stays off the page</p>
          <h2>Research is not a relationship.</h2>
        </div>
        <div>
          <p><strong>Vendor applications</strong><span>Internal research and application routes do not belong on the public visitor journey.</span></p>
          <p><strong>Untested products</strong><span>No recommendation language until the exact item or lot has been evaluated and the evidence is recorded.</span></p>
          <p><strong>Unapproved pricing</strong><span>Planning numbers are not offers, forecasts, or approved prices.</span></p>
          <p><strong>Unverified accounts</strong><span>A listed social, merchant, or payment account is not treated as authorized until ownership and access are confirmed.</span></p>
        </div>
      </section>

      <section className="affiliate-disclosure">
        <p className="section-kicker">Current status</p>
        <blockquote>
          Being Tea Co. is an educational project today. No checkout, paid
          recommendation, or affiliate product link is active on this site.
        </blockquote>
        <Link href="/standards">Read the editorial standards →</Link>
        {" · "}
        <Link href="/disclosures">Read the disclosure policy →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
