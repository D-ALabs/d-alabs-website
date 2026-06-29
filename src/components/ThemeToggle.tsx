"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "@/components/sigils";

export default function ThemeToggle() {
  const t = useTranslations("Theme");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const saved: "light" | "dark" = stored === "dark" || stored === "light" ? stored : "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
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
