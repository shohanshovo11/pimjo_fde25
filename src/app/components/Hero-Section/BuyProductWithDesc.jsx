import Image from "next/image";

export default function BuyProductWithDesc() {
  return (
    <section className="bg-[#0b1020] text-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1 px-8 py-8 md:py-12">
        {/* Left side: text */}
        <div className="space-y-4 text-center md:text-left">
          <p className="uppercase text-sm tracking-wide text-gray-400 font-medium">
            Samsung
          </p>
          <h2 className="text-3xl font-bold">Galaxy S24 Ultra 5G</h2>
          <p className="text-[#9CA3AF] font-normal">
            Galaxy AI is here | Pro-grade camera, seamless 5G, and revolutionary
            AI — Redefine possibilities.
          </p>
          <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg font-medium">
            Buy Now $899
          </button>
        </div>

        {/* Right side: image */}
        <div className="flex justify-center">
          <Image
            src="/images/image_168.png"
            alt="Galaxy S24 Ultra 5G"
            width={306}
            height={314}
            className="object-contain"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 pb-6">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        <span className="w-2 h-2 rounded-full bg-gray-500"></span>
      </div>
    </section>
  );
}
