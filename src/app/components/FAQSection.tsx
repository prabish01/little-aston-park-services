"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We cover Sutton Coldfield, Lichfield, Tamworth, and all surrounding areas across the West Midlands. If you're unsure whether we service your postcode, just give us a call and we'll let you know.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply contact us via phone, email, or the contact form on this page. We'll arrange a convenient time to visit your property and provide a free, no-obligation quote.",
  },
  {
    q: "Do you offer one-off services or only ongoing contracts?",
    a: "We offer both! Whether you need a one-off garden tidy, a seasonal clean-up, or a regular maintenance schedule, we can tailor our services to suit your needs and budget.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we are fully insured with public liability insurance. You can have complete peace of mind that our team works safely and professionally on your property.",
  },
  {
    q: "What time of year can I book garden services?",
    a: "We operate year-round. From spring planting and summer maintenance to autumn leaf clearance and winter clean-ups, we keep your garden looking great through every season.",
  },
  {
    q: "Do you provide jet washing services?",
    a: "Yes — jet washing of patios, driveways, paths, and decking is one of our most popular services. We use professional-grade equipment to deliver outstanding results.",
  },
];

function FAQItem({
  q,
  a,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`border rounded-2xl bg-white overflow-hidden transition-all duration-500 cursor-default ${
        open ? "border-emerald-300 shadow-md shadow-emerald-900/10" : "border-gray-200"
      }`}
    >
      <div className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? "text-emerald-700" : "text-emerald-950"}`}>
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-emerald-600 text-white rotate-45"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
          </svg>
        </span>
      </div>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="w-full bg-[#f8f9f3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col items-center text-center mb-14 gap-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight max-w-xl">
            Frequently Asked Questions
          </h2>
          <div className="text-gray-500 text-base max-w-4xl flex flex-col gap-4">
            <p>Use the form or contact information above to get in touch with our team and ask any questions you may have. Our team of gardening experts are always on hand to provide you with the information you need and guide you through any services we offer.</p>
            <p>Alternatively, you can find a series of commonly asked questions below about our services.</p>
          </div>
        </FadeIn>

        {/* Two-column FAQ grid */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                index={i}
              />
            ))}
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={0.3} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-500 text-sm">Still have questions? Get in touch with our team today!</p>
          <a
            href="/contact"
            className="px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/20"
          >
            Contact Us
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
