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
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const IconSprout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12M12 12C12 7 7 4 3 5c0 4 3 7 9 7zM12 12c0-5 5-8 9-7-1 4-4 7-9 7z"/>
  </svg>
);
const IconDroplet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z"/>
  </svg>
);
const IconTree = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-7M8 15l4-6 4 6H8zM6 10l6-8 6 8H6z"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-emerald-700">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const team = [
  {
    name: "Chris Danvers",
    role: "Founder & Lead Gardener",
    initials: "CD",
    stats: [
      { icon: <IconYears />, label: "12+ years in the industry" },
      { icon: <IconGarden />, label: "Transformed 100+ gardens" },
      { icon: <IconPin />, label: "Sutton Coldfield local" },
      { icon: <IconScissors />, label: "Specialist in hedge trimming & jet washing" },
      { icon: <IconStar />, label: "5-star rated across all platforms" },
    ],
    bio: "Passionate about outdoor spaces, Chris built Little Aston Park Services from the ground up — one garden at a time. He takes personal pride in every job, whether it's a quick tidy or a full transformation.",
  },
  {
    name: "Tom Wallace",
    role: "Senior Grounds Operative",
    initials: "TW",
    stats: [
      { icon: <IconSprout />, label: "8+ years hands-on experience" },
      { icon: <IconDroplet />, label: "Jet washing & drainage expert" },
      { icon: <IconTree />, label: "Tree & plant care certified" },
      { icon: <IconCalendar />, label: "Seasonal clean-up specialist" },
    ],
    bio: "Tom brings meticulous attention to detail and a calm, professional approach to every project. Clients love his reliability and the quality he delivers, no matter the scale.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="w-full py-20 px-6" style={{ backgroundColor: "#f0f1eb" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Heading */}
        <FadeIn className="flex flex-col gap-3">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">The People Behind The Work</span>
          <h2 className="font-bold uppercase max-w-xl" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
            <span style={{ color: "#0d2e1a" }}>Meet </span>
            <span style={{ color: "#3a8c52" }}>the Team</span>
          </h2>
          <div className="text-gray-500 text-base leading-relaxed flex flex-col gap-4">
            <p>
              It doesn&apos;t matter if you&apos;re a regular customer of ours or it&apos;s your first time working with us; you can expect the same professional approach with every visit. We&apos;re always approachable and value the long-term relationships we&apos;ve established over the years.
              This is reflected in the services we provide.
            </p>
            <p>
              At the heart of what we do is reliability, attention to detail and respect for our clients&apos; homes and outdoor spaces. Every job is treated with the same level of professionalism - it&apos;s why we&apos;ve become a trusted and dependable choice for many people across the Midlands.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.12}>
              <div className="flex flex-col gap-6 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm h-full">
                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-800 flex items-center justify-center text-white text-xl font-bold shrink-0">{member.initials}</div>
                  <div>
                    <p className="text-emerald-950 font-bold text-lg leading-tight">{member.name}</p>
                    <p className="text-emerald-600 text-sm font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>

                {/* Bullet stats */}
                <ul className="flex flex-col gap-2.5">
                  {member.stats.map((s) => (
                    <li key={s.label} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">{s.icon}</span>
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
