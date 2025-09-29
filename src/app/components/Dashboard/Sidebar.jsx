"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: "grid" },
  { label: "Products", href: "/dashboard/products", icon: "box" },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform transition-transform
                    ${
                      open ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
      >
        <div className="h-16 flex items-center gap-2 px-4 border-b border-gray-200">
          <Image
            src="/logo.svg"
            alt="PIMJO"
            width={120.75}
            height={28}
            // className="h-7 w-7"
          />
        </div>

        <nav className="px-2 py-3">
          <p className="px-2 text-xs uppercase tracking-wide text-gray-500 mb-2">
            Menu
          </p>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors
                              ${
                                item.href === pathname
                                  ? "bg-indigo-50 text-indigo-700"
                                  : "text-gray-700"
                              }`}
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

function Icon({ name, className }) {
  if (name === "grid") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    );
  }
  if (name === "box") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 7l9 4l9-4M3 7l9-4l9 4M3 7v10l9 4l9-4V7" />
      </svg>
    );
  }
  return null;
}
