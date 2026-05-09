"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const switchLocale = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center rounded-lg border border-border p-0.5 text-[11px] font-medium tracking-wider"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={pending}
          aria-pressed={locale === loc}
          className={`px-2 py-1 rounded-md transition-colors uppercase ${
            locale === loc
              ? "bg-muted text-foreground"
              : "text-foreground-muted hover:text-foreground"
          } disabled:opacity-50`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
