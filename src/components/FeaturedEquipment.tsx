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
    description: "Single and double POS terminals, receipt printers and cash drawers.",
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
    description: "Time and attendance systems, barcode scanners and price checkers.",
    image: biometricImg,
    tag: "Access control",
  },
];

export default function FeaturedEquipment() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const markLoaded = (title: string) =>
    setLoadedImages((prev) => ({ ...prev, [title]: true }));

  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-cyan">
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
                className="group relative overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_40px_-18px_rgba(43,46,131,0.28)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eef0f4]">
                  {/* Skeleton shimmer while the image loads */}
                  {!loadedImages[product.title] && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#eef0f4] to-[#e4e6ee]" />
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
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-navy shadow-sm backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>

                <div className="p-5">
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