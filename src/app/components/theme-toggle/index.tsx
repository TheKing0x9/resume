"use client";

import { useTheme } from "../theme-provider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  // Avoid hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return <div className="fixed top-5 right-5 sm:right-7 z-[60] w-11 h-11" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-5 sm:right-7 z-[60] group flex items-center justify-center w-11 h-11 rounded-full border border-primary/15 bg-background/90 backdrop-blur-lg shadow-lg shadow-black/8 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:border-primary/25 active:scale-95"
    >
      {/* Sun icon — visible in dark mode (click to go light) */}
      <Sun
        size={20}
        strokeWidth={1.8}
        className={`absolute transition-all duration-500 ease-in-out text-amber-400 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        }`}
      />

      {/* Moon icon — visible in light mode (click to go dark) */}
      <Moon
        size={20}
        strokeWidth={1.8}
        className={`absolute transition-all duration-500 ease-in-out text-slate-700 dark:text-slate-300 ${
          isDark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />

      {/* Subtle ring animation on hover */}
      <span className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-300 scale-100 group-hover:scale-[1.3] opacity-0 group-hover:opacity-100" />

      {/* Hover tooltip label */}
      <span className="absolute right-full mr-3 whitespace-nowrap text-xs font-medium text-primary bg-background/95 backdrop-blur-md border border-primary/10 rounded-lg px-3 py-1.5 shadow-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none select-none">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
