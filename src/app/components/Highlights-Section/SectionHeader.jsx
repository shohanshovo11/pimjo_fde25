export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <header className={className}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
