import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import TransmutingOrb from "@/components/TransmutingOrb";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      {/* ───────────────────────  HERO  ─────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-40 pointer-events-none" />

        <div className="container-app relative pt-16 sm:pt-24 lg:pt-28 pb-20 sm:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left — text */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-7">
                <span className="divider-x" />
                <span className="text-eyebrow">{t("hero.eyebrow")}</span>
                <span className="divider-x" />
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold tracking-tight leading-[1.1] text-balance">
                <span className="text-metallic block">
                  {t("hero.headlinePrimary")}
                </span>
                <span className="text-gold block mt-1">
                  {t("hero.headlineSecondary")}
                </span>
              </h1>

              <p className="mt-7 text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl text-pretty">
                {t("hero.description")}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/services" className="btn-primary text-sm">
                  {t("hero.ctaPrimary")}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link href="/about" className="btn-outline text-sm">
                  {t("hero.ctaSecondary")}
                </Link>
              </div>

              {/* Operating products */}
              <div className="mt-14 pt-7 border-t border-border/60 max-w-xl">
                <p className="text-eyebrow mb-3">{t("hero.operating")}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a
                    href="https://signgpt.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    SignGPT.org
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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
                  <span
                    className="w-1 h-1 rounded-full bg-border-strong"
                    aria-hidden="true"
                  />
                  <a
                    href="https://lembic.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Lembic.ai
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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
                </div>
              </div>
            </div>

            {/* Right — orb */}
            <div className="lg:col-span-5">
              <div className="relative w-full max-w-md mx-auto">
                {/* Outer aura — extends well beyond the canvas */}
                <div
                  className="absolute -inset-16 sm:-inset-20 rounded-full opacity-50 blur-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 45%, var(--glow-gold) 0%, transparent 65%)",
                  }}
                  aria-hidden="true"
                />
                {/* Mid halo — tighter ring of light */}
                <div
                  className="absolute -inset-6 rounded-full opacity-60 blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.35) 0%, transparent 65%)",
                  }}
                  aria-hidden="true"
                />
                {/* Canvas (square) */}
                <div className="relative aspect-square">
                  <TransmutingOrb />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────  EXPERTISE  ─────────────────────── */}
      <section id="expertise" className="container-app py-24 sm:py-28">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-eyebrow mb-3">{t("expertise.eyebrow")}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-metallic">
              {t("expertise.title")}
            </h2>
            <p className="mt-4 text-foreground-muted">
              {t("expertise.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-3">
          <ScrollReveal delay={0}>
            <ExpertiseCard
              icon={<AIIcon />}
              title={t("expertise.ai.title")}
              desc={t("expertise.ai.description")}
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ExpertiseCard
              icon={<DataIcon />}
              title={t("expertise.data.title")}
              desc={t("expertise.data.description")}
            />
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <ExpertiseCard
              icon={<CloudIcon />}
              title={t("expertise.cloud.title")}
              desc={t("expertise.cloud.description")}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────────────────  SERVICES  ─────────────────────── */}
      <section id="services" className="gradient-subtle py-24 sm:py-28">
        <div className="container-app">
          <ScrollReveal>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="text-eyebrow mb-3">{t("services.eyebrow")}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-metallic">
                {t("services.title")}
              </h2>
              <p className="mt-4 text-foreground-muted">
                {t("services.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0}>
              <FeaturedService
                title={t("services.signgpt.title")}
                tagline={t("services.signgpt.tagline")}
                description={t("services.signgpt.description")}
                cta={t("services.signgpt.cta")}
                href="https://signgpt.org"
                icon={<SignGPTGlyph />}
              />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <FeaturedService
                title={t("services.lembic.title")}
                tagline={t("services.lembic.tagline")}
                description={t("services.lembic.description")}
                cta={t("services.lembic.cta")}
                href="https://lembic.ai"
                icon={<LembicGlyph />}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────  PROCESS  ─────────────────────── */}
      <section className="container-app py-24 sm:py-28">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-eyebrow mb-3">{t("process.eyebrow")}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-metallic">
              {t("process.title")}
            </h2>
            <p className="mt-4 text-foreground-muted">{t("process.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on lg+ */}
          <div
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {(["discover", "refine", "transmute", "deliver"] as const).map(
            (key, i) => (
              <ScrollReveal key={key} delay={i * 100}>
                <ProcessStep
                  step={t(`process.${key}.step`)}
                  title={t(`process.${key}.title`)}
                  description={t(`process.${key}.description`)}
                />
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* ───────────────────────  CLOSING CTA  ─────────────────────── */}
      <section className="gradient-subtle">
        <div className="container-app py-20 sm:py-24 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-metallic max-w-2xl mx-auto leading-tight text-balance">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8">
              <Link href="/support" className="btn-primary text-sm px-7">
                {t("cta.button")}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────  components  ───────────────────────────── */

function ExpertiseCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card card-hover card-glow p-7 h-full">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-5">
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

function FeaturedService({
  title,
  tagline,
  description,
  cta,
  href,
  icon,
}: {
  title: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover card-glow p-8 group flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <svg
          className="w-4 h-4 text-foreground-subtle group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 4h6v6M10 14L20 4"
          />
        </svg>
      </div>

      <div>
        <p className="text-eyebrow mb-2">{tagline}</p>
        <h3 className="font-display text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2 transition-all">
          {cta}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </a>
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

/* ─────────────────────────────  icons  ───────────────────────────── */

function AIIcon() {
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
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  );
}

function DataIcon() {
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
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75"
      />
    </svg>
  );
}

function CloudIcon() {
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
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
      />
    </svg>
  );
}

function SignGPTGlyph() {
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
        d="M8 11V8.5a2.5 2.5 0 015 0V11m0 0v-5a2.5 2.5 0 015 0v9a6 6 0 01-6 6h-1.5a4 4 0 01-3.4-1.92l-2.4-3.85a1.5 1.5 0 012.4-1.78L8 14V8.5"
      />
    </svg>
  );
}

function LembicGlyph() {
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
        d="M9 3h6M10 3v5L5 17a3 3 0 002.7 4h8.6a3 3 0 002.7-4l-5-9V3"
      />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
