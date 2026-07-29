import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { brewImageAlt } from "../content/imageAlt";
import { brewMethods } from "../content/library";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Tea Brewing Methods & Preparation Guides",
  description:
    "Step-by-step starting points for Western infusion, gongfu, grandpa style, cold brew, sencha, matcha, masala chai, flash chilling, and leaves in a bowl.",
  path: "/brew",
  image: "/images/landing/brew.webp",
  imageAlt:
    "Tea brewing vessels and measured leaf arranged for the Being Tea Co. preparation library.",
});

export default function BrewPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero brew-hero">
        <p className="eyebrow">The preparation library</p>
        <h1>Learn the controls.<br /><em>Keep your curiosity.</em></h1>
        <p>
          Methods are tools, not rankings. Choose one that fits the leaf, the
          moment, the people and the attention you have.
        </p>
      </section>
      <section className="control-bar">
        {[
          ["01", "Leaf mass"],
          ["02", "Water volume"],
          ["03", "Temperature"],
          ["04", "Contact time"],
        ].map(([number, label]) => (
          <div key={label}><span>{number}</span><strong>{label}</strong></div>
        ))}
      </section>
      <section className="method-cards">
        {brewMethods.map((method, index) => (
          <Link href={`/brew/${method.slug}`} key={method.slug}>
            <img
              className="method-card-image"
              src={`/images/brew/${method.slug}.webp`}
              alt={brewImageAlt[method.slug]}
            />
            <span className="method-number">{String(index + 1).padStart(2, "0")}</span>
            <p>{method.bestFor}</p>
            <h2>{method.name}</h2>
            <em>{method.promise}</em>
            <b aria-hidden="true">↗</b>
          </Link>
        ))}
      </section>
      <section className="golden-rule">
        <p className="section-kicker">The golden-light rule</p>
        <h2>Clarity can be beautiful.<br />It is not a safety test.</h2>
        <p>
          “Golden light” is our sensory language for luminosity and balance in
          naturally clear infusions. Matcha, fukamushi sencha and masala chai
          can be excellent while intentionally opaque. Dilution changes
          concentration, not the total caffeine already extracted.
        </p>
        <a href="https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much" target="_blank" rel="noreferrer">
          Read the FDA caffeine guidance ↗
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
