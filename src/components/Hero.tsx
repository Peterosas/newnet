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
          <SignalDivider className="nn-reveal mt-10 h-4 w-32 text-line [animation-delay:320ms]" />
          <ul className="nn-reveal mt-6 flex flex-wrap gap-x-5 gap-y-2 [animation-delay:400ms]">
            {business.products.map((product) => (
              <li
                key={product}
                className="font-mono text-[11.5px] uppercase tracking-wide text-muted"
              >
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Signature element: an animated computer icon badge */}
        <div className="nn-reveal relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center md:flex [animation-delay:200ms]">
          <div className="nn-float relative flex h-full w-full items-center justify-center">
            {/* ambient glow */}
            <div
              aria-hidden="true"
              className="absolute h-4/5 w-4/5 rounded-full bg-navy/10 blur-2xl"
            />

            <svg
              viewBox="0 0 200 200"
              className="relative h-full w-full text-navy"
              aria-hidden="true"
            >
              {/* outer badge ring, slowly rotating */}
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.12"
                strokeWidth="1.5"
              />
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="1.5"
                strokeDasharray="1 13"
                className="nn-badge-spin"
              />

              {/* connectivity arcs, top-right */}
              <g className="text-cyan">
                <path
                  d="M138 62c6-6 6-16 0-22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="nn-wave"
                  style={{ animationDelay: "0ms" }}
                />
                <path
                  d="M147 71c11-11 11-29 0-40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="nn-wave"
                  style={{ animationDelay: "260ms" }}
                />
                <path
                  d="M156 80c16-16 16-42 0-58"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="nn-wave"
                  style={{ animationDelay: "520ms" }}
                />
              </g>

              {/* laptop line-art */}
              <rect
                x="58"
                y="64"
                width="84"
                height="54"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
              />
              <rect
                x="66"
                y="72"
                width="68"
                height="38"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="1.6"
              />
              <path
                d="M48 120 L152 120 L163 137 L37 137 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              <line
                x1="94"
                y1="129"
                x2="106"
                y2="129"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* power indicator, blinking */}
              <circle cx="100" cy="91" r="3.4" className="nn-power-dot text-cyan" fill="currentColor" />
            </svg>
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

        @keyframes nn-badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .nn-badge-spin {
          transform-origin: 100px 100px;
          animation: nn-badge-spin 40s linear infinite;
        }

        @keyframes nn-wave-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
        .nn-wave {
          animation: nn-wave-pulse 2.2s ease-in-out infinite;
        }

        @keyframes nn-power-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .nn-power-dot {
          animation: nn-power-blink 2s ease-in-out infinite;
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
          .nn-reveal, .nn-float, .nn-badge-spin, .nn-wave, .nn-power-dot,
          .nn-circle-draw {
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