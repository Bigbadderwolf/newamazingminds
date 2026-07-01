import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://newamazingminds.org";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Amazing Minds Africa — Mental Health, Art & Youth Platform",
    template: "%s | Amazing Minds Africa",
  },
  description:
    "A creative community platform celebrating African youth through art, talent, and mental health support. Powered by Amazing AI — your compassionate 24/7 wellness guide.",
  keywords: [
    "mental health Africa",
    "African youth",
    "art marketplace Africa",
    "Amazing AI",
    "support circles",
    "mental wellness Kenya",
    "African talent",
    "newamazingminds",
  ],
  authors: [{ name: "Amazing Minds Africa", url: APP_URL }],
  creator: "Amazing Minds Africa",
  publisher: "Amazing Minds Africa",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: APP_URL,
    siteName: "Amazing Minds Africa",
    title: "Amazing Minds Africa — Mental Health, Art & Youth Platform",
    description:
      "Celebrating African youth through art, talent and mental wellness. Chat with Amazing AI — free, private, available 24/7 in English and Swahili.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amazing Minds Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Minds Africa",
    description:
      "Mental health, art, talent & community for African youth. Powered by Amazing AI.",
    images: ["/og-image.png"],
    creator: "@amazingmindsafrica",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#C1440E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
