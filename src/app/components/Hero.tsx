"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-image.png')" }}
      />

      {/* Colour tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #0a2e1a 0%, #1a5c33 50%, #0d3b22 100%)",
          opacity: 0.55,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Premium Garden Services
        </h1>
        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mb-4 leading-relaxed">
          Professional jet washing, garden maintenance, and landscaping services
          for your outdoor space
        </p>
        <p className="text-white/60 text-base mb-10">
          Covering Sutton Coldfield, Lichfield, Tamworth &amp; surrounding areas
        </p>
        <a
          href="#services"
          className="px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-base hover:bg-emerald-500 transition-colors duration-300 shadow-lg shadow-emerald-900/40"
        >
          Explore Our Services
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
