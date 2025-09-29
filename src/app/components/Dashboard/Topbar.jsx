"use client";

export default function Topbar({ onMenu }) {
  return (
    <header className="h-16 px-4 lg:px-6 border-b border-gray-200 bg-white backdrop-blur sticky top-0 z-20">
      <div className="h-full flex items-center gap-3">
        {/* Menu (mobile) */}
        <button
          onClick={onMenu}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search */}
        <div className="flex-1">
          <label className="relative block">
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
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5" />
            </svg>
          </button>

          <div className="inline-flex items-center gap-2 pl-2">
            <div className="h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center font-medium">
              M
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-900">
              Musharof
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-400">
              <path d="M6 9l6 6 6-6" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
