"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a4731 0%, #2d7a4f 40%, #1b5e35 70%, #0f3320 100%)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left column — contact info */}
        <FadeIn className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Your Garden Deserves Better
            </h2>
            <div className="text-white/70 text-base leading-relaxed flex flex-col gap-4">
              <p>Whether you&apos;re planning improvements to transform your garden into a relaxing new green space, or you simply need a friendly, reliable and good value team to keep on top of your garden maintenance, then our team at Little Aston Park Services is here to help.</p>
              <p>We&apos;ve helped hundreds of customers across the Midlands and have developed many long-standing relationships, keeping gardens looking spotless right across the year.</p>
              <p>Get in touch with a member of our team today and we&apos;ll take the time to understand your needs and provide you with the solutions to provide the best results for your space. We&apos;ll provide you with a free, no-obligation quote and get your journey to a garden you love started.</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">+44 7500 732083</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">nik.gardenservices@gmail.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium">Sutton Coldfield, West Midlands</span>
            </div>
          </div>
        </FadeIn>

        {/* Right column — contact form */}
        <FadeIn delay={0.15}>
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400 w-full text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400 w-full text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400 w-full text-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-emerald-400 w-full text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold text-sm py-3.5 rounded-full mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
