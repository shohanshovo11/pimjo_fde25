"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-[100px] sm:text-[140px] md:text-[160px] font-bold text-gray-900 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-lg mx-auto text-gray-500 text-sm md:text-base">
          Don’t worry, you can head back to the homepage or use the navigation
          menu to find what you need.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
          >
            ← Go back
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 w-full sm:w-auto"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
