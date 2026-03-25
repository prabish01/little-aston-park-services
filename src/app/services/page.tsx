import Navbar from "../components/Navbar";
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
