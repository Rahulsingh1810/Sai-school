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
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.saienglishhighschool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sri Sai English High School | Nurturing Future Leaders",
    template: "%s | Sri Sai English High School",
  },
  description:
    "Sri Sai English High School in Adugodi, Bangalore is an educational institution committed to providing quality education and nurturing future leaders through academic excellence and holistic development.",
  keywords: [
    "Sri Sai English High School",
    "Sri Sai English High School Bangalore",
    "Sri Sai English High School Adugodi",
    "schools in Adugodi",
    "State Board schools Bangalore",
    "quality education Bangalore",
    "holistic development school",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sri Sai English High School | Nurturing Future Leaders",
    description:
      "Sri Sai English High School in Adugodi, Bangalore is committed to providing quality education and nurturing future leaders.",
    url: siteUrl,
    siteName: "Sri Sai English High School",
    images: [
      {
        url: "/logo.png",
        width: 1167,
        height: 1145,
        alt: "Sri Sai English High School Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "e7WIjGRmXLdBnDZ81VJ00htM9LBOVak5IvMhv9_l4UQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sai English High School | Nurturing Future Leaders",
    description:
      "Sri Sai English High School in Adugodi, Bangalore is committed to providing quality education and nurturing future leaders.",
    images: ["/logo.png"],
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
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#005d98",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
