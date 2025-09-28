import SectionBadge from "./SectionBadge";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection({ items = [] }) {
  return (
    <section className="w-full bg-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-4 md:px-28 py-16 md:py-[112px]">
        {/* Header */}
        <div className="max-w-full md:max-w-[640px]">
          <SectionBadge>Testimonial</SectionBadge>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight">
            Hear from Our Happy <br className="hidden md:block" /> Customers
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
