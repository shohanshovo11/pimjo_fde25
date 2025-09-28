import Image from "next/image";

export default function CategoryCard({ item }) {
  const { name, productsLabel, image, href } = item;

  const Card = (
    <article className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* image */}
      <div className="flex items-center justify-center h-40 sm:h-44 md:h-47 p-2 pb-0">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 256}
          height={image.height || 256}
          className="object-cover max-h-full"
          priority={false}
        />
      </div>

      {/* text */}
      <div className="p-2 text-center">
        <h3 className="text-sm font-semibold text-gray-900 p-3 pb-2">{name}</h3>
        <p className="text-xs text-[#6B7280] font-medium">{productsLabel}</p>
      </div>
    </article>
  );

  return href ? (
    <a href={href} className="block focus:outline-none">
      {Card}
    </a>
  ) : (
    Card
  );
}
