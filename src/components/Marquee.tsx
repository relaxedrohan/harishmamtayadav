"use client";

const items = [
  "Community First",
  "Vikas Ki Nai Disha",
  "सबका साथ सबका विकास",
  "Clean Khanpur",
  "Women Empowerment",
  "Youth Development",
  "जनता की सेवा",
  "Infrastructure",
  "Healthcare For All",
  "Education First",
];

export default function Marquee() {
  return (
    <section className="py-6 bg-gradient-to-r from-saffron via-saffron-dark to-saffron overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-white font-semibold text-sm md:text-base px-6 uppercase tracking-wider">
              {item}
            </span>
            <span className="text-white/50">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
