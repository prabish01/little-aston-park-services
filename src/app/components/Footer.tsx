import Image from "next/image";
import Link from "next/link";
import LawnMowerStrip from "./LawnMowerStrip";

const companyLinks = [
  { label: "About Us",    href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work",    href: "/#work" },
  { label: "Contact Us",  href: "/contact" },
];

const serviceCategories = [
  {
    heading: "Garden Maintenance",
    links: ["Lawn Care", "Hedge Trimming and Shaping", "Garden Clearance and Renovation", "Seasonal Maintenance", "Weeding and Border Maintenance", "Pruning and Shaping", "General Tidying and Cleaning"],
  },
  {
    heading: "Planting & Design",
    links: ["Planting", "Garden Design and Soft Landscaping", "Vegetable and Fruit Growing"],
  },
  {
    heading: "Hard Landscaping",
    links: ["Patio and Path Work", "Fencing and Gates", "Turfing and Levelling", "Pond and Water Feature Maintenance"],
  },
  {
    heading: "Specialist Services",
    links: ["Tree Surgery and Care", "Disease Control", "Fertilising and Feeding", "Waste Removal and Green Waste Disposal", "Seasonal Extras", "Garden Consulting and Advice", "Container and Small-Space Gardening"],
  },
];

export default function Footer() {
  return (
    <>
    <LawnMowerStrip />
    <footer className="w-full bg-emerald-950">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Main row */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_130px_1fr_220px] gap-10 pb-8 border-b border-white/10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/laps.svg" alt="Little Aston Park Services" width={40} height={40} className="h-10 w-auto" />
              <span className="text-white font-bold text-sm leading-tight">
                Little Aston<br />
                <span className="text-emerald-400 font-medium tracking-widest uppercase text-xs">Park Services</span>
              </span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              Professional garden care &amp; jet washing across Sutton Coldfield, Lichfield, Tamworth and surrounding areas.
            </p>
            <Link
              href="/contact"
              className="self-start px-4 py-2 rounded-full border border-emerald-500/50 text-emerald-400 text-xs font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
            >
              Get a Free Quote →
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Company</h4>
            {companyLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-white/40 text-xs hover:text-emerald-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services — 4 sub-columns */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6">
              {/* Col 1: Garden Maintenance */}
              <div className="flex flex-col gap-1.5">
                <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-1">{serviceCategories[0].heading}</p>
                {serviceCategories[0].links.map((label) => (
                  <Link key={label} href="/services" className="text-white/40 text-xs hover:text-emerald-400 transition-colors leading-snug">{label}</Link>
                ))}
              </div>

              {/* Col 2: Planting & Design + Hard Landscaping */}
              <div className="flex flex-col gap-5">
                {[serviceCategories[1], serviceCategories[2]].map((cat) => (
                  <div key={cat.heading} className="flex flex-col gap-1.5">
                    <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-1">{cat.heading}</p>
                    {cat.links.map((label) => (
                      <Link key={label} href="/services" className="text-white/40 text-xs hover:text-emerald-400 transition-colors leading-snug">{label}</Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Col 3: Specialist Services */}
              <div className="flex flex-col gap-1.5">
                <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-1">{serviceCategories[3].heading}</p>
                {serviceCategories[3].links.map((label) => (
                  <Link key={label} href="/services" className="text-white/40 text-xs hover:text-emerald-400 transition-colors leading-snug">{label}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-2">Get In Touch</h4>
            <a href="tel:+447500732083" className="text-white/40 text-xs hover:text-emerald-400 transition-colors">+44 7500 732083</a>
            <a href="mailto:nik.gardenservices@gmail.com" className="text-white/40 text-xs hover:text-emerald-400 transition-colors whitespace-nowrap">nik.gardenservices@gmail.com</a>
            <a
              href="https://www.instagram.com/littleastonparkservices/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/40 text-xs hover:text-emerald-400 transition-colors mt-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @littleastonparkservices
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>© 2026 Little Aston Park Services. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}
