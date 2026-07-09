import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

type HeroProps = {
  onNeedHelp: () => void;
};

const stats = [
  { label: "Years in business", value: "14+" },
  { label: "Delivery coverage", value: "Nationwide" },
  { label: "Support", value: "Same team" },
];

export default function Hero({ onNeedHelp }: HeroProps) {
  const primaryPhone = business.phones[0];

  return (
    <section id="top" className="scroll-mt-24 overflow-x-hidden bg-surface px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
      <div className="relative overflow-hidden rounded-[26px] bg-paper sm:rounded-[34px]">
        {/* faint dot-grid backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            color: "rgb(43 46 131 / 0.06)",
          }}
        />

        {/* diagonal color slice — adds editorial energy without covering content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-1/4 -top-1/3 h-[140%] w-[65%] rotate-[-14deg] bg-gradient-to-b from-navy/[0.07] via-cyan/[0.06] to-transparent"
        />

        {/* decorative gradient orbs for atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-navy/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-cyan/15 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber/15 blur-[110px]"
        />

        <div className="relative mx-auto grid min-w-0 max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="min-w-0">
            <Reveal delay={0}>
              <p className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 font-mono text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(43,46,131,0.28)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Computer &amp; POS sales · Nationwide delivery from Abuja
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 max-w-lg break-words font-display text-[38px] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[52px]">
                Tech that{" "}
                <span className="relative inline-block whitespace-nowrap text-cyan-deep">
                  <span className="relative z-10">works</span>
                  <svg
                    className="pointer-events-none absolute -inset-x-2 -bottom-3 h-4 w-[calc(100%+16px)]"
                    viewBox="0 0 140 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="nn-underline-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2b2e83" />
                        <stop offset="55%" stopColor="#17a3e8" />
                        <stop offset="100%" stopColor="#f2a93c" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M4 12C30 4 100 4 136 12"
                      fill="none"
                      stroke="url(#nn-underline-grad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      pathLength="1"
                      className="nn-circle-draw"
                    />
                  </svg>
                </span>
                , and people who fix it when it doesn&apos;t.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-md break-words text-[15.5px] leading-relaxed text-muted">
                NEW-NET supplies laptops, desktops, printers, POS systems,
                barcode and biometric equipment, CCTV, networking gear and
                more — delivers anywhere in Nigeria, with our own engineers
                on hand to install, service and repair what we sell.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNeedHelp}
                  className="rounded-full bg-gradient-to-r from-navy to-cyan-deep px-7 py-3.5 font-display text-[14px] font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(43,46,131,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(23,163,232,0.34)]"
                >
                  Chat with us on WhatsApp
                </button>

                <a
                  href={callLink(primaryPhone.intl)}
                  className="rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-display text-[14px] font-bold tracking-wide text-ink transition-colors hover:border-cyan hover:text-cyan-deep"
                >
                  Call {primaryPhone.display}
                </a>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-4 flex items-center gap-2 text-[12.5px] font-semibold text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                Support online now
              </p>
            </Reveal>

            {/* trust-stat row — solid color chips for extra energy */}
            <Reveal delay={300}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {stats.map((stat, i) => {
                  const styles = [
                    "bg-navy text-white",
                    "bg-cyan-deep text-white",
                    "bg-amber text-navy-dark",
                  ];
                  return (
                    <div
                      key={stat.label}
                      className={[
                        "rounded-2xl px-4 py-2.5 shadow-[0_8px_18px_rgba(15,17,45,0.12)]",
                        styles[i % styles.length],
                      ].join(" ")}
                    >
                      <p className="font-display text-[15px] font-extrabold leading-tight">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] opacity-85">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-7 w-full min-w-0 max-w-md">
                <Marquee position="static" speed={70} gap={40}>
                  {business.products.map((product) => (
                    <span
                      key={product}
                      className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-cyan" />
                      {product}
                    </span>
                  ))}
                </Marquee>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <SignalDivider className="mt-8 h-4 w-32 text-line" />
            </Reveal>
          </div>

          {/* Signature element: how we work — sales into service */}
          <Reveal
            delay={200}
            direction="left"
            className="relative mx-auto hidden w-full max-w-sm min-w-0 md:block"
          >
            <div className="nn-float relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-navy/15 via-amber/10 to-cyan/15 blur-2xl"
              />

              {/* solid badge ribbon, Konga-style confident accent */}
              <div className="absolute -right-3 -top-3 z-10 rotate-3 rounded-xl bg-amber px-3 py-1.5 shadow-[0_10px_22px_rgba(217,138,28,0.35)]">
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.06em] text-navy-dark">
                  Trusted supplier
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-[0_25px_70px_rgba(43,46,131,0.16)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-navy via-amber to-cyan-deep"
                />

                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-deep">
                  How we work
                </p>

                <div className="relative mt-5 pl-11">
                  <svg
                    className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-4 text-line"
                    viewBox="0 0 16 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line
                      x1="8"
                      y1="0"
                      x2="8"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="1 8"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="relative flex gap-4 pb-8">
                    <span className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full bg-amber text-navy-dark shadow-[0_6px_14px_rgba(217,138,28,0.3)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="12" rx="1.5" />
                        <path d="M2 20h20" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display text-[14.5px] font-semibold text-ink">
                        We supply it
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">
                        Computers, POS, security and networking gear,
                        sourced and shipped nationwide.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex gap-4">
                    <span className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-deep text-white shadow-[0_6px_14px_rgba(13,132,194,0.3)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.7 6.3a3 3 0 0 0-4.2 4.2L4 17v3h3l6.5-6.5a3 3 0 0 0 4.2-4.2l-2.5 2.5-2-2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display text-[14.5px] font-semibold text-ink">
                        Our engineers keep it running
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">
                        Same team installs, services and repairs everything
                        we sell.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-navy px-4 py-3.5">
                  <p className="text-[12.5px] leading-relaxed text-white/90">
                    One team, start to finish — no handing you off to a
                    third-party repair shop.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes nn-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .nn-float {
          animation: nn-float 5.5s ease-in-out infinite;
        }

        @keyframes nn-circle-draw {
          from { stroke-dasharray: 1; stroke-dashoffset: 1; }
          to { stroke-dasharray: 1; stroke-dashoffset: 0; }
        }
        .nn-circle-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: nn-circle-draw 0.9s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 0.7s;
        }

        @media (prefers-reduced-motion: reduce) {
          .nn-float, .nn-circle-draw {
            animation: none !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}