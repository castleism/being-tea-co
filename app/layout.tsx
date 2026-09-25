import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
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
  manifest: "/manifest.webmanifest",
  themeColor: "#0f2a23",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icons/pwa-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/logo.svg",
    apple: "/icons/pwa-192.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})})}",
          }}
        />
      </body>
    </html>
  );
}
