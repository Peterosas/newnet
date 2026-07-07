import { business, whatsappLink } from "../data/business";
import SignalDivider from "./SignalDivider";

type ContactSheetProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactSheet({ open, onClose }: ContactSheetProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact NEW-NET on WhatsApp"
        className={`fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white shadow-2xl transition-transform duration-300 motion-reduce:transition-none ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-lg px-6 pb-8 pt-5 sm:px-8">
          <SignalDivider className="h-3 w-24 text-line" />

          <div className="mt-4 flex items-start justify-between">
            <div>
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-cyan">
                Chat on WhatsApp
              </p>
              <h3 className="mt-1 font-display text-[19px] font-bold tracking-tight text-ink">
                What can we help with?
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full border border-line p-2 text-muted transition-colors hover:border-navy hover:text-navy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            {business.quickMessages.map((item) => (
              <a
                key={item.label}
                href={whatsappLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-paper px-4 py-3.5 font-display text-[13.5px] font-medium text-ink transition-colors hover:border-whatsapp hover:bg-white"
              >
                {item.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>

          <p className="mt-5 text-center font-mono text-[11.5px] text-muted">
            Opens WhatsApp with your message pre-filled — you can edit it before sending.
          </p>
        </div>
      </div>
    </>
  );
}