"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryItems = [
  { title: "Community Meeting", gradient: "from-saffron to-gold", size: "lg" },
  { title: "Road Inauguration", gradient: "from-lotus-pink to-pink-400", size: "sm" },
  { title: "Cleanliness Drive", gradient: "from-emerald-600 to-green-400", size: "sm" },
  { title: "Health Camp", gradient: "from-blue-700 to-blue-400", size: "sm" },
  { title: "Women's Empowerment Program", gradient: "from-purple-600 to-violet-400", size: "lg" },
  { title: "Youth Sports Event", gradient: "from-orange-500 to-amber-400", size: "sm" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            In Action
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Glimpses of
            <br />
            <span className="italic text-white/60">Our Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.size === "lg" ? "sm:col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

              {/* Placeholder icon and text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-12 h-12 mb-4 opacity-60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="8" width="40" height="32" rx="4" />
                  <circle cx="16" cy="20" r="4" />
                  <path d="M4 32l12-8 8 6 10-10 10 8" />
                </svg>
                <span className="text-sm font-semibold tracking-wider text-center px-4">{item.title}</span>
                <span className="text-xs text-white/50 mt-1">Add photo</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/30 text-sm mt-8"
        >
          Replace these placeholders with real photos in the <code className="text-saffron/60 bg-white/5 px-2 py-0.5 rounded">public/images/</code> folder
        </motion.p>
      </div>
    </section>
  );
}
