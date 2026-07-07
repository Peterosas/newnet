import SignalDivider from "./SignalDivider";

const facts = [
  { label: "Based in", value: "Wuse Zone 3, Abuja" },
  { label: "Specialty", value: "Laptops & desktops" },
  { label: "Also handles", value: "Networking & repairs" },
];

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.8fr] md:gap-16">
        <div>
          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
            About us
          </p>
          <h2 className="mt-2 font-display text-[26px] font-bold tracking-tight text-ink sm:text-[30px]">
            A computer shop that also fixes things.
          </h2>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted">
            NEW-NET Services Nigeria Limited has been supplying computers and
            accessories to individuals and businesses in Abuja, alongside
            hands-on networking, maintenance and engineering support. We're
            not just a shop — our engineers set up, service and troubleshoot
            what we sell.
          </p>
          <SignalDivider className="mt-8 h-4 w-32 text-line" />
        </div>
        <dl className="grid grid-cols-1 gap-0 divide-y divide-line self-start rounded-2xl border border-line bg-paper">
          {facts.map((fact) => (
            <div key={fact.label} className="flex items-center justify-between px-5 py-4">
              <dt className="font-mono text-[12px] uppercase tracking-wide text-muted">
                {fact.label}
              </dt>
              <dd className="font-display text-[13.5px] font-semibold text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}