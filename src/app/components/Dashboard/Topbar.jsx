"use client";

import NotificationPanel from "./NotificationPanel/NotificationPanel";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import UserProfileDropdown from "./UserProfileDropdown/UserProfileDropdown";

export default function Topbar({ onMenu }) {
  return (
    <header className="h-16 px-4 lg:px-6 border-b border-gray-200 bg-white backdrop-blur sticky top-0 z-20">
      <div className="h-full flex items-center gap-3">
        <button
          onClick={onMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33334 1L14.6667 1M1.33334 11L14.6667 11M1.33334 6L8.00001 6"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Search */}
        <div className="flex-1">
          <label className="relative block max-w-107.5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-3.5-3.5" />
              </svg>
            </span>
            <input
              placeholder="Search or type command…"
              className="w-full h-10 rounded-md border border-gray-200 bg-white pl-10 pr-24 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex gap-2">
              <kbd className="px-2 py-0.5 text-xs rounded border border-gray-200 text-gray-500">
                ⌘K
              </kbd>
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <NotificationPanel />
          </div>
          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
}
