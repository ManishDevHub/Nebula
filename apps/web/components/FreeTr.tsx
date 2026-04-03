"use client";

import { useState } from "react";

export default function FreeTrial() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-[#f3f3f3] min-h-screen flex items-center justify-center py-10 px-4">
    
      <div className="relative bg-white rounded-2xl w-full max-w-[1300px] min-h-[520px] overflow-hidden shadow-sm flex items-center">

     
        <div className="relative z-10 px-16 py-16 max-w-[680px]">

        
          <h1 className="text-[42px] font-black text-[#111111] leading-[1.15] tracking-tight mb-6">
            Start your 15-day free<br />
            Dynatrace trial today!
          </h1>

       
          <p className="text-[16px] text-[#111111] leading-[1.6] mb-7">
            You'll be up and running in under 5 minutes:<br />
            Sign up, deploy our agent and get unmatched insights out-of-the-box.
          </p>

        
          <label className="block text-[14px] font-normal text-[#111111] mb-2">
            Business email
          </label>

        
          <div className="flex items-stretch gap-3 mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[490px] h-[54px] border border-[#b0b0b0] rounded-lg px-4 text-base text-[#111] outline-none focus:border-[#555] transition-colors bg-white"
            />
            <button
              className="h-[54px] px-8 border-2 border-[#111111] rounded-lg bg-white text-[#111111] font-bold text-[17px] cursor-pointer hover:bg-[#111] hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Start free trial
            </button>
          </div>

        
          <div className="flex gap-3 items-start max-w-[620px]">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-[3px] w-[16px] h-[16px] flex-none border border-gray-400 cursor-pointer rounded-none"
            />
            <label htmlFor="terms" className="text-[13px] text-[#333] leading-[1.6] cursor-pointer">
              By checking the box, I accept and agree to the{" "}
              <a href="#" className="underline italic text-[#333] hover:text-black">
                Dynatrace Terms of Use ↗
              </a>{" "}
              (including any future modifications) for trial use of the Dynatrace
              offerings to which I am requesting access, and I confirm I can access
              electronic records. These terms are available in hardcopy from
              Dynatrace upon request. I understand click-to-accept terms are
              binding, and I can opt-out at any time by contacting Dynatrace. I
              also acknowledge that I have read the{" "}
              <a href="#" className="underline italic text-[#333] hover:text-black">
                Dynatrace Privacy Notice ↗
              </a>
              .
            </label>
          </div>
        </div>

      
        <div className="absolute top-0 right-0 h-full w-[42%] pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 520 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMaxYMid slice"
          >
            <defs>
              <linearGradient id="g1" x1="20%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a6cf7" />
                <stop offset="55%" stopColor="#5b5bd6" />
                <stop offset="100%" stopColor="#9b4dca" />
              </linearGradient>
              <linearGradient id="g2" x1="30%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#3b5bfc" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#7c86f5" stopOpacity="0.6" />
              </linearGradient>
            </defs>
        
            <path
              d="M180 -20 C260 60, 560 80, 540 260 C520 440, 260 480, 300 620 L560 620 L560 -20 Z"
              fill="url(#g1)"
            />
          
            <path
              d="M310 -20 C380 60, 560 160, 545 320 C530 500, 390 540, 420 620 L560 620 L560 -20 Z"
              fill="url(#g2)"
            />
          </svg>
        </div>

      </div>
    </div>
  );
}