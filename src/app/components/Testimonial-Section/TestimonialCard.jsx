import Image from "next/image";
import StarRating from "./StarRating";

export default function TestimonialCard({
  rating = 5,
  quote,
  avatarSrc,
  avatarAlt,
  name,
  role,
}) {
  return (
    <article className="rounded-2xl bg-white shadow-sm border border-gray-200 p-6 md:p-7">
      <StarRating value={rating} />

      <p className="mt-3 text-[#6B7280] leading-relaxed">{`"${quote}"`}</p>

      <div className="mt-6 flex items-center gap-3">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-medium text-[#374151]">{name}</div>
          <div className="text-xs text-[#6B7280]">{role}</div>
        </div>
      </div>
    </article>
  );
}
