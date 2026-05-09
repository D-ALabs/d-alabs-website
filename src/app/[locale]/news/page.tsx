import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

type Props = { params: Promise<{ locale: string }> };

const ARTICLE_KEYS = [
  { key: "platformLaunch", featured: true },
  { key: "communityBeta", featured: false },
  { key: "summit", featured: false },
  { key: "insight", featured: false },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "News.metadata" });
  return { title: t("title") };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("News");

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" />
        <div className="container-app relative py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="divider-x" />
            <span className="text-eyebrow">{t("hero.eyebrow")}</span>
            <span className="divider-x" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-metallic">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="container-app py-20">
        <div className="space-y-5 max-w-3xl mx-auto">
          {ARTICLE_KEYS.map((article, i) => (
            <ScrollReveal key={article.key} delay={i * 80}>
              <NewsCard
                category={t(`articles.${article.key}.category`)}
                title={t(`articles.${article.key}.title`)}
                excerpt={t(`articles.${article.key}.excerpt`)}
                date={t(`articles.${article.key}.date`)}
                featured={article.featured}
                featuredLabel={
                  article.featured
                    ? t("articles.platformLaunch.featured")
                    : undefined
                }
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <h3 className="font-display text-2xl font-bold text-metallic">
              {t("newsletter.title")}
            </h3>
            <p className="mt-3 text-foreground-muted">
              {t("newsletter.subtitle")}
            </p>
            <Link href="/signup" className="btn-primary mt-6 text-sm px-6">
              {t("newsletter.cta")}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

function NewsCard({
  category,
  title,
  excerpt,
  date,
  featured,
  featuredLabel,
}: {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
  featuredLabel?: string;
}) {
  return (
    <article
      className={`card card-hover ${
        featured ? "card-glow border-primary/20" : ""
      } p-6 sm:p-7`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[11px] font-medium text-primary uppercase tracking-[0.16em]">
          {category}
        </span>
        {featured && featuredLabel && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary tracking-wider uppercase">
            {featuredLabel}
          </span>
        )}
      </div>
      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-foreground-muted leading-relaxed text-pretty">
        {excerpt}
      </p>
      <div className="mt-4 text-xs text-foreground-subtle">{date}</div>
    </article>
  );
}
