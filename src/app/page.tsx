import FeturesSection from "@/components/FeturesSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { TimelineDemo } from "@/components/OurJourny";
import { InfiniteMovingCardsDemo } from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      {/* <h1 className="text-2xl, text-center">hello, its aditya </h1> */}
      <HeroSection />
      <FeturesSection />
      <WhyChooseUs />
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      <Footer />
    </main>
  );
}
