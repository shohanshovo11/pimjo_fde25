import Image from "next/image";

export default function FooterBottom() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">
        {/* TOP STRIP: 3 columns with vertical dividers */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 items-stretch min-h-[120px]">
          {/* Left: hours + phone */}
          <div className="flex-1 py-6 md:py-8 flex items-center">
            <div className="flex items-center gap-4 w-full max-w-7xl mx-auto px-20">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                {/* phone/clock icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M12 6v6l4 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>

              <div className="leading-tight">
                <div className="text-sm text-gray-500">8:30 AM — 10:30 PM</div>
                <a
                  href="tel:+16283998030"
                  className="mt-1 block text-[15px] font-semibold text-gray-900"
                >
                  +16283998030
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Download now + store badges */}
          <div className="flex-[2] py-6 md:py-8 flex items-center">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between w-full max-w-7xl mx-auto px-20">
              <div>
                <div className="text-base font-semibold text-gray-900">
                  Download Now on
                </div>
                <div className="text-sm text-gray-500">
                  Free home delivery on your first purchase
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* App Store badge */}
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="inline-flex"
                >
                  <Image
                    src="/images/footer/app-store.png"
                    alt="App Store"
                    width={133.33}
                    height={40}
                    className="h-10 w-auto rounded-md"
                  />
                </a>

                {/* Google Play badge */}
                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="inline-flex"
                >
                  <Image
                    src="/images/footer/googe-play.png"
                    alt="Google Play"
                    width={133.33}
                    height={40}
                    className="h-10 w-auto rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: We Support (payment logos) */}
          <div className="flex-1 py-6 md:py-8 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-20">
              <div className="text-base font-semibold text-gray-900 mb-3">
                We Support
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/images/footer/cards/mastercard-logo.png"
                  alt="Mastercard"
                  width={33}
                  height={20}
                />
                <Image
                  src="/images/footer/cards/visa-logo.png"
                  alt="Visa"
                  width={33}
                  height={20}
                />
                <Image
                  src="/images/footer/cards/paypal-logo.png"
                  alt="PayPal"
                  width={33}
                  height={20}
                />
                <Image
                  src="/images/footer/cards/amex-logo.png"
                  alt="American Express"
                  width={33}
                  height={20}
                />
                <Image
                  src="/images/footer/cards/westernunion-logo.png"
                  alt="Western Union"
                  width={33}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP: copyright + policy links */}
        <div className="border-t border-gray-200 py-5">
          <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-sm text-gray-600">
              © Copyright 2025 – TailGrids.
            </p>

            <ul className="flex items-center gap-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Refund Policy
                </a>
              </li>
              <li className="text-gray-300">|</li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Services
                </a>
              </li>
              <li className="text-gray-300">|</li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shipping policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
