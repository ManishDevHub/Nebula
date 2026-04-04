"use client";

export default function Footer() {
  const links = [
    { label: "Trust Center", href: "#" },
    { label: "Nebula Status", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Policies", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Your Privacy Choices", href: "#", icon: true },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-white">
    
      <div className="w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c2b8" />
              <stop offset="35%" stopColor="#3b5bfc" />
              <stop offset="70%" stopColor="#6c3fc7" />
              <stop offset="100%" stopColor="#4f8ef7" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C200,20 400,110 720,60 C1000,10 1200,90 1440,50 L1440,120 L0,120 Z"
            fill="url(#footerGrad)"
          />
        </svg>
      </div>

    
      <div
        style={{
          background:
            "linear-gradient(135deg, #00c2b8 0%, #3b5bfc 35%, #6c3fc7 70%, #4f8ef7 100%)",
        }}
        className="w-full pt-8 pb-10 px-8"
      >
        
        <nav className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 mb-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-[15px] font-medium hover:underline underline-offset-4 transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap"
            >
              {link.label}
              {link.icon && (
                <span className="inline-flex items-center gap-0.5 ml-1">
                  {/* Privacy checkmark icon */}
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" stroke="white" strokeWidth="1"/>
                    <path d="M3.5 7L6 9.5L10 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="14.5" y="0.5" width="5" height="13" rx="2.5" stroke="white" strokeWidth="1"/>
                    <path d="M17 4v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="w-full max-w-[500px] mx-auto border-t border-white/20 mb-6" />

     
        <p className="text-center text-white/90 text-[14px] font-normal tracking-wide">
          © 2026 Nebula Monitoring LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}