import { PhotoHero } from "../components/PhotoHero";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { SITE_EMAIL, pageMetadata } from "../lib/site";

const imageAlt =
  "A sealed tea caddy and blank folded document kept in a divided dark-wood drawer beside a small cup of tea.";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Being Tea Co. handles email, hosted-site technical data, external links, future affiliate tracking, retention, and privacy requests.",
  path: "/privacy",
  image: "/images/pages/privacy.webp",
  imageAlt,
});

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <PhotoHero
        eyebrow="Privacy policy"
        title="Privacy,"
        emphasis="plainly."
        description="Being Tea Co. collects as little information as the current educational site requires and will update this policy before adding analytics, checkout, or subscriber tools."
        image="/images/pages/privacy.webp"
        imageAlt={imageAlt}
      />

      <article className="prose-page legal-copy">
        <p className="policy-date">Last updated July 29, 2026</p>
        <p className="policy-lead">
          The site currently has no Being Tea Co. account registration,
          checkout, newsletter database, advertising pixel, or analytics
          service chosen by Being Tea Co.
        </p>

        <h2>Information you choose to send</h2>
        <p>
          If you email Being Tea Co., we receive the address you use, your
          message, and any files or information you include. Gmail processes
          that correspondence for delivery and storage. Please do not send
          passwords, authentication or recovery codes, payment-card details,
          medical records, or other highly sensitive information.
        </p>

        <h2>Technical information used to operate the site</h2>
        <p>
          Hosting, access-control, network, and security providers may process
          technical information such as IP address, browser and device
          details, timestamps, requested pages, authentication status, and
          security logs. They may use cookies or similar storage that is
          necessary to authenticate visitors, prevent abuse, and operate the
          service. Their processing is governed by their own terms and privacy
          notices.
        </p>

        <h2>External services and links</h2>
        <p>
          Links to retailers, research sources, Instagram, X, YouTube,
          WordPress, and other third parties take you to services that set
          their own privacy practices. Being Tea Co. does not control those
          sites. Review their notices before providing information.
        </p>

        <h2>Affiliate and commerce data</h2>
        <p>
          No paid affiliate links or Being Tea Co. checkout are active today.
          If affiliate links are later activated, they may contain an
          attribution identifier and the retailer or affiliate network may use
          cookies or similar technology under its own policy. A clear
          commission disclosure will appear beside those links, and this
          privacy policy will be updated before activation.
        </p>

        <h2>Retention and sharing</h2>
        <p>
          Correspondence is kept only as long as reasonably useful for the
          conversation, records, safety, or legal obligations. We may share
          information with service providers that operate the site or email,
          when required by law, or when necessary to protect rights and safety.
          Being Tea Co. does not sell personal information and does not
          currently use it for cross-context behavioral advertising.
        </p>

        <h2>Children and privacy requests</h2>
        <p>
          This site is not directed to children under 13, and Being Tea Co.
          does not knowingly collect their personal information. Depending on
          where you live, you may have rights to request access, correction, or
          deletion of information you provided. Send a request to{" "}
          <a href={`mailto:${SITE_EMAIL}?subject=Privacy%20request`}>{SITE_EMAIL}</a>.
          We may need enough information to verify and complete the request.
        </p>

        <h2>Changes</h2>
        <p>
          This notice will be revised before materially new data practices go
          live. The updated date above will change when the policy changes.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
