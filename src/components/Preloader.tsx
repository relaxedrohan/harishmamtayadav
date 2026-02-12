"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        >
          <div className="text-center">
            {/* Lotus/flower animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <svg viewBox="0 0 120 120" className="w-120 h-120 md:w-96 md:h-96 mx-auto">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.ellipse
                    key={i}
                    cx="60"
                    cy="60"
                    rx="12"
                    ry="30"
                    fill="none"
                    stroke="url(#lotus-grad)"
                    strokeWidth="1.5"
                    transform={`rotate(${angle} 60 60)`}
                    style={{ transformOrigin: "60px 60px" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  />
                ))}
                <defs>
                  <linearGradient id="lotus-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B12" />
                    <stop offset="100%" stopColor="#D5AD36" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="60"
                  cy="60"
                  r="6"
                  fill="#FF6B12"
                  style={{ transformOrigin: "60px 60px" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3, type: "spring" }}
                />
              </svg>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-navy/40 text-2xl md:text-3xl tracking-wider"
            >
              सेवा ही धर्म है
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full mt-4 mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
