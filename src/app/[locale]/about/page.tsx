import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.metadata" });
  return { title: t("title") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

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
          <p className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed text-pretty">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-app py-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground-muted leading-relaxed text-pretty">
              {t("philosophy.body")}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Values */}
      <section className="container-app pb-20">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic text-center mb-12 max-w-xl mx-auto">
            {t("values.title")}
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
          {(["mission", "vision", "principles", "culture"] as const).map(
            (key, i) => (
              <ScrollReveal key={key} delay={i * 80}>
                <ValueCard
                  title={t(`values.${key}.title`)}
                  desc={t(`values.${key}.description`)}
                  icon={<ValueIcon name={key} />}
                />
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* Products */}
      <section className="gradient-subtle py-20">
        <div className="container-app">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic">
                {t("products.title")}
              </h2>
              <p className="mt-3 text-foreground-muted">
                {t("products.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
            <ScrollReveal>
              <ProductLink
                title="SignGPT"
                domain="signgpt.org"
                href="https://signgpt.org"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ProductLink
                title="Lembic AI"
                domain="lembic.ai"
                href="https://lembic.ai"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-app py-20 text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic max-w-2xl mx-auto text-balance">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services" className="btn-primary text-sm px-6">
              {t("cta.primary")}
            </Link>
            <Link href="/support" className="btn-outline text-sm px-6">
              {t("cta.secondary")}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

function ValueCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card card-hover p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground tracking-tight">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-foreground-muted leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductLink({
  title,
  domain,
  href,
}: {
  title: string;
  domain: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover card-glow p-6 group flex items-center justify-between"
    >
      <div>
        <span className="font-display font-bold text-lg group-hover:text-primary transition-colors">
          {title}
        </span>
        <p className="text-xs text-foreground-subtle mt-0.5">{domain}</p>
      </div>
      <svg
        className="w-4 h-4 text-foreground-subtle group-hover:text-primary transition-colors"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 4h6v6M10 14L20 4"
        />
      </svg>
    </a>
  );
}

function ValueIcon({
  name,
}: {
  name: "mission" | "vision" | "principles" | "culture";
}) {
  const paths = {
    mission:
      "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    vision:
      "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    principles:
      "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    culture:
      "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  } as const;

  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={paths[name]}
      />
    </svg>
  );
}
