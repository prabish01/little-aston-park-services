"use client";

import { useEffect, useRef, useState, useMemo } from "react";

const SVG_W = 1000;
const SVG_H = 160;
const BASE_Y = SVG_H - 8;
const BLADE_COUNT = 110;
const SCROLL_RANGE = 700;

// seeded pseudo-random so blades are consistent on every render
function sr(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453;
  return x - Math.floor(x);
}

// round to 2dp to prevent SSR/client floating-point hydration mismatches
const r = (n: number) => Math.round(n * 100) / 100;

interface Blade {
  x: number;
  h: number;
  w: number;
  lean: number;
  swayDur: number;
  swayDelay: number;
  color1: string;
  color2: string;
  id: string;
}

const COLORS: [string, string][] = [
  ["#14532d", "#4ade80"],
  ["#166534", "#86efac"],
  ["#15803d", "#6ee7b7"],
  ["#14532d", "#4ade80"],
  ["#1a6b40", "#a7f3d0"],
];

export default function LawnMowerStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [mowerX, setMowerX] = useState(-90); // px in SVG coords (1000 wide)
  const targetX = useRef(-90);
  const currentX = useRef(-90);
  const rafId = useRef<number | null>(null);

  // generate static blade data once
  const blades = useMemo<Blade[]>(() => {
    return Array.from({ length: BLADE_COUNT }, (_, i) => {
      const t = i / (BLADE_COUNT - 1);
      const jit = r((sr(i * 7) - 0.5) * 6);
      const x = r(t * (SVG_W - 20) + 10 + jit);
      const h = r(30 + sr(i * 3) * 48 + sr(i * 5) * 22);
      const w = r(2.5 + sr(i * 11) * 3.5);
      const lean = r((sr(i * 13) - 0.5) * 18);
      const swayDur = r(2.2 + sr(i * 17) * 2.2);
      const swayDelay = -(sr(i * 19) * 4); // staggered start
      const [c1, c2] = COLORS[i % COLORS.length];
      return { x, h, w, lean, swayDur, swayDelay, color1: c1, color2: c2, id: `blade-${i}` };
    });
  }, []);

  // gradient defs for each blade (shared by gradient id)
  const gradients = useMemo(
    () =>
      COLORS.map(([c1, c2], gi) => (
        <linearGradient key={gi} id={`gr${gi}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      )),
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.9;
      const dist = trigger - rect.top;
      const p = Math.max(0, Math.min(dist / SCROLL_RANGE, 1));
      targetX.current = -90 + p * 1210;
    };

    const tick = () => {
      // lerp factor: 0.025 = very slow catch-up regardless of scroll speed
      currentX.current += (targetX.current - currentX.current) * 0.025;
      setMowerX(Math.round(currentX.current * 10) / 10);
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const isMoving = mowerX > -85 && mowerX < 1115;
  const mowerPct = (mowerX / SVG_W) * 100;

  return (
    <div ref={ref} className="w-full relative bg-white" aria-hidden="true">
      {/* CSS for grass sway */}
      <style>{`
        .grass-g {
          transform-box: fill-box;
          transform-origin: bottom center;
        }
        @keyframes sway1 { 0%,100%{transform:rotate(-4deg)} 45%{transform:rotate(5deg)} 75%{transform:rotate(-1.5deg)} }
        @keyframes sway2 { 0%,100%{transform:rotate(3deg)}  40%{transform:rotate(-5deg)} 70%{transform:rotate(2deg)} }
        @keyframes sway3 { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(4.5deg)} 80%{transform:rotate(-2deg)} }
        @keyframes sway4 { 0%,100%{transform:rotate(4deg)}  35%{transform:rotate(-4deg)} 65%{transform:rotate(1.5deg)} }
        @keyframes sway5 { 0%,100%{transform:rotate(-5deg)} 55%{transform:rotate(3.5deg)} }
        .grass-trimmed {
          transition: transform 0.25s cubic-bezier(0.25,1,0.5,1);
        }
      `}</style>

      <svg width="100%" viewBox={`0 0 ${SVG_W} ${SVG_H}`} preserveAspectRatio="xMidYMax meet" style={{ display: "block" }}>
        <defs>
          {gradients}
          {/* Trimmed gradient (lighter) */}
          <linearGradient id="grTrimmed" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

        {/* Ground strip */}
        <rect x="0" y={BASE_Y + 2} width={SVG_W} height={SVG_H - BASE_Y} fill="#c8d8b0" />

        {/* Grass blades */}
        {blades.map((b, i) => {
          const trimmed = b.x < mowerX - 20;
          const actualH = trimmed ? Math.max(b.h * 0.2, 8) : b.h;
          const tipY = BASE_Y - actualH;
          const hw = b.w / 2;

          // Organic blade path — slightly curved sides meeting at sharp tip
          const bx = b.x,
            by = BASE_Y,
            ty = r(tipY);
          const path = [
            `M ${bx} ${by}`,
            `L ${r(bx - hw * 1.1)} ${r(by - actualH * 0.15)}`,
            `C ${r(bx - hw * 0.9)} ${r(by - actualH * 0.55)}`,
            `  ${r(bx - hw * 0.4)} ${r(ty + actualH * 0.1)}`,
            `  ${bx} ${ty}`,
            `C ${r(bx + hw * 0.4)} ${r(ty + actualH * 0.1)}`,
            `  ${r(bx + hw * 0.9)} ${r(by - actualH * 0.55)}`,
            `  ${r(bx + hw * 1.1)} ${r(by - actualH * 0.15)}`,
            `Z`,
          ].join(" ");

          const animName = `sway${(i % 5) + 1}`;

          return (
            <g
              key={b.id}
              className="grass-g"
              style={{
                animation: trimmed ? "none" : `${animName} ${b.swayDur}s ease-in-out ${b.swayDelay}s infinite`,
                transform: trimmed ? `rotate(${b.lean * 0.3}deg) scaleY(1)` : `rotate(${b.lean}deg)`,
                transition: trimmed ? "transform 0.25s ease" : undefined,
              }}
            >
              <path d={path} fill={trimmed ? "url(#grTrimmed)" : `url(#gr${i % COLORS.length})`} opacity={trimmed ? 0.75 : 0.92} />
            </g>
          );
        })}

        {/* Grass clippings behind the mower */}
        {blades
          .filter((b) => b.x < mowerX - 25 && b.x > mowerX - 200)
          .map((b, i) => (
            <ellipse key={`clip-${b.id}`} cx={b.x + (sr(i * 7) - 0.5) * 16} cy={BASE_Y - 2 - sr(i * 11) * 7} rx={2 + sr(i * 3) * 3} ry={1 + sr(i * 5) * 1.5} fill="#4ade80" opacity={0.35 + sr(i * 17) * 0.25} transform={`rotate(${(sr(i * 13) - 0.5) * 60} ${b.x} ${BASE_Y - 4})`} />
          ))}

        {/* Lawnmower — positioned in SVG coords, flipped to face right */}
        <g transform={`translate(${mowerX}, ${BASE_Y - 58}) scale(-1, 1)`}>
          {/* Shadow */}
          <ellipse cx="35" cy="58" rx="32" ry="5" fill="#000" opacity="0.07" />

          {/* Body */}
          <rect x="5" y="14" width="56" height="28" rx="9" fill="#dc2626" />
          <rect x="7" y="15" width="52" height="14" rx="6" fill="#ef4444" />
          {/* Shine */}
          <rect x="11" y="17" width="20" height="5" rx="2.5" fill="#fff" opacity="0.18" />

          {/* Handle */}
          <path d="M57 24 Q70 15 73 8" stroke="#374151" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="73" cy="8" r="3.5" fill="#4b5563" />

          {/* Blade deck */}
          <rect x="1" y="38" width="64" height="10" rx="5" fill="#111827" />
          <rect x="3" y="39" width="60" height="5" rx="2.5" fill="#1f2937" />

          {/* Rear wheels */}
          <circle cx="12" cy="52" r="9" fill="#374151" />
          <circle cx="12" cy="52" r="5.5" fill="#4b5563" />
          <circle cx="12" cy="52" r="2.5" fill="#6b7280" />
          {[0, 90, 180, 270].map((deg) => (
            <line key={deg} x1={12 + Math.cos((deg * Math.PI) / 180) * 2.5} y1={52 + Math.sin((deg * Math.PI) / 180) * 2.5} x2={12 + Math.cos((deg * Math.PI) / 180) * 5.5} y2={52 + Math.sin((deg * Math.PI) / 180) * 5.5} stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
          ))}

          {/* Front wheels */}
          <circle cx="54" cy="52" r="9" fill="#374151" />
          <circle cx="54" cy="52" r="5.5" fill="#4b5563" />
          <circle cx="54" cy="52" r="2.5" fill="#6b7280" />
          {[0, 90, 180, 270].map((deg) => (
            <line key={deg} x1={54 + Math.cos((deg * Math.PI) / 180) * 2.5} y1={52 + Math.sin((deg * Math.PI) / 180) * 2.5} x2={54 + Math.cos((deg * Math.PI) / 180) * 5.5} y2={52 + Math.sin((deg * Math.PI) / 180) * 5.5} stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
          ))}

          {/* Exhaust puffs */}
          {isMoving && (
            <>
              <circle cx="4" cy="26" r="4" fill="#e5e7eb" opacity="0.5">
                <animate attributeName="r" values="2;7;2" dur="0.75s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0;0.55" dur="0.75s" repeatCount="indefinite" />
              </circle>
              <circle cx="-1" cy="18" r="3" fill="#e5e7eb" opacity="0.35">
                <animate attributeName="r" values="1;5;1" dur="1.05s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="1.05s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
