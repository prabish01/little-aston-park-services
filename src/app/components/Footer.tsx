"use client";

import { useState } from "react";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Before & After", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Jet Washing", href: "#services" },
  { label: "Garden Maintenance", href: "#services" },
  { label: "Lawn Care", href: "#services" },
  { label: "Hedge Trimming", href: "#services" },
  { label: "Seasonal Clean-Up", href: "#services" },
  { label: "Landscaping", href: "#services" },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <footer>
      {/* Newsletter Banner */}
      <div className="relative w-full bg-[#d4e8b0] overflow-hidden">
        {/* Wavy pattern overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              #4a7c3f 20px,
              #4a7c3f 21px
            )`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-3xl sm:text-4xl font-bold text-emerald-950 leading-tight">
              Stay Updated With<br />Expert Advice
            </h3>
          </div>
          {/* Middle text */}
          <p className="flex-1 text-emerald-900/70 text-base leading-relaxed max-w-sm">
            Join our mailing list to receive professional landscaping tips and exclusive offers from our team.
          </p>
          {/* Email form */}
          {submitted ? (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-emerald-800 font-semibold text-base">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-3 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white text-emerald-950 placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
              <button
                type="submit"
                className="shrink-0 w-12 h-12 rounded-full bg-emerald-950 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative w-full bg-emerald-950 overflow-hidden">
        {/* Decorative leaf watermark */}
        <div className="absolute bottom-0 right-0 w-72 h-72 opacity-5 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-emerald-300 w-full h-full">
            <path d="M100 10 C60 40, 20 80, 30 130 C40 160, 70 180, 100 190 C100 190, 100 100, 100 10Z" />
            <path d="M100 10 C140 40, 180 80, 170 130 C160 160, 130 180, 100 190 C100 190, 100 100, 100 10Z" opacity="0.6"/>
            <path d="M70 50 C85 80, 90 120, 100 190 M130 50 C115 80, 110 120, 100 190" stroke="currentColor" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Brand column */}
            <div className="flex flex-col gap-5">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8zm0 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">Little Aston<br/><span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Park Services</span></span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                Professional garden care and jet washing services across Sutton Coldfield, Lichfield, Tamworth and surrounding areas.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 self-start px-5 py-2.5 rounded-full border border-emerald-500/50 text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
              >
                Get a Free Quote
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-emerald-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Services</h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-emerald-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Phone */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-white font-semibold text-base mb-3">Address</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Sutton Coldfield<br />
                  West Midlands, UK
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-base mb-3">Phone</h4>
                <a href="tel:+441234567890" className="text-white/50 text-sm hover:text-emerald-400 transition-colors block mb-1">
                  +44 1234 567 890
                </a>
                <a href="mailto:info@littleastonparkservices.co.uk" className="text-white/50 text-sm hover:text-emerald-400 transition-colors block">
                  info@littleastonpark.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Hours */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-3">
                <span className="font-medium text-white/60">Mon – Fri:</span>
                <span>8.00 am – 6.00 pm</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-white/60">Saturday:</span>
                <span>9.00 am – 4.00 pm</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>© Copyright 2026 by Little Aston Park Services. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
