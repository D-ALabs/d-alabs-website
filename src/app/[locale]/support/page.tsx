import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ locale: string }> };

const OPTION_KEYS = ["tech", "sales", "partner"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Support.metadata" });
  return { title: t("title") };
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Support");

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

      {/* Support options */}
      <section className="container-app py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {OPTION_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={i * 80}>
              <SupportCard
                icon={<SupportIcon name={key} />}
                title={t(`options.${key}.title`)}
                desc={t(`options.${key}.description`)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="gradient-subtle py-20">
        <div className="container-app">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic">
                  {t("form.title")}
                </h2>
                <p className="mt-3 text-foreground-muted">
                  {t("form.subtitle")}
                </p>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function SupportCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card card-hover card-glow p-6 text-center h-full">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function SupportIcon({ name }: { name: (typeof OPTION_KEYS)[number] }) {
  const paths = {
    tech: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75",
    sales:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    partner:
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  } as const;

  return (
    <svg
      className="w-6 h-6"
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
