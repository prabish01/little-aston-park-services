import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our full range of garden and outdoor services — jet washing, lawn care, hedge trimming, garden maintenance, and landscaping across Sutton Coldfield, Lichfield, Tamworth and the West Midlands.",
  alternates: {
    canonical: "https://www.littleastonparkservices.co.uk/services",
  },
  openGraph: {
    title: "Our Services | Little Aston Park Services",
    description: "Jet washing, lawn care, hedge trimming, garden maintenance, and landscaping across Sutton Coldfield and the West Midlands. Free no-obligation quotes.",
    url: "https://www.littleastonparkservices.co.uk/services",
  },
};
import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/ServicesSection";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full pt-16">
        <ServicesHero />
        <ServicesSection />
      </main>
      <PageNav />
      <Footer />
    </>
  );
}
