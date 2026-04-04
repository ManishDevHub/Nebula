"use client";

import Image from "next/image";

export default function CrossPlatform() {
  return (
    <section className="bg-[#f0ede6] min-h-screen px-[5%] py-16 font-sans">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col lg:flex-row items-center gap-12">

       
          <div className="flex-1 pt-2">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a1a] leading-tight mb-5 tracking-tight">
              Cross-platform observability
              <br />
              experiences to solve new
              <br />
              problems.
            </h2>

            <p className="text-[#444] text-base leading-relaxed mb-6 max-w-[520px]">
              Ditch observability silos with immersive cross-platform experiences and
              AI assistance at every step.
            </p>

            <ul className="space-y-4 max-w-[520px]">
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 font-bold">·</span>
                <span>
                  <strong>CodeStream</strong> – Optimize your development workflow
                  by planning, prioritizing and beginning tasks from your IDE
                </span>
              </li>
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 font-bold">·</span>
                <span>
                  <strong>Error Tracking</strong> – See and manage all your errors
                  from a single inbox
                </span>
              </li>
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 font-bold">·</span>
                <span>
                  <strong>Explorer</strong> – Know exactly when sudden changes
                  happen with simple dynamic visuals that scale and change color in
                  real time
                </span>
              </li>
            </ul>
          </div>

         
          <div className="flex-none w-full lg:w-[55%] rounded-xl overflow-hidden shadow-2xl relative">
        
            <Image
              src="/Live.jpeg"
              alt="CodeStream IDE integration showing distributed trace error"
              width={760}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}