"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: "grid" },
  { label: "Products", href: "/dashboard/products", icon: "box" },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Redirect to login page after successful logout
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };
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
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform transition-transform flex flex-col
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

        <nav className="px-2 py-3 flex flex-col flex-1">
          <div>
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
          </div>

          {/* Logout button at the bottom */}
          <div className="mt-auto pb-4">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
                          ${
                            isLoggingOut
                              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                              : "text-red-600 hover:bg-red-50 hover:text-red-700"
                          }`}
            >
              <Icon name="logout" className="h-4 w-4" />
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
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
  if (name === "logout") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16,17 21,12 16,7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    );
  }
  return null;
}
