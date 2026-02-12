"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    year: "2022",
    title: "Elected to MCD",
    description: "Mamta Yadav elected as MCD Councillor for Ward 167 (Khanpur South) on BJP ticket with 13,687 votes, marking a new era of development for the ward.",
  },
  {
    year: "2022",
    title: "Cleanliness Drive Launch",
    description: "Launched a massive ward-wide cleanliness campaign, deploying additional sanitation workers and installing waste segregation bins across Khanpur.",
  },
  {
    year: "2023",
    title: "Road Infrastructure Overhaul",
    description: "Successfully advocated for and oversaw the reconstruction of major internal roads, improving daily commute for thousands of residents.",
  },
  {
    year: "2023",
    title: "Women's Empowerment Cell",
    description: "Established a dedicated women's empowerment cell offering vocational training, legal aid, and support services for women in the ward.",
  },
  {
    year: "2024",
    title: "Drainage System Upgrade",
    description: "Completed a comprehensive drainage renovation project, significantly reducing waterlogging during the monsoon season in low-lying areas.",
  },
  {
    year: "2024-25",
    title: "Community Park & Green Spaces",
    description: "Developed new community parks and green spaces, providing recreation areas for families and children, with walking tracks and open gyms.",
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="achievements" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Milestones &
            <br />
            <span className="italic text-navy/50">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-black/[0.06]">
            <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-saffron to-gold" />
          </div>

          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-saffron border-4 border-white z-10" style={{ animation: "timeline-pulse 2s ease-in-out infinite" }} />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="group">
                  <div className="relative bg-white border border-black/[0.06] shadow-sm rounded-2xl p-6 hover:border-saffron/20 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-saffron/10 text-saffron text-xs font-bold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-saffron transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-navy/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
