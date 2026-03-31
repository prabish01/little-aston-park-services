"use client";

import FadeIn from "./FadeIn";

const INSTAGRAM_URL = "https://www.instagram.com/littleastonparkservices/";
const HANDLE = "@littleastonparkservices";

const posts = [
  "https://www.instagram.com/littleastonparkservices/reel/DVhH4KfDPXS/",
  "https://www.instagram.com/littleastonparkservices/reel/DVRNqSLDCPv/",
  "https://www.instagram.com/littleastonparkservices/reel/DVMK-BFDCg9/",
  "https://www.instagram.com/littleastonparkservices/reel/DU_nWYkjAni/",
  "https://www.instagram.com/littleastonparkservices/reel/DSgCR-BDGs-/",
  "https://www.instagram.com/littleastonparkservices/reel/DSVrIm2jKdo/",
];

function getEmbedUrl(postUrl: string) {
  const reel = postUrl.match(/\/reel\/([A-Za-z0-9_-]+)/);
  if (reel) return `https://www.instagram.com/reel/${reel[1]}/embed/captioned/`;
  const post = postUrl.match(/\/p\/([A-Za-z0-9_-]+)/);
  if (post) return `https://www.instagram.com/p/${post[1]}/embed/captioned/`;
  return "";
}

function PostTile({ url }: { url: string }) {
  const embedUrl = getEmbedUrl(url);
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "4/5" }}>
      {/* Wrapper clips the iframe — negative marginTop hides the Instagram header */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <iframe
          src={embedUrl}
          style={{
            width: "100%",
            height: "calc(100% + 136px)",
            border: "none",
            marginTop: "-68px",
            pointerEvents: "none",
            display: "block",
          }}
          scrolling="no"
          loading="lazy"
          title="Instagram post"
        />
      </div>
      {/* Transparent click layer — opens post in new tab */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 group" aria-label="View on Instagram">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #833ab480 0%, #fd1d1d80 50%, #fcb04580 100%)" }}>
          <svg className="w-8 h-8 text-white drop-shadow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function InstagramSection() {
  return (
    <section className="w-full py-20 overflow-hidden" style={{ backgroundColor: "#f7f8f2" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Follow Us</span>
            <h2 className="font-bold uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              <span style={{ color: "#0d2e1a" }}>Check out our latest work</span>
              <br />
              <span style={{ color: "#3a8c52" }}>across our social channels</span>
            </h2>
            <div className="text-gray-500 text-base max-w-xl leading-relaxed flex flex-col gap-3">
              <p>Stay connected with us on social media to see our latest projects, transformations, and day-to-day work in action. We regularly share before-and-after photos, seasonal gardening tips, and behind-the-scenes insights into how we bring outdoor spaces back to life.</p>
              <p>Following us is a great way to get inspiration for your own garden and see the standard of work you can expect. Simply search for and follow {HANDLE} to keep up to date.</p>
              <p>Who knows - your garden could be our next featured transformation!</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 self-start sm:self-end px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 shrink-0"
            style={{ background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow {HANDLE}
          </a>
        </FadeIn>

        {/* Post grid */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {posts.map((url, i) => (
              <PostTile key={i} url={url} />
            ))}
          </div>
        </FadeIn>

        {/* Bottom nudge */}
        <FadeIn delay={0.2} className="flex items-center justify-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-emerald-600 transition-colors">
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
