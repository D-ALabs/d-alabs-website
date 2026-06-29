import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Apply the saved theme before paint (default: light "paper") to avoid a flash.
const THEME_PRELOAD = `(function(){try{var t=localStorage.getItem('theme');t=(t==='dark'||t==='light')?t:'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://d-alabs.com"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: t("siteName"),
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        ko: "/ko",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_PRELOAD }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
