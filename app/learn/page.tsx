import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { brewImageAlt, teaImageAlt } from "../content/imageAlt";
import { brewMethods, teaFamilies } from "../content/library";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Tea Types & Processing Guide",
  description:
    "Explore white, green, yellow, oolong, black, dark, sheng and shou Pu-erh teas, plus tisanes, through processing, flavor, brewing, storage, and buying questions.",
  path: "/learn",
  image: "/images/landing/learn.webp",
  imageAlt:
    "Tea leaves, vessels, and clear infusions arranged for the Being Tea Co. tea library.",
});

export default function LearnPage() {
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero learn-hero">
        <p className="eyebrow">The Being Tea Co. field guide</p>
        <h1>Know the leaf.<br /><em>Then listen to it.</em></h1>
        <p>
          A processing-first map of tea, followed by the practical controls
          that turn dry leaf and water into a considered cup.
        </p>
      </section>

      <section className="library-intro">
        <p className="section-kicker">The foundation</p>
        <div>
          <h2>One plant. Six principal families. Countless expressions.</h2>
          <p>
            Tea is made from <i>Camellia sinensis</i>. The principal families
            are shaped by cultivar, place, harvest and especially processing.
            Tisanes belong beside this map, but not inside it.
          </p>
        </div>
      </section>

      <section className="family-grid">
        {teaFamilies.map((tea, index) => (
          <Link href={`/tea/${tea.slug}`} className="family-card" key={tea.slug}>
            <img
              className="family-card-image"
              src={`/images/tea/${tea.slug}.webp`}
              alt={teaImageAlt[tea.slug]}
            />
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="card-process">{tea.eyebrow}</span>
            <h2>{tea.name}</h2>
            <p>{tea.tagline}</p>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>

      <section className="process-story">
        <div>
          <p className="section-kicker">A processing compass</p>
          <h2>Words that change the cup.</h2>
        </div>
        <dl>
          <div><dt>Wither</dt><dd>Remove water and begin physical and chemical change.</dd></div>
          <div><dt>Fix</dt><dd>Use heat to slow enzymatic oxidation.</dd></div>
          <div><dt>Bruise</dt><dd>Disrupt cells to encourage controlled oxidation.</dd></div>
          <div><dt>Yellow</dt><dd>Hold fixed leaf warm and moist for a distinct transformation.</dd></div>
          <div><dt>Ferment</dt><dd>Invite controlled microbial transformation in dark tea.</dd></div>
          <div><dt>Finish</dt><dd>Dry, roast, scent, blend, grind or compress after primary making.</dd></div>
        </dl>
      </section>

      <section className="method-preview">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Preparation library</p>
            <h2>More than one right way.</h2>
          </div>
          <p>
            Every recipe begins with four controls: leaf mass, water volume,
            water temperature and contact time.
          </p>
        </div>
        <div className="method-list compact">
          {brewMethods.slice(0, 5).map((method) => (
            <Link href={`/brew/${method.slug}`} key={method.slug}>
              <img
                src={`/images/brew/${method.slug}.webp`}
                alt={brewImageAlt[method.slug]}
              />
              <span>{method.bestFor}</span>
              <strong>{method.name}</strong>
              <b>→</b>
            </Link>
          ))}
        </div>
        <Link className="primary-button dark-button" href="/brew">See all methods <span>→</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
