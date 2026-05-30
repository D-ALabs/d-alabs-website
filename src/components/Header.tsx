"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandMark } from "@/components/sigils";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "news", href: "/news" },
  { key: "community", href: "/community" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <BrandMark size={32} />
          <span className="nav-brand-text">
            D<em>·</em>ALabs
          </span>
        </Link>
        <ul className="nav-links">
          {NAV.map((l) => (
            <li key={l.key}>
              <Link
                href={l.href}
                className={`nav-link ${isActive(l.href) ? "active" : ""}`}
              >
                {t(l.key)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <a className="contact-btn" href="mailto:contact@d-alabs.com">
            {t("contact")}
          </a>
        </div>
      </div>
    </nav>
  );
}
