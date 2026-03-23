import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import StatsTestimonialSection from "../components/StatsTestimonialSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full pt-16">
        <AboutSection />
        <StatsTestimonialSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
