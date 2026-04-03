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

      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-16 pt-24 pb-10 lg:pt-28 lg:pb-16">
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
          <h1 className="font-bold mb-5 uppercase" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
            <span className="block" style={{ color: "#0d2e1a" }}>
              Outdoor Maintenance
            </span>
            <span className="block" style={{ color: "#0d2e1a" }}>
              That is Built on Trust,
            </span>
            <span className="block" style={{ color: "#3a8c52" }}>
              Backed by Results.
            </span>
          </h1>

          {/* Lead paragraph */}
          <p className="text-base lg:text-[1.05rem] leading-relaxed max-w-lg mb-5 pl-4" style={{ color: "#4a4a4a", borderLeft: "3px solid #3a8c52" }}>
            Little Aston Park Services are your trusted local garden maintenance specialists, serving across the <strong style={{ color: "#1a3d25" }}>Midlands</strong>, from Sutton Coldfield to Lichfield, Tamworth and beyond. Whether your garden needs a simple tidy-up or a complete transformation,
            we bring the same level of care, attention to detail and professionalism to every job.
          </p>

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

        {/* ── RIGHT: SVG image + service pills ── */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="w-full flex flex-col gap-4" style={{ maxWidth: "420px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero-canvas.svg" alt="Garden transformation by Little Aston Park Services" className="w-full h-auto block" />
            <style>{`
              @keyframes cardReveal {
                from { opacity:0; transform: scale(0.9) translateY(10px); }
                to   { opacity:1; transform: scale(1) translateY(0); }
              }
              @keyframes shimmer {
                from { transform: translateX(-100%) skewX(-15deg); }
                to   { transform: translateX(250%) skewX(-15deg); }
              }
              @keyframes floatDot {
                0%,100% { transform: translateY(0); }
                50%      { transform: translateY(-4px); }
              }
              .cx-card { animation: cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) both; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease; }
              .cx-card:hover { transform: translateY(-4px) scale(1.02); }
              .cx-card:hover .cx-shimmer { animation: shimmer 0.7s ease forwards; }
              .cx-card:hover .cx-num { color: #c5e84a; }
              .cx-dot { animation: floatDot 2.5s ease-in-out infinite; }
            `}</style>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  label: "Garden\nMaintenance", num: "07", delay: "0ms",
                  grad: "linear-gradient(145deg,#0a2318 0%,#1a5c33 100%)",
                  accent: "#c5e84a",
                  pattern: <><circle cx="80" cy="10" r="25" fill="white" fillOpacity="0.04"/><circle cx="95" cy="35" r="12" fill="white" fillOpacity="0.04"/><circle cx="60" cy="50" r="18" fill="white" fillOpacity="0.03"/></>
                },
                {
                  label: "Planting\n& Design", num: "03", delay: "80ms",
                  grad: "linear-gradient(145deg,#042f2e 0%,#0d9488 100%)",
                  accent: "#5eead4",
                  pattern: <><rect x="60" y="5" width="40" height="40" rx="8" fill="white" fillOpacity="0.04" transform="rotate(20 80 25)"/><rect x="75" y="30" width="25" height="25" rx="5" fill="white" fillOpacity="0.03" transform="rotate(20 80 45)"/></>
                },
                {
                  label: "Hard\nLandscaping", num: "04", delay: "160ms",
                  grad: "linear-gradient(145deg,#1c1917 0%,#44403c 100%)",
                  accent: "#c5e84a",
                  pattern: <><polygon points="90,5 110,35 70,35" fill="white" fillOpacity="0.05"/><polygon points="75,30 90,55 60,55" fill="white" fillOpacity="0.03"/></>
                },
                {
                  label: "Specialist\nServices", num: "08", delay: "240ms",
                  grad: "linear-gradient(145deg,#0d2e1a 0%,#166534 100%)",
                  accent: "#86efac",
                  pattern: <><line x1="55" y1="5" x2="105" y2="55" stroke="white" strokeOpacity="0.06" strokeWidth="1"/><line x1="70" y1="5" x2="110" y2="45" stroke="white" strokeOpacity="0.04" strokeWidth="1"/><line x1="60" y1="20" x2="100" y2="60" stroke="white" strokeOpacity="0.04" strokeWidth="1"/></>
                },
              ].map(({ label, num, delay, grad, accent, pattern }) => (
                <Link
                  key={label}
                  href="/services"
                  className="cx-card group relative flex flex-col justify-between p-4 rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: grad, minHeight: "100px", animationDelay: delay, boxShadow: "0 4px 20px -4px rgba(0,0,0,0.3)" }}
                >
                  {/* Decorative SVG pattern */}
                  <svg className="absolute top-0 right-0 w-28 h-28 pointer-events-none" viewBox="0 0 110 70">{pattern}</svg>

                  {/* Shimmer sweep */}
                  <div className="cx-shimmer absolute inset-0 w-1/3 pointer-events-none" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)" }} />

                  {/* Top row: accent dot + number */}
                  <div className="flex items-center justify-between">
                    <span className="cx-dot w-2 h-2 rounded-full shrink-0" style={{ background: accent }} />
                    <span className="cx-num text-lg font-black leading-none transition-colors duration-300" style={{ color: "rgba(255,255,255,0.15)" }}>{num}</span>
                  </div>

                  {/* Label */}
                  <span className="relative text-xs font-bold text-white leading-snug whitespace-pre-line mt-2">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
