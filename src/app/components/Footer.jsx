"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F3F4F6] text-[16px] font-normal">
      <div className="mx-auto max-w-7xl px-3 md:px-20 py-12 md:py-[112px]">
        <div className="px-3 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-23.5">
          {/* Brand + blurb + socials */}
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={129.38} height={30} />
            </div>

            <p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
              TailGrids comes with all the essential UI components you need to
              create beautiful websites based on Tailwind CSS.
            </p>

            <p className="mt-6 text-sm text-[#6B7280]">Follow us on</p>
            <div className="mt-3 flex items-center gap-3">
              <Social icon="facebook" />
              <Social icon="x" />
              <Social icon="instagram" />
              <Social icon="linkedin" />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20 mt-8 lg:mt-0 lg:justify-end">
            {/* Clothing links */}
            <nav>
              <h4 className="text-lg font-semibold text-gray-900">Clothing</h4>
              <ul className="mt-4 space-y-3 text-[#6B7280] text-sm md:text-base">
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Tops
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Tops &amp; Blouses
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Dresses
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Outerwear
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </nav>

            {/* Shoes links */}
            <nav>
              <h4 className="text-lg font-semibold text-gray-900">Shoes</h4>
              <ul className="mt-4 space-y-3 text-[#6B7280] text-sm md:text-base">
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Hills shoed
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Running Shoes
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Sandals
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Ballet Pumps
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-900" href="#">
                    Slingback
                  </a>
                </li>
                <li className="relative inline-flex items-center">
                  <a className="hover:text-gray-900" href="#">
                    Sale
                  </a>
                  <span
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded-full bg-[#FEF2F2] px-2 py-[2px] text-[11px] font-medium text-[#B91C1C] text-xs"
                    style={{ letterSpacing: "-0.2px", lineHeight: "14px" }}
                  >
                    Hot Item
                  </span>
                </li>
              </ul>
            </nav>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Newsletter
              </h4>
              <p className="mt-4 text-gray-500 text-sm md:text-base">
                Signup for latest news and insights from TailGrids
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 space-y-3 max-w-sm"
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- tiny inline icon component --- */
function Social({ icon }) {
  const cls = "h-5 w-5";
  return (
    <a
      href="#"
      aria-label={icon}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-[#6B7280] hover:text-gray-900"
    >
      {icon === "facebook" && (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M13 10.5V8.75c0-.69.56-1.25 1.25-1.25H16V5h-1.75A3.25 3.25 0 0 0 11 8.25v2.25H9v2.5h2V19h2v-4h2l.5-2.5H13z" />
        </svg>
      )}
      {icon === "x" && (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M17.53 4H20l-6.59 7.53L21 20h-4.47l-5.1-5.81L5.7 20H3l7.1-8.12L3 4h4.47l4.66 5.31L17.53 4z" />
        </svg>
      )}
      {icon === "instagram" && (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
        </svg>
      )}
      {icon === "linkedin" && (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M6.94 8.5H4.5V19h2.44V8.5zM5.72 7.38A1.44 1.44 0 1 1 5.7 4.5a1.44 1.44 0 0 1 .02 2.88zM13 11.22c.86-1.17 2.04-1.72 3.54-1.72c2.26 0 3.96 1.48 3.96 4.62V19h-2.44v-4.29c0-1.55-.68-2.32-1.88-2.32c-1.28 0-2.18.87-2.18 2.42V19H12.5v-7.5H13v-.28z" />
        </svg>
      )}
    </a>
  );
}
