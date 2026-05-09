import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://d-alabs.com";

const ROUTES = [
  "",
  "/about",
  "/services",
  "/news",
  "/community",
  "/support",
  "/signup",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => {
      const path =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;
      return {
        url: `${SITE_URL}${path || "/"}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}${l === routing.defaultLocale ? route : `/${l}${route}`}` ||
                SITE_URL,
            ])
          ),
        },
      };
    })
  );
}
