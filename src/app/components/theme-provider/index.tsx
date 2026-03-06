"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Inline script to prevent flash of wrong theme on page load.
// This runs before React hydrates, reading localStorage and applying
// the dark class immediately so no white flash occurs in dark mode.
const FLASH_PREVENTION_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: FLASH_PREVENTION_SCRIPT }}
      suppressHydrationWarning
    />
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // On mount, read the persisted theme or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored || "light";
    setThemeState(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  // Listen for system preference changes (only when no stored preference)
  useEffect(() => {
    // Only listen for system preference changes if user has explicitly
    // chosen to follow system (not implemented yet). Default is always light.
  }, []);

  const applyTheme = (t: Theme, animate = false) => {
    const root = document.documentElement;

    // Add transition class for smooth color animation
    if (animate) {
      root.classList.add("theme-transition");
    }

    if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Remove transition class after animation completes
    if (animate) {
      setTimeout(() => {
        root.classList.remove("theme-transition");
      }, 400);
    }
  };

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyTheme(t, true);
    localStorage.setItem("theme", t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      applyTheme(next, true);
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  // Prevent hydration mismatch — render children immediately but
  // provide a stable context value even before mount
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
