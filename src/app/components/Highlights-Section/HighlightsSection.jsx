import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";

export default function HighlightsSection({ title, subtitle, products = [] }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-20 py-16 md:py-[112px]">
        {/* Header (centered, max width 640px) */}
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className="max-w-full md:max-w-[640px] mx-auto text-center"
        />

        {/* Cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-0 md:px-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
