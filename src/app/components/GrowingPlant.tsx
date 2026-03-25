"use client";

import { useEffect, useState } from "react";

// Leaf thresholds are progress fractions (0→1) across the full page
const LEAVES = [
  { cx: 50, cy: 128, side: "right" as const, threshold: 0.12 },
  { cx: 50, cy: 104, side: "left"  as const, threshold: 0.28 },
  { cx: 50, cy: 80,  side: "right" as const, threshold: 0.46 },
  { cx: 50, cy: 58,  side: "left"  as const, threshold: 0.63 },
  { cx: 50, cy: 38,  side: "right" as const, threshold: 0.80 },
];

function Leaf({ cx, cy, side, visible }: { cx: number; cy: number; side: "left" | "right"; visible: boolean }) {
  const d = side === "right" ? 1 : -1;
  const tipX = cx + d * 30;
  const tipY = cy - 14;
  return (
    <g
      style={{
        transformOrigin: `${cx}px ${cy}px`,
        transform: visible ? "scale(1)" : "scale(0)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease",
      }}
    >
      <path
        d={`M ${cx} ${cy} C ${cx + d * 9} ${cy - 24} ${cx + d * 32} ${cy - 24} ${tipX} ${tipY} C ${cx + d * 15} ${cy - 5} ${cx} ${cy} ${cx} ${cy}Z`}
        fill="#22c55e"
        opacity="0.93"
      />
      <line x1={cx} y1={cy} x2={tipX} y2={tipY} stroke="#16a34a" strokeWidth="0.8" opacity="0.55" />
      <line
        x1={(cx + tipX) / 2} y1={(cy + tipY) / 2}
        x2={(cx + tipX) / 2 + d * 8} y2={(cy + tipY) / 2 - 6}
        stroke="#16a34a" strokeWidth="0.5" opacity="0.35"
      />
    </g>
  );
}

export default function GrowingPlant() {
  const [progress, setProgress] = useState(0);
  const [hovered,  setHovered]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(window.scrollY / maxScroll, 1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // seed on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stemProgress = progress;
  const stemHeight   = 20 + stemProgress * 132;
  const stemBottom   = 162;
  const stemTop      = stemBottom - stemHeight;
  const showBud      = progress >= 0.88;

  const pct = Math.round(progress * 100);
  const label =
    pct < 12  ? "Just starting 🌱" :
    pct < 45  ? "Growing nicely 🌿" :
    pct < 80  ? "Blooming away 🍃" :
                "Full bloom! 🌸";

  return (
    <div
      className="fixed bottom-5 right-5 z-50 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        filter: hovered
          ? "drop-shadow(0 6px 18px rgba(34,197,94,0.35))"
          : "drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
        transition: "filter 0.3s ease",
      }}
      aria-label={`Page progress: ${pct}% explored`}
    >
      {/* Tooltip */}
      {hovered && (
        <div
          className="absolute bottom-full right-0 mb-3 w-40 px-3.5 py-2.5 bg-emerald-950/95 backdrop-blur-md text-white rounded-2xl shadow-2xl"
          style={{ animation: "fadeSlideUp 0.18s ease both" }}
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-0.5">
            Page explored
          </div>
          <div className="text-2xl font-bold leading-none mb-1.5">
            {pct}<span className="text-sm font-normal text-emerald-300">%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-emerald-400 to-green-300 rounded-full"
              style={{ width: `${pct}%`, transition: "width 0.25s ease" }}
            />
          </div>
          <div className="text-[10px] text-emerald-400/80 mt-1.5">{label}</div>
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-emerald-950/95 rotate-45 rounded-sm" />
        </div>
      )}

      <svg width="100" height="175" viewBox="0 0 100 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pot rim */}
        <rect x="20" y="155" width="60" height="18" rx="5" fill="#b07030" />
        <rect x="22" y="155" width="56" height="7"  rx="3.5" fill="#c17a3c" />

        {/* Soil */}
        <ellipse cx="50" cy="157" rx="26" ry="7.5" fill="#3d1f0a" />
        <ellipse cx="50" cy="155" rx="24" ry="6"   fill="#52300f" />
        <circle cx="43" cy="154" r="1.8" fill="#3d1f0a" opacity="0.5" />
        <circle cx="52" cy="156" r="1.2" fill="#3d1f0a" opacity="0.4" />
        <circle cx="58" cy="153" r="1.8" fill="#3d1f0a" opacity="0.5" />

        {/* Stem */}
        <line
          x1="50" y1={stemBottom}
          x2="50" y2={stemTop}
          stroke="#15803d"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <line
          x1="51.5" y1={stemBottom}
          x2="51.5" y2={stemTop}
          stroke="#4ade80"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Leaves */}
        {LEAVES.map((l, i) => (
          <Leaf
            key={i}
            cx={l.cx} cy={l.cy}
            side={l.side}
            visible={progress >= l.threshold && l.cy >= stemTop}
          />
        ))}

        {/* Flower */}
        <g
          style={{
            transformOrigin: "50px 30px",
            transform: showBud ? "scale(1)" : "scale(0)",
            opacity: showBud ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
          }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <ellipse
              key={i}
              cx={50 + Math.cos(((deg - 90) * Math.PI) / 180) * 9}
              cy={30 + Math.sin(((deg - 90) * Math.PI) / 180) * 9}
              rx="6" ry="4"
              fill={i % 2 === 0 ? "#fbbf24" : "#fde68a"}
              opacity="0.95"
              transform={`rotate(${deg}, ${50 + Math.cos(((deg - 90) * Math.PI) / 180) * 9}, ${30 + Math.sin(((deg - 90) * Math.PI) / 180) * 9})`}
            />
          ))}
          <circle cx="50" cy="30" r="6"   fill="#f59e0b" />
          <circle cx="50" cy="30" r="3.5" fill="#d97706" />
          <circle cx="48.5" cy="28.5" r="0.9" fill="#92400e" opacity="0.7" />
          <circle cx="51.5" cy="29"   r="0.9" fill="#92400e" opacity="0.7" />
          <circle cx="50"   cy="32"   r="0.9" fill="#92400e" opacity="0.7" />
        </g>
      </svg>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
