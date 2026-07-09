import { useState } from "react";
import Reveal, { RevealGroup } from "./Reveal";

import laptopImg from "../assets/products/laptop.png";
import posImg from "../assets/products/pos_1.png";
import printerImg from "../assets/products/printer.png";
import cctvImg from "../assets/products/cctv.png";
import networkingImg from "../assets/products/networking_1.png";
import biometricImg from "../assets/products/biometric.png";

type Product = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    title: "Laptops & Desktops",
    description: "New and business-grade computers for home, office and enterprise use.",
    image: laptopImg,
    tag: "Computers",
  },
  {
    title: "POS Systems",
    description: "Single and double POS terminals, receipt printers, cash drawers and price checkers.",
    image: posImg,
    tag: "Retail",
  },
  {
    title: "Printers",
    description: "HP, Canon and Epson printers for home, office and high-volume printing.",
    image: printerImg,
    tag: "Printing",
  },
  {
    title: "CCTV & Security",
    description: "Camera systems and accessories, installed and configured on-site.",
    image: cctvImg,
    tag: "Security",
  },
  {
    title: "Networking",
    description: "Routers, access points, switches and structured cabling.",
    image: networkingImg,
    tag: "Infrastructure",
  },
  {
    title: "Biometric & Attendance",
    description: "Time and attendance systems, barcode scanners and Finger Print Scanners.",
    image: biometricImg,
    tag: "Access control",
  },
];

// Ribbon-flag tag: flat left edge, pointed right edge — a slanted alternative
// to a rounded pill, angled slightly and drop-shadowed to feel "pinned" to
// the card corner rather than floating on top of it.
function RibbonTag({ label }: { label: string }) {
  return (
    <div
      className="absolute -left-1.5 top-4 z-10 -rotate-3"
      style={{ filter: "drop-shadow(0 6px 10px rgba(15,17,45,0.22))" }}
    >
      <span
        className="block bg-navy py-1.5 pl-4 pr-6 font-mono text-[10px] font-semibold uppercase tracking-wide text-white"
        style={{ clipPath: "polygon(0% 0%, 84% 0%, 100% 50%, 84% 100%, 0% 100%)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function FeaturedEquipment() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const markLoaded = (title: string) =>
    setLoadedImages((prev) => ({ ...prev, [title]: true }));

  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan-deep">
                What we stock
              </p>
              <h2 className="mt-2 max-w-lg font-display text-[28px] font-bold tracking-tight text-ink sm:text-[34px]">
                Real equipment, ready to ship.
              </h2>
            </div>
            <p className="max-w-xs text-[13.5px] leading-relaxed text-muted sm:text-right">
              A sample of what's in stock — the full catalog is larger.
              Ask us on WhatsApp for anything not shown here.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <RevealGroup stagger={80} distance={24}>
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative overflow-visible rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_18px_40px_-18px_rgba(43,46,131,0.22)]"
              >
                <RibbonTag label={product.tag} />

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-white">
                  {/* Skeleton shimmer while the image loads */}
                  {!loadedImages[product.title] && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white to-line/40" />
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    onLoad={() => markLoaded(product.title)}
                    className={[
                      "h-full w-full object-contain p-6 transition-all duration-500 group-hover:scale-105",
                      loadedImages[product.title] ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </div>

                <div className="border-t border-line/70 p-5">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}