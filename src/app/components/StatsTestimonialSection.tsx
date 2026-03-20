"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Flowers are restful to look at. They have neither emotions nor conflicts. The garden year has no beginning and no end. Weeds are nature's graffiti.",
    name: "Janice Maeditere",
    role: "CEO & Founder",
  },
  {
    quote:
      "Little Aston Park Services transformed our overgrown garden into a stunning outdoor space. Their attention to detail and passion for their craft is truly remarkable.",
    name: "Robert Calloway",
    role: "Homeowner, Sutton Coldfield",
  },
  {
    quote:
      "Reliable, professional, and genuinely talented. They arrived on time, worked efficiently, and left our garden looking better than we ever imagined.",
    name: "Sarah Whitmore",
    role: "Property Manager, Lichfield",
  },
];

export default function StatsTestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="w-full bg-[#f0f1eb]"
    >
      <FadeIn>
        <div
          className="w-full overflow-hidden relative"
          style={{
            background: "linear-gradient(160deg, #0d3520 0%, #1a5c33 60%, #0a2e1a 100%)",
          }}
        >
          {/* Leaf texture overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 50%, #4ade8040 0%, transparent 60%),
                radial-gradient(ellipse at 80% 20%, #22c55e30 0%, transparent 50%)`,
            }}
          />
          {/* SVG leaf silhouettes */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path d="M-50,200 Q100,50 200,180 Q300,310 200,380 Q100,450 -50,200Z" fill="#4ade80" />
            <path d="M650,20 Q780,-60 850,80 Q920,220 780,260 Q640,300 650,20Z" fill="#4ade80" />
            <path d="M500,300 Q620,200 700,320 Q780,440 620,460 Q460,480 500,300Z" fill="#4ade80" />
            <path d="M300,10 Q380,-40 420,60 Q460,160 360,180 Q260,200 300,10Z" fill="#4ade80" />
          </svg>

          {/* ── Top half: Stat ──────────────────────────── */}
          <div className="max-w-7xl mx-auto px-10 w-full border-b border-white/10">
            <div className="relative z-10 flex items-center gap-8 py-10">
            {/* Circle arrow button */}
            <a
              href="#services"
              className="shrink-0 w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400/10 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Big number */}
            <span
              className="text-7xl sm:text-8xl font-bold text-white leading-none tracking-tight"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              500+
            </span>

            {/* Label */}
            <p className="text-white font-semibold text-base sm:text-lg leading-snug max-w-[200px]">
              Global Clients Happy to Get Our Gardening Services
            </p>
            </div>
          </div>

          {/* ── Bottom half: Testimonial ────────────────── */}
          <div className="max-w-7xl mx-auto px-10 w-full">
            <div className="relative z-10 flex items-start gap-6 py-10">
            {/* Giant quote mark */}
            <div className="shrink-0 text-emerald-400 leading-none select-none" style={{ fontSize: "6rem", lineHeight: 1 }}>
              &ldquo;
            </div>

            {/* Quote + author */}
            <div className="flex-1">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-5">
                {t.quote}
              </p>
              <p className="text-emerald-400 font-semibold text-sm">{t.name}</p>
              <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-2 shrink-0 self-end">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-md border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-md bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-400 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
