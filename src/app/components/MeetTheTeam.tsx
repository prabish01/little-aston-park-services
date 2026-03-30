import FadeIn from "./FadeIn";

const team = [
  {
    name: "Chris Danvers",
    role: "Founder & Lead Gardener",
    initials: "CD",
    stats: [
      { icon: "🌿", label: "12+ years in the industry" },
      { icon: "🏡", label: "Transformed 100+ gardens" },
      { icon: "📍", label: "Sutton Coldfield local" },
      { icon: "✂️", label: "Specialist in hedge trimming & jet washing" },
      { icon: "⭐", label: "5-star rated across all platforms" },
    ],
    bio: "Passionate about outdoor spaces, Chris built Little Aston Park Services from the ground up — one garden at a time. He takes personal pride in every job, whether it's a quick tidy or a full transformation.",
  },
  {
    name: "Tom Wallace",
    role: "Senior Grounds Operative",
    initials: "TW",
    stats: [
      { icon: "🌱", label: "8+ years hands-on experience" },
      { icon: "🚿", label: "Jet washing & drainage expert" },
      { icon: "🌳", label: "Tree & plant care certified" },
      { icon: "📅", label: "Seasonal clean-up specialist" },
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
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight max-w-xl">
            Meet the Team
          </h2>
          <div className="text-gray-500 text-base leading-relaxed flex flex-col gap-4">
            <p>We have a small, highly dedicated team of garden maintenance professionals who have a great local knowledge and take pride in delivering consistent, high-quality results. Since launching in the 2020s, we&apos;ve put real value on a strong work ethic and a commitment to the highest standards.</p>
            <p>That&apos;s reflected in the services we provide, with reliability, attention to detail and respect for our clients&apos; homes and outdoor spaces at the heart of what we do. Every job is treated with the same level of professionalism - it&apos;s why we&apos;ve become a trusted and dependable choice for many people across the Midlands.</p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.12}>
              <div className="flex flex-col gap-6 rounded-3xl bg-white border border-gray-100 p-8 shadow-sm h-full">

                {/* Avatar + name */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-800 flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {member.initials}
                  </div>
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
                      <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-base shrink-0">
                        {s.icon}
                      </span>
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
