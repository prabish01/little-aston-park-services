"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";

const services = [
  {
    label: "Lawn Care",
    description: "Regular mowing, edging, and feeding to keep your lawn lush, green, and perfectly manicured all year round.",
    accent: "#c5e84a",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
    icon: (
      // Lawnmower
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h2m14 0h2M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17V11h10v6M7 11l2-5h6l2 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l2-4" />
      </svg>
    ),
  },
  {
    label: "Jet Washing",
    description: "Professional high-pressure cleaning of patios, driveways, decking and paths — restoring them to like-new condition.",
    accent: "#34d399",
    image: "/pressure-washing.png",
    icon: (
      // Pressure washer spray nozzle
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v4H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4l2 2v2h-6V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 14l1.5 1.5M19.5 12l1.5 1.5M16.5 15.5L18 17" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8v8a2 2 0 002 2h4" />
      </svg>
    ),
  },
  {
    label: "Hedge Trimming",
    description: "Precise shaping and cutting of hedges, shrubs, and borders to give your garden clean, defined lines.",
    accent: "#6ee7b7",
    image: "/hedge-trimming.png",
    icon: (
      // Hedge shears / clippers
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l12 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 3L6 15" />
        <circle cx="4.5" cy="16.5" r="2.5" />
        <circle cx="19.5" cy="16.5" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.8 15H17.2" />
      </svg>
    ),
  },
  {
    label: "Garden Design",
    description: "From planting plans to full redesigns — we create beautiful, functional outdoor spaces tailored to your lifestyle.",
    accent: "#a3e635",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    icon: (
      // 4-petal flower
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <ellipse cx="12" cy="7" rx="2.5" ry="4" />
        <ellipse cx="12" cy="17" rx="2.5" ry="4" />
        <ellipse cx="7" cy="12" rx="4" ry="2.5" />
        <ellipse cx="17" cy="12" rx="4" ry="2.5" />
        <circle cx="12" cy="12" r="2.5" />
        <line x1="12" y1="21" x2="12" y2="24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Seasonal Clean-Up",
    description: "Autumn leaf clearance, spring tidy-ups, and everything in between — we keep your garden pristine year-round.",
    accent: "#86efac",
    image: "/seasonal-cleanup.png",
    icon: (
      // Garden rake
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l1-4M9 10l.5-4M12 10V6M15 10l-.5-4M18 10l-1-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20h4" />
      </svg>
    ),
  },
  {
    label: "Drainage",
    description: "Effective solutions to prevent waterlogging, flooding and water damage — protecting your garden and property.",
    accent: "#4ade80",
    image: "/drainage.png",
    icon: (
      // Drain grate — rectangular frame with horizontal vent bars
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" />
        <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
        <line x1="3" y1="15" x2="21" y2="15" strokeLinecap="round" />
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
            <Link
              key={s.label}
              href="/services"
              onMouseEnter={() => setHovered(i)}
              className="relative overflow-hidden cursor-pointer flex flex-col justify-between p-6"
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
            </Link>
          ))}
        </div>

        {/* ── Mobile: 2-col grid ── */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-3">
          {services.map((s) => (
            <Link key={s.label} href="/services" className="relative flex flex-col justify-between p-4 rounded-2xl overflow-hidden" style={{ minHeight: "140px" }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(5,20,12,0.72)" }} />
              <span className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 self-end" style={{ background: `${s.accent}25`, color: s.accent }}>
                {s.icon}
              </span>
              <span className="relative text-white font-semibold text-sm whitespace-nowrap">{s.label}</span>
            </Link>
          ))}
        </div>

        {/* ── Single CTA below ── */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20">
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
