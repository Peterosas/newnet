import {
  Children,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms before the animation starts, once visible */
  delay?: number;
  /** ms the animation takes */
  duration?: number;
  direction?: Direction;
  /** px travelled from the offset position */
  distance?: number;
  /** 0–1, how much of the element must be visible to trigger */
  threshold?: number;
  /** if false, re-triggers every time it enters/leaves the viewport */
  once?: boolean;
};

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 20,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const { x, y } = offsets[direction];

  return (
    // @ts-expect-error -- ref typing is intentionally loose to allow `as`
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0)"
          : `translate3d(${x * distance}px, ${y * distance}px, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * Wraps each direct child in its own Reveal, auto-staggering the delay.
 * Handy for lists/grids (service cards, feature rows, etc).
 */
export function RevealGroup({
  children,
  stagger = 90,
  ...props
}: Omit<RevealProps, "delay" | "children"> & {
  children: ReactNode;
  stagger?: number;
}) {
  return (
    <>
      {Children.toArray(children).map((child, i) => (
        <Reveal key={i} delay={i * stagger} {...props}>
          {child}
        </Reveal>
      ))}
    </>
  );
}