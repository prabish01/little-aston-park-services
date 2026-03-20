"use client";

import { useState, useEffect } from "react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    const el = document.getElementById("why-choose-us");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — swap src for your own photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Replace this with: backgroundImage: "url('/your-image.jpg')"
          background: "linear-gradient(135deg, #1a4731 0%, #2d7a4f 40%, #1b5e35 70%, #0f3320 100%)",
        }}
      />

      {/* Dark overlay — same as hero */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Eyebrow label */}
        <span className="inline-block mb-5 text-xs font-bold text-white/60 uppercase tracking-widest">Why Choose Us</span>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Trusted Garden Care, <span className="text-emerald-400">Every Season</span>
        </h2>

        {/* Sub-text */}
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-4 leading-relaxed">From spring planting to winter clean-ups, our experienced team keeps your outdoor spaces looking immaculate all year round.</p>

        <p className="text-white/60 text-base mb-10">Serving Sutton Coldfield, Lichfield, Tamworth &amp; surrounding areas</p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a href="#services" className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-base hover:bg-emerald-500 transition-colors duration-300 shadow-lg shadow-emerald-900/40">
            View Our Services
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
            Get a Free Quote
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16 border-t border-white/20 pt-10">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "5★", label: "Rated Service" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-white/60 text-xs sm:text-sm tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
