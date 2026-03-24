"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT     = 300;
const SCROLL_DISTANCE = FRAME_COUNT * 3; // 900px — full frame play-through
const INTRO_SCROLL    = 500;             // px over which desktop entrance plays

function frameUrl(i: number) {
  return `/frames/frame_${i.toString().padStart(4, "0")}.png`;
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function Hero() {
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const textRef       = useRef<HTMLDivElement>(null);
  const sectionRef    = useRef<HTMLElement>(null);

  const imagesRef       = useRef<(HTMLImageElement | null)[]>(Array(FRAME_COUNT).fill(null));
  const currentFrameRef = useRef(-1);
  const rafRef          = useRef<number | null>(null);

  useEffect(() => {
    const canvas     = canvasRef.current;
    const canvasWrap = canvasWrapRef.current;
    const text       = textRef.current;
    if (!canvas || !canvasWrap || !text) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 1024;

    // ── Draw a frame ──────────────────────────────────────────────────────────
    function drawFrame(index: number) {
      const img = imagesRef.current[index];
      if (!img || !img.complete || !img.naturalWidth || !canvas) return;
      const { width, height } = canvas;
      ctx!.clearRect(0, 0, width, height);
      const s  = Math.min(width / img.naturalWidth, height / img.naturalHeight);
      const sw = img.naturalWidth  * s;
      const sh = img.naturalHeight * s;
      ctx!.drawImage(img, (width - sw) / 2, (height - sh) / 2, sw, sh);
    }

    // ── Load frames ───────────────────────────────────────────────────────────
    const first = new Image();
    first.onload = () => { imagesRef.current[0] = first; drawFrame(0); };
    first.src = frameUrl(0);
    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      const idx = i;
      img.onload = () => { imagesRef.current[idx] = img; };
      img.src = frameUrl(i);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // MOBILE: simple fade-in, no position animation, text always visible
    // ─────────────────────────────────────────────────────────────────────────
    if (isMobile) {
      text.style.opacity   = "1";
      text.style.transform = "translateX(0px)";

      canvasWrap.style.opacity = "0";
      canvasWrap.style.filter  = "blur(12px)";
      canvasWrap.style.transition = "none";

      const fadeTimer = setTimeout(() => {
        canvasWrap.style.transition = "opacity 1.1s ease, filter 1.1s ease";
        canvasWrap.style.opacity    = "1";
        canvasWrap.style.filter     = "blur(0px)";
      }, 100);

      function onScrollMobile() {
        const section = sectionRef.current;
        if (!section) return;
        const scrolled   = Math.max(0, -section.getBoundingClientRect().top);
        const frameIndex = Math.min(
          Math.round((scrolled / SCROLL_DISTANCE) * (FRAME_COUNT - 1)),
          FRAME_COUNT - 1
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
        }
      }

      window.addEventListener("scroll", onScrollMobile, { passive: true });
      return () => {
        clearTimeout(fadeTimer);
        window.removeEventListener("scroll", onScrollMobile);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // DESKTOP: centred+big entrance → shifts right, text slides in
    // ─────────────────────────────────────────────────────────────────────────
    const rect    = canvasWrap.getBoundingClientRect();
    const offsetX = (window.innerWidth / 2) - (rect.left + rect.width / 2);

    function applyState(scrolled: number) {
      const introP = Math.min(scrolled / INTRO_SCROLL, 1);
      const eased  = easeInOut(introP);

      const tx    = offsetX * (1 - eased);
      const scale = 1.65 - 0.65 * eased;
      canvasWrap!.style.transform = `translateX(${tx}px) scale(${scale})`;

      text!.style.opacity   = String(eased);
      text!.style.transform = `translateX(${-70 * (1 - eased)}px)`;

      const frameIndex = Math.min(
        Math.round((scrolled / SCROLL_DISTANCE) * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      );
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    }

    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const scrolled = Math.max(0, -section.getBoundingClientRect().top);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyState(scrolled));
    }

    canvasWrap.style.transition = "none";
    applyState(0);

    canvasWrap.style.opacity = "0";
    canvasWrap.style.filter  = "blur(16px)";
    const fadeTimer = setTimeout(() => {
      canvasWrap.style.transition = "opacity 1.1s ease, filter 1.1s ease";
      canvasWrap.style.opacity    = "1";
      canvasWrap.style.filter     = "blur(0px)";
      setTimeout(() => { canvasWrap.style.transition = "none"; }, 1200);
    }, 100);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)`, backgroundColor: "#e5ebeb" }}
    >
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh" }}>
        <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-16 py-8 lg:py-0">

          {/* Left — text */}
          <div
            ref={textRef}
            className="w-full lg:flex-1 flex flex-col items-start"
            style={{ opacity: 0, transform: "translateX(-70px)", willChange: "transform, opacity" }}
          >
            <h1 className="font-bold leading-tight mb-4 lg:mb-6" style={{ fontSize: "clamp(2.2rem, 7vw, 5.5rem)" }}>
              <span className="block" style={{ color: "#0d2e1a" }}>Your Garden</span>
              <span className="block" style={{ color: "#3a8c52" }}>Deserves Better</span>
            </h1>

            <p className="text-base lg:text-xl leading-relaxed mb-6 lg:mb-10 max-w-lg" style={{ color: "#4a4a4a" }}>
              We&apos;re your local garden maintenance experts in{" "}
              <strong style={{ color: "#1a3d25" }}>Sutton Coldfield, Lichfield &amp; Tamworth</strong>.
              No job too big or small — just honest, reliable service that brings your outdoor space back to life.
            </p>

            <a
              href="#services"
              className="px-8 py-3.5 rounded-full font-semibold text-base text-white transition-colors duration-300"
              style={{ backgroundColor: "#2d7a47" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#3a8c52")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2d7a47")}
            >
              Explore Our Services
            </a>
          </div>

          {/* Right — canvas */}
          <div
            ref={canvasWrapRef}
            className="w-full lg:flex-1 flex justify-center lg:justify-end"
            style={{ willChange: "transform, opacity, filter", transformOrigin: "center center" }}
          >
            <canvas
              ref={canvasRef}
              width={720}
              height={720}
              className="w-full max-w-[320px] lg:max-w-130 rounded-2xl"
              style={{ height: "auto" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
