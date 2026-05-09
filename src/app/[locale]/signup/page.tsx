import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";
import SignupForm from "@/components/SignupForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Signup.metadata" });
  return { title: t("title") };
}

export default async function SignupPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Signup");

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

      {/* Form */}
      <section className="container-app py-16">
        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                {t("form.title")}
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                {t("form.subtitle")}
              </p>
            </div>
            <SignupForm />

            <p className="mt-8 text-center text-sm text-foreground-muted">
              {t("form.alreadyMember")}{" "}
              <a
                href="#"
                className="text-primary hover:text-primary-light transition-colors underline-offset-4 hover:underline"
              >
                {t("form.login")}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
