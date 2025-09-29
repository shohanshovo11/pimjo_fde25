"use client";
import { useState } from "react";

export function EmailInput(props) {
  return (
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
      {...props}
    />
  );
}

export function PasswordInput(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
