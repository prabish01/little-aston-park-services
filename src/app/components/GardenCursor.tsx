"use client";

import { useEffect, useCallback } from "react";

interface Leaf {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
  scale: number;
}

const LEAF_COLORS = ["#16a34a", "#22c55e", "#4ade80", "#15803d", "#86efac"];
const MUD_COLORS = ["#6b3e1f", "#8b5e3c", "#a0724a", "#4a2c0e", "#7a4f2d"];

let leafCounter = 0;

function spawnMud(x: number, y: number) {
  const count = 8;
  const container = document.getElementById("garden-cursor-container");
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 360;
    const color = MUD_COLORS[Math.floor(Math.random() * MUD_COLORS.length)];
    const size = 4 + Math.random() * 6;
    const distance = 20 + Math.random() * 35;
    const rad = ((angle - 90) * Math.PI) / 180;
    const endX = x + Math.cos(rad) * distance;
    const endY = y + Math.sin(rad) * distance;

    const clump = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    clump.setAttribute("viewBox", "0 0 10 10");
    clump.setAttribute("width", String(size));
    clump.setAttribute("height", String(size));
    clump.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg);
      pointer-events: none;
      z-index: 9998;
      transition: left 0.5s cubic-bezier(0.22,0.61,0.36,1), top 0.5s cubic-bezier(0.22,0.61,0.36,1), opacity 0.5s ease, transform 0.5s ease;
      opacity: 1;
    `;

    // Irregular blob shape
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 1 C7 1 9 3 8.5 5.5 C8 8 6 9.5 4 9 C2 8.5 0.5 6.5 1 4 C1.5 1.5 3 1 5 1Z");
    path.setAttribute("fill", color);
    clump.appendChild(path);
    container.appendChild(clump);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        clump.style.left = `${endX}px`;
        clump.style.top = `${endY}px`;
        clump.style.opacity = "0";
        clump.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 180}deg) scale(0.3)`;
      });
    });

    setTimeout(() => clump.remove(), 550);
  }
}

function spawnLeaves(x: number, y: number) {
  const count = 6;
  const container = document.getElementById("garden-cursor-container");
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const id = ++leafCounter;
    const angle = (360 / count) * i + Math.random() * 20 - 10;
    const color = LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)];
    const scale = 0.7 + Math.random() * 0.6;
    const distance = 28 + Math.random() * 24;
    const rad = ((angle - 90) * Math.PI) / 180;
    const endX = x + Math.cos(rad) * distance;
    const endY = y + Math.sin(rad) * distance;

    const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    leaf.setAttribute("viewBox", "0 0 12 16");
    leaf.setAttribute("width", "12");
    leaf.setAttribute("height", "16");
    leaf.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      transform: translate(-50%, -50%) scale(${scale}) rotate(${angle}deg);
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.6s cubic-bezier(0.22,0.61,0.36,1), opacity 0.6s ease;
      opacity: 1;
    `;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M6 0 C6 0 12 4 12 9 C12 13 9 16 6 16 C3 16 0 13 0 9 C0 4 6 0 6 0Z"
    );
    path.setAttribute("fill", color);
    leaf.appendChild(path);
    container.appendChild(leaf);

    // Animate out
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        leaf.style.left = `${endX}px`;
        leaf.style.top = `${endY}px`;
        leaf.style.opacity = "0";
        leaf.style.transform = `translate(-50%, -50%) scale(${scale * 0.4}) rotate(${angle + 60}deg)`;
      });
    });

    setTimeout(() => {
      leaf.remove();
    }, 650);
  }
}

export default function GardenCursor() {
  const handleClick = useCallback((e: MouseEvent) => {
    spawnLeaves(e.clientX, e.clientY);
    spawnMud(e.clientX, e.clientY);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div
      id="garden-cursor-container"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}
    />
  );
}
