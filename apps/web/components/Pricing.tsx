"use client";

import Image from "next/image";

export default function Pricing() {
  return (
    <section className="bg-[#e8e4d9] min-h-[50vh] px-[5%] py-16 font-sans">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-[480px]">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a1a] leading-tight mb-4 tracking-tight">
            Pay only for what you use—no shelfware and no overage penalties.
          </h2>

          <p className="text-[#444] text-base leading-relaxed mb-5">
            Simple, transparent pricing plans. Only pay for what you use.
          </p>

          <ul className="space-y-2">
            {[
              "Get started for free without a credit card",
              "Scale as your users and data grow",
              "3X more value for your money",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="font-bold">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Pricing Illustration Image */}
        <div className="flex-none w-full lg:w-[55%]">
          <Image
            src="/doller.webp"
            alt="Subscription vs Pay As You Go pricing illustration"
            width={760}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}