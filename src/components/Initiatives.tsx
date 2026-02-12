"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const initiatives = [
  {
    year: "Ongoing",
    title: "Road Construction & Repair",
    description: "Overseeing the construction and repair of major roads in Khanpur, ensuring smooth connectivity and safer commutes for all residents.",
    tag: "Infrastructure",
    gradient: "from-saffron to-gold",
  },
  {
    year: "2023-Present",
    title: "Women's Self-Help Groups",
    description: "Establishing and supporting self-help groups for women, providing microfinance opportunities, skill training, and fostering financial independence.",
    tag: "Women Empowerment",
    gradient: "from-lotus-pink to-pink-400",
  },
  {
    year: "Ongoing",
    title: "Swachh Khanpur Abhiyan",
    description: "Leading cleanliness drives, improving garbage collection systems, and installing dustbins across the ward to maintain hygiene standards.",
    tag: "Cleanliness",
    gradient: "from-emerald-600 to-green-400",
  },
  {
    year: "2022-Present",
    title: "Drainage & Sewer Upgrades",
    description: "Comprehensive drainage improvement project to prevent waterlogging during monsoons and upgrade the sewer network for better sanitation.",
    tag: "Sanitation",
    gradient: "from-blue-700 to-blue-400",
  },
  {
    year: "Ongoing",
    title: "Free Health Camps",
    description: "Organizing regular free health check-up camps with doctors and specialists for the residents of Khanpur, especially for the elderly and underprivileged.",
    tag: "Healthcare",
    gradient: "from-purple-600 to-violet-400",
  },
  {
    year: "2023-Present",
    title: "Youth Skill Development",
    description: "Partnering with training institutions to provide free skill development courses for youth in computers, tailoring, and vocational trades.",
    tag: "Education",
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function Initiatives() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="initiatives" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Key Initiatives &
            <br />
            <span className="italic text-white/60">Community Programs</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div ref={containerRef} className="relative">
        <motion.div style={{ x }} className="flex gap-6 pl-4 sm:pl-8 lg:pl-16 pr-16">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group shrink-0 w-[320px] md:w-[380px]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/10 transition-all duration-500">
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500`} />

                <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[280px]">
                  <span className="text-xs font-medium text-white/30 tracking-wider uppercase mb-4">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-saffron transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.gradient} text-white/90`}>
                      {item.tag}
                    </span>
                    <svg className="w-5 h-5 text-white/20 group-hover:text-saffron group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-8">
        <p className="text-white/20 text-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Scroll to see more
        </p>
      </div>
    </section>
  );
}
