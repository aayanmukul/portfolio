"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ isDarkMode, toggleDarkMode }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Fixed to top right corner */}
      <nav className="hidden md:block fixed top-8 right-8 z-40">
        <div className="flex items-center space-x-6">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Navigation links - horizontal */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-[#585858] dark:text-[#acacac] font-medium'
                    : 'text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Inline with header */}
      <nav className="md:hidden flex items-center space-x-6">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileMenu}>
          <div 
            className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-[#1a1a1a] shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac]">Menu</h3>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`text-lg transition-colors ${
                      pathname === item.href
                        ? 'text-[#585858] dark:text-[#acacac] font-medium'
                        : 'text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
