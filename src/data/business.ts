// Business details taken directly from the NEW-NET company card.
// Update this file only — every component reads from here.
export const business = {
  name: "NEW-NET",
  fullName: "New-Net Services Nigeria Limited",
  tagline: "Computer Sales",
  phones: [
    { label: "Primary", display: "0803 787 6703", intl: "2348037876703" },
    { label: "Alt", display: "0805 688 2218", intl: "2348056882218" },
    { label: "Alt", display: "0803 952 4104", intl: "2348039524104" },
  ],
  // Number used for the WhatsApp click-to-chat link
  whatsappIntl: "2348037876703",
  emails: ["gregeze@new-netservices.com", "newnetnig@yahoo.com"],
  website: "www.new-netservices.com",
  addresses: [
    "Suite 9, (Back Space) Zone 3 Shopping Complex, Wuse, Abuja",
    "Suite A2, Intercontinental Plaza, Plot 507, Adjacent Zone 3 Shopping Complex, Wuse Zone 3, Abuja",
  ],
  services: [
    {
      title: "Accessories",
      description:
        "Genuine laptop chargers, batteries, bags, storage drives and every accessory your device needs.",
    },
    {
      title: "Networking",
      description:
        "Structured cabling, routers, switches and network setup for homes, offices and organisations.",
    },
    {
      title: "Maintenance",
      description:
        "Diagnostics, repairs and servicing to keep your laptops and desktops running reliably.",
    },
    {
      title: "Engineering Services",
      description:
        "Hands-on technical support and installation work carried out by our in-house engineers.",
    },
  ],
  // Products, used on the Home/Hero section as an eyebrow list rather than
  // a shop grid — this is an info site, not a storefront.
  products: [
    "Laptops & Desktops",
    "HP, Canon & Epson Printers",
    "POS Systems & Receipt Printers",
    "Barcode Scanners & Printers",
    "Biometric Attendance Systems",
    "CCTV Cameras",
    "Routers, Switches & Networking",
    "Money Counting Machines",
  ],
  // Preset WhatsApp messages shown in the contact sheet
  quickMessages: [
    {
      label: "Laptops & desktops",
      message: "Hi NEW-NET, I'd like to ask about laptops/desktops in stock.",
    },
    {
      label: "Printers & POS",
      message: "Hi NEW-NET, I'd like to ask about printers or POS systems.",
    },
    {
      label: "Networking & CCTV",
      message: "Hi NEW-NET, I'd like to ask about networking or CCTV setup.",
    },
    {
      label: "Repairs & maintenance",
      message: "Hi NEW-NET, I have a device that needs repair or servicing.",
    },
    {
      label: "Something else",
      message: "Hi NEW-NET, I'd like to enquire about your products/services.",
    },
  ],
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export function callLink(intlNumber: string): string {
  return `tel:+${intlNumber}`;
}