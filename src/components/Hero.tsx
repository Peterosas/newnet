import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";

type HeroProps = {
  onNeedHelp: () => void;
};

export default function Hero({ onNeedHelp }: HeroProps) {
  const primaryPhone = business.phones[0];

  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
            Computer sales &amp; engineering · Abuja
          </p>
          <h1 className="mt-3 max-w-lg font-display text-[34px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[44px]">
            Tech that works, and people who fix it when it doesn't.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            NEW-NET supplies laptops, desktops, printers, POS and networking
            equipment to homes and businesses across Abuja — and our own
            engineers install, service and repair what we sell.
          </p>

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

          <SignalDivider className="mt-10 h-4 w-32 text-line" />

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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

        <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center md:flex">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full text-navy"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            {/* Laptop line-art, matching the wordmark's bracket-and-signal stroke language */}
            <rect x="60" y="66" width="80" height="52" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <polyline points="72,84 84,84 90,74 98,96 106,84 128,84" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan" />
            <path d="M50 118 L150 118 L160 134 L40 134 Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}