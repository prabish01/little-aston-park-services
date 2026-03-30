"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";

export default function Hero() {
  const [expanded, setExpanded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);  // outer — JS translateY only
  const curtainRef = useRef<HTMLDivElement>(null);   // brand-green wipe
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Slide curtain away after paint
    const t = setTimeout(() => {
      if (curtainRef.current) {
        curtainRef.current.style.transition = "transform 0.95s cubic-bezier(0.76, 0, 0.24, 1)";
        curtainRef.current.style.transform = "translateX(101%)";
      }
    }, 320);

    // Parallax pan: image is taller than its container, JS pans it on scroll
    const onScroll = () => {
      if (!parallaxRef.current) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!parallaxRef.current) return;
        const ty = Math.max(-44, -(window.scrollY * 0.1));
        parallaxRef.current.style.transform = `translateY(${ty}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ backgroundColor: "#fdfcfc" }}>
      <style>{`
        @keyframes lineUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes imgReveal {
          from { transform: scale(1.07); }
          to   { transform: scale(1);    }
        }
        .h-anim {
          opacity: 0;
          animation: lineUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .d1 { animation-delay: 0.08s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.28s; }
        .d4 { animation-delay: 0.40s; }
        .d5 { animation-delay: 0.54s; }
        .d6 { animation-delay: 0.68s; }
        .d7 { animation-delay: 0.80s; }
        .img-entrance {
          animation: imgReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.32s both;
        }
      `}</style>

      {/* Faint decorative leaf */}
      <svg
        className="absolute top-8 right-8 w-28 h-28 opacity-10 pointer-events-none"
        viewBox="0 0 120 120" fill="none"
      >
        <path d="M60 10 Q90 30 80 70 Q60 90 40 70 Q30 30 60 10Z" fill="#2d7a47" />
        <path d="M80 20 Q110 40 100 75 Q85 90 65 75 Q55 40 80 20Z" fill="#3a8c52" opacity="0.6" />
        <line x1="60" y1="10" x2="60" y2="90" stroke="#1a5c33" strokeWidth="1.5" opacity="0.4" />
        <line x1="60" y1="40" x2="45" y2="55" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
        <line x1="60" y1="55" x2="75" y2="65" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center min-h-screen gap-10 lg:gap-16 pt-24 pb-12 lg:py-0">

        {/* ── LEFT: text ── */}
        <div className="w-full lg:flex-1 flex flex-col items-start">

          {/* Brand lockup */}
          <div className="flex items-center gap-3 mb-6 h-anim d1">
            <NextImage src="/laps.svg" alt="Little Aston Park Services" width={52} height={52} className="h-12 w-auto" />
            <span className="text-xs font-bold uppercase tracking-widest leading-tight text-emerald-600">
              Little Aston<br />Park Services
            </span>
          </div>

          {/* Headline — each line animates independently */}
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}>
            <span className="block h-anim d2" style={{ color: "#0d2e1a" }}>Your Garden</span>
            <span className="block h-anim d3" style={{ color: "#3a8c52" }}>Deserves Better</span>
          </h1>

          {/* Lead paragraph with green left rule */}
          <p
            className="h-anim d4 text-base lg:text-[1.05rem] leading-relaxed max-w-lg mb-5 pl-4"
            style={{ color: "#4a4a4a", borderLeft: "3px solid #3a8c52" }}
          >
            Little Aston Park Services are your trusted local garden maintenance specialists, serving
            across the <strong style={{ color: "#1a3d25" }}>Midlands</strong>, from Sutton Coldfield
            to Lichfield, Tamworth and beyond. Whether your garden needs a simple tidy-up or a complete
            transformation, we bring the same level of care, attention to detail and professionalism to
            every job.
          </p>

          {/* Service tags */}
          <div className="h-anim d5 flex flex-wrap gap-2 mb-5">
            {["Lawn Care", "Hedge Trimming", "Jet Washing", "Garden Clearance", "Seasonal Clean-Up"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Expandable remaining copy */}
          <div className="h-anim d6 max-w-lg mb-6 w-full">
            <div
              style={{
                maxHeight: expanded ? "320px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                className="flex flex-col gap-3 pt-1 pb-3 text-[0.95rem] leading-relaxed"
                style={{ color: "#4a4a4a" }}
              >
                <p>
                  From tired patios and overgrown lawns to unruly hedges and untended gardens that need
                  a complete revamp, we help restore spaces to sanctuaries that you can truly enjoy. Our
                  team has built a reputation as reliable, approachable and completely committed to
                  delivering your visions. And the results speak for themselves.
                </p>
                <p>
                  No job is too big or too small and we tailor our services to suit your needs, schedule
                  and budget. Let us take the stress out of your garden&apos;s maintenance and let you
                  sit back to enjoy the results.
                </p>
              </div>
            </div>

            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              {expanded ? "Read less" : "Read more about us"}
              <svg
                className="w-4 h-4 transition-transform duration-300"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* CTA */}
          <a
            href="#services"
            className="h-anim d7 px-8 py-3.5 rounded-full font-semibold text-base text-white transition-colors duration-300"
            style={{ backgroundColor: "#2d7a47" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3a8c52")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2d7a47")}
          >
            Explore Our Services
          </a>
        </div>

        {/* ── RIGHT: image with curtain reveal + parallax pan ── */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          {/*
            Outer box: clips the parallax pan — fixed height, overflow hidden.
            Portrait image (≈525 px tall) is taller than the 480 px box,
            giving ~45 px of room to pan upward on scroll.
          */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ width: "100%", maxWidth: "420px", height: "480px" }}
          >
            {/* Parallax wrapper — JS sets translateY here */}
            <div
              ref={parallaxRef}
              className="w-full h-full"
              style={{ willChange: "transform" }}
            >
              {/* Scale entrance — CSS animation only */}
              <div className="img-entrance w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-canvas.png"
                  alt="Garden transformation by Little Aston Park Services"
                  className="w-full h-auto block"
                  style={{ minHeight: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Brand-green curtain — slides right on load */}
            <div
              ref={curtainRef}
              className="absolute inset-0"
              style={{ backgroundColor: "#2d7a47", zIndex: 20 }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
