import { PhotoHero } from "../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { SITE_EMAIL, SOCIAL_LINKS, pageMetadata } from "../lib/site";

const imageAlt =
  "Two small cups, a glass pot of pale-gold tea, a blank correspondence card, envelope, and fountain pen.";

export const metadata = pageMetadata({
  title: "Contact Being Tea Co.",
  description:
    "Contact Being Tea Co. about tea questions, corrections, sourcing evidence, editorial partnerships, and future product review submissions.",
  path: "/contact",
  image: "/images/pages/contact.webp",
  imageAlt,
});

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Contact"
        title="Join us at"
        emphasis="the table."
        description="Questions, corrections, sources, and thoughtful partnership ideas are welcome. Clear information makes a better conversation."
        image="/images/pages/contact.webp"
        imageAlt={imageAlt}
      />

      <section className="contact-layout">
        <div className="contact-primary">
          <p className="section-kicker">Email</p>
          <h2>{SITE_EMAIL}</h2>
          <p>
            Email is the most dependable route for corrections, press,
            product-review inquiries, and future retail partnerships.
          </p>
          <a
            className="primary-button dark-button"
            href={`mailto:${SITE_EMAIL}?subject=Being%20Tea%20Co.%20inquiry`}
          >
            Write to Being Tea Co. <span>→</span>
          </a>
        </div>
        <div className="contact-cards">
          <section>
            <span>01</span>
            <h3>Corrections &amp; evidence</h3>
            <p>
              Include the page URL, the sentence in question, and a reliable
              source. Material corrections are recorded according to our
              editorial standards.
            </p>
          </section>
          <section>
            <span>02</span>
            <h3>Products &amp; partnerships</h3>
            <p>
              Include the exact product or lot, current price, origin,
              processing details, availability, sample terms, and proposed
              commercial relationship. A submission never guarantees coverage.
            </p>
          </section>
          <section>
            <span>03</span>
            <h3>Tea questions</h3>
            <p>
              Share the tea name, leaf amount, water volume, temperature,
              time, vessel, and what happened in the cup. We cannot provide
              individual medical advice.
            </p>
          </section>
          <section>
            <span>04</span>
            <h3>Account safety</h3>
            <p>
              Being Tea Co. will never ask for your password, authentication
              code, recovery code, browser cookie, or payment-card details by
              email or social message.
            </p>
          </section>
        </div>
      </section>

      <section className="social-contact">
        <p className="section-kicker">Elsewhere</p>
        <div>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
          <a href={SOCIAL_LINKS.x} target="_blank" rel="noreferrer">X / Twitter <span>↗</span></a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer">YouTube <span>↗</span></a>
          <a href={SOCIAL_LINKS.aliaspaces} target="_blank" rel="noreferrer">Brother Kāruṇya on AliaSpaces <span>↗</span></a>
          <a href={SOCIAL_LINKS.archive} target="_blank" rel="noreferrer">2015 archive <span>↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
