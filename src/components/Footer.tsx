import { business, callLink } from "../data/business";
import SignalDivider from "./SignalDivider";
import ScrollToTop from "./ScrollToTop";

const exploreLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

type FooterProps = {
  onNeedHelp: () => void;
};

export default function Footer({ onNeedHelp }: FooterProps) {
  const primaryPhone = business.phones[0];

  return (
    <footer className="relative bg-navy-dark">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />

      {/* CTA banner */}
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
              Talk to us
            </p>
            <h2 className="mt-3 max-w-md font-display text-[26px] font-bold leading-tight tracking-tight text-white sm:text-[32px]">
              Something to install, or something to fix?
            </h2>
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center gap-3">
            <button
              onClick={onNeedHelp}
              className="rounded-full bg-cyan px-6 py-3 font-display text-[13.5px] font-semibold tracking-wide text-navy-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(91,255,240,0.25)]"
            >
              Chat with us on WhatsApp
            </button>
            <a
              href={callLink(primaryPhone.intl)}
              className="rounded-full border border-white/15 px-6 py-3 font-display text-[13.5px] font-semibold tracking-wide text-white/85 transition-colors hover:border-cyan/50 hover:text-white"
            >
              Call {primaryPhone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 text-white/85 transition-colors hover:text-white"
            >
              <svg width="26" height="26" viewBox="0 0 40 40" aria-hidden="true">
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="14,28 14,12 26,28 26,12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                {business.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/50">
              {business.fullName} — computer sales and engineering across
              Abuja. We install, service and repair what we sell.
            </p>

            {/*
              Optional: add a socials array to data/business.ts
              (e.g. business.socials = [{ label: "Instagram", href: "..." }])
              and map it here as a row of small icon links.
            */}
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
              Explore
            </p>
            <SignalDivider className="mt-3 h-3 w-16 text-white/10" />
            <ul className="mt-4 flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-white/60 transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
              Get in touch
            </p>
            <SignalDivider className="mt-3 h-3 w-16 text-white/10" />
            <ul className="mt-4 flex flex-col gap-2.5">
              {business.phones.map((phone) => (
                <li key={phone.intl}>
                  <a
                    href={callLink(phone.intl)}
                    className="text-[13.5px] text-white/60 transition-colors hover:text-cyan"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              {/*
                Optional: business.email / business.address once available
                <li className="text-[13.5px] text-white/60">{business.email}</li>
                <li className="text-[13.5px] text-white/60">{business.address}</li>
              */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
          <span className="font-mono text-[11.5px] text-white/40">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}