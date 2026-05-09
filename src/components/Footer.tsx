import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AlchemicalMark from "./AlchemicalMark";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");

  const services = [
    { name: "SignGPT", href: "https://signgpt.org", desc: "Sign Language AI" },
    { name: "Lembic AI", href: "https://lembic.ai", desc: "Content Creation" },
  ];

  return (
    <footer className="w-full border-t border-border/50 bg-background-secondary/50 mt-20">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <AlchemicalMark size={28} />
              <span className="text-base font-semibold tracking-tight">
                D-ALabs
              </span>
            </Link>
            <p className="mt-4 text-sm text-foreground-muted leading-relaxed max-w-xs">
              <span className="text-foreground/80">{t("tagline")}</span>
              <br />
              {t("description")}
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-eyebrow mb-4">{t("columns.services")}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <span>{service.name}</span>
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
                        d="M14 4h6v6M10 14L20 4M14 20H6a2 2 0 01-2-2v-8"
                      />
                    </svg>
                  </a>
                  <div className="text-xs text-foreground-subtle mt-0.5">
                    {service.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-eyebrow mb-4">{t("columns.company")}</h4>
            <ul className="space-y-2.5 text-sm text-foreground-muted">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  {t("links.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-primary transition-colors"
                >
                  {t("links.news")}
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-primary transition-colors"
                >
                  {t("links.community")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-eyebrow mb-4">{t("columns.contact")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:contact@d-alabs.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  contact@d-alabs.com
                </a>
              </li>
              <li className="text-foreground-muted">
                <a
                  href="tel:+821098829831"
                  className="hover:text-primary transition-colors"
                >
                  010-9882-9831
                </a>
              </li>
              <li className="text-foreground-subtle text-xs leading-relaxed pt-2">
                {t("company.address")}
              </li>
              <li>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary hover:text-primary-light transition-colors"
                >
                  {tNav("support")}
                  <svg
                    className="w-3 h-3"
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
              </li>
            </ul>
          </div>
        </div>

        {/* Legal info */}
        <div className="mt-14 pt-8 border-t border-border/40">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-foreground-subtle leading-relaxed">
            <span>{t("company.name")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("company.ceo")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("company.bizNumber")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("company.mailOrderNumber")}</span>
            <span aria-hidden="true">·</span>
            <span>{t("company.bankAccount")}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-foreground-subtle">
            © {new Date().getFullYear()} D-ALabs. {t("rights")}
          </p>
          <a
            href="https://lembic.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground-subtle hover:text-primary transition-colors"
          >
            {t("madeWith")} Lembic.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
