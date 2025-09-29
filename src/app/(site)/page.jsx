import Hero from "../components/Hero-Section/Hero";
import CategorySection from "../components/Category-Section/CategorySection";
import categories from "@/data/category";
import HighlightsSection from "../components/Highlights-Section/HighlightsSection";
import highlights from "@/data/highlights";
import TestimonialSection from "../components/Testimonial-Section/TestimonialSection";
import testimonials from "@/data/testimonials";
import PromoTriptych from "../components/PromoTriptych";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center px-3 md:px-20">
        <div className="py-4 md:py-0">
          <Hero />
        </div>
      </div>

      {/* Category Section */}
      <CategorySection items={categories} className="bg-[#F3F4F6]" />

      {/* Highlights Section */}
      <HighlightsSection
        title="Handpicked Highlight"
        subtitle="There are many variations of available but the majority have suffered alteration in some form."
        products={highlights}
      />

      {/* Testimonial Section */}
      <TestimonialSection items={testimonials} />

      {/* Promo Section */}
      <div className="px-3 md:px-20 py-8 md:py-16">
        <PromoTriptych
          left={{ src: "/images/promo/image.jpg", alt: "Powder blue bag" }}
          right={{ src: "/images/promo/image-1.jpg", alt: "Maroon bag" }}
          title={"Don't Miss Out\n50% OFF"}
          subtitle="Get 50% Off — Limited Time Only. Refresh your wardrobe with modern essentials."
          ctaLabel="Shop now"
          className="p-3 md:p-11"
        />
      </div>
    </>
  );
}
