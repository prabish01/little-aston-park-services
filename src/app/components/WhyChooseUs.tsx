import FadeIn from "./FadeIn";

const usps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Fully Insured",
    body: "We maintain comprehensive public liability insurance, ensuring complete peace of mind throughout every stage of your project.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Same-Week Bookings",
    body: "We offer flexible scheduling and can often accommodate bookings within the same week, helping you avoid unnecessary delays.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Free No-Obligation Quotes",
    body: "We provide on-site assessments and transparent, detailed quotations at no cost, allowing you to make informed decisions with confidence.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Family-Run Business",
    body: "As a locally based, family-operated business in the West Midlands, we are committed to delivering a personal and dependable service to our community.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "5★ Rated Service",
    body: "Our reputation is built on consistently high customer satisfaction, with clients recognising our reliability, quality workmanship, and attention to detail.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "100% Satisfaction Guarantee",
    body: "We stand behind our work. If you are not completely satisfied, we will return promptly to resolve any issues at no additional cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#f7f8f2] py-20 px-6 overflow-hidden">
      {/* Decorative spade — top right */}
      <svg className="absolute top-8 right-10 w-24 h-24 opacity-[0.08] pointer-events-none" viewBox="0 0 100 120" fill="none">
        {/* Spade blade */}
        <path d="M50 5 Q80 15 82 45 Q82 70 50 80 Q18 70 18 45 Q20 15 50 5Z" fill="#2d7a47"/>
        {/* Spade handle */}
        <rect x="46" y="78" width="8" height="30" rx="4" fill="#2d7a47"/>
        {/* Handle grip */}
        <rect x="36" y="104" width="28" height="8" rx="4" fill="#2d7a47"/>
      </svg>
      {/* Decorative leaves — bottom left */}
      <svg className="absolute bottom-6 left-8 w-36 h-36 opacity-[0.07] pointer-events-none" viewBox="0 0 150 150" fill="none">
        <path d="M20 130 Q30 80 75 45 Q110 20 130 25 Q135 30 120 65 Q95 105 35 130Z" fill="#3a8c52"/>
        <line x1="20" y1="130" x2="120" y2="30" stroke="#2d7a47" strokeWidth="1.5"/>
        <path d="M5 100 Q15 60 55 35 Q85 18 100 22" stroke="#4a9e6b" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Why Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 mt-2 leading-tight">Down-to-Earth Garden Care</h2>
          <div className="text-gray-500 text-base mt-3 max-w-4xl mx-auto leading-relaxed flex flex-col gap-4">
            <p>We&apos;re a small, dedicated team with years in the business. We&apos;ve built a strong reputation built on trust, consistency and quality results. Every garden we work on gets our full care and attention, regardless of size or scope and our approach is simple - we turn up when we say we will, we do the job properly and we make sure we leave your outdoor space looking its absolute best!</p>
            <p>We don&apos;t just take pride in the finished result, but the entire experience, keeping communication clear, pricing fair and showing your home the respect we show our own. It&apos;s this commitment that keeps our customers coming back time and again.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map((u, i) => (
            <FadeIn key={u.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-200">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">{u.icon}</div>
                <div>
                  <h3 className="font-bold text-emerald-950 text-base mb-1">{u.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{u.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
