"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface Slide {
  title: string;
  description: string;
  beforeImage: string | null;
  afterImage: string | null;
  beforeBg: string;
  afterBg: string;
}

const slides: Slide[] = [
  {
    title: "Driveway Transformation",
    description: "High-pressure jet wash clean including weeding, removal of algae and complete tidy-up.",
    beforeImage: "/before-after/before6.png",
    afterImage: "/before-after/after6.png",
    beforeBg: "linear-gradient(135deg, #8B7355 0%, #A0845C 40%, #7A6245 100%)",
    afterBg: "linear-gradient(135deg, #2d7a4f 0%, #4a9e6b 40%, #1a5c33 100%)",
  },
  {
    title: "Patio Restoration",
    description: "Professional jet washing to remove years of grime, restoring patios and paving to their original beauty.",
    beforeImage: "/before-after/before7.png",
    afterImage: "/before-after/after7.png",
    beforeBg: "linear-gradient(135deg, #7a6a4a 0%, #9a8560 40%, #695a3a 100%)",
    afterBg: "linear-gradient(135deg, #2d7a4f 0%, #4a9e6b 40%, #1a5c33 100%)",
  },
  {
    title: "Flower Bed Revival",
    description: "Full restoration which include the removal of moss, re-building, re-seeding, re-planting and finished off with a layer of healthy mulch.",
    beforeImage: "/before-after/before3.jpeg",
    afterImage: "/before-after/after3.jpeg",
    beforeBg: "linear-gradient(135deg, #6b5a3e 0%, #8a7250 40%, #5c4b30 100%)",
    afterBg: "linear-gradient(135deg, #3a8c55 0%, #5aab72 40%, #2a6e40 100%)",
  },
  {
    title: "Block Paving Regeneration",
    description: "Revive drive ways that have years of dirt, moss, and discolouration for a clean, lasting finish.",
    beforeImage: "/before-after/before4.jpeg",
    afterImage: "/before-after/after4.jpeg",
    beforeBg: "linear-gradient(135deg, #7a6a4a 0%, #9a8560 40%, #695a3a 100%)",
    afterBg: "linear-gradient(135deg, #1e6b42 0%, #3a8c5a 40%, #155235 100%)",
  },
  {
    title: "Tree & Hedge Trimming",
    description: "Precision-focused trim and maintenance of vegetation for a neat, well-kept appearance.",
    beforeImage: "/before-after/before5.jpeg",
    afterImage: "/before-after/after5.jpeg",
    beforeBg: "linear-gradient(135deg, #6b5a3e 0%, #8a7250 40%, #5c4b30 100%)",
    afterBg: "linear-gradient(135deg, #1e6b42 0%, #3a8c5a 40%, #155235 100%)",
  },
];

const projects = [
  {
    title: "Driveway Transformation",
    category: "Pressure Washing",
    image: "/before-after/after6.png",
  },
  {
    title: "Patio Restoration",
    category: "Pressure Washing",
    image: "/before-after/after7.png",
  },
  {
    title: "Flower Bed Revival",
    category: "Garden Maintenance",
    image: "/before-after/after3.jpeg",
  },
  {
    title: "Block Paving Regeneration",
    category: "Pressure Washing",
    image: "/before-after/after4.jpeg",
  },
  {
    title: "Tree & Hedge Trimming",
    category: "Garden Maintenance",
    image: "/before-after/after5.jpeg",
  },
  {
    title: "Property Care",
    category: "Jet Wash of Stairs",
    image: "/services-hero-card1.png",
  },
  {
    title: "Listed Building Clean",
    category: "Jet Wash of Local Church",
    image: "/services-hero-card2.png",
  },
];

function ComparisonSlider({ slide }: { slide: Slide }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging) getPosition(e.clientX);
    },
    [dragging, getPosition],
  );
  const onMouseUp = () => setDragging(false);

  const onTouchStart = () => setDragging(true);
  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (dragging) getPosition(e.touches[0].clientX);
    },
    [dragging, getPosition],
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
    <div ref={containerRef} className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-col-resize" onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
      {/* AFTER */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: slide.afterImage ? `url(${slide.afterImage}) center/cover no-repeat` : slide.afterBg,
        }}
      >
        {!slide.afterImage && (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/40 text-sm font-medium tracking-wide">After photo</span>
          </div>
        )}
      </div>

      {/* BEFORE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: slide.beforeImage ? `url(${slide.beforeImage}) center/cover no-repeat` : slide.beforeBg,
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

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none" style={{ left: `${position}%` }} />

      {/* Handle */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none" style={{ left: `${position}%` }}>
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 text-white text-xs font-semibold backdrop-blur-sm pointer-events-none">Before</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold pointer-events-none">After</div>
    </div>
  );
}

export default function WorkSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(1);

  const prevSlide = () => setCurrentSlide((c) => (c - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((c) => (c + 1) % slides.length);

  const prevProject = () => setCurrentProject((c) => (c - 1 + projects.length) % projects.length);
  const nextProject = () => setCurrentProject((c) => (c + 1) % projects.length);

  const getProjectIndex = (offset: number) => (currentProject + offset + projects.length) % projects.length;

  return (
    <section id="work" className="relative w-full bg-[#f0f1eb] py-20 px-6 overflow-hidden">
      {/* Decorative flower — top right */}
      <svg className="absolute top-10 right-6 w-32 h-32 opacity-[0.08] pointer-events-none" viewBox="0 0 130 130" fill="none">
        {/* Petals */}
        <ellipse cx="65" cy="30" rx="12" ry="22" fill="#4a9e6b" />
        <ellipse cx="65" cy="30" rx="12" ry="22" fill="#4a9e6b" transform="rotate(45 65 65)" />
        <ellipse cx="65" cy="30" rx="12" ry="22" fill="#4a9e6b" transform="rotate(90 65 65)" />
        <ellipse cx="65" cy="30" rx="12" ry="22" fill="#4a9e6b" transform="rotate(135 65 65)" />
        {/* Centre */}
        <circle cx="65" cy="65" r="16" fill="#2d7a47" />
        {/* Stem */}
        <line x1="65" y1="105" x2="65" y2="130" stroke="#2d7a47" strokeWidth="3" strokeLinecap="round" />
        <path d="M65 118 Q50 108 42 112" stroke="#3a8c52" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
      {/* Decorative water drops / jet wash */}
      <svg className="absolute bottom-20 left-4 w-20 h-20 opacity-[0.07] pointer-events-none" viewBox="0 0 80 80" fill="none">
        <path d="M10 70 Q20 40 40 10" stroke="#2d7a47" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M25 70 Q35 45 50 18" stroke="#3a8c52" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 70 Q48 48 60 28" stroke="#2d7a47" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="8" r="4" fill="#4a9e6b" />
        <circle cx="50" cy="16" r="3" fill="#4a9e6b" />
        <circle cx="60" cy="26" r="3" fill="#4a9e6b" />
        <circle cx="10" cy="68" r="3" fill="#2d7a47" />
        <circle cx="25" cy="68" r="3" fill="#2d7a47" />
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* ── Shared header ── */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Our Work</span>
            <h2 className="font-bold uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Our Work Speaks</span>
              <br />
              <span style={{ color: "#3a8c52" }}>for Itself</span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Before & After ── */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-3 mb-6">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Before &amp; After</span>
            <div className="text-gray-500 text-sm flex flex-col gap-3">
              <p>
                We believe the results of our work say far more than we ever could and over the years, we&apos;ve transformed hundreds of gardens across the Midlands, from small pruning and strimming jobs to give an established garden its shine back to full outdoor makeovers, creating a space to
                enjoy, as well as adding value to a property.
              </p>
              <p>We relish every project we take on, thriving on the opportunity to bring a space back to life and we take pride in delivering visible, lasting improvements for every homeowner. Whether you want to reclaim your space or refine an already well-kept space, we&apos;re here to help.</p>
              <p>
                <Link href="/about#testimonials-cards" className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2">
                  But don&apos;t just take our word for it
                </Link>
                , take a look at some of our recent work and see the difference yourself. Simply slide across to see some before and after shots of our recent transformations…
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="p-4 pb-0">
              <ComparisonSlider slide={slides[currentSlide]} />
            </div>
            <div className="relative flex items-center justify-center px-14 py-5">
              <button onClick={prevSlide} className="absolute left-4 w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors" aria-label="Previous">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="font-bold text-gray-900 text-base">{slides[currentSlide].title}</h3>
                <p className="text-gray-400 text-sm">{slides[currentSlide].description}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 h-2 bg-emerald-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Slide ${i + 1}`} />
                  ))}
                </div>
              </div>
              <button onClick={nextSlide} className="absolute right-4 w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors" aria-label="Next">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* ── Portfolio carousel ── */}
        <div>
          <FadeIn className="flex flex-col gap-1 mb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Our Portfolio</span>
            <h3 className="font-bold uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Browse Our </span>
              <span style={{ color: "#3a8c52" }}>Projects</span>
            </h3>
            <div className="text-gray-500 text-sm leading-relaxed mt-1 flex flex-col gap-3">
              <p>
                Our portfolio showcases a wide range of work carried out across the Midlands, highlighting the versatility and quality of{" "}
                <Link href="/services" className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2">
                  our services
                </Link>
                . From large-scale garden clearances that completely reset outdoor spaces, to precise hedge trimming and ongoing lawn care, each project reflects our commitment to detail and professionalism.
              </p>
              <p>
                We&apos;ve also worked on planting schemes and garden design improvements, helping clients create spaces that are not only tidy but also visually appealing and functional. In addition, our patio and driveway jet washing services restore hard surfaces, bringing them back to their
                original condition.
              </p>
              <p>Every project is approached with the same level of care, regardless of size. Browse through our recent work to get a better idea of what we do and how we can help transform your garden.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {/* Desktop: 3-card layout with buttons on either side */}
            <div className="hidden sm:flex items-center gap-3 overflow-hidden">
              <button onClick={prevProject} className="w-12 h-12 shrink-0 rounded-xl bg-emerald-950 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors" aria-label="Previous project">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="relative flex-1 rounded-3xl overflow-hidden cursor-pointer" style={{ height: "360px" }} onClick={prevProject}>
                <img src={projects[getProjectIndex(-1)].image} alt={projects[getProjectIndex(-1)].title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-emerald-950/20" />
              </div>
              <div className="relative rounded-3xl overflow-hidden flex-[1.6] shrink-0 cursor-pointer" style={{ height: "360px" }} onClick={nextProject}>
                <img src={projects[currentProject].image} alt={projects[currentProject].title} className="w-full h-full object-cover object-center transition-all duration-500" />
              </div>
              <div className="relative flex-1 rounded-3xl overflow-hidden cursor-pointer" style={{ height: "360px" }} onClick={nextProject}>
                <img src={projects[getProjectIndex(1)].image} alt={projects[getProjectIndex(1)].title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-emerald-950/20" />
              </div>
              <button onClick={nextProject} className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors self-center" aria-label="Next project">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile: single full-width card */}
            <div className="sm:hidden flex flex-col gap-4">
              <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: "320px" }}>
                <img src={projects[currentProject].image} alt={projects[currentProject].title} className="w-full h-full object-cover object-center transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-linear-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-base">{projects[currentProject].title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{projects[currentProject].category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button onClick={prevProject} className="w-11 h-11 rounded-xl bg-emerald-950 text-white flex items-center justify-center" aria-label="Previous project">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  {projects.map((_, i) => (
                    <button key={i} onClick={() => setCurrentProject(i)} className={`rounded-full transition-all duration-300 ${i === currentProject ? "w-6 h-2 bg-emerald-600" : "w-2 h-2 bg-gray-300"}`} aria-label={`Project ${i + 1}`} />
                  ))}
                </div>
                <button onClick={nextProject} className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center" aria-label="Next project">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop dots */}
            <div className="hidden sm:flex items-center justify-center gap-2 mt-8">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCurrentProject(i)} className={`rounded-full transition-all duration-300 ${i === currentProject ? "w-6 h-2 bg-emerald-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Project ${i + 1}`} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
