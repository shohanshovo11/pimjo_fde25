import Image from "next/image";

export const OfferBar = () => {
  return (
    <div
      className="bg-[#111827] text-white py-4 px-2"
      style={{
        fontWeight: 400,
        fontStyle: "normal",
        letterSpacing: "-0.2px",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Language and Currency Selectors */}
        <div className="flex items-center space-x-4 ml-4">
          {/* Language Selector */}
          <div className="relative flex items-center">
            <Image
              src="/icons/globe.svg"
              alt="Language"
              width={16}
              height={16}
              className="mr-1"
            />
            <select className="bg-transparent text-white text-sm border-none focus:outline-none cursor-pointer appearance-none pr-6">
              <option value="en" className="bg-[#111827]">
                English
              </option>
              <option value="es" className="bg-[#111827]">
                ES
              </option>
              <option value="fr" className="bg-[#111827]">
                FR
              </option>
              <option value="de" className="bg-[#111827]">
                DE
              </option>
            </select>
            <svg
              className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Currency Selector */}
          <div className="relative flex items-center">
            <Image
              src="/icons/usd.svg"
              alt="Currency"
              width={16}
              height={16}
              className="mr-1"
            />
            <select className="bg-transparent text-white text-sm border-none focus:outline-none cursor-pointer appearance-none pr-6">
              <option value="usd" className="bg-[#111827]">
                USD
              </option>
              <option value="eur" className="bg-[#111827]">
                EUR
              </option>
              <option value="gbp" className="bg-[#111827]">
                GBP
              </option>
              <option value="cad" className="bg-[#111827]">
                CAD
              </option>
            </select>
            <svg
              className="absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Center - Offer Text */}
        <div className="flex-1 text-center">
          <p className="text-sm">Flash Sale Live – 30% Off Everything</p>
        </div>

        {/* Right side - Login/Register */}
        <div className="flex items-center space-x-4 mr-4">
          <Image
            src="/icons/user.svg"
            alt="User"
            width={16}
            height={16}
            className="mr-1 font-extrabold"
          />
          <a
            href="/login"
            className="text-sm hover:text-gray-300 transition-colors duration-200"
          >
            Login / Register
          </a>
        </div>
      </div>
    </div>
  );
};
