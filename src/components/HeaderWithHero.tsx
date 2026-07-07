import { useEffect, useRef, useState, type CSSProperties } from "react";
import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";

type HeaderWithHeroProps = {
  onNeedHelp: () => void;
};

const serviceHighlights = ["Sales", "Installation", "Repairs", "Support"];

export default function HeaderWithHero({ onNeedHelp }: HeaderWithHeroProps) {
  const primaryPhone = business.phones[0];
  const sectionRef = useRef<HTMLElement | null>(null);
  const featureCardRef = useRef<HTMLDivElement | null>(null);

  const [reduceMotion, setReduceMotion] = useState(false);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: "50%",
    glowY: "50%",
  });

  const revealStyle = (delay: number): CSSProperties =>
    ({
      ["--reveal-delay" as string]: `${delay}ms`,
    }) as CSSProperties;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);

    update();
    media.addEventListener?.("change", update);

    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (reduceMotion) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [reduceMotion]);

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !featureCardRef.current) return;

    const rect = featureCardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;

    setTilt({
      rotateX,
      rotateY,
      glowX: `${px * 100}%`,
      glowY: `${py * 100}%`,
    });
  };

  const handleCardLeave = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      glowX: "50%",
      glowY: "50%",
    });
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eef0f4] px-4 pb-4 pt-2 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white/70 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:rounded-[36px]">
          {/* ambient background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,95,245,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(43,46,131,0.10),transparent_28%)]" />
            <div
              className="absolute inset-0 opacity-[0.45]"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                color: "rgb(43 46 131 / 0.06)",
              }}
            />
            <div className="hero-orb hero-orb-a absolute left-[-8%] top-[-14%] h-56 w-56 rounded-full bg-[#5b5ff5]/10 blur-3xl" />
            <div className="hero-orb hero-orb-b absolute bottom-[-18%] right-[-6%] h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
          </div>

          <div className="relative grid gap-14 px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-18 md:grid-cols-[1.06fr_0.94fr] md:items-center lg:px-10 lg:pb-24 lg:pt-20">
            {/* LEFT */}
            <div>
              <div
                data-reveal
                style={revealStyle(0)}
                className="reveal inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-md sm:text-[11.5px]"
              >
                <span className="hero-dot inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#5b5ff5]" />
                Computer sales & engineering · Abuja
              </div>

              <h1
                data-reveal
                style={revealStyle(80)}
                className="reveal mt-5 max-w-[11ch] font-display text-[40px] font-bold leading-[0.98] tracking-[-0.04em] text-ink sm:text-[54px] lg:text-[68px]"
              >
                Tech that feels{" "}
                <span className="hero-gradient-word relative inline-block bg-gradient-to-r from-navy to-[#5b5ff5] bg-clip-text text-transparent">
                  modern
                </span>
                <br />
                to buy, use and fix.
              </h1>

              <p
                data-reveal
                style={revealStyle(160)}
                className="reveal mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-[16px]"
              >
                NEW-NET supplies laptops, desktops, printers, POS and networking
                equipment across Abuja — with in-house engineers ready to
                install, maintain and repair what you rely on every day.
              </p>

              <div
                data-reveal
                style={revealStyle(240)}
                className="reveal mt-8 flex flex-wrap items-center gap-3"
              >
                <button
                  onClick={onNeedHelp}
                  className="hero-cta group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-navy to-[#5b5ff5] px-6 py-3.5 font-display text-[13px] font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(43,46,131,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(43,46,131,0.30)]"
                >
                  <span className="hero-cta-shine" aria-hidden="true" />
                  <span className="relative z-10">Chat with us on WhatsApp</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                <a
                  href={callLink(primaryPhone.intl)}
                  className="group inline-flex items-center gap-2 rounded-full border border-black/6 bg-white/80 px-6 py-3.5 font-display text-[13px] font-semibold tracking-wide text-ink shadow-[0_8px_22px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/20 hover:bg-white"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call {primaryPhone.display}
                </a>
              </div>

              <div
                data-reveal
                style={revealStyle(320)}
                className="reveal mt-8 flex flex-wrap gap-2.5"
              >
                {["Trusted devices", "On-site engineers", "Fast response"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className="hero-pill rounded-full border border-black/5 bg-black/[0.03] px-3 py-2 text-[12px] font-medium text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/15 hover:bg-white hover:text-ink"
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <SignalDivider
                data-reveal
                style={revealStyle(400)}
                className="reveal mt-10 h-4 w-32 text-line"
              />

              <ul
                data-reveal
                style={revealStyle(480)}
                className="reveal mt-6 flex flex-wrap gap-2.5"
              >
                {business.products.map((product, index) => (
                  <li
                    key={product}
                    className="hero-chip rounded-full border border-black/5 bg-white/70 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted shadow-[0_5px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:bg-white hover:text-navy"
                    style={{ transitionDelay: `${index * 25}ms` }}
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div
              data-reveal
              style={revealStyle(200)}
              className="reveal relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full bg-cyan/15 blur-2xl sm:block" />
              <div className="absolute -right-6 bottom-6 hidden h-28 w-28 rounded-full bg-[#5b5ff5]/15 blur-2xl sm:block" />

              <div
                ref={featureCardRef}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                className="hero-tilt-card relative rounded-[30px] border border-white/70 bg-white/72 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-transform duration-200 ease-out will-change-transform sm:p-5"
                style={
                  {
                    transform: reduceMotion
                      ? undefined
                      : `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(0)`,
                    ["--glow-x" as string]: tilt.glowX,
                    ["--glow-y" as string]: tilt.glowY,
                  } as CSSProperties
                }
              >
                <div className="hero-pointer-glow absolute inset-0 rounded-[30px]" />

                <div className="relative rounded-[24px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.88))] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                        Modern service experience
                      </p>
                      <p className="mt-1 font-display text-[20px] font-semibold tracking-tight text-ink">
                        Built for sales + support
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      <span className="hero-live-dot h-2 w-2 rounded-full bg-emerald-500" />
                      Live support
                    </div>
                  </div>

                  <div className="relative mt-5 overflow-hidden rounded-[24px] border border-navy/10 bg-gradient-to-br from-navy via-[#4146bc] to-[#5b5ff5] p-5 text-white shadow-[0_18px_40px_rgba(43,46,131,0.24)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_24%)]" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full bg-white/14 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/90">
                          Abuja · In-house engineers
                        </div>

                        <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white/90">
                          <span className="hero-cyan-ping h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                          Ready to help
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-center">
                        <svg
                          viewBox="0 0 240 180"
                          className="h-auto w-full max-w-[280px] text-white"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="heroMonitorGlow" x1="0" x2="1">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.72)" />
                            </linearGradient>
                          </defs>

                          <g opacity="0.22">
                            <circle
                              cx="120"
                              cy="84"
                              r="74"
                              fill="none"
                              stroke="white"
                              strokeWidth="1.4"
                            />
                            <circle
                              cx="120"
                              cy="84"
                              r="62"
                              fill="none"
                              stroke="white"
                              strokeWidth="1.4"
                              strokeDasharray="3 10"
                              className="hero-spin-slow"
                            />
                          </g>

                          <g transform="translate(48 42)">
                            <rect
                              x="0"
                              y="0"
                              width="144"
                              height="84"
                              rx="12"
                              fill="none"
                              stroke="url(#heroMonitorGlow)"
                              strokeWidth="3"
                            />
                            <rect
                              x="12"
                              y="12"
                              width="120"
                              height="48"
                              rx="8"
                              fill="rgba(255,255,255,0.08)"
                              stroke="rgba(255,255,255,0.24)"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M56 84h32l10 18H46l10-18Z"
                              fill="none"
                              stroke="url(#heroMonitorGlow)"
                              strokeWidth="3"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24 36h38"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              opacity="0.9"
                            />
                            <path
                              d="M24 50h58"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              opacity="0.5"
                            />
                            <path
                              d="M112 22c8 8 8 22 0 30"
                              fill="none"
                              stroke="#67e8f9"
                              strokeWidth="3"
                              strokeLinecap="round"
                              className="hero-wave"
                            />
                            <path
                              d="M124 16c12 12 12 34 0 46"
                              fill="none"
                              stroke="#67e8f9"
                              strokeWidth="3"
                              strokeLinecap="round"
                              className="hero-wave"
                              style={{ animationDelay: "180ms" }}
                            />
                          </g>
                        </svg>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-2.5">
                        {serviceHighlights.map((item, index) => (
                          <div
                            key={item}
                            className="hero-service-card rounded-2xl border border-white/12 bg-white/10 px-3 py-3 text-center text-[12px] font-medium tracking-wide text-white/92 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/14"
                            style={{ transitionDelay: `${index * 40}ms` }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[22px] border border-black/5 bg-black/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-black/[0.035]">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                        Why it feels better
                      </p>
                      <ul className="mt-3 space-y-2.5 text-[13px] leading-6 text-ink/80">
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy" />
                          One brand for buying, setup and repair
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy" />
                          Clear actions with fast contact options
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-navy" />
                          Clean, premium UI aligned to your header
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-[22px] border border-black/5 bg-white/80 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                        Product focus
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {business.products.slice(0, 6).map((product) => (
                          <span
                            key={product}
                            className="rounded-full border border-navy/10 bg-navy/[0.04] px-3 py-2 text-[12px] font-medium text-navy transition-all duration-300 hover:scale-[1.03] hover:bg-navy/[0.07]"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating detail cards */}
                <div className="hero-float-a absolute -left-3 top-10 hidden rounded-2xl border border-white/80 bg-white/88 px-3 py-3 shadow-[0_14px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:block">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    Quick access
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-ink">
                    WhatsApp + Call
                  </p>
                </div>

                <div className="hero-float-b absolute -right-4 bottom-14 hidden rounded-2xl border border-white/80 bg-white/88 px-3 py-3 shadow-[0_14px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl lg:block">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                    Visual tone
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-ink">
                    Glassy + premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(22px) scale(0.985);
          filter: blur(8px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: var(--reveal-delay, 0ms);
          will-change: transform, opacity, filter;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        @keyframes heroOrbFloatA {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, 14px, 0); }
        }

        @keyframes heroOrbFloatB {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        .hero-orb-a {
          animation: heroOrbFloatA 9s ease-in-out infinite;
        }

        .hero-orb-b {
          animation: heroOrbFloatB 11s ease-in-out infinite;
        }

        @keyframes heroSpinSlow {
          from { transform: rotate(0deg); transform-origin: 120px 84px; }
          to { transform: rotate(360deg); transform-origin: 120px 84px; }
        }

        .hero-spin-slow {
          animation: heroSpinSlow 24s linear infinite;
        }

        @keyframes heroWavePulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }

        .hero-wave {
          animation: heroWavePulse 2.2s ease-in-out infinite;
        }

        @keyframes heroDotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.25); opacity: 0.75; }
        }

        .hero-dot,
        .hero-live-dot,
        .hero-cyan-ping {
          animation: heroDotPulse 2s ease-in-out infinite;
        }

        .hero-cta::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.14),
            rgba(255,255,255,0)
          );
          pointer-events: none;
        }

        .hero-cta-shine {
          position: absolute;
          inset: 0;
          left: -140%;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255,255,255,0.18) 45%,
            rgba(255,255,255,0.38) 50%,
            rgba(255,255,255,0.18) 55%,
            transparent 75%
          );
          transition: transform 0.8s ease;
          transform: translateX(0);
        }

        .hero-cta:hover .hero-cta-shine {
          transform: translateX(220%);
        }

        .hero-gradient-word::after {
          content: "";
          position: absolute;
          left: 4%;
          right: 4%;
          bottom: -6px;
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            rgba(43,46,131,0.08),
            rgba(91,95,245,0.18),
            rgba(43,46,131,0.08)
          );
          filter: blur(8px);
          opacity: 0.75;
        }

        .hero-tilt-card {
          transform-style: preserve-3d;
        }

        .hero-pointer-glow {
          pointer-events: none;
          background:
            radial-gradient(
              280px circle at var(--glow-x, 50%) var(--glow-y, 50%),
              rgba(91,95,245,0.14),
              transparent 45%
            );
          opacity: 0.95;
          transition: background-position 120ms ease;
        }

        .hero-chip,
        .hero-pill,
        .hero-service-card {
          will-change: transform;
        }

        @keyframes heroFloatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes heroFloatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }

        .hero-float-a {
          animation: heroFloatA 5.5s ease-in-out infinite;
        }

        .hero-float-b {
          animation: heroFloatB 6.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal.is-visible,
          .hero-orb-a,
          .hero-orb-b,
          .hero-spin-slow,
          .hero-wave,
          .hero-dot,
          .hero-live-dot,
          .hero-cyan-ping,
          .hero-float-a,
          .hero-float-b,
          .hero-tilt-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
          }

          .hero-cta-shine,
          .hero-pointer-glow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
