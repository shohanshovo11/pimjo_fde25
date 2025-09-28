export default function SectionBadge({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-lg bg-[#3758F90D] text-[#3758F9] text-md font-medium px-3 py-1"
      style={{ letterSpacing: "-0.2px", lineHeight: "16px" }}
    >
      {children}
    </span>
  );
}
