import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GardenCursor from "./components/GardenCursor";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.littleastonparkservices.co.uk"),
  title: {
    default: "Little Aston Park Services | Garden & Outdoor Maintenance",
    template: "%s | Little Aston Park Services",
  },
  description: "Professional jet washing, garden maintenance, lawn care, hedge trimming, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands. Get a free no-obligation quote today.",
  keywords: ["garden maintenance", "jet washing", "lawn care", "hedge trimming", "landscaping", "Sutton Coldfield", "Lichfield", "Tamworth", "West Midlands", "outdoor services"],
  authors: [{ name: "Little Aston Park Services" }],
  alternates: {
    canonical: "https://www.littleastonparkservices.co.uk",
  },
  icons: {
    icon: [
      { url: "/laps.svg", type: "image/svg+xml" },
      { url: "/laps.svg", sizes: "any" },
    ],
    shortcut: "/laps.svg",
    apple: "/laps.svg",
    other: [
      {
        rel: "mask-icon",
        url: "/laps.svg",
        color: "#10b981",
      },
    ],
  },
  openGraph: {
    title: "Little Aston Park Services | Garden & Outdoor Maintenance",
    description: "Professional garden care, jet washing, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
    type: "website",
    url: "https://www.littleastonparkservices.co.uk",
    locale: "en_GB",
    siteName: "Little Aston Park Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Aston Park Services | Garden & Outdoor Maintenance",
    description: "Professional garden care, jet washing, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        {children}
        <WhatsAppButton />
        <GardenCursor />
        <Analytics />
      </body>
    </html>
  );
}
