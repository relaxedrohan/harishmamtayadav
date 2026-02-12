"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

function ProfilePhoto({ src, fallbackGradient, initials }: { src: string; fallbackGradient: string; initials: string }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="relative w-full h-full">
      {hasImage && (
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          onError={() => setHasImage(false)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      {!hasImage && (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <span className="relative text-5xl md:text-6xl font-bold text-white/30" style={{ fontFamily: "var(--font-playfair)" }}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const decorY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.6]);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={scrollRef}>
      <div ref={ref} />
      {/* Background decoration */}
      <motion.div style={{ y: decorY1 }} className="absolute top-0 left-0 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <motion.div style={{ y: decorY2 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <motion.div style={{ opacity: sectionOpacity, y: contentY }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <span className="italic text-navy/50">With Heart & Soul</span>
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
            <div className="relative bg-white backdrop-blur-sm border border-black/[0.06] shadow-sm rounded-3xl overflow-hidden hover:border-saffron/20 transition-all duration-500">
              {/* Photo area — drop harish-yadav.jpg in public/images/about/ */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <ProfilePhoto
                  src="/images/about/harish-yadav.jpg"
                  fallbackGradient="from-saffron/90 to-gold/90"
                  initials="HY"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-saffron text-xs font-semibold tracking-wider uppercase">Ward Councillor</span>
                  <span className="px-2.5 py-0.5 bg-saffron/10 text-saffron text-xs font-bold rounded-full">BJP</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Harish Yadav
                </h3>
                <p className="text-navy/30 text-lg mt-0.5 mb-6">हरीश यादव</p>

                <p className="text-navy/60 leading-relaxed mb-8">
                  A dedicated community leader and the driving force behind Khanpur&apos;s development.
                  Harish Yadav has been actively involved in grassroots politics and community
                  service, working tirelessly to address the everyday challenges faced by the
                  residents of Khanpur Village.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <AnimatedCounter target={15} suffix="+" />
                    <p className="text-navy/40 text-sm mt-1">Years of Service</p>
                  </div>
                  <div>
                    <AnimatedCounter target={50000} suffix="+" />
                    <p className="text-navy/40 text-sm mt-1">People Served</p>
                  </div>
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
            <div className="relative bg-white backdrop-blur-sm border border-black/[0.06] shadow-sm rounded-3xl overflow-hidden hover:border-lotus-pink/20 transition-all duration-500">
              {/* Photo area — drop mamta-yadav.jpg in public/images/about/ */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <ProfilePhoto
                  src="/images/about/mamta-yadav.jpg"
                  fallbackGradient="from-lotus-pink/90 to-pink-400/90"
                  initials="MY"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lotus-pink text-xs font-semibold tracking-wider uppercase">Elected MCD Councillor, Ward 167</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Mamta Yadav
                </h3>
                <p className="text-navy/30 text-lg mt-0.5">ममता यादव</p>
                <div className="flex items-center gap-2 mt-2 mb-6">
                  <span className="px-2.5 py-0.5 bg-saffron/15 text-saffron text-xs font-bold rounded-full">BJP</span>
                  <span className="text-navy/40 text-xs">Bharatiya Janata Party</span>
                </div>

                <p className="text-navy/60 leading-relaxed mb-8">
                  Elected MCD Councillor for Ward 167 (Khanpur South) in the 2022 Delhi Municipal
                  Corporation elections. A graduate from Delhi University with a B.Com degree,
                  Mamta Yadav brings education and empowerment to the forefront of governance,
                  championing women&apos;s rights and community development.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <AnimatedCounter target={13687} />
                    <p className="text-navy/40 text-sm mt-1">Votes Received</p>
                  </div>
                  <div>
                    <AnimatedCounter target={167} />
                    <p className="text-navy/40 text-sm mt-1">Ward Number</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
