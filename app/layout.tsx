import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_IS_PUBLIC,
  SITE_NAME,
  SITE_URL,
} from "./lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Being Tea Co. | Tea culture from leaf to golden light",
    template: "%s | Being Tea Co.",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Tea education",
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: SITE_IS_PUBLIC,
    follow: SITE_IS_PUBLIC,
    googleBot: {
      index: SITE_IS_PUBLIC,
      follow: SITE_IS_PUBLIC,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Being Tea Co. | Tea culture from leaf to golden light",
    description: SITE_DESCRIPTION,
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Being Tea Co. — tea culture from leaf to golden light.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Being Tea Co. | Tea culture from leaf to golden light",
    description: SITE_DESCRIPTION,
    creator: "@BeingTeaCo",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
      </body>
    </html>
  );
}
