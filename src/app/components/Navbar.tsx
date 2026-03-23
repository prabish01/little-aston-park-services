"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-emerald-700 font-bold text-lg leading-tight"
        >
          Little Aston Park Services
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.label}
                className="relative pb-2"
                onMouseEnter={() => setServicesHovered(true)}
                onMouseLeave={() => setServicesHovered(false)}
              >
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-sm font-medium hover:text-emerald-700 transition-colors ${
                    pathname === link.href ? "text-emerald-700" : "text-gray-700"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesHovered ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {servicesHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 rounded-2xl shadow-xl bg-white border border-gray-100 py-2 flex flex-col overflow-hidden">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-600 text-sm hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                      >
                        <span className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-gray-700 text-sm font-medium hover:text-emerald-700 transition-colors ${
                  pathname === link.href ? "text-emerald-700" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Contact Us
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-gray-700 text-sm font-medium hover:text-emerald-700 transition-colors ${
                pathname === link.href ? "text-emerald-700" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-fit px-5 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
