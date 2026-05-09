import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

type Props = { params: Promise<{ locale: string }> };

const ITEM_KEYS = [
  "ai",
  "data",
  "cloud",
  "product",
  "growth",
  "training",
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services.metadata" });
  return { title: t("title") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Services");

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

      {/* Services grid */}
      <section className="container-app py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEM_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={(i % 3) * 80}>
              <ServiceCard
                icon={<ServiceIcon name={key} />}
                title={t(`items.${key}.title`)}
                desc={t(`items.${key}.description`)}
                features={t.raw(`items.${key}.features`) as string[]}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="gradient-subtle py-20">
        <div className="container-app">
          <ScrollReveal>
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic">
                {t("process.title")}
              </h2>
              <p className="mt-3 text-foreground-muted">
                {t("process.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div
              className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            {(["discovery", "strategy", "execute", "iterate"] as const).map(
              (key, i) => (
                <ScrollReveal key={key} delay={i * 100}>
                  <ProcessStep
                    step={`0${i + 1}`}
                    title={t(`process.${key}.title`)}
                    description={t(`process.${key}.description`)}
                  />
                </ScrollReveal>
              )
            )}
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
            <Link href="/support" className="btn-primary text-sm px-6">
              {t("cta.primary")}
            </Link>
            <Link href="/about" className="btn-outline text-sm px-6">
              {t("cta.secondary")}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
}) {
  return (
    <div className="card card-hover card-glow p-7 h-full flex flex-col">
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
        {desc}
      </p>
      <ul className="mt-5 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-foreground-muted"
          >
            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border-light mb-5 mx-auto">
        <span className="font-mono text-xs font-medium text-primary">
          {step}
        </span>
      </div>
      <h3 className="font-display text-base font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground-muted leading-relaxed max-w-[220px] mx-auto">
        {description}
      </p>
    </div>
  );
}

function ServiceIcon({ name }: { name: (typeof ITEM_KEYS)[number] }) {
  const paths = {
    ai: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
    data: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75",
    cloud:
      "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
    product:
      "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    growth:
      "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    training:
      "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
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
