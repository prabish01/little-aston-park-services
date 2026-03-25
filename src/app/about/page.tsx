import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import MeetTheTeam from "../components/MeetTheTeam";
import StatsTestimonialSection from "../components/StatsTestimonialSection";
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
        <StatsTestimonialSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <PageNav />
      <Footer />
    </>
  );
}
