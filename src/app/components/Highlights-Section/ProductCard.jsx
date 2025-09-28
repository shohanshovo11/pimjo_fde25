import Image from "next/image";
import HeartIcon from "./HeartIcon";

export default function ProductCard({ product }) {
  const {
    image, // { src, alt, width, height }
    label, // "Hot Item" (optional)
    name, // "White Jacket"
    price, // "$249.00"
    blurb, // "Lightweight & water-resistant"
    ctaVariant, // "primary" | "outline"
    onAddToCart, // optional handler
  } = product;

  const isPrimary = ctaVariant === "primary";

  return (
    <article className="bg-white overflow-hidden">
      {/* Image area */}
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 640}
          height={image.height || 480}
          className="w-full h-64 md:h-72 object-cover object-center rounded-lg"
          priority={false}
        />

        {/* Hot badge */}
        {label ? (
          <div className="absolute left-4 top-4">
            <span
              className="bg-[#FEF2F2] inline-flex items-center justify-center rounded-2xl px-2 py-1 text-sm font-medium text-[#B91C1C]"
              style={{ letterSpacing: "-0.2px", lineHeight: "16px" }}
            >
              {label}
            </span>
          </div>
        ) : null}

        {/* Wishlist icon */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90text-gray-700 shadow-sm ring-1 ring-gray-200 bg-white"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Content (padding x = 32px) */}
      <div className="mt-4">
        {/* Name & price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-medium text-gray-900">{name}</h3>
          <span className="text-[15px] font-medium text-gray-900">{price}</span>
        </div>

        {/* Blurb */}
        <p
          style={{ letterSpacing: "-0.2px", lineHeight: "16px" }}
          className="mt-1 text-sm text-gray-500 font-normal"
        >
          {blurb}
        </p>

        {/* CTA */}
        <button
          type="button"
          onClick={onAddToCart}
          className={[
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg h-11 border border-[#D1D5DB]",
            isPrimary
              ? "bg-indigo-600 text-white hover:bg-indigo-600/90"
              : "text-gray-700 ring-gray-300 hover:bg-gray-50",
          ].join(" ")}
        >
          {/* cart icon (inline) */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13L6 6M7 13l-2 7h13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Add to cart</span>
        </button>
      </div>
    </article>
  );
}
