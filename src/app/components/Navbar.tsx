"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
];

const serviceCategories = [
  {
    category: "Garden Maintenance",
    items: [
      "Lawn Care",
      "Hedge Trimming and Shaping",
      "Garden Clearance and Renovation",
      "Seasonal Maintenance",
      "Weeding and Border Maintenance",
      "Pruning and Shaping",
      "General Tidying and Cleaning",
    ],
  },
  {
    category: "Planting & Design",
    items: [
      "Planting",
      "Garden Design and Soft Landscaping",
      "Vegetable and Fruit Growing",
    ],
  },
  {
    category: "Hard Landscaping",
    items: [
      "Patio and Path Work",
      "Fencing and Gates",
      "Turfing and Levelling",
      "Pond and Water Feature Maintenance",
    ],
  },
  {
    category: "Specialist Services",
    items: [
      "Tree Surgery and Care",
      "Disease Control",
      "Fertilising and Feeding",
      "Waste Removal and Green Waste Disposal",
      "Seasonal Extras",
      "Garden Consulting and Advice",
      "Container and Small-Space Gardening",
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [hidden, setHidden]             = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname                        = usePathname();
  const lastScrollY                     = useRef(0);
  const closeTimer                      = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // Hide when scrolling down past 80px, reveal when scrolling up
      if (y > 80) {
        setHidden(y > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices  = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      {/* ── Floating pill — desktop & mobile trigger ─────────────────────────── */}
      <header className={`fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 pointer-events-none transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div
          className={`pointer-events-auto flex items-center gap-1 px-2.5 py-2 rounded-full border transition-all duration-500 w-full max-w-7xl ${
            scrolled
              ? "bg-white/98 border-emerald-100 shadow-xl shadow-emerald-900/10 backdrop-blur-xl"
              : "bg-white/85 border-emerald-100/60 shadow-lg shadow-emerald-900/5 backdrop-blur-md"
          }`}
        >
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 px-2 mr-2">
            <Image src="/laps.svg" alt="Little Aston Park Services" width={42} height={42} className="h-10 w-auto" />
            <span className="hidden lg:block text-xs font-bold text-emerald-900 leading-tight uppercase tracking-wider">
              Little Aston<br />
              <span className="text-emerald-600">Park Services</span>
            </span>
          </Link>

          {/* Mobile: centred company name */}
          <span className="md:hidden flex-1 text-center text-xs font-bold text-emerald-900 uppercase tracking-wider">
            Little Aston <span className="text-emerald-600">Park Services</span>
          </span>

          {/* Thin emerald divider */}
          <div className="hidden md:block w-px h-6 bg-emerald-100 mx-2" />

          {/* Desktop nav links — centred */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                        : "text-gray-700 hover:text-emerald-800 hover:bg-emerald-50"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Mega menu dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl overflow-hidden shadow-2xl transition-all duration-200 ${
                      servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    style={{ width: "680px", background: "#0d2e1a" }}
                  >
                    {/* Lime top accent line */}
                    <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #c5e84a 30%, #c5e84a 70%, transparent)" }} />

                    {/* Main grid — 3 cols: Garden Maintenance | Planting & Design + Hard Landscaping | Specialist Services */}
                    <div className="grid grid-cols-3 p-6 gap-0">
                      {/* Col 1: Garden Maintenance */}
                      {[serviceCategories[0]].map((cat) => (
                        <div key={cat.category} className="flex flex-col gap-2.5 px-5" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                          <div className="mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: "#c5e84a" }}>{cat.category}</span>
                          </div>
                          {cat.items.map((item) => (
                            <Link key={item} href={`/services#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="group flex items-center gap-2.5 text-sm transition-all duration-150" style={{ color: "rgba(255,255,255,0.9)" }}>
                              <span className="w-1 h-1 rounded-full shrink-0 transition-all duration-150 group-hover:scale-[2]" style={{ background: "rgba(197,232,74,0.4)" }} />
                              <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-150 inline-block leading-snug">{item}</span>
                            </Link>
                          ))}
                        </div>
                      ))}

                      {/* Col 2: Planting & Design + Hard Landscaping stacked */}
                      <div className="flex flex-col gap-6 px-5" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                        {[serviceCategories[1], serviceCategories[2]].map((cat) => (
                          <div key={cat.category} className="flex flex-col gap-2.5">
                            <div className="mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: "#c5e84a" }}>{cat.category}</span>
                            </div>
                            {cat.items.map((item) => (
                              <Link key={item} href={`/services#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="group flex items-center gap-2.5 text-sm transition-all duration-150" style={{ color: "rgba(255,255,255,0.9)" }}>
                                <span className="w-1 h-1 rounded-full shrink-0 transition-all duration-150 group-hover:scale-[2]" style={{ background: "rgba(197,232,74,0.4)" }} />
                                <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-150 inline-block leading-snug">{item}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Col 3: Specialist Services */}
                      {[serviceCategories[3]].map((cat) => (
                        <div key={cat.category} className="flex flex-col gap-2.5 px-5">
                          <div className="mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: "#c5e84a" }}>{cat.category}</span>
                          </div>
                          {cat.items.map((item) => (
                            <Link key={item} href={`/services#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="group flex items-center gap-2.5 text-sm transition-all duration-150" style={{ color: "rgba(255,255,255,0.9)" }}>
                              <span className="w-1 h-1 rounded-full shrink-0 transition-all duration-150 group-hover:scale-[2]" style={{ background: "rgba(197,232,74,0.4)" }} />
                              <span className="group-hover:text-white group-hover:translate-x-0.5 transition-all duration-150 inline-block leading-snug">{item}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <div
                      className="flex items-center justify-between px-7 py-3.5"
                      style={{ background: "rgba(0,0,0,0.25)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Expert garden care across the Midlands
                      </span>
                      <div className="flex items-center gap-4">
                        <Link
                          href="/services"
                          className="text-xs font-semibold transition-colors"
                          style={{ color: "rgba(197,232,74,0.8)" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#c5e84a")}
                          onMouseLeave={e => (e.currentTarget.style.color = "rgba(197,232,74,0.8)")}
                        >
                          View all services →
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150"
                          style={{ background: "#c5e84a", color: "#0d2e1a" }}
                          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30"
                      : "text-gray-700 hover:text-emerald-800 hover:bg-emerald-50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Thin emerald divider */}
          <div className="hidden md:block w-px h-6 bg-emerald-100 mx-2" />

          {/* CTA — gradient */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-base font-bold transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-emerald-600/25"
            style={{ background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)" }}
          >
            Get a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile — burger */}
          <button
            className="md:hidden ml-auto p-2.5 rounded-full text-emerald-700 hover:bg-emerald-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown card ──────────────────────────────────────────────── */}
      <div
        className={`fixed inset-x-4 top-[4.5rem] z-40 md:hidden rounded-2xl bg-white border border-gray-100 shadow-2xl shadow-black/15 overflow-hidden transition-all duration-300 origin-top ${
          menuOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <div className="p-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="h-px bg-gray-100 my-1" />

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors"
          >
            Get a Free Quote
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Tap-away overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
