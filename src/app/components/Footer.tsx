const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Jet Washing", href: "#services" },
  { label: "Garden Maintenance", href: "#services" },
  { label: "Lawn Care", href: "#services" },
  { label: "Hedge Trimming", href: "#services" },
  { label: "Seasonal Clean-Up", href: "#services" },
  { label: "Landscaping", href: "#services" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/littleastonparkservices/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="relative w-full bg-emerald-950 overflow-hidden">
        {/* Decorative leaf watermark */}
        <div className="absolute bottom-0 right-0 w-72 h-72 opacity-5 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-emerald-300 w-full h-full">
            <path d="M100 10 C60 40, 20 80, 30 130 C40 160, 70 180, 100 190 C100 190, 100 100, 100 10Z" />
            <path d="M100 10 C140 40, 180 80, 170 130 C160 160, 130 180, 100 190 C100 190, 100 100, 100 10Z" opacity="0.6"/>
            <path d="M70 50 C85 80, 90 120, 100 190 M130 50 C115 80, 110 120, 100 190" stroke="currentColor" strokeWidth="3" fill="none"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Brand column */}
            <div className="flex flex-col gap-5">
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8zm0 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-tight">Little Aston<br/><span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Park Services</span></span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                Professional garden care and jet washing services across Sutton Coldfield, Lichfield, Tamworth and surrounding areas.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 self-start px-5 py-2.5 rounded-full border border-emerald-500/50 text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-200"
              >
                Get a Free Quote
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-emerald-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-white font-semibold text-base mb-5">Services</h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-emerald-400 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-white font-semibold text-base mb-3">Contact Details</h4>
                <a href="tel:+441234567890" className="text-white/50 text-sm hover:text-emerald-400 transition-colors block mb-1">
                  +44 1234 567 890
                </a>
                <a href="mailto:info@littleastonparkservices.co.uk" className="text-white/50 text-sm hover:text-emerald-400 transition-colors block">
                  info@littleastonpark.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex items-center justify-end">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright bar */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <span>© Copyright 2026 by Little Aston Park Services. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
