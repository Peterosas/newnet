"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type MarqueePosition = "sticky" | "fixed" | "absolute" | "static";

type MarqueeProps = {
  children: ReactNode;
  /** seconds for one full loop of auto-scroll */
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
  position?: MarqueePosition;
  zIndex?: number;
  fadeColor?: string;
  /** show left/right nudge buttons */
  showControls?: boolean;
};

export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className = "",
  gap = 48,
  position = "absolute",
  zIndex = 30,
  fadeColor = "transparent",
  showControls = true,
}: MarqueeProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);

  const offsetRef = useRef(0);
  const directionRef = useRef(reverse ? 1 : -1);
  const pausedRef = useRef(false);
  const nudgeUntilRef = useRef(0);
  const rafRef = useRef<number>();
  const lastTsRef = useRef<number>();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Measure one copy's width (content + trailing gap) so we know the loop distance
  useEffect(() => {
    const measure = () => {
      if (copyRef.current) {
        const w = copyRef.current.scrollWidth + gap;
        setCopyWidth(w);
      }
    };
    measure();
    const raf1 = requestAnimationFrame(() => requestAnimationFrame(measure));
    const ro = new ResizeObserver(measure);
    if (copyRef.current) ro.observe(copyRef.current);
    return () => {
      cancelAnimationFrame(raf1);
      ro.disconnect();
    };
  }, [gap, children]);

  // Continuous auto-scroll loop, driven by transform (not native scrollLeft)
  useEffect(() => {
    if (reducedMotion || !copyWidth || !trackRef.current) return;

    const pxPerSecond = copyWidth / speed;

    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const isNudging = ts < nudgeUntilRef.current;

      if (!pausedRef.current && !isNudging) {
        offsetRef.current += pxPerSecond * dt * directionRef.current;
        if (offsetRef.current <= -copyWidth) offsetRef.current += copyWidth;
        if (offsetRef.current > 0) offsetRef.current -= copyWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = undefined;
    };
  }, [copyWidth, speed, reducedMotion]);

  const nudge = (dir: 1 | -1) => {
    if (!copyWidth) return;
    offsetRef.current += dir * 160;
    if (offsetRef.current <= -copyWidth) offsetRef.current += copyWidth;
    if (offsetRef.current > 0) offsetRef.current -= copyWidth;
    // briefly hold the auto-scroll so the nudge is visible, then resume
    nudgeUntilRef.current = performance.now() + 700;
  };

  const positionClasses =
    position === "fixed"
      ? "fixed inset-x-0 bottom-0"
      : position === "sticky"
      ? "sticky bottom-0"
      : position === "absolute"
      ? "absolute inset-x-0 bottom-0"
      : "relative";

  const wrapperStyle = {
    "--nn-marquee-gap": `${gap}px`,
    "--nn-marquee-fade": fadeColor,
    ...(position !== "static" ? { zIndex } : {}),
  } as React.CSSProperties;

  if (reducedMotion) {
    return (
      <div
        className={`flex flex-wrap items-center ${positionClasses} ${className}`}
        style={{ ...wrapperStyle, gap }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`nn-marquee-row flex items-center gap-2.5 ${positionClasses} ${className}`}
      style={wrapperStyle}
      onMouseEnter={() => {
        if (pauseOnHover) pausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (pauseOnHover) pausedRef.current = false;
      }}
    >
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max items-center will-change-transform"
          style={{ gap: "var(--nn-marquee-gap)" }}
        >
          <div ref={copyRef} className="flex shrink-0 items-center" style={{ gap: "var(--nn-marquee-gap)" }}>
            {children}
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true" style={{ gap: "var(--nn-marquee-gap)" }}>
            {children}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--nn-marquee-fade)] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--nn-marquee-fade)] to-transparent"
        />
      </div>

      {showControls && (
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => nudge(1)}
            className="group/btn flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy to-[#5b5ff5] text-white shadow-[0_6px_16px_rgba(43,46,131,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(43,46,131,0.4)] active:translate-y-0 active:shadow-[0_4px_10px_rgba(43,46,131,0.3)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:-translate-x-0.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => nudge(-1)}
            className="group/btn flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-navy to-[#5b5ff5] text-white shadow-[0_6px_16px_rgba(43,46,131,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(43,46,131,0.4)] active:translate-y-0 active:shadow-[0_4px_10px_rgba(43,46,131,0.3)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}