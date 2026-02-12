"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Serving Khanpur
            <br />
            <span className="italic text-white/60">With Heart & Soul</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Harish Yadav */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron/20 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-8 md:p-10 hover:border-saffron/20 transition-all duration-500">
              {/* Avatar */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="38" r="16" fill="rgba(255,255,255,0.85)" />
                      <path d="M50 58 C32 58 18 74 17 93 L83 93 C82 74 68 58 50 58Z" fill="rgba(255,255,255,0.85)" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-navy rounded-lg flex items-center justify-center border-2 border-saffron">
                    <span className="text-xs font-bold text-saffron">HY</span>
                  </div>
                </div>
                <div>
                  <span className="text-saffron text-xs font-semibold tracking-wider uppercase">Ward Councillor</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    Harish Yadav
                  </h3>
                  <p className="text-white/30 text-lg mt-0.5">हरीश यादव</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-8">
                A dedicated community leader and the driving force behind Khanpur&apos;s development.
                Harish Yadav has been actively involved in grassroots politics and community
                service, working tirelessly to address the everyday challenges faced by the
                residents of Khanpur Village.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <AnimatedCounter target={15} suffix="+" />
                  <p className="text-white/40 text-sm mt-1">Years of Service</p>
                </div>
                <div>
                  <AnimatedCounter target={50000} suffix="+" />
                  <p className="text-white/40 text-sm mt-1">People Served</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mamta Yadav */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-lotus-pink/20 to-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl p-8 md:p-10 hover:border-lotus-pink/20 transition-all duration-500">
              {/* Avatar */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-lotus-pink to-pink-400 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="38" r="16" fill="rgba(255,255,255,0.85)" />
                      <path d="M50 58 C32 58 18 74 17 93 L83 93 C82 74 68 58 50 58Z" fill="rgba(255,255,255,0.85)" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-navy rounded-lg flex items-center justify-center border-2 border-lotus-pink">
                    <span className="text-xs font-bold text-lotus-pink">MY</span>
                  </div>
                </div>
                <div>
                  <span className="text-lotus-pink text-xs font-semibold tracking-wider uppercase">Elected MCD Councillor, Ward 167</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    Mamta Yadav
                  </h3>
                  <p className="text-white/30 text-lg mt-0.5">ममता यादव</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2.5 py-0.5 bg-saffron/20 text-saffron text-xs font-bold rounded-full">BJP</span>
                    <span className="text-white/40 text-xs">Bharatiya Janata Party</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-8">
                Elected MCD Councillor for Ward 167 (Khanpur South) in the 2022 Delhi Municipal
                Corporation elections. A graduate from Delhi University with a B.Com degree,
                Mamta Yadav brings education and empowerment to the forefront of governance,
                championing women&apos;s rights and community development.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <AnimatedCounter target={13687} />
                  <p className="text-white/40 text-sm mt-1">Votes Received</p>
                </div>
                <div>
                  <AnimatedCounter target={167} />
                  <p className="text-white/40 text-sm mt-1">Ward Number</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
