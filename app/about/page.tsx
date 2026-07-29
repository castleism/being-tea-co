import Link from "next/link";
import { PhotoHero } from "../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { pageMetadata } from "../lib/site";

const imageAlt =
  "An older video camera, plain notebook, rolled oolong, tea cup, and fairness pitcher on a well-used wooden table.";

export const metadata = pageMetadata({
  title: "About Being Tea Co.",
  description:
    "The story and purpose of Being Tea Co., an independent tea education project founded in 2015 and shaped by attentive practice, cultural attribution, and practical learning.",
  path: "/about",
  image: "/images/pages/about.webp",
  imageAlt,
});

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Our story"
        title="A practice of"
        emphasis="attention."
        description="Being Tea Co. is an independent tea education project with roots in early video reviews, lived practice, and a desire to understand every choice between seed and cup."
        image="/images/pages/about.webp"
        imageAlt={imageAlt}
      />

      <section className="fact-strip" aria-label="Being Tea Co. at a glance">
        <div><span>Established</span><strong>2015</strong></div>
        <div><span>Current work</span><strong>Education</strong></div>
        <div><span>Future direction</span><strong>Tea shop</strong></div>
      </section>

      <article className="prose-page">
        <p className="policy-lead">
          We begin with ordinary, testable questions: What is this leaf? Who
          made it? How was it processed? What changes when the water, vessel,
          ratio, or time changes?
        </p>

        <h2>From early reviews to a fuller field guide</h2>
        <p>
          Being Tea Co. first appeared online in 2015 with simple reviews and
          brewing videos. The project is now growing into a research-backed
          library covering the tea plant, harvest, processing, storage,
          preparation, presentation, teaware, and the many cultures that hold
          tea practices.
        </p>
        <p>
          The future shop will grow from that educational work. Products will
          not appear simply because a retailer offers a commission. Each
          recommendation must have a defined use, an honest evaluation status,
          and a visible commercial disclosure.
        </p>

        <h2>Personal experience, not institutional authority</h2>
        <p>
          Part of this direction comes from personal experiences at{" "}
          <a href="https://deerparkmonastery.org/about-us/" target="_blank" rel="noreferrer">
            Deer Park Monastery
          </a>{" "}
          in Escondido, California, a practice center in the Plum Village
          tradition of Zen Master Thich Nhat Hanh. Those experiences shaped an
          appreciation for presence, community, and the space made by a shared
          cup.
        </p>
        <p>
          Being Tea Co. is independent. It is not an official teaching,
          program, affiliate, or representative of Deer Park Monastery, Plum
          Village, Thich Nhat Hanh, or their associated organizations. Their
          names, marks, images, and teachings will not be used to sell Being
          Tea Co. merchandise.
        </p>

        <h2>What “golden light” means here</h2>
        <p>
          “Golden light” is Being Tea Co.’s sensory language for a clear,
          luminous, balanced-looking infusion. It is not a universal quality
          grade, a medical claim, or proof that caffeine has become safer.
          Excellent matcha, deep-steamed sencha, masala chai, and other opaque
          preparations need not look clear at all.
        </p>

        <div className="prose-actions">
          <Link className="primary-button dark-button" href="/standards">
            Read our standards <span>→</span>
          </Link>
          <Link className="text-link" href="/learn">Explore the tea library</Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
