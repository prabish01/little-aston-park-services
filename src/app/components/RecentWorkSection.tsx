"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Lawn Care & Mowing",
    category: "Garden Maintenance",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    title: "Patio Jet Washing",
    category: "Jet Washing",
    image: "/after-image.png",
  },
  {
    title: "Hedge Trimming",
    category: "Garden Maintenance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Garden Clearance",
    category: "Seasonal Clean-Up",
    image: "/before-image.png",
  },
  {
    title: "Planting & Design",
    category: "Design & Planning",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
];

export default function RecentWorkSection() {
  const [current, setCurrent] = useState(1);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const getIndex = (offset: number) =>
    (current + offset + projects.length) % projects.length;

  return (
    <section className="w-full bg-[#f0f1eb] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <FadeIn className="flex items-center justify-between mb-8 gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-px h-6 bg-emerald-400" />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>
            <div className="flex items-end gap-3 pl-4">
              <span className="text-6xl font-bold text-emerald-950 leading-none">100+</span>
              <span className="text-gray-400 text-sm pb-1.5 leading-tight">transformations<br />and counting</span>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-emerald-950 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Slider — full-width bleed */}
      <div className="flex items-stretch gap-4 px-6 max-w-7xl mx-auto">
        {/* Left card */}
        <div
          className="relative flex-1 rounded-3xl overflow-hidden cursor-pointer"
          style={{ minHeight: "360px" }}
          onClick={prev}
        >
          <img
            src={projects[getIndex(-1)].image}
            alt={projects[getIndex(-1)].title}
            className="w-full h-full object-cover"
            style={{ minHeight: "360px" }}
          />
          <div className="absolute inset-0 bg-emerald-950/20" />
        </div>

        {/* Center featured card */}
        <div
          className="relative rounded-3xl overflow-hidden flex-[1.6] shrink-0"
          style={{ minHeight: "420px" }}
        >
          <img
            src={projects[current].image}
            alt={projects[current].title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{ minHeight: "420px" }}
          />

          {/* Info card overlay */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-2xl px-5 py-4 flex items-center justify-between gap-4 shadow-xl">
            <div>
              <h3 className="font-bold text-emerald-950 text-base">{projects[current].title}</h3>
              <p className="text-emerald-600 text-sm font-medium">{projects[current].category}</p>
            </div>
            <button
              onClick={next}
              className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right card */}
        <div
          className="relative flex-1 rounded-3xl overflow-hidden cursor-pointer"
          style={{ minHeight: "360px" }}
          onClick={next}
        >
          <img
            src={projects[getIndex(1)].image}
            alt={projects[getIndex(1)].title}
            className="w-full h-full object-cover"
            style={{ minHeight: "360px" }}
          />
          <div className="absolute inset-0 bg-emerald-950/20" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2 bg-emerald-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
