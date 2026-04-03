import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const pages = [
  {
    title: "Home",
    href: "/",
    description: "The starting point — hero, services overview, before & after work, coverage areas and testimonials.",
    accent: "#c5e84a",
    sections: [
      { label: "Hero & Introduction", href: "/" },
      { label: "Our Services Overview", href: "/#services" },
      { label: "Before & After Work", href: "/#work" },
      { label: "Areas We Cover", href: "/" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    description: "Full breakdown of every service we offer, from garden maintenance to specialist care.",
    accent: "#6ee7b7",
    sections: [
      { label: "Garden Maintenance", href: "/services#garden-maintenance" },
      { label: "Planting & Design", href: "/services#planting-design" },
      { label: "Hard Landscaping", href: "/services#hard-landscaping-and-installation" },
      { label: "Specialist Services", href: "/services#specialist-and-additional-services" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our team, values, and the work we've done for customers across the Midlands.",
    accent: "#34d399",
    sections: [
      { label: "Meet the Team", href: "/about" },
      { label: "Testimonials", href: "/about#testimonials-cards" },
      { label: "Frequently Asked Questions", href: "/about#faq" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch to request a free, no-obligation quote or ask us anything.",
    accent: "#4ade80",
    sections: [
      { label: "Send a Message", href: "/contact" },
      { label: "Phone & Email", href: "/contact" },
      { label: "Free Quote Request", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    href: "/terms-and-conditions",
    description: "Our terms, privacy practices and legal information.",
    accent: "#86efac",
    sections: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Sitemap", href: "/site-map" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen w-full pt-16" style={{ backgroundColor: "#f8f9f3" }}>

      {/* Header banner */}
      <div className="w-full py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f3320 0%, #1a4731 50%, #2d7a4f 100%)" }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #c5e84a, transparent 70%)" }} />
        <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">Navigation</span>
          <h1 className="font-bold text-white uppercase mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08 }}>
            Site Map
          </h1>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            A complete overview of every page and section on the Little Aston Park Services website.
          </p>
        </div>
      </div>

      {/* Page cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pages.map((page) => (
            <div key={page.title} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">

              {/* Card top accent bar */}
              <div className="h-1 w-full" style={{ background: page.accent }} />

              {/* Card header */}
              <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                <div>
                  <Link href={page.href} className="text-lg font-bold text-emerald-950 hover:text-emerald-600 transition-colors">
                    {page.title}
                  </Link>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">{page.description}</p>
                </div>
                <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${page.accent}30` }}>
                  <svg className="w-4 h-4" fill="none" stroke={page.accent} strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-100" />

              {/* Sections */}
              <div className="px-6 py-4 flex flex-col gap-1 flex-1">
                {page.sections.map((section) => (
                  <Link
                    key={section.label}
                    href={section.href}
                    className="group flex items-center gap-3 py-2 text-sm text-gray-500 hover:text-emerald-700 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200 group-hover:scale-125" style={{ background: page.accent }} />
                    {section.label}
                    <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 text-emerald-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Visit page link */}
              <div className="px-6 pb-6">
                <Link
                  href={page.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90"
                  style={{ background: `${page.accent}20`, color: "#14532d", border: `1px solid ${page.accent}50` }}
                >
                  Visit page
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back home */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
