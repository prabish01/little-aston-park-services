"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-emerald-700">
        <rect x="8" y="28" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="19" y="20" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="30" y="12" width="10" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 40h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 22 Q20 10 36 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Our Mission",
    description:
      "To deliver exceptional garden and outdoor maintenance services, creating spaces that feel natural, functional, and visually stunning for every client.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-emerald-700">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 34v6M21 37h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 18c2 2 3 5 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Our Vision",
    description:
      "To be the most trusted outdoor services provider in the Midlands — recognised for quality, reliability and a genuine passion for all things green.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f8f9f3] py-20 px-6 overflow-hidden"
    >
      {/* Decorative leaf */}
      <svg
        className="absolute left-0 top-12 w-28 opacity-10 pointer-events-none"
        viewBox="0 0 120 200"
        fill="none"
      >
        <path d="M60,10 C90,40 110,120 60,190 C10,120 30,40 60,10Z" fill="#3a7d44" />
        <path d="M60,10 L60,190" stroke="#3a7d44" strokeWidth="2" strokeDasharray="6 4" />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: image placeholder ─────────────────── */}
        <FadeIn x={-32}>
          {/* Main image */}
          <div className="relative rounded-3xl overflow-hidden w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 bg-[#d4e8ce]">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" alt="Garden" className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* ── Right: content ──────────────────────────── */}
        <FadeIn x={32} delay={0.15} className="flex flex-col gap-6">
          {/* Eyebrow */}
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            About Our Company
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight">
            Building Beautiful Landscapes Since Day One.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            From our very first project, we&apos;ve been committed to creating outdoor
            spaces that feel natural, functional, and visually stunning. Our
            passion for landscaping drives everything we do.
          </p>

          {/* Features + video thumbnail row */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Mission & Vision */}
            <div className="flex flex-col gap-5 flex-1">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950 text-base mb-1">
                      {f.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video thumbnail placeholder */}
            <div className="relative shrink-0 w-36 h-36 rounded-2xl overflow-hidden bg-[#c5d9b8] self-end sm:self-center">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300&q=80" alt="Garden video" className="absolute inset-0 w-full h-full object-cover" />
              {/* Play button */}
              <button
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-12 h-12 rounded-full bg-[#c5e84a] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-emerald-900 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            {/* Discover More button */}
            <a
              href="#services"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c5e84a] text-emerald-900 font-semibold text-sm underline underline-offset-2 hover:bg-[#b5d83a] transition-colors duration-200"
            >
              Discover More
              <span className="w-7 h-7 rounded-full bg-emerald-900 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-[#c5e84a]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Call anytime */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-emerald-700 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call Anytime</p>
                <p className="text-base font-bold text-emerald-950">
                  +88 017 500 500 88
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
