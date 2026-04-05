"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {

  return (
    <nav
      className=" top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-16 transition-all duration-500"
  
    >
      
      <Link href="/" className="flex items-center gap-2.5 select-none">


        <span className="text-xl font-bold text-white tracking-tight">
          Nebula
        </span>
      </Link>

     
      <div className="flex items-center gap-3">
  
        <Link
          href="/login"
          className="px-4 py-1.5 text-sm font-medium rounded-lg border border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-200"
        >
          Log in
        </Link>

    
        <Link
          href="/signup"
          className="px-5 py-1.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 shadow-md shadow-emerald-500/25 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}