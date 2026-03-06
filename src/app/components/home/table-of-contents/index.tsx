"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { List, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "featured-work", label: "Featured Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

const ITEM_HEIGHT = 36;
const ITEM_GAP = 2;

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Track mount for entrance animations
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Calculate overall scroll progress
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
    setScrollProgress(progress);

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].id);
      if (element) {
        const offsetTop = element.offsetTop;
        if (scrollPosition >= offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Close mobile menu on ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (mobileOpen) closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    if (mobileOpen) {
      closeMobileMenu();
    } else {
      setMobileOpen(true);
    }
  };

  // Active index for the sliding pill position
  const activeIndex = useMemo(
    () => sections.findIndex((s) => s.id === activeSection),
    [activeSection],
  );

  // Progress line height relative to the list
  const totalListHeight =
    sections.length * ITEM_HEIGHT + (sections.length - 1) * ITEM_GAP;
  const progressLineHeight = scrollProgress * (totalListHeight - 24);

  // Current section label for mobile button
  const activeLabel =
    sections.find((s) => s.id === activeSection)?.label ?? "Home";

  return (
    <>
      {/* ========== DESKTOP TOC (xl+) ========== */}
      <nav
        ref={navRef}
        aria-label="Table of Contents"
        className="hidden xl:flex fixed left-6 2xl:left-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-1"
      >
        <div className="relative toc-progress-track">
          {/* Gradient progress fill */}
          <div
            className="toc-progress-fill"
            style={{ height: `${progressLineHeight}px` }}
          />

          {/* Sliding active pill */}
          <div
            className="toc-active-pill"
            style={{
              top: `${activeIndex * (ITEM_HEIGHT + ITEM_GAP)}px`,
            }}
          />

          {/* Section items */}
          <ul className="relative flex flex-col gap-0.5">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              return (
                <li
                  key={section.id}
                  className={mounted ? "toc-item-enter" : "opacity-0"}
                  style={{
                    animationDelay: mounted ? `${index * 80 + 200}ms` : "0ms",
                  }}
                >
                  <button
                    onClick={() => handleClick(section.id)}
                    className="group relative flex items-center gap-3 py-1.5 px-3 rounded-lg transition-all duration-300 ease-in-out w-full text-left cursor-pointer z-10"
                    style={{ height: `${ITEM_HEIGHT}px` }}
                  >
                    {/* Dot */}
                    <span
                      className={`relative block rounded-full transition-all duration-500 flex-shrink-0 ${
                        isActive
                          ? "w-2 h-2 bg-primary toc-dot-active"
                          : "w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary/50 group-hover:scale-110"
                      }`}
                    />
                    {/* Label */}
                    <span
                      className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "text-primary translate-x-0.5"
                          : "text-primary/30 group-hover:text-primary/70 group-hover:translate-x-0.5"
                      }`}
                    >
                      {section.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ========== MOBILE / TABLET TOC (<xl) ========== */}

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="xl:hidden fixed inset-0 z-40 bg-black/10 toc-backdrop"
          style={{
            animation: isClosing
              ? "toc-mobile-slide-down 0.2s ease forwards"
              : "none",
            opacity: isClosing ? 0 : 1,
            transition: "opacity 0.2s ease",
          }}
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className={`xl:hidden fixed bottom-20 right-5 sm:right-7 z-50 ${
            isClosing ? "toc-mobile-menu-exit" : "toc-mobile-menu-enter"
          }`}
        >
          <div className="bg-background/95 toc-backdrop border border-primary/10 rounded-2xl shadow-xl shadow-black/10 p-2 min-w-[200px]">
            {/* Section label */}
            <div className="px-3 pt-2 pb-1.5">
              <p className="text-[11px] font-semibold tracking-[1.5px] text-primary/40 uppercase">
                Sections
              </p>
            </div>

            <ul className="flex flex-col gap-0.5">
              {sections.map((section, index) => {
                const isActive = activeSection === section.id;
                return (
                  <li
                    key={section.id}
                    className={!isClosing ? "toc-mobile-item-enter" : ""}
                    style={{
                      animationDelay: !isClosing
                        ? `${index * 50 + 50}ms`
                        : "0ms",
                    }}
                  >
                    <button
                      onClick={() => handleClick(section.id)}
                      className={`group flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200 w-full text-left cursor-pointer ${
                        isActive
                          ? "bg-primary/5"
                          : "hover:bg-primary/5 active:bg-primary/10"
                      }`}
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? "w-2 h-2 bg-primary toc-dot-active"
                            : "w-1.5 h-1.5 bg-primary/20"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                          isActive ? "text-primary" : "text-primary/50"
                        }`}
                      >
                        {section.label}
                      </span>
                      {isActive && (
                        <span className="ml-auto text-[10px] font-semibold text-primary-foreground bg-primary rounded-full px-1.5 py-0.5 leading-none">
                          ●
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Floating action button */}
      <button
        onClick={toggleMobileMenu}
        className={`xl:hidden fixed bottom-5 right-5 sm:right-7 z-50 flex items-center gap-2.5 bg-primary text-primary-foreground shadow-lg shadow-primary/25 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 ${
          mobileOpen ? "rounded-full p-3.5" : "rounded-full py-3 pl-4 pr-5"
        } ${mounted ? "toc-fab-enter" : "opacity-0"}`}
        aria-label={
          mobileOpen ? "Close table of contents" : "Open table of contents"
        }
      >
        <span
          className="transition-transform duration-300"
          style={{
            transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          {mobileOpen ? <X size={18} /> : <List size={18} />}
        </span>
        {!mobileOpen && (
          <span className="text-sm font-medium text-primary-foreground/90 whitespace-nowrap">
            {activeLabel}
          </span>
        )}
      </button>

      {/* Scroll progress bar — mobile (thin bar at bottom of viewport) */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-30 h-[3px] bg-primary/5">
        <div
          className="h-full rounded-r-full transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress * 100}%`,
            background: "linear-gradient(90deg, #9282f8, #f3ca4d)",
          }}
        />
      </div>
    </>
  );
};

export default TableOfContents;
