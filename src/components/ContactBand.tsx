import { business } from "../data/business";

export default function ContactBand() {
  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
          Visit or reach us
        </p>
        <h2 className="mt-2 max-w-lg font-display text-[26px] font-bold tracking-tight text-white sm:text-[30px]">
          Come see us, or reach out first.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-wide text-cyan">
              Locations
            </h3>
            <ul className="mt-3 space-y-3">
              {business.addresses.map((address) => (
                <li key={address} className="text-[13.5px] leading-relaxed text-white/80">
                  {address}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-wide text-cyan">
              Phone
            </h3>
            <ul className="mt-3 space-y-2 font-mono text-[14px] text-white/90">
              {business.phones.map((phone) => (
                <li key={phone.intl}>
                  <a href={`tel:+${phone.intl}`} className="transition-colors hover:text-cyan">
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-wide text-cyan">
              Email &amp; web
            </h3>
            <ul className="mt-3 space-y-2 font-mono text-[13px] text-white/90">
              {business.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="break-all transition-colors hover:text-cyan">
                    {email}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-white/70">{business.website}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}