"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const contactItems = [
  {
    label: "Call us",
    value: "+44 7500 732083",
    href: "tel:+447500732083",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email us",
    value: "nik.gardenservices@gmail.com",
    href: "mailto:nik.gardenservices@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Based in",
    value: "Sutton Coldfield, West Midlands",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#f8f9f3]">
      {/* ── Top banner strip ── */}
      <div className="relative w-full py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f3320 0%, #1a4731 40%, #2d7a4f 100%)" }}>
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <FadeIn className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Get In Touch</span>
            <h1 className="font-bold uppercase" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, color: "#ffffff" }}>
              Straightforward Gardening
              <br />
              <span style={{ color: "#6ee7b7" }}>And Exterior Cleaning</span>
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-xl">
              Whether you&apos;re planning improvements to transform your garden into a relaxing new green space, or you simply need a friendly, reliable and good value team to keep on top of your garden maintenance, then our team at Little Aston Park Services is here to help.
            </p>
          </FadeIn>

          {/* Hero image — stacked cards */}
          <FadeIn delay={0.15} className="shrink-0 hidden lg:block">
            <div className="relative" style={{ width: "380px", height: "300px" }}>
              {/* Card 3 — furthest back */}
              <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(110,231,183,0.12)", border: "1px solid rgba(110,231,183,0.2)", transform: "rotate(6deg) translate(12px, 8px)" }} />
              {/* Card 2 — middle */}
              <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", transform: "rotate(3deg) translate(6px, 4px)" }} />
              {/* Card 1 — front: actual image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/50" style={{ transform: "rotate(-1deg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/before-after/after5.jpeg
                "
                  alt="Patio restoration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Main content: form + info cards ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Left — info cards */}
        <FadeIn className="flex flex-col gap-4 lg:sticky lg:top-28">
          {/* Description cards */}
          <div className="rounded-3xl bg-white border border-gray-100 p-7 flex flex-col gap-4 shadow-sm">
            <h3 className="font-bold text-emerald-950 text-lg">How we can help</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We&apos;ve helped{" "}
              <a href="/about#testimonials-cards" className="font-bold text-emerald-700 hover:text-emerald-900 transition-colors underline underline-offset-2">
                hundreds of customers across the Midlands
              </a>{" "}
              and have developed many long-standing relationships, keeping gardens looking spotless right across the year.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">Get in touch today and we&apos;ll take the time to understand your needs and provide you with a free, no-obligation quote.</p>
          </div>

          {/* Contact detail cards */}
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">{item.icon}</span>
                <div>
                  <p className="text-gray-400 text-xs font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-emerald-950 font-semibold text-sm hover:text-emerald-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-emerald-950 font-semibold text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Response time badge */}
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <p className="text-emerald-800 text-sm font-medium">
              We typically respond within <strong>24 hours</strong>
            </p>
          </div>
        </FadeIn>

        {/* Right — form (spans 2 cols) */}
        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Form header */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-emerald-950 text-xl">Send us a message</h2>
                <p className="text-gray-400 text-sm mt-0.5">Fill in the form and we&apos;ll be in touch shortly.</p>
              </div>
              <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">Free quote</span>
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-emerald-950 text-xl">Message sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm">Thanks for getting in touch. A member of our team will get back to you within 24 hours.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Full Name <span className="text-emerald-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-emerald-950 placeholder-gray-400 outline-none focus:border-emerald-400 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. 07700 900000"
                        value={form.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-emerald-950 placeholder-gray-400 outline-none focus:border-emerald-400 focus:bg-white transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Email Address <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-emerald-950 placeholder-gray-400 outline-none focus:border-emerald-400 focus:bg-white transition-colors text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Your Message <span className="text-emerald-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your garden and what you need help with..."
                      value={form.message}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-emerald-950 placeholder-gray-400 outline-none focus:border-emerald-400 focus:bg-white transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                    <p className="text-gray-400 text-xs">
                      Fields marked <span className="text-emerald-500 font-semibold">*</span> are required. We&apos;ll never share your details.
                    </p>
                    <button type="submit" className="shrink-0 flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold text-sm">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
