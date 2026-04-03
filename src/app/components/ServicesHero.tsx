"use client";

import Link from "next/link";
import NextImage from "next/image";
import FadeIn from "./FadeIn";

const bullets = ["Same-week service available - we work around your schedule", "Free, no-obligation quotes - clear and transparent pricing", "100% satisfaction guarantee - we're not finished until you're satisfied"];

export default function ServicesHero() {
  return (
    <section className="w-full bg-[#f3f4ec] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* ── Left ─────────────────────────────────────── */}
        <FadeIn x={-24} className="flex flex-col gap-6">
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <NextImage src="/laps.svg" alt="Little Aston Park Services" width={52} height={52} className="h-12 w-auto" />
            <span className="text-xs font-bold uppercase tracking-widest leading-tight text-emerald-600">
              Little Aston
              <br />
              Park Services
            </span>
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
            <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Your trusted Gardener
          </span>

          {/* Heading */}
          <div>
            <h1 className="font-bold text-emerald-950 uppercase" style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
              LAPS bespoke
            </h1>
            <span className="font-bold text-emerald-600 uppercase" style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", lineHeight: 1.05 }}>
              and reliable services
            </span>
          </div>

          {/* Description */}
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed flex flex-col gap-4">
            <p>
              We provide a comprehensive range of professional garden maintenance and outdoor services across <strong className="text-emerald-950">Sutton Coldfield, Lichfield, and Tamworth</strong>. Whether you&apos;re looking for regular upkeep or a one-off project, our team is equipped to deliver
              reliable, high-quality results tailored to your needs.
            </p>
            <p>
              From routine lawn care to full garden clearances and landscaping improvements, we approach every job with attention to detail and a commitment to excellence. Our goal is to take the hassle out of maintaining your outdoor space, leaving you with a garden that is tidy, functional, and
              enjoyable all year round.
            </p>
          </div>

          {/* Bullets */}
          <ul className="flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="tel:+447500732083" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +44 7500 732083
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-emerald-600 text-emerald-700 font-semibold text-sm hover:bg-emerald-600 hover:text-white transition-colors">
              Get Free Quote
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex items-center gap-2 text-gray-400 text-xs pt-1">
            <svg className="w-5 h-5 text-emerald-700 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Fully insured&nbsp;•&nbsp;Family-run business&nbsp;•&nbsp;Established 2022</span>
          </div>
        </FadeIn>

        {/* ── Right: staggered 2x2 image grid ───────────────── */}
        <FadeIn x={24} delay={0.15} className="relative">
          <div className="flex gap-3">
            {/* Left column — aligned to top */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="rounded-3xl overflow-hidden relative aspect-4/5">
                <NextImage src="/services-hero-card1.png" alt="Garden service" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden relative aspect-4/5">
                <NextImage src="/services-hero-card2.png" alt="Garden service" fill className="object-cover" />
              </div>
            </div>
            {/* Right column — offset down */}
            <div className="flex flex-col gap-3 flex-1 mt-8">
              <div className="rounded-3xl overflow-hidden relative aspect-4/5">
                <NextImage src="/about-hero.png" alt="Garden service" fill className="object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden relative aspect-4/5">
                <NextImage src="/before-after/after6.png" alt="Garden service" fill className="object-cover" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
