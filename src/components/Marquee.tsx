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
  speed = 60,
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);
  const directionRef = useRef(reverse ? -1 : 1);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>();
  const lastTsRef = useRef<number>();
  const resumeTimeoutRef = useRef<number>();

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
      if (copyRef.current) setCopyWidth(copyRef.current.scrollWidth + gap);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (copyRef.current) ro.observe(copyRef.current);
    return () => ro.disconnect();
  }, [gap, children]);

  // Auto-scroll loop
  useEffect(() => {
    if (reducedMotion || !copyWidth) return;
    const el = scrollerRef.current;
    if (!el) return;

    if (directionRef.current === -1 && el.scrollLeft === 0) {
      el.scrollLeft = copyWidth;
    }

    const pxPerSecond = copyWidth / speed;

    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        el.scrollLeft += pxPerSecond * dt * directionRef.current;
        if (el.scrollLeft >= copyWidth) el.scrollLeft -= copyWidth;
        else if (el.scrollLeft <= 0) el.scrollLeft += copyWidth;
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
    const el = scrollerRef.current;
    if (!el) return;
    pausedRef.current = true;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
    window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 1400);
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

  return (
    <div
      className={`nn-marquee-viewport group relative ${positionClasses} ${className}`}
      style={wrapperStyle}
      onMouseEnter={() => {
        if (pauseOnHover) pausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (pauseOnHover) pausedRef.current = false;
      }}
    >
      <div
        ref={scrollerRef}
        className="nn-marquee-scroller flex w-full items-center overflow-x-auto"
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

      {showControls && (
        <>
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => nudge(-1)}
            className="absolute -left-1 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-muted shadow-sm transition-colors hover:text-ink"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => nudge(1)}
            className="absolute -right-1 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-muted shadow-sm transition-colors hover:text-ink"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <style>{`
        .nn-marquee-scroller::-webkit-scrollbar { display: none; }
        .nn-marquee-scroller { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </div>
  );
}