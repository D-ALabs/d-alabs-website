"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import AlchemicalMark from "./AlchemicalMark";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "news", href: "/news" },
  { key: "community", href: "/community" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/75 backdrop-blur-xl">
      <div className="container-app">
        <nav className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="D-ALabs"
            onClick={() => setOpen(false)}
          >
            <AlchemicalMark size={26} />
            <span className="text-[15px] font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              D-ALabs
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 ml-auto mr-2">
            {navItems.map(({ key, href }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={key}>
                  <Link
                    href={href}
                    className={`relative px-3 py-2 text-[13px] font-medium transition-colors group ${
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {t(key)}
                    <span
                      className={`absolute left-3 right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 origin-center ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="mailto:contact@d-alabs.com"
              className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
            >
              {t("contact")}
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:border-border-light transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t("close") : t("menu")}
              aria-expanded={open}
            >
              {open ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-0.5 pt-2 border-t border-border/50">
              {navItems.map(({ key, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2.5 text-sm rounded-md transition-colors ${
                        isActive
                          ? "text-foreground bg-muted"
                          : "text-foreground-muted hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-border/50">
              <a
                href="mailto:contact@d-alabs.com"
                className="btn-primary w-full text-sm"
                onClick={() => setOpen(false)}
              >
                {t("contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
