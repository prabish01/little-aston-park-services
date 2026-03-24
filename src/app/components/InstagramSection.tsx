import FadeIn from "./FadeIn";

const INSTAGRAM_URL = "https://www.instagram.com/littleastonparkservices/";
const HANDLE = "@littleastonparkservices";

// Placeholder garden images — swap for real IG screenshots when ready
const posts = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80",
  "https://images.unsplash.com/photo-1599598425947-5202edd56fde?w=600&q=80",
  "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=600&q=80",
];

export default function InstagramSection() {
  return (
    <section className="w-full py-20 overflow-hidden" style={{ backgroundColor: "#f0f1eb" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Follow Along</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-950 leading-tight">
              See Our Work<br />
              <span className="text-emerald-600">In Real Time</span>
            </h2>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              We post before &amp; afters, seasonal tips, and behind-the-scenes looks at every project.
            </p>
          </div>

          {/* CTA */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 self-start sm:self-end px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 shrink-0"
            style={{
              background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
            }}
          >
            {/* Instagram icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow {HANDLE}
          </a>
        </FadeIn>

        {/* Photo grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {posts.map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #833ab480 0%, #fd1d1d80 50%, #fcb04580 100%)" }}
                >
                  <svg className="w-7 h-7 text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Bottom nudge */}
        <FadeIn delay={0.2} className="flex items-center justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-emerald-600 transition-colors"
          >
            View all posts on Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
