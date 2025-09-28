import Image from "next/image";

export default function PromoTriptych({
  left = { src: "/images/promo-left.jpg", alt: "Bag left" },
  right = { src: "/images/promo-right.jpg", alt: "Bag right" },
  title = "Don’t Miss Out\n50% OFF",
  subtitle = "Get 50% Off — Limited Time Only. Refresh your wardrobe with modern essentials.",
  ctaLabel = "Shop now",
  onCtaClick,
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Left image card */}
        <figure className="rounded-2xl overflow-hidden bg-gray-100">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={left.src}
              alt={left.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </figure>

        {/* Center offer card */}
        <div className="rounded-2xl bg-gray-50 text-center flex items-center justify-center">
          <div className="px-8 py-12 md:px-10 md:py-14">
            <h3 className="whitespace-pre-line text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              {title}
            </h3>
            <p className="mt-3 text-gray-500">{subtitle}</p>
            <button
              type="button"
              onClick={onCtaClick}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-indigo-700"
            >
              {ctaLabel}
            </button>
          </div>
        </div>

        {/* Right image card */}
        <figure className="rounded-2xl overflow-hidden bg-gray-100">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={right.src}
              alt={right.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
