import Navbar from "../components/Navbar";
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
