"use client";

import { useEffect, useState } from "react";

// Each leaf has a position on the stem and which side it's on
const LEAVES = [
  { cx: 50, cy: 130, side: "right" as const, threshold: 80 },
  { cx: 50, cy: 105, side: "left" as const, threshold: 220 },
  { cx: 50, cy: 80, side: "right" as const, threshold: 380 },
  { cx: 50, cy: 58, side: "left" as const, threshold: 560 },
  { cx: 50, cy: 38, side: "right" as const, threshold: 760 },
];

function LeafShape({
  cx,
  cy,
  side,
  visible,
}: {
  cx: number;
  cy: number;
  side: "left" | "right";
  visible: boolean;
}) {
  const dir = side === "right" ? 1 : -1;
  // Control points for a natural leaf curve
  const tipX = cx + dir * 28;
  const tipY = cy - 12;
  const cp1X = cx + dir * 8;
  const cp1Y = cy - 22;
  const cp2X = cx + dir * 30;
  const cp2Y = cy - 22;

  return (
    <g
      style={{
        transformOrigin: `${cx}px ${cy}px`,
        transform: visible ? "scale(1)" : "scale(0)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
      }}
    >
      {/* Leaf body */}
      <path
        d={`M ${cx} ${cy} C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${tipX} ${tipY} C ${cx + dir * 14} ${cy - 4} ${cx} ${cy} ${cx} ${cy}Z`}
        fill="#22c55e"
        opacity="0.92"
      />
      {/* Leaf vein */}
      <line
        x1={cx}
        y1={cy}
        x2={tipX}
        y2={tipY}
        stroke="#16a34a"
        strokeWidth="0.8"
        opacity="0.6"
      />
    </g>
  );
}

export default function GrowingPlant() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stem height grows from 20 to 150 as user scrolls from 0 → 900px
  const stemProgress = Math.min(scrollY / 900, 1);
  const stemHeight = 20 + stemProgress * 130;
  const stemBottom = 160;
  const stemTop = stemBottom - stemHeight;

  // Flower/bud appears at max scroll
  const showBud = scrollY > 850;

  return (
    <div
      className="absolute bottom-6 right-6 z-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        width="100"
        height="170"
        viewBox="0 0 100 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soil mound */}
        <ellipse cx="50" cy="162" rx="28" ry="7" fill="#92400e" opacity="0.45" />
        <ellipse cx="50" cy="160" rx="22" ry="5" fill="#78350f" opacity="0.35" />

        {/* Stem — grows upward */}
        <line
          x1="50"
          y1={stemBottom}
          x2="50"
          y2={stemTop}
          stroke="#15803d"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: "y2 0.4s ease" }}
        />

        {/* Leaves */}
        {LEAVES.map((leaf, i) => (
          <LeafShape
            key={i}
            cx={leaf.cx}
            cy={leaf.cy}
            side={leaf.side}
            visible={scrollY >= leaf.threshold && leaf.cy >= stemTop}
          />
        ))}

        {/* Flower bud on top */}
        <g
          style={{
            transformOrigin: "50px 32px",
            transform: showBud ? "scale(1)" : "scale(0)",
            opacity: showBud ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease",
          }}
        >
          {/* Petals */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <ellipse
              key={i}
              cx={50 + Math.cos(((deg - 90) * Math.PI) / 180) * 8}
              cy={32 + Math.sin(((deg - 90) * Math.PI) / 180) * 8}
              rx="5"
              ry="3.5"
              fill="#fbbf24"
              opacity="0.9"
              transform={`rotate(${deg}, ${50 + Math.cos(((deg - 90) * Math.PI) / 180) * 8}, ${32 + Math.sin(((deg - 90) * Math.PI) / 180) * 8})`}
            />
          ))}
          {/* Centre */}
          <circle cx="50" cy="32" r="5" fill="#f59e0b" />
        </g>
      </svg>
    </div>
  );
}
