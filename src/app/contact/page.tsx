import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Little Aston Park Services for a free, no-obligation quote. We cover Sutton Coldfield, Lichfield, Tamworth and the West Midlands. Call, email, or fill in the form.",
  alternates: {
    canonical: "https://www.littleastonparkservices.co.uk/contact",
  },
  openGraph: {
    title: "Contact Us | Little Aston Park Services",
    description: "Get a free, no-obligation quote for garden maintenance, jet washing, and landscaping across Sutton Coldfield and the West Midlands.",
    url: "https://www.littleastonparkservices.co.uk/contact",
  },
};
import ContactSection from "../components/ContactSection";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full pt-16">
        <ContactSection />
      </main>
      <PageNav />
      <Footer />
    </>
  );
}
