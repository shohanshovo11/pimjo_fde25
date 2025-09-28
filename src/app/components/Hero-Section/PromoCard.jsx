import Image from "next/image";

export default function PromoCard({
  brand = "XIAOMI",
  title = "Smart Security\nHome Camera",
  ctaLabel = "Shop Now",
  onCtaClick,
  imgSrc = "/images/xiaomi-camera.png",
  imgAlt = "Smart Security Home Camera",
}) {
  return (
    <section className="w-full h-full rounded-xl border border-gray-200 bg-gray-50 flex flex-col">
      <div className="grid grid-cols-2 gap-2 items-center px-5 py-4 flex-1">
        {/* Left: copy & CTA */}
        <div className="pr-2">
          <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
            {brand}
          </p>

          <h3 className="mt-1 text-[18px] leading-[22px] font-semibold text-gray-800 whitespace-pre-line">
            {title}
          </h3>

          <button
            type="button"
            onClick={onCtaClick}
            className="mt-3 inline-flex h-8 items-center rounded-lg bg-[#3B82F6] px-4 text-sm font-medium text-white shadow-sm hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
          >
            {ctaLabel}
          </button>
        </div>

        {/* Right: product image */}
        <div className="flex justify-end">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={128}
            height={128}
            className="h-24 w-auto md:h-28 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
