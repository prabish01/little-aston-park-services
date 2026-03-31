"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";

const services = [
  {
    label: "Lawn Care",
    description: "Regular mowing, edging, and feeding to keep your lawn lush, green, and perfectly manicured all year round.",
    // num: "01",
    accent: "#c5e84a",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9 2 6 5 6 9c0 2 .7 3.5 1.8 4.7M12 2c3 0 6 3 6 7 0 2-.7 3.5-1.8 4.7M12 2v20" />
      </svg>
    ),
  },
  {
    label: "Jet Washing",
    description: "Professional high-pressure cleaning of patios, driveways, decking and paths — restoring them to like-new condition.",
    // num: "02",
    accent: "#34d399",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3m18 0h-2M12 5V3m0 18v-2m4.95-13.95-1.41 1.41M6.46 17.54l-1.41 1.41M17.54 17.54l1.41 1.41M6.46 6.46 5.05 5.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    label: "Hedge Trimming",
    description: "Precise shaping and cutting of hedges, shrubs, and borders to give your garden clean, defined lines.",
    // num: "03",
    accent: "#6ee7b7",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.12 14.12L19 19m-7-7 7-7m-7 7-2.88 2.88M12 12 9.12 9.12m0 5.76a3 3 0 10-4.24-4.24 3 3 0 004.24 4.24z" />
      </svg>
    ),
  },
  {
    label: "Garden Design",
    description: "From planting plans to full redesigns — we create beautiful, functional outdoor spaces tailored to your lifestyle.",
    // num: "04",
    accent: "#a3e635",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.45-2.72A1 1 0 013 16.38V5.62a1 1 0 011.45-.9L9 7m0 13 6-3m-6-10 6-3m6 3-5.45-2.72A1 1 0 0015 5.62v10.76a1 1 0 001.45.9L21 15V5.62" />
      </svg>
    ),
  },
  {
    label: "Seasonal Clean-Up",
    description: "Autumn leaf clearance, spring tidy-ups, and everything in between — we keep your garden pristine year-round.",
    // num: "05",
    accent: "#86efac",
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.43 15.43a2 2 0 00-1.02-.55l-2.39-.48a6 6 0 00-3.86.52l-.32.16a6 6 0 01-3.86.52l-1.93-.39a2 2 0 00-1.81.55M8 4h8l-1 1v5.17a2 2 0 00.59 1.42l5 5c1.26 1.26.37 3.41-1.41 3.41H4.83c-1.78 0-2.68-2.15-1.42-3.41l5-5A2 2 0 009 10.17V5L8 4z" />
      </svg>
    ),
  },
  {
    label: "Drainage",
    description: "Effective solutions to prevent waterlogging, flooding and water damage — protecting your garden and property.",
    // num: "06",
    accent: "#4ade80",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function ServicesTeaserStrip() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <section className="w-full bg-[#f0f1eb] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">What We Do</span>
            <h2 className="font-bold mt-1 uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Our </span>
              <span style={{ color: "#3a8c52" }}>Services</span>
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shrink-0">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeIn>

        {/* ── Desktop: expanding accordion panels ── */}
        <div className="hidden lg:flex gap-2 rounded-3xl overflow-hidden" style={{ height: "380px" }} onMouseLeave={() => setHovered(0)}>
          {services.map((s, i) => (
            <div
              key={s.label}
              onMouseEnter={() => setHovered(i)}
              className="relative overflow-hidden cursor-default flex flex-col justify-between p-6"
              style={{
                flexBasis: hovered === i ? "34%" : "13.2%",
                transition: "flex-basis 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${s.image})`,
                  transform: hovered === i ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Dark overlay — lighter when expanded */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: hovered === i ? "linear-gradient(to top, rgba(5,30,15,0.92) 0%, rgba(5,30,15,0.55) 60%, rgba(5,30,15,0.3) 100%)" : "rgba(5,20,12,0.78)",
                }}
              />
              {/* Accent left bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500"
                style={{
                  background: s.accent,
                  opacity: hovered === i ? 1 : 0.3,
                }}
              />

              {/* Number — top right */}
              <span className="absolute top-5 right-5 font-bold text-xs transition-all duration-300" style={{ color: hovered === i ? s.accent : "rgba(255,255,255,0.2)" }}>
                {/* {s.num} */}
              </span>

              {/* Icon */}
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: hovered === i ? `${s.accent}22` : "rgba(255,255,255,0.07)",
                  color: hovered === i ? s.accent : "rgba(255,255,255,0.5)",
                }}
              >
                {s.icon}
              </div>

              {/* Collapsed: rotated label */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center transition-all duration-300" style={{ opacity: hovered === i ? 0 : 1 }}>
                <span className="text-white/60 font-semibold text-sm whitespace-nowrap" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  {s.label}
                </span>
              </div>

              {/* Expanded: full content */}
              <div
                className="flex flex-col gap-4 transition-all duration-300"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <h3 className="text-white font-bold text-xl leading-tight">{s.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-4">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: 2-col grid ── */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
          {services.map((s) => (
            <Link key={s.label} href="/services" className="relative flex flex-col items-end justify-end gap-2 p-4 rounded-2xl overflow-hidden" style={{ minHeight: "140px" }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(5,20,12,0.72)" }} />
              <span className="relative w-10 h-10 rounded-xl flex items-center justify-center self-start" style={{ background: `${s.accent}25`, color: s.accent }}>
                {s.icon}
              </span>
              <span className="relative text-white font-semibold text-sm leading-snug self-start">{s.label}</span>
            </Link>
          ))}
        </div>

        {/* ── Single CTA below ── */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-gray-400 text-xs">Share your outdoor vision with us and we&apos;ll bring it to life</p>
        </div>
      </div>
    </section>
  );
}
