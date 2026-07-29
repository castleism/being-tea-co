import { PhotoHero } from "../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { SITE_EMAIL, pageMetadata } from "../lib/site";

const imageAlt =
  "A compact tea scale, measured whole leaf, blank field notebook, and ceramic cup on a slate tea table.";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms for using Being Tea Co. educational content, external links, future product recommendations, original materials, and site services.",
  path: "/terms",
  image: "/images/pages/terms.webp",
  imageAlt,
});

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Terms of use"
        title="Clear terms,"
        emphasis="measured use."
        description="These terms set practical boundaries for using Being Tea Co. educational content, links, and future commercial resources."
        image="/images/pages/terms.webp"
        imageAlt={imageAlt}
      />

      <article className="prose-page legal-copy">
        <p className="policy-date">Last updated July 29, 2026</p>
        <p className="policy-lead">
          By using this site, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <h2>Education, not individualized advice</h2>
        <p>
          Being Tea Co. provides general education and personal observation
          about tea, preparation, culture, storage, and products. Content is
          not medical, nutritional, legal, financial, or other individualized
          professional advice. Caffeine response, allergies, medication
          interactions, pregnancy, and health conditions are personal matters
          for a qualified clinician.
        </p>

        <h2>Recipes and safety</h2>
        <p>
          Brewing parameters are starting points, not universal standards.
          Use potable water, food-safe equipment, accurate product
          instructions, and your own judgment. Stop consuming a product if it
          appears contaminated or makes you feel unwell.
        </p>

        <h2>Original work and permitted sharing</h2>
        <p>
          Unless a page states otherwise, Being Tea Co. owns its original
          writing, design, branding, and site organization. You may link to
          pages and quote brief portions with clear attribution for
          commentary, teaching, or review. Do not republish substantial
          portions, sell copies, remove attribution, train a competing content
          product on the site, or imply endorsement without written
          permission. Third-party sources and trademarks remain their owners’
          property.
        </p>

        <h2>External links and future commerce</h2>
        <p>
          External sites control their own products, prices, availability,
          delivery, returns, warranties, privacy, and terms. A link is not a
          guarantee. If paid affiliate links, sponsorships, gifted products,
          or Being Tea Co. merchandise are introduced, the relationship will
          be disclosed as described on the{" "}
          <a href="/disclosures">Disclosures page</a>.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not interfere with the site, attempt unauthorized access, scrape
          it in a way that burdens the service, introduce malicious code,
          impersonate Being Tea Co., or use the site to violate law or another
          person’s rights.
        </p>

        <h2>Availability and liability</h2>
        <p>
          The site and its content are provided on an “as available” basis.
          We work to correct material errors but cannot promise uninterrupted
          access, complete accuracy, or that every linked source will remain
          available. To the fullest extent permitted by applicable law, Being
          Tea Co. is not responsible for indirect or consequential loss arising
          from use of the site or a third-party product or service.
        </p>

        <h2>Changes and contact</h2>
        <p>
          We may update these terms as the site develops. Continued use after
          an update means the revised terms apply. Questions may be sent to{" "}
          <a href={`mailto:${SITE_EMAIL}?subject=Terms%20question`}>{SITE_EMAIL}</a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
