"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex border border-gray-200 items-center justify-center p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        // Sun icon for light mode
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.24658 5.66825C5.24658 9.35105 8.23208 12.3365 11.9149 12.3365C13.6684 12.3365 15.2639 11.6597 16.4542 10.553C15.5838 13.856 12.5762 16.2916 8.99984 16.2916C4.74264 16.2916 1.2915 12.8405 1.2915 8.58329C1.2915 5.00689 3.72712 1.99935 7.03012 1.12891C5.92343 2.31927 5.24658 3.91471 5.24658 5.66825Z"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.24658 5.66825C5.24658 9.35105 8.23208 12.3365 11.9149 12.3365C13.6684 12.3365 15.2639 11.6597 16.4542 10.553C15.5838 13.856 12.5762 16.2916 8.99984 16.2916C4.74264 16.2916 1.2915 12.8405 1.2915 8.58329C1.2915 5.00689 3.72712 1.99935 7.03012 1.12891C5.92343 2.31927 5.24658 3.91471 5.24658 5.66825Z"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
