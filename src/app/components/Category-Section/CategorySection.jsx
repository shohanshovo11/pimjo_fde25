import CategoryCard from "./CategoryCard";

export default function CategorySection({
  title = "Shop by Category",
  subtitle = "Explore our curated selection of products across premium categories, from everyday essentials to exclusive limited collections.",
  items = [],
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-20 py-8 md:py-28">
        {/* header */}
        <header className="mb-6 flex flex-col items-start text-left px-0 md:px-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <div className="mt-3 md:mt-4 text-[#6B7280] max-w-full md:max-w-lg font-normal text-sm md:text-base">
              {subtitle}
            </div>
          ) : null}
        </header>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-8 md:mt-16 px-0 md:px-8">
          {items.map((it) => (
            <CategoryCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
