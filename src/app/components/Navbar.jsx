import Image from "next/image";
import { ToolTip } from "./ToolTip";

export const Navbar = () => {
  return (
    <>
      <div className="py-6.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120.75}
            height={28}
            className="object-contain"
          />
          {/* Navigation Links */}
          <div className="flex items-center space-x-4 font-medium">
            <a
              href="/"
              className="hover:text-gray-300 transition-colors duration-200 mr-1.5"
            >
              Deals of the Week
            </a>
            <span>
              <ToolTip
                text={"Hot"}
                bgColor={"rgba(239, 68, 68, 0.15)"}
                textColor={"#EF4444"}
              />
            </span>
            <a
              href="/about"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              New Arrivals
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Men
            </a>
            <a
              href="/blog"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Women
            </a>
            <a
              href="/blog"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Kids
            </a>
            <a
              href="/blog"
              className="hover:text-gray-300 transition-colors duration-200 mr-1.5"
            >
              Sale
            </a>
            <span>
              <ToolTip
                text={"20% OFF"}
                bgColor={"#EFF6FF"}
                textColor={"#1D4ED8"}
              />
            </span>
          </div>

          {/* Cart , Favorite,User */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/icons/Search.svg"
                alt="User"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="relative">
              <Image
                src="/icons/user-black.svg"
                alt="User"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="relative">
              <Image
                src="/icons/heart.svg"
                alt="Favorite"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="absolute w-4.5 h-4.5 -top-2 -right-2 bg-[#1D4ED8] text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </div>
            <div className="relative">
              <Image
                src="/icons/cart-2.svg"
                alt="Cart"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="absolute w-4.5 h-4.5 -top-2 -right-2 bg-[#1D4ED8] text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 border border-[#E5E7EB]"></div>
    </>
  );
};
