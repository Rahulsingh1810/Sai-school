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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heritageschoolblr.org"),
  title: {
    default: "Heritage Public School | Nurturing Future Leaders",
    template: "%s | Heritage Public School",
  },
  description:
    "Heritage Public School in Konanakunte, Bangalore is a premier educational institution committed to providing quality education and nurturing future leaders through academic excellence and holistic development.",
  keywords: [
    "Heritage Public School",
    "Heritage Public School Bangalore",
    "Heritage Public School Bengaluru",
    "Heritage School Bangalore",
    "Heritage School Konanakunte",
    "Heritage Public School Srinidhi Layout",
    "schools in Konanakunte",
    "best schools in Bangalore South",
    "CBSE schools Bangalore",
    "NCERT curriculum schools Bangalore",
    "admissions open Bangalore schools",
    "heritage school blr",
    "quality education Bangalore",
    "holistic development school",
    "co-curricular activities school Bangalore"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heritage Public School | Nurturing Future Leaders",
    description:
      "Heritage Public School in Konanakunte, Bangalore is a premier educational institution committed to providing quality education and nurturing future leaders.",
    url: "https://www.heritageschoolblr.org",
    siteName: "Heritage Public School",
    images: [
      {
        url: "/Heritage Logo.webp",
        width: 512,
        height: 512,
        alt: "Heritage Public School Logo",
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
    title: "Heritage Public School | Nurturing Future Leaders",
    description:
      "Heritage Public School in Konanakunte, Bangalore is a premier educational institution committed to providing quality education.",
    images: ["/Heritage Logo.webp"],
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
