import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

type HeroProps = {
  onNeedHelp: () => void;
};

export default function Hero({ onNeedHelp }: HeroProps) {
  const primaryPhone = business.phones[0];

  return (
    <section id="top" className="bg-[#eef0f4] px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
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

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <Reveal delay={0}>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
                Computer &amp; POS sales · Nationwide delivery from Abuja
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-3 max-w-lg font-display text-[36px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[48px]">
                Tech that{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">works</span>
                  <svg
                    className="pointer-events-none absolute -inset-x-3 -top-3 -bottom-2 h-[calc(100%+20px)] w-[calc(100%+24px)]"
                    viewBox="0 0 160 70"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 38C8 16 40 6 80 6C118 6 152 14 150 36C148 56 112 62 78 61C42 60 10 54 12 34"
                      fill="none"
                      stroke="#2b2e83"
                      strokeWidth="4"
                      strokeLinecap="round"
                      pathLength="1"
                      className="nn-circle-draw text-navy"
                    />
                  </svg>
                </span>
                , and people who fix it when it doesn&apos;t.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                NEW-NET supplies laptops, desktops, printers, POS systems,
                barcode and biometric equipment, CCTV, networking gear and
                more — delivered anywhere in Nigeria, with our own engineers
                on hand to install, service and repair what we sell.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onNeedHelp}
                  className="rounded-full bg-navy px-6 py-3 font-display text-[13.5px] font-semibold tracking-wide text-white transition-colors hover:bg-navy-dark"
                >
                  Chat with us on WhatsApp
                </button>

                <a
                  href={callLink(primaryPhone.intl)}
                  className="rounded-full border border-line bg-white px-6 py-3 font-display text-[13.5px] font-semibold tracking-wide text-ink transition-colors hover:border-navy"
                >
                  Call {primaryPhone.display}
                </a>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-4 flex items-center gap-2 text-[12.5px] font-medium text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                Support online now
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-5 max-w-md">
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

            <Reveal delay={360}>
              <SignalDivider className="mt-8 h-4 w-32 text-line" />
            </Reveal>
          </div>

          {/* Signature element: how we work — sales into service */}
          <Reveal
            delay={200}
            direction="left"
            className="relative mx-auto hidden w-full max-w-sm md:block"
          >
            <div className="nn-float relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[32px] bg-navy/10 blur-2xl"
              />
              <div className="relative rounded-[28px] border border-line bg-white p-6 shadow-[0_20px_60px_rgba(43,46,131,0.12)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan">
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
                    <span className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 bg-navy/5 text-navy">
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
                    <span className="absolute -left-11 flex h-8 w-8 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 text-cyan">
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

                <div className="mt-6 rounded-2xl border border-line/70 bg-[#f7f8fb] px-4 py-3">
                  <p className="text-[12.5px] leading-relaxed text-muted">
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