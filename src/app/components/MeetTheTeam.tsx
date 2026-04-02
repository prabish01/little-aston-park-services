import FadeIn from "./FadeIn";

const IconYears = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <circle cx="12" cy="12" r="9"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/>
  </svg>
);
const IconGarden = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V10.5M15 21V10.5M12 3C9 6 6 9 9 10.5h6C18 9 15 6 12 3z"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.75-7-11a7 7 0 1114 0c0 4.25-7 11-7 11z"/><circle cx="12" cy="10" r="2"/>
  </svg>
);
const IconScissors = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path strokeLinecap="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>
  </svg>
);
const IconDroplet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const nikos = {
  name: "Nikos",
  role: "Founder & Lead Gardener",
  initials: "N",
  bio: "A highly dedicated industry professional with a wealth of garden maintenance knowledge. I take pride in delivering consistent, high-quality results, and since launching in 2022, I've put real value on a strong work ethic and a commitment to the highest standards. Away from my job, which I absolutely love, I enjoy spending time with family and friends, whether it be on days out, picnics or events.",
  stats: [
    { icon: <IconYears />, label: "5+ years in the industry" },
    { icon: <IconGarden />, label: "Transformed 100+ gardens" },
    { icon: <IconPin />, label: "Sutton Coldfield local" },
    { icon: <IconScissors />, label: "Specialist in hedge trimming & jet washing" },
    { icon: <IconDroplet />, label: "Jet washing & drainage expert" },
    { icon: <IconCalendar />, label: "Seasonal clean-up specialist" },
  ],
};

export default function MeetTheTeam() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#f0f1eb" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Heading */}
        <FadeIn className="flex flex-col gap-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">The People Behind The Work</span>
          <h2 className="font-bold uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
            <span style={{ color: "#0d2e1a" }}>Meet </span>
            <span style={{ color: "#3a8c52" }}>Nikos</span>
          </h2>
        </FadeIn>

        {/* Spotlight banner */}
        <FadeIn>
          <div className="relative rounded-3xl bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">

            {/* ── Left panel ── */}
            <div className="relative flex flex-col items-center justify-center gap-5 px-10 py-14 md:w-72 shrink-0" style={{ background: "linear-gradient(160deg, #0d2e1a 0%, #1a4d2e 100%)" }}>
              {/* Faint halo */}
              <div className="absolute w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(58,140,82,0.18) 0%, transparent 70%)" }} />
              {/* Decorative arc top-left */}
              <svg className="absolute top-0 left-0 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
                <circle cx="0" cy="0" r="100" stroke="#c5e84a" strokeWidth="2" />
              </svg>

              {/* Avatar */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-44 h-44 rounded-full flex items-center justify-center" style={{ border: "3px solid #c5e84a", padding: "5px" }}>
                    <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: "#0d2e1a", border: "2px solid rgba(197,232,74,0.25)" }}>
                      <span className="font-bold" style={{ fontSize: "4rem", color: "#c5e84a", lineHeight: 1 }}>{nikos.initials}</span>
                    </div>
                  </div>
                </div>

                {/* Name + role */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="font-bold text-2xl text-white leading-tight">{nikos.name}</p>
                  <span className="px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "#3a8c52" }}>{nikos.role}</span>
                </div>
              </div>

              {/* Decorative dots bottom-right */}
              <svg className="absolute bottom-4 right-4 w-16 h-16 opacity-15 pointer-events-none" viewBox="0 0 64 64" fill="none">
                {[0,1,2,3].map(row => [0,1,2,3].map(col => (
                  <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2.5" fill="#c5e84a" />
                )))}
              </svg>
            </div>

            {/* ── Right panel ── */}
            <div className="flex flex-col justify-center gap-8 px-8 py-12 md:px-12 flex-1">
              {/* Bio */}
              <div className="flex gap-5">
                <div className="w-1 rounded-full shrink-0 self-stretch" style={{ background: "#c5e84a" }} />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">About the Founder</span>
                  <div className="text-gray-500 text-sm leading-relaxed flex flex-col gap-3">
                    <p>
                      It doesn&apos;t matter if you&apos;re a regular customer of ours or it&apos;s your first time working with us; you can expect the same professional approach with every visit. We&apos;re always approachable and value the long-term relationships we&apos;ve established over the years.
                    </p>
                    <p>{nikos.bio}</p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {nikos.stats.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">{s.icon}</span>
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
