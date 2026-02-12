"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 text-navy-light">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="bg-navy-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                Harish Yadav & Mamta Yadav
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-3">
                Ward Councillors (Nigam Parshad)
                <br />
                Ward 167, Khanpur Village
                <br />
                South Delhi, New Delhi
              </p>
              <p className="text-saffron/60 text-sm">जनता की सेवा, हमारा संकल्प</p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/60 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About Us", "Our Vision", "Initiatives", "Achievements", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "").replace("us", "about").replace("ourvision", "vision")}`}
                    className="block text-white/30 text-sm hover:text-saffron transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/60 mb-4">Resources</h4>
              <div className="space-y-2">
                {[
                  { label: "MCD Official", href: "https://mcdonline.nic.in/" },
                  { label: "Delhi SEC", href: "https://sec.delhi.gov.in/" },
                  { label: "Delhi Government", href: "https://delhigovt.nic.in/" },
                  { label: "India.gov.in", href: "https://www.india.gov.in/" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/30 text-sm hover:text-saffron transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.06] pt-6 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">&copy; 2025 Harish Yadav & Mamta Yadav. All rights reserved.</p>
            <p className="text-white/20 text-xs">Serving Ward 167, Khanpur with dedication</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
