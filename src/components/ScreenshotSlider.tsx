"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Language, ProjectScreenshot } from "@/data/portfolioData";

const SWIPE_PX = 42;

interface ScreenshotSliderProps {
  shots: ProjectScreenshot[];
  lang: Language;
  onTap?: () => void;
  fit?: "cover" | "contain";
  sizes: string;
  index?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}

export const ScreenshotSlider: React.FC<ScreenshotSliderProps> = ({
  shots,
  lang,
  onTap,
  fit = "cover",
  sizes,
  index,
  onIndexChange,
  className = "",
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const current = index ?? internalIndex;
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const axis = useRef<"h" | "v" | null>(null);
  const dragging = useRef(false);

  const setCurrent = (next: number) => {
    const safe = ((next % shots.length) + shots.length) % shots.length;
    if (onIndexChange) onIndexChange(safe);
    else setInternalIndex(safe);
  };

  const go = (dir: number) => {
    if (shots.length < 2) return;
    setCurrent(current + dir);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    startX.current = e.clientX;
    startY.current = e.clientY;
    axis.current = null;
    dragging.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current == null || startY.current == null) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    if (!axis.current && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      axis.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
    }
    if (axis.current === "h") {
      dragging.current = true;
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    const wasHorizontal = axis.current === "h";
    const didDrag = dragging.current;
    startX.current = null;
    startY.current = null;
    axis.current = null;
    dragging.current = false;

    if (wasHorizontal && Math.abs(dx) >= SWIPE_PX) {
      go(dx < 0 ? 1 : -1);
      return;
    }
    if (!didDrag && onTap) {
      onTap();
    }
  };

  if (!shots.length) return null;

  const shot = shots[current];

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-black/60 select-none touch-pan-y ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="region"
      aria-roledescription="carousel"
      aria-label={shot.alt}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        draggable={false}
        className={`pointer-events-none ${
          fit === "contain"
            ? "object-contain"
            : "object-cover object-top"
        }`}
        sizes={sizes}
      />

      {shots.length > 1 && (
        <>
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            data-testid="slide-prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 min-h-11 min-w-11 rounded-full bg-black/75 border border-white/25 text-white text-lg leading-none pointer-events-auto"
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            type="button"
            data-testid="slide-next"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 min-h-11 min-w-11 rounded-full bg-black/75 border border-white/25 text-white text-lg leading-none pointer-events-auto"
            aria-label="Next screenshot"
          >
            ›
          </button>
          <div className="absolute bottom-2.5 inset-x-0 z-20 flex justify-center gap-1.5 pointer-events-auto">
            {shots.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === current ? "w-4 bg-sky-400" : "w-2 bg-white/45"
                }`}
                aria-label={item.caption?.[lang] || item.alt}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
