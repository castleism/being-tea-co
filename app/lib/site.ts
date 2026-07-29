import type { Metadata } from "next";

export const SITE_NAME = "Being Tea Co.";
export const SITE_URL = "https://being-tea-co.chriscodyak.chatgpt.site";
export const SITE_EMAIL = "beingteaco@gmail.com";
export const SITE_DESCRIPTION =
  "Independent tea education exploring tea types, processing, brewing, teaware, storage, culture, and mindful preparation. Established 2015.";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/beingteaco/",
  x: "https://x.com/BeingTeaCo",
  youtube: "https://www.youtube.com/@BeingTeaCo",
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
    robots,
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
