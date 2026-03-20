"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const reviews = [
  {
    stars: 4.5,
    quote:
      "Our backyard was transformed into a peaceful retreat. The team listened to our ideas, added their expertise, and delivered beyond our expectations.",
    name: "Bessie Cooper",
    role: "Business Developer",
    initials: "BC",
    color: "bg-amber-700",
  },
  {
    stars: 4.5,
    quote:
      "Our backyard was transformed into a peaceful retreat. The team listened to our ideas, added their expertise, and delivered beyond our expectations.",
    name: "Dianne Russell",
    role: "Planner, Francisco",
    initials: "DR",
    color: "bg-orange-500",
  },
  {
    stars: 4,
    quote:
      "Our backyard was transformed into a peaceful retreat. The team listened to our ideas, added their expertise, and delivered beyond our expectations.",
    name: "Eleanor Pena",
    role: "Web Developer",
    initials: "EP",
    color: "bg-sky-600",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i <= Math.floor(rating) ? "text-yellow-400" : i - 0.5 <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const SLIDES_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(reviews.length / SLIDES_PER_PAGE);

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);

  return (
    <section
      id="testimonials-cards"
      className="w-full bg-[#f8f9f3] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* ── Top two-column ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <FadeIn className="flex flex-col gap-6">
            {/* Eyebrow */}
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Testimonials
            </span>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight">
              Hear from Our Happy Customers.
            </h2>

            {/* Stats card */}
            <div className="flex items-center gap-0 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm divide-x divide-gray-200">
              {/* Avatars */}
              <div className="flex flex-col gap-2 px-6 py-5">
                <p className="text-xs font-semibold text-gray-500">10m+ Trusted Clients</p>
                <div className="flex items-center">
                  {["bg-amber-700", "bg-sky-600", "bg-emerald-600"].map((c, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold ${i > 0 ? "-ml-2" : ""}`}
                    >
                      {["BC", "DR", "EP"][i]}
                    </div>
                  ))}
                  <div className="-ml-2 w-9 h-9 rounded-full bg-emerald-800 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex flex-col gap-1.5 px-6 py-5">
                <p className="text-4xl font-bold text-gray-900">4.8</p>
                <div className="flex items-center gap-2">
                  <Stars rating={4} />
                  <span className="text-xs text-gray-400">5k reviews</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — image */}
          <FadeIn x={32} delay={0.15} className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#d4e4c8]">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Happy clients" className="w-full h-full object-cover" />
          </FadeIn>
        </div>

        {/* ── Review cards ──────────────────────────────── */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="flex flex-col gap-4 rounded-2xl bg-[#f0f2e8] border border-gray-200/60 p-6"
              >
                <Stars rating={r.stars} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200/80">
                  <div
                    className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Dot nav */}
        <FadeIn delay={0.3} className="flex items-center justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES + 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i % TOTAL_PAGES)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? "w-6 h-2.5 bg-emerald-600"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
