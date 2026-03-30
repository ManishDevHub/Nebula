"use client";

import Image from "next/image";

export default function PowerfulTools() {
  return (
    <section className="bg-[#f0ede6] min-h-screen px-[5%] py-16 font-sans">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight">
            <span className="text-[#00a3a3] inline-flex items-center gap-2">
              Powerful tools
              {/* Arrow icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M8 8 L28 8 L28 28"
                  stroke="#00a3a3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            <span className="text-[#1a1a1a]">that show powerful results.</span>
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-12">

          {/* Left: Dashboard Image */}
          <div className="flex-none w-full lg:w-[55%] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/Services.png.webp"
              alt="New Relic APM dashboard showing transaction traces"
              width={760}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 pt-2">
            <h3 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold text-[#1a1a1a] leading-tight mb-5 tracking-tight">
              Monitor your entire stack in a snap.
            </h3>

            <p className="text-[#444] text-base leading-relaxed mb-6">
              Get a live and in-depth view of your network, infrastructure,
              applications, end-user experience, machine learning models and more.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 text-[#1a1a1a] font-bold">·</span>
                <span>
                  <strong>APM</strong> – Get complete app visibility—from backend
                  APIs to frontend devices
                </span>
              </li>
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 text-[#1a1a1a] font-bold">·</span>
                <span>
                  <strong>Infrastructure</strong> – From on-prem to the cloud, get
                  deep visibility into your infrastructure in one place
                </span>
              </li>
              <li className="flex gap-3 text-[#222] text-[0.95rem] leading-relaxed">
                <span className="mt-1 text-[#1a1a1a] font-bold">·</span>
                <span>
                  <strong>Log Management</strong> – Easily ingest and search any
                  volume of on-prem and cloud data, and segment it any way that
                  you want
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}