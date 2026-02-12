"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-dark/20 via-navy to-navy-light" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      </motion.div>

      {/* Decorative circles */}
      <motion.div style={{ y }} className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full border border-saffron/10 opacity-50" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }} className="absolute right-1/4 bottom-1/4 w-48 h-48 rounded-full border border-gold/10 opacity-50" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Quote icon */}
        <motion.svg
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-16 h-16 mx-auto mb-8 text-saffron"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </motion.svg>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          जब तक समाज का अंतिम व्यक्ति विकास की मुख्यधारा से नहीं जुड़ता,
          <br className="hidden md:block" />
          तब तक हमारा संघर्ष जारी रहेगा।
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-white/40 italic mb-8 max-w-2xl mx-auto"
        >
          &ldquo;Until the last person of society joins the mainstream of development,
          our struggle will continue.&rdquo;
        </motion.p>

        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-saffron font-medium text-sm tracking-wider uppercase not-italic"
        >
          &mdash; Harish Yadav & Mamta Yadav
        </motion.cite>
      </motion.div>
    </section>
  );
}
