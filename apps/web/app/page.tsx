"use client";

import Image from "next/image";
import HeroSection from "../components/HeroSection";
import PowerfulTools from "@/components/PowerFullTool";
import CrossPlatform from "@/components/CrossPlatForm";
import Pricing from "@/components/Pricing";
import FreeTrial from "@/components/FreeTr";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      <HeroSection />
      <PowerfulTools />
      <CrossPlatform />
      <Pricing />
      <FreeTrial />
      <Footer/>
    
    </main>
  );
}
