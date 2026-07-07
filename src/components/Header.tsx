import { business } from "../data/business";

type HeaderProps = {
  onNeedHelp: () => void;
};

export default function Header({ onNeedHelp }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="none" stroke="#2b2e83" strokeWidth="2" />
            <polyline
              points="14,28 14,12 26,28 26,12"
              fill="none"
              stroke="#2b2e83"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[17px] font-bold tracking-tight text-ink">
            {business.name}
          </span>
        </a>
        <nav className="hidden items-center gap-7 font-display text-[13px] font-medium tracking-wide text-muted md:flex">
          <a href="#about" className="transition-colors hover:text-navy">About</a>
          <a href="#services" className="transition-colors hover:text-navy">Services</a>
          <a href="#contact" className="transition-colors hover:text-navy">Contact</a>
        </nav>
        <button
          onClick={onNeedHelp}
          className="rounded-full bg-navy px-4 py-2 font-display text-[12.5px] font-semibold tracking-wide text-white transition-colors hover:bg-navy-dark sm:px-5"
        >
          Get in touch
        </button>
      </div>
    </header>
  );
}