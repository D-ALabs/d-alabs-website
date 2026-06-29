"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/sigils";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./Magnetic";

const NAV = [
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "news", href: "/news" },
  { key: "community", href: "/community" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Hide nav on scroll-down (past the fold), reveal on scroll-up; densify when scrolled.
  const lastY = useRef(0);
  const ticking = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const y = window.scrollY || 0;
        setScrolled(y > 24);
        const goingDown = y > lastY.current && y > 620;
        setHidden(goingDown && !open);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}${hidden ? " nav-hidden" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="D-ALabs home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="D-ALabs" className="brand-logo" />
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
          <ThemeToggle />
          <Magnetic>
            <Link className="contact-btn" href="/support">
              {t("cta")} <ArrowIcon size={14} />
            </Link>
          </Magnetic>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t("menu")}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <button
            type="button"
            className="mobile-close"
            aria-label={t("close")}
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
          <div className="mobile-links">
            {NAV.map((l) => (
              <Link key={l.key} href={l.href} onClick={() => setOpen(false)}>
                {t(l.key)}
              </Link>
            ))}
          </div>
          <Link
            className="btn btn-primary"
            href="/support"
            onClick={() => setOpen(false)}
          >
            {t("cta")} <ArrowIcon />
          </Link>
        </div>
      )}
    </nav>
  );
}
