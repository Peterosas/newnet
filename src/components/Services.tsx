import type { ReactElement } from "react";
import { business } from "../data/business";
import SignalDivider from "./SignalDivider";

// One simple line-icon per service, drawn in the same stroke language as
// the wordmark and the hero graphic (currentColor, ~2px, rounded joins).
const icons: Record<string, ReactElement> = {
  Accessories: (
    <path d="M9 20V9a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v11M6 20h12" />
  ),
  Networking: (
    <>
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M12 8.2V13m0 0-4.4 3M12 13l4.4 3" />
    </>
  ),
  Maintenance: (
    <path d="m14.7 6.3 3 3-8.4 8.4-3.6.6.6-3.6 8.4-8.4Zm-2.2-2.2 2.2 2.2" />
  ),
  "Engineering Services": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2.4M12 17.6V20M20 12h-2.4M6.4 12H4M17 7l-1.7 1.7M8.7 15.3 7 17M17 17l-1.7-1.7M8.7 8.7 7 7" />
    </>
  ),
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
              What we do
            </p>
            <h2 className="mt-2 max-w-lg font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
              Beyond the sale.
            </h2>
            <SignalDivider className="mt-5 h-4 w-28 text-line" />
          </div>
          <p className="max-w-xs text-[13.5px] leading-relaxed text-muted sm:text-right">
            Every device we sell is backed by engineers who install it,
            network it, and keep it running.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {business.services.map((service, i) => (
            <div
              key={service.title}
              className="svc-card group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-18px_rgba(43,46,131,0.28)]"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* soft corner accent, grows on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-navy/[0.04] transition-transform duration-500 ease-out group-hover:scale-125"
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy/[0.06] transition-colors duration-300 group-hover:bg-cyan/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-navy"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[service.title]}
                </svg>
              </div>

              <h3 className="relative mt-5 font-display text-[15px] font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="relative mt-2 text-[13.5px] leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-card {
          opacity: 1;
        }
        @supports (animation-timeline: view()) {
          .svc-card {
            opacity: 0;
            transform: translateY(24px);
            animation: svc-reveal linear both;
            animation-timeline: view();
            animation-range: entry 0% cover 25%;
          }
        }
        @keyframes svc-reveal {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}