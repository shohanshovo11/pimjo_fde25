import CategoryCard from "./CategoryCard";

export default function CategorySection({
  title = "Shop by Category",
  subtitle = "Explore our curated selection of products across premium categories, from everyday essentials to exclusive limited collections.",
  items = [],
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-28">
        {/* header */}
        <header className="mb-6 flex flex-col items-start text-center px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle ? (
            <div className="mt-4 text-[#6B7280] max-w-lg font-normal text-left">
              {subtitle}
            </div>
          ) : null}
        </header>

        {/* grid */}
        {/* If you don't have a custom xs breakpoint, replace xs:grid-cols-2 with sm:grid-cols-2 */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 px-8">
          {items.map((it) => (
            <CategoryCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
