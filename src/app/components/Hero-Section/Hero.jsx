import HeroSlider from "./HeroSlider";
import PromoCard from "./PromoCard";

export default function Hero() {
  return (
    <div className="w-full py-4 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {/* Main Hero Content - Left Side */}
        <section className="lg:col-span-2">
          <div className="relative rounded-2xl overflow-hidden bg-[#0b1020] min-h-fit h-full">
            <HeroSlider />
          </div>
        </section>

        {/* Promo Cards - Right Side */}
        <aside className="flex flex-col gap-5 h-full">
          <div className="rounded-2xl overflow-hidden flex-1">
            <PromoCard
              brand="XIAOMI"
              title={"Smart Security\nHome Camera"}
              ctaLabel="Shop Now"
              imgSrc="/images/image.png"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex-1">
            <PromoCard
              brand="REDMI"
              title={"Smart Watch\n5 lite"}
              ctaLabel="Shop Now"
              imgSrc="/images/image-1.png"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
