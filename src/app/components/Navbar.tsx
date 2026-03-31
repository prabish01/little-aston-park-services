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

const serviceDropdownItems = [
  {
    label: "Design & Planning",
    href: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.45-2.72A1 1 0 013 16.38V5.62a1 1 0 011.45-.9L9 7m0 13 6-3m-6-10 6-3m6 3-5.45-2.72A1 1 0 0015 5.62v10.76a1 1 0 001.45.9L21 15V5.62" />
      </svg>
    ),
  },
  {
    label: "Tree & Plant Care",
    href: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9 2 6 5 6 9c0 2 .7 3.5 1.8 4.7M12 2c3 0 6 3 6 7 0 2-.7 3.5-1.8 4.7M12 2v20" />
      </svg>
    ),
  },
  {
    label: "Drainage Systems",
    href: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    label: "Seasonal Clean-up",
    href: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.43 15.43a2 2 0 00-1.02-.55l-2.39-.48a6 6 0 00-3.86.52l-.32.16a6 6 0 01-3.86.52l-1.93-.39a2 2 0 00-1.81.55M8 4h8l-1 1v5.17a2 2 0 00.59 1.42l5 5c1.26 1.26.37 3.41-1.41 3.41H4.83c-1.78 0-2.68-2.15-1.42-3.41l5-5A2 2 0 009 10.17V5L8 4z" />
      </svg>
    ),
  },
  {
    label: "Jet Washing",
    href: "/services",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12H3m18 0h-2M12 5V3m0 18v-2m4.95-13.95-1.41 1.41M6.46 17.54l-1.41 1.41M17.54 17.54l1.41 1.41M6.46 6.46 5.05 5.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
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

                  {/* Services dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl bg-white border border-emerald-100 shadow-2xl shadow-emerald-900/10 py-2 overflow-hidden transition-all duration-200 ${
                      servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                      >
                        <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
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
