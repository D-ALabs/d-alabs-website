"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { OrnamentLine } from "@/components/sigils";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div style={{ flex: "1 1 320px", maxWidth: 420 }}>
            <Link href="/" className="nav-brand" aria-label="D-ALabs home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="D-ALabs" className="brand-logo" />
            </Link>
            <p className="footer-lede">{t("lede")}</p>
            <div style={{ marginTop: 24 }}>
              <OrnamentLine width={120} />
            </div>
          </div>

          <div className="footer-grid">
            <div>
              <h5>{t("company")}</h5>
              <ul>
                <li><Link href="/about">{t("aboutUs")}</Link></li>
                <li><Link href="/services">{t("servicesLink")}</Link></li>
                <li><Link href="/news">{t("newsLink")}</Link></li>
                <li><Link href="/community">{t("communityLink")}</Link></li>
              </ul>
            </div>
            <div>
              <h5>{t("products")}</h5>
              <ul>
                <li>
                  <a href="https://signgpt.org" target="_blank" rel="noreferrer">SignGPT</a>
                </li>
                <li>
                  <a href="https://lembic.ai" target="_blank" rel="noreferrer">Lembic AI</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>{t("connect")}</h5>
              <ul>
                <li><a href="mailto:contact@d-alabs.com">contact@d-alabs.com</a></li>
                <li><Link href="/support">{t("support")}</Link></li>
                <li>
                  <span>
                    {t("addressLine1")}<br />
                    {t("addressLine2")}<br />
                    {t("addressLine3")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="mono">{t("businessInfo")}</span>
          <span className="mono">{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
