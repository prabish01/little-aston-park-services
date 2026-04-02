"use client";

import FadeIn from "./FadeIn";
import NextImage from "next/image";

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
      "Our mission is to deliver high-quality garden and outdoor maintenance services that consistently exceed customer expectations. We are committed to creating outdoor spaces that are not only visually appealing but also practical, well-maintained, and suited to each client's individual needs. Through reliable service, attention to detail, and clear communication, we aim to make garden care simple and stress-free for every customer we work with.",
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
      "Our vision is to become one of the most trusted and recognised garden maintenance providers across the Midlands. We strive to be known for our professionalism, consistency, and dedication to delivering outstanding results on every project. By continually improving our services and maintaining strong relationships with our clients, we aim to set the standard for quality and reliability within the industry, while staying true to our passion for outdoor spaces.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#f8f9f3] py-20 px-6 overflow-hidden">
      {/* Decorative leaf */}
      <svg className="absolute left-0 top-12 w-28 opacity-10 pointer-events-none" viewBox="0 0 120 200" fill="none">
        <path d="M60,10 C90,40 110,120 60,190 C10,120 30,40 60,10Z" fill="#3a7d44" />
        <path d="M60,10 L60,190" stroke="#3a7d44" strokeWidth="2" strokeDasharray="6 4" />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* ── Left: content ──────────────────────────── */}
        <FadeIn x={-32} className="flex flex-col gap-6">
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <NextImage src="/laps.svg" alt="Little Aston Park Services" width={52} height={52} className="h-12 w-auto" />
            <span className="text-xs font-bold uppercase tracking-widest leading-tight text-emerald-600">
              Little Aston
              <br />
              Park Services
            </span>
          </div>

          {/* Eyebrow */}
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">About Our Company</span>

          {/* Heading */}
          <h2 className="font-bold uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
            <span style={{ color: "#0d2e1a" }}>Building Beautiful </span>
            <span style={{ color: "#3a8c52" }}>Landscapes Since Day One.</span>
          </h2>

          {/* Description */}
          <div className="text-gray-500 text-base leading-relaxed flex flex-col gap-4">
            <p>
              With over a decade in the business, we&apos;ve been committed to delivering highly functional, visually striking outdoor spaces from day 1, with our approach combining practical garden maintenance with a keen eye for detail to ensure total balance of your green space, keeping it both
              natural and enjoyable to use and spend time in.
            </p>
            <p>We&apos;ve developed a strong reputation across the Midlands, priding ourselves on reliability, quality workmanship and allowing our genuine passion for what we do shine through. We&apos;re always approachable, value your input and respect your home.</p>
            <p>Every project we take on, whether large or small, is approached with the same level of care and professionalism and we enjoy the pay-off of a well-maintained or completely transformed green space as much as you do - the people that will get to enjoy it year-round.</p>
          </div>

          {/* Bottom CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            {/* Discover More button */}
            <a href="/services" className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c5e84a] text-emerald-900 font-semibold text-sm underline underline-offset-2 hover:bg-[#b5d83a] transition-colors duration-200">
              Discover More
              <span className="w-7 h-7 rounded-full bg-emerald-900 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#c5e84a]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Call anytime */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-emerald-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call Anytime</p>
                <p className="text-base font-bold text-emerald-950">+44 7500 732083</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Right: image ─────────────────── */}
        <FadeIn x={32} delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden w-full aspect-[4/5] max-w-sm ml-auto bg-[#d4e8ce]">
            <NextImage src="/about-hero.png" alt="Garden" fill className="object-cover" />
          </div>
        </FadeIn>
      </div>

      {/* Mission & Vision - Full width below */}
      <FadeIn delay={0.2} className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-3 p-5 rounded-2xl bg-white border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">{f.icon}</div>
              <h3 className="font-semibold text-emerald-950 text-base">{f.title}</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
