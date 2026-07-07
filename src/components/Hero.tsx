import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";

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
            <p className="nn-reveal font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan [animation-delay:0ms]">
              Computer sales &amp; engineering · Abuja
            </p>
            <h1 className="nn-reveal mt-3 max-w-lg font-display text-[36px] font-bold leading-[1.08] tracking-tight text-ink [animation-delay:80ms] sm:text-[48px]">
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
            <p className="nn-reveal mt-5 max-w-md text-[15px] leading-relaxed text-muted [animation-delay:160ms]">
              NEW-NET supplies laptops, desktops, printers, POS and networking
              equipment to homes and businesses across Abuja — and our own
              engineers install, service and repair what we sell.
            </p>

            <div className="nn-reveal mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
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

            <p className="nn-reveal mt-4 flex items-center gap-2 text-[12.5px] font-medium text-muted [animation-delay:280ms]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Support online now
            </p>

            <SignalDivider className="nn-reveal mt-10 h-4 w-32 text-line [animation-delay:360ms]" />

            <div className="nn-reveal mt-6 [animation-delay:440ms]">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted/70">
                What we supply
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {business.products.map((product) => (
                  <li
                    key={product}
                    className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-muted"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signature element: how we work — sales into service */}
          <div className="nn-reveal relative mx-auto hidden w-full max-w-sm md:block [animation-delay:200ms]">
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
                        Laptops, printers, POS and networking gear, sourced
                        and sold direct.
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
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nn-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nn-reveal {
          opacity: 0;
          animation: nn-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

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
          .nn-reveal, .nn-float, .nn-circle-draw {
            animation: none !important;
            opacity: 1 !important;
            width: auto !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}