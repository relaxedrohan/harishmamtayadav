"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,18,0.1)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-saffron text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Connect With
            <br />
            <span className="italic text-navy/50">Your Councillors</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "Ward Office",
                detail: "Khanpur Village, Ward 167\nSouth Delhi, New Delhi - 110062",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                title: "Phone",
                detail: "Contact through ward office\nor community representatives",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "MCD Zone",
                detail: "South Zone\nMunicipal Corporation of Delhi",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:border-saffron/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center text-saffron shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-navy/50 text-sm whitespace-pre-line">{item.detail}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-navy/40 text-sm mb-4">Follow for updates:</p>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "Instagram", path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center text-navy/40 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-black/[0.06] shadow-sm rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div>
                <h3 className="text-xl font-bold mb-1">Send a Message</h3>
                <p className="text-navy/40 text-sm">Have a concern or suggestion? We&apos;d love to hear from you.</p>
              </div>

              {[
                { id: "name", label: "Your Name", type: "text", required: true },
                { id: "phone", label: "Phone Number", type: "tel", required: true },
                { id: "email", label: "Email (Optional)", type: "email", required: false },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    required={field.required}
                    placeholder=" "
                    className="peer w-full bg-cream/50 border border-black/[0.08] rounded-xl px-4 pt-6 pb-2 text-navy placeholder-transparent focus:outline-none focus:border-saffron/50 transition-colors"
                  />
                  <label
                    htmlFor={field.id}
                    className="absolute left-4 top-2 text-xs text-navy/30 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-saffron"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder=" "
                  className="peer w-full bg-cream/50 border border-black/[0.08] rounded-xl px-4 pt-6 pb-2 text-navy placeholder-transparent focus:outline-none focus:border-saffron/50 transition-colors resize-none"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-xs text-navy/30 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-saffron"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-saffron/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
