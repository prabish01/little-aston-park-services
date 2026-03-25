"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { href: "/",         label: "Home",         sub: "Back to the start" },
  { href: "/services", label: "Our Services",  sub: "What we can do for you" },
  { href: "/about",    label: "About Us",      sub: "The team behind the work" },
  { href: "/contact",  label: "Get in Touch",  sub: "Let's talk about your garden" },
];

export default function PageNav() {
  const pathname = usePathname();
  const links = pages.filter((p) => p.href !== pathname);

  return (
    <div className="w-full bg-[#f0f1eb] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">

        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
          Explore
        </span>

        <div className={`grid gap-4 ${links.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {links.map(({ href, label, sub }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col gap-1">
                <span className="text-base font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                  {label}
                </span>
                <span className="text-xs text-gray-400">{sub}</span>
              </div>
              <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-200">
                <svg
                  className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
