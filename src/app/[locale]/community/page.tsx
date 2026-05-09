import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

type Props = { params: Promise<{ locale: string }> };

const ITEM_KEYS = ["forum", "events", "learning", "openSource"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Community.metadata" });
  return { title: t("title") };
}

export default async function CommunityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Community");

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

      {/* Community grid */}
      <section className="container-app py-20">
        <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
          {ITEM_KEYS.map((key, i) => (
            <ScrollReveal key={key} delay={(i % 2) * 80}>
              <CommunityCard
                icon={<CommunityIcon name={key} />}
                title={t(`items.${key}.title`)}
                desc={t(`items.${key}.description`)}
                status={t(`items.${key}.status`)}
                members={t(`items.${key}.members`)}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-subtle">
        <div className="container-app py-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-metallic max-w-2xl mx-auto text-balance">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/signup" className="btn-primary text-sm px-6">
                {t("cta.primary")}
              </Link>
              <Link href="/news" className="btn-outline text-sm px-6">
                {t("cta.secondary")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function CommunityCard({
  icon,
  title,
  desc,
  status,
  members,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  status: string;
  members: string;
}) {
  const statusStyles: Record<string, string> = {
    Active: "bg-accent/10 text-accent-secondary",
    Beta: "bg-primary/10 text-primary",
    "Coming Soon": "bg-foreground-muted/10 text-foreground-muted",
  };

  return (
    <div className="card card-hover card-glow p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <span
          className={`text-[10px] px-2.5 py-1 rounded-full tracking-wider uppercase ${
            statusStyles[status] ?? statusStyles["Coming Soon"]
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
        {desc}
      </p>
      <div className="mt-4 text-xs text-foreground-subtle">{members}</div>
    </div>
  );
}

function CommunityIcon({ name }: { name: (typeof ITEM_KEYS)[number] }) {
  const paths = {
    forum:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    events:
      "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    learning:
      "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    openSource:
      "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
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
