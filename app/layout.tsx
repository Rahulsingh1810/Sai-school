import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://srisaienglishhighschool.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sri Sai English High School | Nurturing Future Leaders | Adugodi, Bangalore",
    template: "%s | Sri Sai English High School Bangalore",
  },
  description:
    "Sri Sai English High School in Adugodi, Bangalore (Est. 2000). Providing quality Karnataka State Board education from Pre-Primary to Class 10th with modern smart classes, science lab, computer centre, sports, and holistic development. Admissions open for 2026-2027.",
  keywords: [
    "Sri Sai English High School",
    "Sri Sai English High School Bangalore",
    "Sri Sai English High School Adugodi",
    "Sri Sai School Adugodi",
    "schools in Adugodi Bangalore",
    "best schools in Adugodi",
    "high schools in Adugodi",
    "Karnataka State Board schools Bangalore",
    "State Board schools in Bangalore South",
    "English medium school Adugodi",
    "schools near Koramangala Bangalore",
    "schools near Dairy Circle Bangalore",
    "primary schools in Adugodi",
    "nursery school Adugodi Bangalore",
    "high school admissions Bangalore 2026",
    "Sri Sai High School contact number",
    "quality affordable education Bangalore",
    "SSLC school Bangalore Adugodi",
    "co-educational schools in Bangalore",
    "holistic education schools Bangalore",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sri Sai English High School | Nurturing Future Leaders | Adugodi, Bangalore",
    description:
      "Sri Sai English High School in Adugodi, Bangalore (Est. 2000). Quality education from Pre-Primary to Class 10 (Karnataka State Board) with smart classrooms, science labs, computer lab, and holistic development.",
    url: siteUrl,
    siteName: "Sri Sai English High School",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sri Sai English High School - Adugodi, Bangalore",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  verification: {
    google: "qiLx6VMdGjADu7m5hhUgZSvnVszCxWWOeBgwpo3gV1E",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sai English High School | Nurturing Future Leaders",
    description:
      "Quality Karnataka State Board education from Pre-Primary to Class 10 in Adugodi, Bangalore. Nurturing leaders since 2000.",
    images: ["/og-image.jpeg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#005d98",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Sri Sai English High School",
  alternateName: "Sri Sai High School Adugodi",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.jpeg`,
  description:
    "Sri Sai English High School in Adugodi, Bangalore (Est. 2000) provides quality Karnataka State Board education from Pre-Primary to Class 10th with holistic development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 7, II Main Road, Adugodi",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560030",
    addressCountry: "IN",
  },
  telephone: ["+919663526666", "+919035031256"],
  email: "Srisaisehs2000@gmail.com",
  foundingDate: "2000",
  hasCredential: "Karnataka State Board Recognized",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${openSans.variable} bg-background`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="qiLx6VMdGjADu7m5hhUgZSvnVszCxWWOeBgwpo3gV1E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
