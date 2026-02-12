"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { title: "Community Meeting", slug: "community-meeting", gradient: "from-saffron to-gold", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { title: "Road Inauguration", slug: "road-inauguration", gradient: "from-lotus-pink to-pink-400", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
  { title: "Cleanliness Drive", slug: "cleanliness-drive", gradient: "from-emerald-600 to-green-400", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { title: "Health Camp", slug: "health-camp", gradient: "from-blue-700 to-blue-400", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { title: "Women Empowerment", slug: "women-empowerment", gradient: "from-purple-600 to-violet-400", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
  { title: "Youth Sports Event", slug: "youth-sports", gradient: "from-orange-500 to-amber-400", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

function GalleryCard({ item, index, inView }: { item: typeof galleryItems[0]; index: number; inView: boolean }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
    >
      {/* Try to load image from /images/gallery/{slug}.jpg */}
      {hasImage && (
        <Image
          src={`/images/gallery/${item.slug}.jpg`}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          onError={() => setHasImage(false)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}

      {/* Gradient fallback when no image */}
      {!hasImage && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 group-hover:scale-110 transition-transform duration-500">
            <svg className="w-10 h-10 mb-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <span className="text-sm font-semibold tracking-wider text-center px-4">{item.title}</span>
          </div>
        </>
      )}

      {/* Title overlay (shown when image exists) */}
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold">{item.title}</span>
        </div>
      )}

      {/* Hover overlay for gradient cards */}
      {!hasImage && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden" ref={scrollRef}>
      <div ref={ref} />
      {/* Parallax decorative blob */}
      <motion.div style={{ y: blobY }} className="absolute -top-20 -bottom-20 inset-x-0">
        <div className="absolute top-1/4 right-0 w-125 h-125 bg-saffron/10 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/3" />
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <span className="italic text-navy/50">Our Work</span>
          </h2>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.slug} item={item} index={i} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
