"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ backgroundColor: "#fdfcfc" }}>
      {/* Faint decorative leaf */}
      <svg className="absolute top-8 right-8 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
        <path d="M60 10 Q90 30 80 70 Q60 90 40 70 Q30 30 60 10Z" fill="#2d7a47" />
        <path d="M80 20 Q110 40 100 75 Q85 90 65 75 Q55 40 80 20Z" fill="#3a8c52" opacity="0.6" />
        <line x1="60" y1="10" x2="60" y2="90" stroke="#1a5c33" strokeWidth="1.5" opacity="0.4" />
        <line x1="60" y1="40" x2="45" y2="55" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
        <line x1="60" y1="55" x2="75" y2="65" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center min-h-screen gap-6 lg:gap-16 pt-20 pb-10 lg:py-0">
        {/* ── LEFT: text ── */}
        <div className="w-full lg:flex-1 flex flex-col items-start">
          {/* Brand lockup */}
          <div className="flex items-center gap-3 mb-6">
            <NextImage src="/laps.svg" alt="Little Aston Park Services" width={52} height={52} className="h-12 w-auto" />
            <span className="text-xs font-bold uppercase tracking-widest leading-tight text-emerald-600">
              Little Aston
              <br />
              Park Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bold mb-5 uppercase" style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
            <span className="block" style={{ color: "#0d2e1a" }}>
              Your Garden
            </span>
            <span className="block" style={{ color: "#3a8c52" }}>
              Deserves Better
            </span>
          </h1>

          {/* Lead paragraph */}
          <p className="text-base lg:text-[1.05rem] leading-relaxed max-w-lg mb-5 pl-4" style={{ color: "#4a4a4a", borderLeft: "3px solid #3a8c52" }}>
            Little Aston Park Services are your trusted local garden maintenance specialists, serving across the <strong style={{ color: "#1a3d25" }}>Midlands</strong>, from Sutton Coldfield to Lichfield, Tamworth and beyond. Whether your garden needs a simple tidy-up or a complete transformation,
            we bring the same level of care, attention to detail and professionalism to every job.
          </p>

          {/* Service tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
            {["Lawn Care", "Hedge Trimming", "Jet Washing", "Garden Clearance", "Seasonal Clean-Up", "Drainage"].map((s) => (
              <Link key={s} href="/services" className="flex items-center justify-start px-4 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-colors">
                {s}
              </Link>
            ))}
          </div>

          {/* Expandable remaining copy */}
          <div className="max-w-lg mb-6 w-full">
            <div
              style={{
                maxHeight: expanded ? "320px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="flex flex-col gap-3 pt-1 pb-3 text-[0.95rem] leading-relaxed" style={{ color: "#4a4a4a" }}>
                <p>
                  From tired patios and overgrown lawns to unruly hedges and untended gardens that need a complete revamp, we help restore spaces to sanctuaries that you can truly enjoy. Our team has built a reputation as reliable, approachable and completely committed to delivering your visions.
                  And the results speak for themselves.
                </p>
                <p>No job is too big or too small and we tailor our services to suit your needs, schedule and budget. Let us take the stress out of your garden&apos;s maintenance and let you sit back to enjoy the results.</p>
              </div>
            </div>

            <button onClick={() => setExpanded((e) => !e)} className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors">
              {expanded ? "Read less" : "Read more about us"}
              <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── RIGHT: SVG image, no animation ── */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="w-full" style={{ maxWidth: "420px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-canvas.svg" alt="Garden transformation by Little Aston Park Services" className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </section>
  );
}
