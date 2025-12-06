import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="">
        <Hero />
        <Services />
      </main>
    </div>
  );
}
