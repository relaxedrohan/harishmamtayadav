"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const visionItems = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M24 4L4 18v26h16V30h8v14h16V18L24 4z" />
      </svg>
    ),
    title: "Infrastructure Development",
    description: "Building better roads, drainage systems, and public facilities. Transforming Khanpur's infrastructure to match modern urban standards.",
    color: "from-saffron to-gold",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" />
      </svg>
    ),
    title: "Women Empowerment",
    description: "Championing women's education, safety, and economic independence. Creating opportunities and ensuring gender equality.",
    color: "from-lotus-pink to-pink-400",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="24" cy="24" r="18" />
        <path d="M16 28c0-4 3-8 8-8s8 4 8 8" />
        <path d="M18 18l2 2M30 18l-2 2M24 6v4" />
      </svg>
    ),
    title: "Swachh Khanpur",
    description: "Making Khanpur clean and green. Regular garbage collection, waste management, and beautification of public spaces.",
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8 40V16l16-12 16 12v24H8z" />
        <rect x="18" y="26" width="12" height="14" />
        <path d="M20 20h8" />
      </svg>
    ),
    title: "Education & Youth",
    description: "Investing in quality education and skill development. Establishing coaching centres, libraries, and sports facilities.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" />
        <path d="M16 24l6 6 10-12" />
      </svg>
    ),
    title: "Healthcare Access",
    description: "Ensuring quality healthcare for every family. Organizing health camps and connecting residents with government health schemes.",
    color: "from-purple-500 to-violet-400",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M16 24h16M24 16v16" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Smart Governance",
    description: "Bringing transparency and efficiency. Digitizing civic services, ensuring accountability and open communication.",
    color: "from-amber-500 to-orange-400",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden bg-cream/50" ref={scrollRef}>
      <div ref={ref} />
      {/* Parallax background decoration */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,18,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(213,173,54,0.1)_0%,_transparent_50%)]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            A Vision for
            <br />
            <span className="italic text-navy/50">New Khanpur</span>
          </h2>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visionItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
              <div className="relative h-full bg-white border border-black/[0.06] shadow-sm rounded-2xl p-6 md:p-8 hover:border-black/10 transition-all duration-500 flex flex-col">
                {/* Number */}
                <span className="absolute top-4 right-4 text-6xl font-black text-black/[0.03] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-navy">{item.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed flex-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
