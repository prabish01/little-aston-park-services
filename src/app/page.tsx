import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesTeaserStrip from "./components/ServicesTeaserStrip";
import WhyChooseUs from "./components/WhyChooseUs";
import CoverageStrip from "./components/CoverageStrip";
import BeforeAfterSection from "./components/BeforeAfterSection";
import InstagramSection from "./components/InstagramSection";
import LawnMowerStrip from "./components/LawnMowerStrip";
import GrowingPlant from "./components/GrowingPlant";
import PageNav from "./components/PageNav";
// import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <ServicesTeaserStrip />
        <WhyChooseUs />
        <CoverageStrip />
        <BeforeAfterSection />
        <InstagramSection />
        {/* <FAQSection /> */}
      </main>
      <PageNav />
      <LawnMowerStrip />
      <Footer />
      <GrowingPlant />
    </>
  );
}
