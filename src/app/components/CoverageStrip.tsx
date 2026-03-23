import Link from "next/link";
import FadeIn from "./FadeIn";

const areas = [
  "Sutton Coldfield",
  "Lichfield",
  "Tamworth",
  "Four Oaks",
  "Streetly",
  "Aldridge",
  "Walmley",
  "Erdington",
  "Great Barr",
  "Brownhills",
  "Burntwood",
  "Cannock",
];

export default function CoverageStrip() {
  return (
    <section
      className="w-full py-14 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d3520 0%, #1a5c33 60%, #0a2e1a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

          {/* Left text */}
          <div className="flex flex-col gap-3 lg:min-w-72">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Areas We Cover</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Local to You,<br />
              <span className="text-emerald-400">Across the Midlands</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Not sure if we cover your postcode? Give us a call — we&apos;re happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start mt-2 px-6 py-2.5 rounded-full border border-emerald-500/60 text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
            >
              Check Your Area
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Area pills */}
          <div className="flex flex-wrap gap-3 flex-1">
            {areas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.05}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm font-medium hover:bg-emerald-600/40 hover:border-emerald-500/50 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {area}
                </span>
              </FadeIn>
            ))}
            <FadeIn delay={areas.length * 0.05}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-medium">
                & surrounding areas
              </span>
            </FadeIn>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
