import { business } from "../data/business";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
        >
          <svg width="22" height="22" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="2" />
            <polyline
              points="14,28 14,12 26,28 26,12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[13px] font-semibold tracking-tight">
            {business.name}
            <span className="text-white/40"> · {business.fullName}</span>
          </span>
        </a>

        <div className="flex items-center gap-5">
          <span className="font-mono text-[11.5px] text-white/40">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          {/* <a
            href="#top"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a> */}

          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}