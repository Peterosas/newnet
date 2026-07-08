import SignalDivider from "./SignalDivider";
import Reveal from "./Reveal";

const facts = [
  {
    label: "Headquartered in",
    value: "Wuse Zone 3, Abuja",
    icon: (
      <>
        <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
  },
  {
    label: "We deliver to",
    value: "Anywhere in Nigeria",
    icon: (
      <>
        <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
      </>
    ),
  },
  {
    label: "Also handles",
    value: "Networking, POS & security setup",
    icon: (
      <>
        <circle cx="12" cy="6" r="1.9" />
        <circle cx="6" cy="17" r="1.9" />
        <circle cx="18" cy="17" r="1.9" />
        <path d="M12 7.9v3.4m0 0-4.6 3.5M12 11.3l4.6 3.5" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-y border-line bg-white">
      {/* faint dot-grid backdrop, ties back to the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "rgb(43 46 131 / 0.05)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.8fr] md:gap-16">
        <Reveal>
          <div>
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
              About us
            </p>
            <h2 className="mt-2 font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
              A computer shop that also fixes things.
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted">
              NEW-NET Services Nigeria Limited supplies computers, POS,
              security and networking equipment to individuals and
              businesses nationwide, alongside hands-on installation,
              maintenance and engineering support. We're not just a shop —
              our engineers set up, service and troubleshoot what we sell.
            </p>
            <SignalDivider className="mt-8 h-4 w-32 text-line" />
          </div>
        </Reveal>

        <dl className="grid grid-cols-1 gap-3 self-start">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={120 + i * 90} as="div">
              <div className="group flex items-center gap-4 rounded-2xl border border-line bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-[0_14px_32px_-16px_rgba(43,46,131,0.25)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/[0.06] transition-colors duration-300 group-hover:bg-cyan/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-navy"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {fact.icon}
                  </svg>
                </div>
                <div className="min-w-0">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 truncate font-display text-[14px] font-semibold text-ink">
                    {fact.value}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}