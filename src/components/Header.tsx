"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const logoSize = 64;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          <Image
            src="/portfolio-logo.png"
            alt=""
            width={logoSize}
            height={logoSize}
            className="block dark:hidden"
          />
          <Image
            src="/portfolio-logo-white.png"
            alt=""
            width={logoSize}
            height={logoSize}
            className="hidden dark:block"
          />
          Calvin Cheng
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 transition-colors hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 transition-colors hover:text-primary-dark dark:text-gray-400 dark:hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
