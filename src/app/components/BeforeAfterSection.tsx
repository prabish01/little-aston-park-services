"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

interface Slide {
  title: string;
  description: string;
  // Replace null with "/your-before.jpg" and "/your-after.jpg"
  beforeImage: string | null;
  afterImage: string | null;
  beforeBg: string;
  afterBg: string;
}

const slides: Slide[] = [
  {
    title: "Garden Transformation",
    description: "Complete garden maintenance and leaf clearance",
    beforeImage: "/before-image.png",
    afterImage: "/after-image.png",
    beforeBg: "linear-gradient(135deg, #8B7355 0%, #A0845C 40%, #7A6245 100%)",
    afterBg: "linear-gradient(135deg, #2d7a4f 0%, #4a9e6b 40%, #1a5c33 100%)",
  },
  {
    title: "Lawn Revival",
    description: "Full lawn restoration and re-seeding service",
    beforeImage: null,
    afterImage: null,
    beforeBg: "linear-gradient(135deg, #6b5a3e 0%, #8a7250 40%, #5c4b30 100%)",
    afterBg: "linear-gradient(135deg, #3a8c55 0%, #5aab72 40%, #2a6e40 100%)",
  },
  {
    title: "Hedge Shaping",
    description: "Precision hedge trimming and shaping",
    beforeImage: null,
    afterImage: null,
    beforeBg: "linear-gradient(135deg, #7a6a4a 0%, #9a8560 40%, #695a3a 100%)",
    afterBg: "linear-gradient(135deg, #1e6b42 0%, #3a8c5a 40%, #155235 100%)",
  },
];

function ComparisonSlider({ slide }: { slide: Slide }) {
  const [position, setPosition] = useState(50); // 0–100
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  // Mouse
  const onMouseDown = () => setDragging(true);
  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (dragging) getPosition(e.clientX); },
    [dragging, getPosition]
  );
  const onMouseUp = () => setDragging(false);

  // Touch
  const onTouchStart = () => setDragging(true);
  const onTouchMove = useCallback(
    (e: TouchEvent) => { if (dragging) getPosition(e.touches[0].clientX); },
    [dragging, getPosition]
  );
  const onTouchEnd = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* AFTER (full width underneath) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: slide.afterImage
            ? `url(${slide.afterImage}) center/cover no-repeat`
            : slide.afterBg,
        }}
      >
        {!slide.afterImage && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/40 text-sm font-medium tracking-wide">After photo</span>
          </div>
        )}
      </div>

      {/* BEFORE (clipped to left portion) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: slide.beforeImage
            ? `url(${slide.beforeImage}) center/cover no-repeat`
            : slide.beforeBg,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: dragging ? "none" : "clip-path 0.05s ease",
        }}
      >
        {!slide.beforeImage && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/40 text-sm font-medium tracking-wide">Before photo</span>
          </div>
        )}
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Before badge */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 text-white text-xs font-semibold backdrop-blur-sm pointer-events-none">
        Before
      </div>

      {/* After badge */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold pointer-events-none">
        After
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      id="work"
      className="w-full bg-[#f0f1eb] pt-20 pb-8 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 mb-3">
            Our Work Speaks for Itself
          </h2>
          <p className="text-gray-500 text-base">
            Real transformations and recent projects we&apos;re proud of — drag the slider to compare
          </p>
        </FadeIn>

        {/* Card */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Slider */}
            <div className="p-4 pb-0">
              <ComparisonSlider slide={slides[current]} />
            </div>

            {/* Caption + navigation */}
            <div className="flex items-center justify-between px-6 py-5">
              {/* Prev arrow */}
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Title + dots */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-gray-900 text-base">
                  {slides[current].title}
                </h3>
                <p className="text-gray-400 text-sm">{slides[current].description}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 h-2 bg-emerald-600"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Next arrow */}
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
