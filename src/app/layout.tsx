import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";

export const viewport: Viewport = {
  themeColor: "#0B2B2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouth.org"),
  title: {
    default: "AfriYouth Innovation Labs | Connecting Research, Policy, Design & Youth Enterprise",
    template: "%s | AfriYouth Innovation Labs",
  },
  description:
    "AfriYouth Innovation Labs empowers Africa's youth to generate evidence, shape policy, and develop innovative solutions through research, human-centered design, and entrepreneurship.",
  keywords: [
    "AfriYouth",
    "African youth innovation",
    "youth policy Africa",
    "African research labs",
    "human-centered design Africa",
    "civic tech Africa",
    "youth fellowships Africa",
    "venture acceleration",
  ],
  authors: [{ name: "AfriYouth Innovation Labs" }],
  creator: "AfriYouth Innovation Labs",
  publisher: "AfriYouth Innovation Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afriyouth.org",
    title: "AfriYouth Innovation Labs | Connecting Research, Policy, Design & Youth Enterprise",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-white text-slate-700 antialiased">
        <Header />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
