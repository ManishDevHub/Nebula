"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0d1117] min-h-screen flex items-center px-[5%] overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-none max-w-[520px]">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] text-[#f5f5f0] mb-6 tracking-tight">
            Is it the server?
            <br />
            Network? Nebula
            <br />
            knows.
          </h1>

          <p className="text-base text-gray-400 mb-9 leading-relaxed font-normal">
            Free end-to-end monitoring for your entire stack in 5 minutes or less.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#00c853] hover:bg-[#00e676] hover:-translate-y-0.5 text-black font-bold rounded-full px-7 py-3.5 text-[0.95rem] cursor-pointer transition-all duration-200 tracking-tight border-none">
              
              <Link href="/signup" >Get Started Free</Link>
            </button>

            <button className="bg-[#1f2937] hover:bg-[#374151] text-[#f5f5f0] font-semibold rounded-full px-7 py-3.5 text-[0.95rem] cursor-pointer transition-all duration-200 tracking-tight border-none">
              
              <Link href="/login">Get Demo</Link>
            </button>
          </div>
        </div>

        {/* Right: Illustration - made bigger */}
        <div className="flex-none relative w-[clamp(420px,55vw,700px)] h-[clamp(340px,46vw,580px)]">
          <Image
            src="/a.webp"
            alt="Nebula monitoring dashboard illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}