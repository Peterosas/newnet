type SignalDividerProps = {
  className?: string;
};

// A thin pulse/zigzag line echoing the stylised "N" signal mark in the
// NEW-NET logo. Used as a section divider and on the contact sheet.
export default function SignalDivider({ className = "" }: SignalDividerProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points="0,12 90,12 110,2 130,22 150,12 400,12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}