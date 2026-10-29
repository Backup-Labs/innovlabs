import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";

export const viewport: Viewport = {
  themeColor: "#F4F4F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouth.org"),
  title: {
    default: "AfriYouth Innovation Labs | Research, Policy & Youth Enterprise",
    template: "%s | AfriYouth Innovation Labs",
  },
  description:
    "Empowering Africa's youth through applied research, policy shaping, human-centered design, and high-velocity venture acceleration.",
  keywords: [
    "AfriYouth",
    "African youth innovation",
    "future policy Africa",
    "African research nexus",
    "human-centered design Africa",
    "civic tech Africa",
    "venture acceleration",
  ],
  authors: [{ name: "AfriYouth Innovation Labs" }],
  creator: "AfriYouth Innovation Labs",
  publisher: "AfriYouth Innovation Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afriyouth.org",
    title: "AfriYouth Innovation Labs | Research, Policy & Youth Enterprise",
    description:
      "Transforming African youth agency into systemic socio-economic policy and sustainable ventures across 26 countries.",
    siteName: "AfriYouth Innovation Labs",
    images: [
      {
        url: "/images/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: "AfriYouth Innovation Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfriYouth Innovation Labs",
    description:
      "Connecting research, policy, human-centered design, entrepreneurship, and foresight across Africa.",
    creator: "@AfriYouthLabs",
    images: ["/images/brand/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: site.shortName,
    url: "https://afriyouth.org",
    logo: "https://afriyouth.org/images/brand/logo.svg",
    description: site.mission,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.headquarters,
      addressCountry: "Kenya",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer support",
      email: site.contact.email,
    },
    sameAs: site.socials.map((s) => s.url),
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/InstrumentSerif-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F4F4F6] text-black antialiased selection:bg-black selection:text-white">
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
