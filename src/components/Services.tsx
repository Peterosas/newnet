import type { ReactElement } from "react";
import { business } from "../data/business";

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
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
          What we do
        </p>
        <h2 className="mt-2 max-w-lg font-display text-[26px] font-bold tracking-tight text-ink sm:text-[30px]">
          Beyond the sale.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-navy/40"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-navy"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[service.title]}
              </svg>
              <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}