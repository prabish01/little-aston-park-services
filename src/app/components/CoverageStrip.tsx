import Link from "next/link";
import FadeIn from "./FadeIn";

// Ordered for 4-col grid: Streetly under Erdington, Brownhills under Great Barr
const areas = [
  "Sutton Coldfield", "Lichfield",   "Tamworth",   "Four Oaks",
  "Aldridge",         "Walmley",     "Erdington",  "Great Barr",
  "Burntwood",        "Cannock",     "Streetly",   "Brownhills",
];

export default function CoverageStrip() {
  return (
    <section
      className="relative w-full py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d3520 0%, #1a5c33 60%, #0a2e1a 100%)",
      }}
    >
      {/* Decorative tree — right side */}
      <svg className="absolute right-0 top-0 h-full w-auto opacity-[0.06] pointer-events-none" viewBox="0 0 160 400" fill="none">
        {/* Pine tree silhouette */}
        <polygon points="80,20 30,120 60,120 15,210 50,210 5,320 155,320 110,210 145,210 100,120 130,120" fill="#4a9e6b"/>
        <rect x="68" y="320" width="24" height="60" fill="#3a8c52"/>
      </svg>
      {/* Decorative leaves — left */}
      <svg className="absolute left-0 bottom-0 w-32 h-32 opacity-[0.06] pointer-events-none" viewBox="0 0 130 130" fill="none">
        <path d="M10 120 Q20 60 70 20 Q110 5 120 10 Q125 15 110 55 Q80 100 30 120Z" fill="#4a9e6b"/>
        <line x1="10" y1="120" x2="110" y2="20" stroke="#2d7a47" strokeWidth="2"/>
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top: full-width text */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Areas We Cover</span>
            <h2 className="font-bold text-white uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              Local to You,
              <br />
              <span className="text-emerald-400">Across the Midlands</span>
            </h2>
            <div className="text-white/60 text-sm leading-relaxed max-w-2xl flex flex-col gap-3">
              <p>We provide our expert gardening and maintenance services right across the Midlands, including Tamworth, Lichfield, Sutton Coldfield and surrounding areas. Proud of where we&apos;re from, our local knowledge allows us to work quickly, efficiently and deliver a service that is tailored to the needs of the region&apos;s properties.</p>
              <p>If you&apos;re unsure whether your property falls within our local service area, get in touch, as we always aim to be as flexible as we can to accommodate your needs and location.</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 self-start shrink-0 px-6 py-2.5 rounded-full border border-emerald-500/60 text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200">
            Check Your Area
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeIn>

        {/* Bottom: pills full width */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {areas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.05}>
                <span
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-default w-full whitespace-nowrap"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.80)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-400" />
                  {area}
                </span>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.7}>
            <span className="text-sm font-medium text-emerald-400/80 cursor-default">& Surrounding Areas</span>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
