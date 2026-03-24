import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesTeaserStrip from "./components/ServicesTeaserStrip";
import WhyChooseUs from "./components/WhyChooseUs";
import CoverageStrip from "./components/CoverageStrip";
import BeforeAfterSection from "./components/BeforeAfterSection";
import RecentWorkSection from "./components/RecentWorkSection";
import MeetTheTeam from "./components/MeetTheTeam";
import InstagramSection from "./components/InstagramSection";
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
        <RecentWorkSection />
        <MeetTheTeam />
        <InstagramSection />
        {/* <FAQSection /> */}
      </main>
      <Footer />
    </>
  );
}
