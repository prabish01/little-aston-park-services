"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Design & Planning",
    description: "Expert garden design and planning tailored to your outdoor space, style, and budget.",
    image: "/hero-bg-image.png",
  },
  {
    title: "Tree & Plant Care",
    description: "Professional pruning, planting, and maintenance to keep your trees and plants thriving.",
    image: "/after-image.png",
  },
  {
    title: "Drainage Systems",
    description: "Effective drainage solutions to protect your garden from waterlogging and flood damage.",
    image: "/before-image.png",
  },
  {
    title: "Seasonal Clean-up",
    description: "Thorough seasonal tidy-ups ensuring your garden looks pristine through every season.",
    image: "/hero-bg-image.png",
  },
];

const blobs = [
  {
    outer: "42% 58% 55% 45% / 48% 38% 62% 52%",
    inner: "55% 45% 60% 40% / 45% 55% 45% 55%",
  },
  {
    outer: "58% 42% 48% 52% / 40% 60% 40% 60%",
    inner: "45% 55% 42% 58% / 52% 48% 58% 42%",
  },
  {
    outer: "48% 52% 62% 38% / 55% 45% 55% 45%",
    inner: "60% 40% 50% 50% / 42% 58% 48% 52%",
  },
  {
    outer: "52% 48% 45% 55% / 45% 55% 62% 38%",
    inner: "40% 60% 55% 45% / 58% 42% 42% 58%",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative w-full bg-[#f3f4ec] py-24 px-6 overflow-hidden">
      {/* Decorative leaf */}
      <svg className="absolute bottom-0 right-0 w-48 opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M180,180 C140,160 60,140 20,20 C80,60 160,80 180,180Z" fill="#7cb518" />
        <path d="M100,180 L100,20" stroke="#7cb518" strokeWidth="2" strokeDasharray="6 4" />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight mb-4">Our Services</h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Comprehensive garden and outdoor maintenance services tailored to your needs
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const active = hovered === i;
            return (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="rounded-3xl overflow-hidden flex flex-col cursor-default transition-colors duration-300"
                  style={{ background: active ? "#c5e84a" : "#ffffff" }}
                >
                  {/* Blob top area */}
                  <div className="relative h-52 shrink-0">
                    {/* Outer outline blob */}
                    <div
                      className="absolute transition-colors duration-300"
                      style={{
                        width: "78%",
                        height: "88%",
                        top: "-12%",
                        right: "-12%",
                        borderRadius: blobs[i].outer,
                        border: `2px solid ${active ? "#9bc22a" : "#c2dfc0"}`,
                        background: "transparent",
                      }}
                    />
                    {/* Inner filled blob — clipped image */}
                    <div
                      className="absolute overflow-hidden"
                      style={{
                        width: "65%",
                        height: "74%",
                        top: "-6%",
                        right: "-4%",
                        borderRadius: blobs[i].inner,
                      }}
                    >
                      {service.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "#d4e8ce" }} />
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 px-6 pb-6">
                    <h3
                      className="text-lg font-bold underline underline-offset-4 decoration-2 transition-colors duration-300"
                      style={{ color: active ? "#14532d" : "#111827" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: active ? "#166534cc" : "#6b7280" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <FadeIn delay={0.4} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Hurry —</span>
          <span className="text-gray-600 text-sm">
            Choose from our selection of the best services.{" "}
            <a href="#contact" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-600 transition-colors">
              Get a project in mind?
            </a>
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
