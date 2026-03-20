import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import StatsTestimonialSection from "./components/StatsTestimonialSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <BeforeAfterSection />
        <StatsTestimonialSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
