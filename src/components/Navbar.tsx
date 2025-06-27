import React, { useState } from "react";
import { Menu, X, Moon, Sun, FileText } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light";
  });

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Smooth scroll with offset for fixed navbar
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        const navbar = document.getElementById("main-navbar");
        const yOffset = navbar ? -navbar.offsetHeight : -64;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    }, 200);
  };

  return (
    <nav id="main-navbar" className="glass-navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex-shrink-0 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300 cursor-pointer"
            onClick={handleNavClick("#home")}
          >
            {/* You can use an <img> for logo if you want */}
            Nilesh.dev
          </a>

          {/* Desktop and Mobile Controls */}
          <div className="flex items-center space-x-2 md:space-x-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded transition font-medium cursor-pointer"
                onClick={handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            </div>
            {/* Download Resume Button (always visible, order before hamburger) */}
            <a
              href="/resume/resume.pdf"
              download="Nilesh Pawar Resume.pdf"
              className="flex flex-row items-center gap-2 px-3 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow transition-colors text-sm order-1 whitespace-nowrap"
              style={{ display: 'inline-flex' }}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
            {/* Dark/Light Mode Button (desktop only) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full ml-2 cursor-pointer order-2 hidden md:inline-flex"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-200" />
              )}
            </Button>
          {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center order-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-navbar-mobile fixed left-0 top-16 w-full z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 focus:bg-blue-100 dark:focus:bg-blue-900 active:bg-blue-200 dark:active:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-300 transition cursor-pointer focus:outline-none"
                onClick={handleNavClick(item.href)}
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
            {/* Dark/Light Mode Button in Mobile Dropdown (icon only, full-width like other nav options, blue background on click/hover/focus) */}
            <Button
              variant="ghost"
              onClick={e => {
                e.currentTarget.focus();
                toggleTheme();
              }}
              className="block w-full text-left px-3 py-2 rounded text-base font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:bg-blue-100 dark:focus:bg-blue-900 active:bg-blue-200 dark:active:bg-blue-800 focus:outline-none"
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-200" />
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
