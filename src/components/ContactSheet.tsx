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
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact NEW-NET on WhatsApp"
        className={`fixed inset-x-0 bottom-0 z-50 overflow-hidden rounded-t-[32px] bg-white shadow-[0_-20px_60px_rgba(15,23,42,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* top accent line, matching header/footer brand thread */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-whatsapp/60 to-transparent"
        />

        <div className="mx-auto max-w-lg px-6 pb-8 pt-3 sm:px-8">
          {/* grip handle */}
          <div className="flex justify-center">
            <span
              aria-hidden="true"
              className="h-1.5 w-10 rounded-full bg-line"
            />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.02 2c-5.5 0-9.97 4.46-9.97 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.28a9.95 9.95 0 0 0 4.66 1.17h.01c5.5 0 9.97-4.46 9.97-9.96C21.99 6.46 17.52 2 12.02 2Zm5.87 14.24c-.25.7-1.23 1.29-2.02 1.46-.55.11-1.26.2-3.65-.78-2.85-1.18-4.83-3.93-5.09-4.31-.25-.38-1.21-1.75-1.21-3.14 0-1.4.68-2.09.96-2.37.24-.24.55-.35.86-.35.11 0 .21 0 .3.01.27.01.42-.02.61.44.24.58.81 2 .88 2.14.07.14.11.31.02.49-.08.19-.13.3-.26.46-.13.16-.28.35-.4.47-.13.13-.27.28-.11.55.16.28.7 1.16 1.51 1.87 1.04.93 1.91 1.22 2.19 1.36.28.13.44.11.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.13.07.72-.18 1.42Z" />
                </svg>
              </span>
              <div>
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-cyan">
                  Chat on WhatsApp
                </p>
                <h3 className="mt-1 font-display text-[19px] font-bold tracking-tight text-ink">
                  What can we help with?
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex-shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-navy hover:text-navy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <SignalDivider className="mt-5 h-3 w-20 text-line" />

          <div className="mt-5 flex flex-col gap-2.5">
            {business.quickMessages.map((item, i) => (
              <a
                key={item.label}
                href={whatsappLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${open ? i * 60 : 0}ms` }}
                className="cs-row group flex items-center gap-3.5 rounded-2xl border border-line bg-paper px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/40 hover:bg-white hover:shadow-[0_10px_25px_-8px_rgba(37,211,102,0.25)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-navy transition-colors duration-300 group-hover:bg-whatsapp/10 group-hover:text-whatsapp">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <span className="flex-1 font-display text-[13.5px] font-medium text-ink">
                  {item.label}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-whatsapp">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </div>

          <p className="mt-5 flex items-center justify-center gap-1.5 text-center font-mono text-[11px] text-muted">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 8v4l2.5 2.5" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            Opens WhatsApp with your message pre-filled — you can edit it
            before sending.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes cs-row-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cs-row {
          animation: cs-row-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-row {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}