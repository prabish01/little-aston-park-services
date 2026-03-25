"use client";

import FadeIn from "./FadeIn";

const reviews = [
  {
    stars: 5,
    quote: "Outstanding Gardening Service – Highly Recommended! I can't recommend Little Aston Park Services highly enough. From the very first visit, Nikos was professional, punctual, and passionate about his work.",
    name: "Alexander Smith",
    role: "Google Review · 1 month ago",
    initials: "AS",
    color: "bg-emerald-700",
  },
  {
    stars: 5,
    quote: "I am so pleased with the work Nikos did maintaining my garden throughout the last year. He has handled everything from keeping the lawns and hedges perfectly neat, to pruning my overgrown fir tree which was blocking our light.",
    name: "O. Stavrou-Migchels",
    role: "Google Review · 1 month ago",
    initials: "OS",
    color: "bg-teal-600",
  },
  {
    stars: 5,
    quote: "Nikos first helped me tackle my completely neglected garden when I moved in and got it back to a manageable state… which I quickly realised I still couldn't keep on top of 😂 So now he comes regularly!",
    name: "Joseph Minas",
    role: "Google Review · 3 weeks ago",
    initials: "JM",
    color: "bg-green-700",
  },
  {
    stars: 5,
    quote: "Nikos transformed my uninteresting garden into something more pleasing to the eye! He suggested putting my plants in the ground, created a small rockery, and now my plants are happily growing. Absolutely brilliant.",
    name: "Tina M.",
    role: "Google Review · 10 months ago",
    initials: "TM",
    color: "bg-lime-700",
  },
  {
    stars: 5,
    quote: "I would highly recommend Nikos for any gardening project. Before he came, our gardens, front and back, were overgrown jungles. No longer! He worked tirelessly, arriving early and working long hours to get the job done.",
    name: "Gill Hillitt",
    role: "Google Review · 1 year ago",
    initials: "GH",
    color: "bg-emerald-800",
  },
  {
    stars: 5,
    quote: "Niko was an excellent worker, would definitely recommend. 10/10.",
    name: "Anne Dimascio",
    role: "Google Review · 10 months ago",
    initials: "AD",
    color: "bg-cyan-700",
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

export default function TestimonialsSection() {

  return (
    <section
      id="testimonials-cards"
      className="relative w-full bg-[#f0f1eb] py-20 px-6 overflow-hidden"
    >
      {/* Decorative leaf — bottom right */}
      <svg className="absolute -bottom-4 -right-4 w-48 h-48 opacity-[0.07] pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M100 10 Q160 40 150 110 Q120 170 70 150 Q20 120 40 60 Q60 10 100 10Z" fill="#2d7a47"/>
        <line x1="100" y1="10" x2="90" y2="160" stroke="#1a5c33" strokeWidth="2"/>
        <line x1="92" y1="60" x2="60" y2="80" stroke="#1a5c33" strokeWidth="1.5"/>
        <line x1="92" y1="90" x2="125" y2="105" stroke="#1a5c33" strokeWidth="1.5"/>
        <line x1="91" y1="120" x2="65" y2="135" stroke="#1a5c33" strokeWidth="1.5"/>
      </svg>
      {/* Decorative sprig — top left */}
      <svg className="absolute -top-4 -left-4 w-40 h-40 opacity-[0.07] pointer-events-none" viewBox="0 0 160 160" fill="none">
        <path d="M30 130 Q40 80 80 50 Q120 30 140 20" stroke="#2d7a47" strokeWidth="3" strokeLinecap="round"/>
        <path d="M80 50 Q60 30 50 10" stroke="#2d7a47" strokeWidth="2" strokeLinecap="round"/>
        <path d="M80 50 Q95 25 110 15" stroke="#2d7a47" strokeWidth="2" strokeLinecap="round"/>
        <path d="M105 38 Q85 20 90 5" stroke="#3a8c52" strokeWidth="2" strokeLinecap="round"/>
        <path d="M105 38 Q120 18 130 12" stroke="#3a8c52" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <FadeIn className="flex flex-col gap-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight">
            Hear from Our Happy Customers.
          </h2>
        </FadeIn>

        {/* ── Review cards ──────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      </div>
    </section>
  );
}
