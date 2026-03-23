import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full pt-16">
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
