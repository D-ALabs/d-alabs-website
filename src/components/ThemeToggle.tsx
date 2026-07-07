"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "@/components/sigils";

// Keep the browser-chrome (mobile toolbar / "tab") colour matched to the page
// background of the active theme — mirrors the pre-paint script in the layout.
function syncThemeColor(theme: "light" | "dark") {
  const color = theme === "dark" ? "#0E1620" : "#F5F2EA";
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
}

// Swap the favicon with the active theme: navy flask on light, cream on dark.
// Uses the same JS-owned <link> as the pre-paint script in the layout.
function syncFavicon(theme: "light" | "dark") {
  let link = document.getElementById("dal-favicon") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = "dal-favicon";
    link.rel = "icon";
    // type + sizes are load-bearing: sizes="any" is what makes Chrome and
    // Firefox score this SVG above Next's 512px icon.png fallback link.
    link.type = "image/svg+xml";
    link.setAttribute("sizes", "any");
  }
  link.setAttribute("href", theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg");
  // Re-append so this link stays last among the icon <link>s — Next streams its
  // icon.png fallback link in after the pre-paint script ran, and Firefox picks
  // the last suitable icon in document order.
  document.head.appendChild(link);
}

export default function ThemeToggle() {
  const t = useTranslations("Theme");
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const saved: "light" | "dark" = stored === "dark" || stored === "light" ? stored : "light";
    setTheme(saved);
  }, []);

  // Apply the theme and keep the browser chrome (theme-color + favicon) in
  // sync. Re-runs on route change too: Next re-appends its hoisted icon links
  // after client-side navigations, and ours must stay last in document order.
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    syncThemeColor(theme);
    syncFavicon(theme);
  }, [mounted, theme, pathname]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) {
    return <div className="theme-toggle" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === "light" ? t("toDark") : t("toLight")}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
