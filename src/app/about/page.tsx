import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind Little Aston Park Services — a friendly, reliable garden and outdoor maintenance company serving Sutton Coldfield, Lichfield, Tamworth and the wider West Midlands.",
  alternates: {
    canonical: "https://www.littleastonparkservices.co.uk/about",
  },
  openGraph: {
    title: "About Us | Little Aston Park Services",
    description: "Meet the team behind Little Aston Park Services — a friendly, reliable garden and outdoor maintenance company serving Sutton Coldfield and the West Midlands.",
    url: "https://www.littleastonparkservices.co.uk/about",
  },
};
import AboutSection from "../components/AboutSection";
import MeetTheTeam from "../components/MeetTheTeam";
import TestimonialsSection from "../components/TestimonialsSection";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full pt-16">
        <AboutSection />
        <MeetTheTeam />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <PageNav />
      <Footer />
    </>
  );
}
