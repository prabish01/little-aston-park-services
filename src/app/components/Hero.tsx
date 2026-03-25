"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";

const SCROLL_DISTANCE = 800;
const INTRO_SCROLL = 500;

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!canvas || !video || !wrap || !text) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const isMobile = window.innerWidth < 1024;

    // ── Seek queue: only one seek in-flight at a time ─────────────────────────
    let isSeeking = false;
    let pendingTime: number | null = null;

    function drawFrame() {
      if (!canvas || !video) return;
      ctx!.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    function seekTo(time: number) {
      if (!video!.duration) return;
      if (isSeeking) {
        pendingTime = time;
        return;
      }
      isSeeking = true;
      video!.currentTime = time;
    }

    video.addEventListener("seeked", () => {
      drawFrame();
      isSeeking = false;
      if (pendingTime !== null) {
        const t = pendingTime;
        pendingTime = null;
        seekTo(t);
      }
    });

    // Draw first frame as soon as data is available
    video.addEventListener("loadeddata", drawFrame);

    function scrub(scrolled: number) {
      if (!video!.duration) return;
      seekTo(Math.min(scrolled / SCROLL_DISTANCE, 1) * video!.duration);
    }

    // ── MOBILE ────────────────────────────────────────────────────────────────
    if (isMobile) {
      text.style.opacity = "1";
      text.style.transform = "translateX(0)";
      wrap.style.opacity = "0";
      wrap.style.filter = "blur(12px)";
      wrap.style.transition = "none";
      const t = setTimeout(() => {
        wrap.style.transition = "opacity 1.1s ease, filter 1.1s ease";
        wrap.style.opacity = "1";
        wrap.style.filter = "blur(0px)";
      }, 120);

      const onScroll = () => {
        const s = sectionRef.current;
        if (!s) return;
        const scrolled = Math.max(0, -s.getBoundingClientRect().top);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => scrub(scrolled));
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        clearTimeout(t);
        window.removeEventListener("scroll", onScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    // ── DESKTOP ───────────────────────────────────────────────────────────────
    const rect = wrap.getBoundingClientRect();
    const offsetX = window.innerWidth / 2 - (rect.left + rect.width / 2);

    function applyState(scrolled: number) {
      const introP = Math.min(scrolled / INTRO_SCROLL, 1);
      const eased = easeInOut(introP);

      wrap!.style.transform = `translateX(${offsetX * (1 - eased)}px) scale(${1.65 - 0.65 * eased})`;
      text!.style.opacity = String(eased);
      text!.style.transform = `translateX(${-70 * (1 - eased)}px)`;

      scrub(scrolled);
    }

    wrap.style.transition = "none";
    applyState(0);

    // Entrance fade-in
    wrap.style.opacity = "0";
    wrap.style.filter = "blur(16px)";
    const fadeTimer = setTimeout(() => {
      wrap.style.transition = "opacity 1.1s ease, filter 1.1s ease";
      wrap.style.opacity = "1";
      wrap.style.filter = "blur(0px)";
      setTimeout(() => {
        wrap.style.transition = "none";
      }, 1200);
    }, 120);

    const onScroll = () => {
      const s = sectionRef.current;
      if (!s) return;
      const scrolled = Math.max(0, -s.getBoundingClientRect().top);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyState(scrolled));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)`, backgroundColor: "#ffffff" }}>
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>
        {/* Decorative leaf */}
        <svg className="absolute top-8 right-8 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 Q90 30 80 70 Q60 90 40 70 Q30 30 60 10Z" fill="#2d7a47" />
          <path d="M80 20 Q110 40 100 75 Q85 90 65 75 Q55 40 80 20Z" fill="#3a8c52" opacity="0.6" />
          <line x1="60" y1="10" x2="60" y2="90" stroke="#1a5c33" strokeWidth="1.5" opacity="0.4" />
          <line x1="60" y1="40" x2="45" y2="55" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
          <line x1="60" y1="55" x2="75" y2="65" stroke="#1a5c33" strokeWidth="1" opacity="0.3" />
        </svg>

        <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-16 pt-32 pb-6 lg:py-0">
          {/* Left — text */}
          <div ref={textRef} className="w-full lg:flex-1 flex flex-col items-start" style={{ opacity: 0, transform: "translateX(-70px)", willChange: "transform, opacity" }}>
            <div className="flex items-center gap-3 mb-6">
              <NextImage src="/laps.svg" alt="Little Aston Park Services" width={52} height={52} className="h-12 w-auto" />
              <span className="text-xs font-bold uppercase tracking-widest leading-tight" style={{ color: "#2d7a47" }}>
                Little Aston
                <br />
                Park Services
              </span>
            </div>

            <h1 className="font-bold leading-tight mb-4 lg:mb-6" style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}>
              <span className="block" style={{ color: "#0d2e1a" }}>
                Your Garden
              </span>
              <span className="block" style={{ color: "#3a8c52" }}>
                Deserves Better
              </span>
            </h1>

            <p className="text-base lg:text-xl leading-relaxed mb-6 lg:mb-10 max-w-lg" style={{ color: "#4a4a4a" }}>
              We&apos;re your local garden maintenance experts in <strong style={{ color: "#1a3d25" }}>Sutton Coldfield, Lichfield &amp; Tamworth</strong>. No job too big or small — just honest, reliable service that brings your outdoor space back to life.
            </p>

            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-base text-white transition-colors duration-300"
              style={{ backgroundColor: "#2d7a47" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3a8c52")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2d7a47")}
            >
              Explore Our Services
            </a>
          </div>

          {/* Right — canvas (video decoded into it) */}
          <div ref={wrapRef} className="w-full lg:flex-1 flex justify-center lg:justify-end" style={{ willChange: "transform, opacity, filter", transformOrigin: "center center" }}>
            <canvas ref={canvasRef} width={800} height={800} className="w-full max-w-[320px] lg:max-w-130 rounded-2xl" style={{ height: "auto" }} />
          </div>
        </div>
      </div>

      {/* Hidden video — only used for decoding, never rendered directly */}
      <video ref={videoRef} src="/gardening.mp4" preload="auto" muted playsInline style={{ display: "none" }} />
    </section>
  );
}
