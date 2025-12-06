import HeroSection from "@/components/HeroSection";
import Hero from "@/components/HeroSection";
import HomeBanner from "@/components/HomeBanner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="">
        <HeroSection>
          <HomeBanner />
        </HeroSection>
        <Services />
        <Testimonials />
      </main>
    </div>
  );
}
