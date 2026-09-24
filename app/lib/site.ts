import type { Metadata } from "next";

export const SITE_NAME = "Being Tea Co.";
const STAGING_SITE_URL = "https://preview.beingteaco.invalid";
const configuredSiteUrlValue = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredSiteUrl = configuredSiteUrlValue
  ? new URL(configuredSiteUrlValue)
  : undefined;
const releaseRequested = process.env.NEXT_PUBLIC_SITE_RELEASED === "true";
const approvedReleaseHost = process.env.NEXT_PUBLIC_SITE_RELEASE_HOST
  ?.trim()
  .toLowerCase();

if (configuredSiteUrl && !["http:", "https:"].includes(configuredSiteUrl.protocol)) {
  throw new Error("NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS.");
}

if (
  releaseRequested &&
  (!configuredSiteUrl ||
    configuredSiteUrl.protocol !== "https:" ||
    !approvedReleaseHost ||
    configuredSiteUrl.hostname.toLowerCase() !== approvedReleaseHost ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(approvedReleaseHost) ||
    /\.(invalid|local|test)$/.test(approvedReleaseHost))
) {
  throw new Error(
    "Public release requires an HTTPS NEXT_PUBLIC_SITE_URL and an exact matching NEXT_PUBLIC_SITE_RELEASE_HOST.",
  );
}

export const SITE_URL = configuredSiteUrl
  ? configuredSiteUrl.origin
  : STAGING_SITE_URL;
export const SITE_IS_PUBLIC = releaseRequested;
export const SITE_EMAIL = "beingteaco@gmail.com";
export const SITE_DESCRIPTION =
  "Independent tea education exploring tea types, processing, brewing, teaware, storage, culture, and mindful preparation. Established 2015.";

export const SOCIAL_LINKS = {
  x: "https://x.com/BeingTeaCo",
  archive: "https://beingteaco.wordpress.com/",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  robots?: Metadata["robots"];
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/og.png",
  imageAlt = "Being Tea Co. — tea culture from leaf to golden light.",
  robots,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: robots ?? {
      index: SITE_IS_PUBLIC,
      follow: SITE_IS_PUBLIC,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1536,
          height: 1024,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@BeingTeaCo",
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
