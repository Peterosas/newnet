import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
        <span className="font-display text-[13px] font-semibold tracking-tight text-white/70">
          {business.name} · {business.fullName}
        </span>
        <span className="font-mono text-[11.5px] text-white/40">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
}