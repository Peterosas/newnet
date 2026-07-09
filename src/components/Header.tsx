import { useEffect, useMemo, useState } from "react";
import { business } from "../data/business";
import logoText from "../assets/logo-text.png";

type HeaderProps = {
  onNeedHelp: () => void;
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ onNeedHelp }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = mobileOpen ? "hidden" : "";

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleInitialHash = () => {
      if (window.location.hash && navLinks.some((l) => l.href === window.location.hash)) {
        setActiveSection(window.location.hash);
      }
    };

    handleInitialHash();

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={[
            "relative rounded-2xl border transition-all duration-300",
            scrolled
              ? "border-black/10 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.10)]"
              : "border-black/5 bg-white/95 backdrop-blur-lg",
          ].join(" ")}
        >
          <div
            className={[
              "flex items-center justify-between px-3 sm:px-5 transition-all duration-300",
              scrolled ? "h-14" : "h-16",
            ].join(" ")}
          >
            <a href="#top" className="flex items-center">
              <img
                src={logoText}
                alt={business.name}
                className={[
                  "w-auto transition-all duration-300",
                  scrolled ? "h-8" : "h-9 sm:h-10",
                ].join(" ")}
              />
            </a>

            <nav className="hidden md:flex md:items-center">
              <div
                className={[
                  "flex items-center gap-1 rounded-full border border-black/5 bg-black/[0.03] p-1 transition-all duration-300",
                  scrolled ? "scale-[0.97]" : "scale-100",
                ].join(" ")}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                  <a 
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={[
                        "group relative rounded-full px-4 py-2 text-[13px] font-display font-medium tracking-wide transition-all duration-300",
                        isActive
                          ? "bg-white text-navy shadow-sm"
                          : "text-muted hover:bg-white hover:text-ink",
                      ].join(" ")}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span
                        className={[
                          "absolute inset-x-3 bottom-1.5 h-[2px] rounded-full bg-gradient-to-r from-navy to-[#5b5ff5] transition-all duration-300",
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 origin-left group-hover:scale-x-100 group-hover:opacity-100",
                        ].join(" ")}
                      />
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={"tel:+" + business.phoneIntl}
                className="hidden lg:flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-2 text-[12px] font-medium text-muted transition-all duration-300 hover:border-navy/20 hover:text-ink"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {business.phone}
              </a>

              <button
                onClick={onNeedHelp}
                className={[
                  "hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy to-[#5b5ff5] font-display text-[12.5px] font-semibold tracking-wide text-white shadow-[0_8px_25px_rgba(43,46,131,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(43,46,131,0.32)]",
                  scrolled ? "px-4 py-2.5" : "px-5 py-2.5",
                ].join(" ")}
              >
                Get in touch
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/80 text-ink transition-all duration-300 hover:bg-black/[0.03] md:hidden"
              >
                <span className="sr-only">Toggle menu</span>

                <span
                  className={[
                    "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                    mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                    mobileOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                    mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                  ].join(" ")}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        className={[
          "fixed inset-0 z-40 bg-slate-950/50 transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer panel — solid, full-height, slides in from the right */}
      <div
        id="mobile-nav"
        className={[
          "fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-[0_0_60px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <img src={logoText} alt={business.name} className="h-8 w-auto" />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.03] text-ink transition-colors hover:bg-black/[0.06]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={[
                  "group flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-display font-medium transition-all duration-300",
                  mobileOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  isActive
                    ? "bg-navy/6 text-navy"
                    : "text-ink/80 hover:bg-navy/5 hover:text-navy",
                ].join(" ")}
                style={{
                  transitionDelay: mobileOpen ? `${90 + index * 60}ms` : "0ms",
                }}
              >
                <span>{link.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className={[
                    "transition-all duration-300",
                    isActive ? "translate-x-1" : "group-hover:translate-x-1",
                  ].join(" ")}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            );
          })}
        </nav>

        <div
          className={[
            "border-t border-black/5 bg-black/[0.015] p-4 transition-all duration-300",
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          ].join(" ")}
          style={{ transitionDelay: mobileOpen ? "270ms" : "0ms" }}
        >
          <a 
            href={"tel:+" + business.phoneIntl}
            className="flex items-center gap-2 px-1 text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {business.phone}
          </a>

          <button
            onClick={() => {
              setMobileOpen(false);
              onNeedHelp();
            }}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy to-[#5b5ff5] px-5 py-3.5 text-center text-[13.5px] font-semibold tracking-wide text-white shadow-[0_10px_25px_rgba(43,46,131,0.22)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}