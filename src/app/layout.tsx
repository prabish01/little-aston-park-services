import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Little Aston Park Services | Garden & Outdoor Maintenance",
  description:
    "Professional jet washing, garden maintenance, lawn care, hedge trimming, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands. Get a free no-obligation quote today.",
  keywords: [
    "garden maintenance",
    "jet washing",
    "lawn care",
    "hedge trimming",
    "landscaping",
    "Sutton Coldfield",
    "Lichfield",
    "Tamworth",
    "West Midlands",
    "outdoor services",
  ],
  authors: [{ name: "Little Aston Park Services" }],
  openGraph: {
    title: "Little Aston Park Services | Garden & Outdoor Maintenance",
    description:
      "Professional garden care, jet washing, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
    type: "website",
    locale: "en_GB",
    siteName: "Little Aston Park Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Aston Park Services | Garden & Outdoor Maintenance",
    description:
      "Professional garden care, jet washing, and landscaping services across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
