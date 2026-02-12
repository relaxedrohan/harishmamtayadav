"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#achievements", label: "Achievements" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#hero");
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center font-bold text-navy text-sm group-hover:scale-110 transition-transform">
                HY
              </div>
              <span className="hidden sm:block font-semibold text-lg">
                <span className="text-saffron">Harish</span>
                <span className="text-white/40 mx-1">&</span>
                <span className="text-gold">Mamta</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    activeSection === link.href.replace("#", "")
                      ? "text-saffron"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-saffron/10 rounded-full border border-saffron/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 8 : 0,
                  }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  className="block w-6 h-0.5 bg-saffron"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -8 : 0,
                  }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/95 backdrop-blur-2xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-navy-light/80 backdrop-blur-2xl border-l border-white/10 flex flex-col justify-center px-8"
            >
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block text-3xl font-light py-3 transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "gradient-text font-medium"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-white/30 text-sm">
                  Ward 167 &middot; Khanpur &middot; South Delhi
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
