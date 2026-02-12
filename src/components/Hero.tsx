"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 18, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(213, 173, 54, ${0.03 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,18,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(213,173,54,0.04)_0%,_transparent_50%)]" />
      <Particles />

      {/* Side decorations */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-navy/20 text-xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-saffron/30" />
        Ward 167
        <div className="w-px h-16 bg-gradient-to-b from-saffron/30 to-transparent" />
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-navy/20 text-xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/30" />
        Since 2022
        <div className="w-px h-16 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm text-navy/60 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          Ward Councillors &middot; Khanpur, New Delhi
        </motion.div>

        {/* Title */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <motion.span custom={0} variants={titleVariants} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Harish
            </motion.span>
            <motion.span custom={1} variants={titleVariants} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Yadav
            </motion.span>
          </div>

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
            className="block text-4xl md:text-5xl text-saffron/50 font-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &
          </motion.span>

          <div className="flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <motion.span custom={2} variants={titleVariants} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Mamta
            </motion.span>
            <motion.span custom={3} variants={titleVariants} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Yadav
            </motion.span>
          </div>
        </div>

        {/* Hindi subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xl md:text-2xl text-navy/35 mb-8"
        >
          निगम पार्षद &middot; खानपुर गाँव &middot; दक्षिण दिल्ली
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-saffron/30" />
          <p className="text-sm md:text-base text-navy/40 max-w-md">
            Dedicated to transforming Khanpur through community service, development & governance
          </p>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all duration-300 hover:scale-105"
          >
            Know Our Story
            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy/15 text-navy/70 font-medium rounded-full hover:border-saffron/50 hover:text-saffron transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 rounded-full border-2 border-navy/15 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-saffron"
          />
        </div>
        <span className="text-xs text-navy/25 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
