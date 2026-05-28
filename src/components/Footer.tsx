"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandMark, OrnamentLine } from "@/components/sigils";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: 16 }}>
              <BrandMark size={32} />
              <span className="nav-brand-text">
                D<em>·</em>ALabs
              </span>
            </div>
            <p className="serif-italic dim" style={{ fontSize: 18, lineHeight: 1.4, maxWidth: 320 }}>
              {t("taglineA")}
              <br />
              {t("taglineB")}
            </p>
            <div style={{ marginTop: 28 }}>
              <OrnamentLine width={120} />
            </div>
          </div>
          <div>
            <h5>{t("services")}</h5>
            <ul>
              <li>
                <a href="https://signgpt.org" target="_blank" rel="noreferrer">
                  SignGPT — Sign Language AI
                </a>
              </li>
              <li>
                <a href="https://lembic.ai" target="_blank" rel="noreferrer">
                  Lembic AI — Content Creation
                </a>
              </li>
            </ul>
          </div>
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
            <h5>{t("contact")}</h5>
            <ul>
              <li><a href="mailto:contact@d-alabs.com">contact@d-alabs.com</a></li>
              <li>
                <span style={{ color: "var(--ink-dim)", fontSize: 14 }}>
                  {t("addressLine1")}<br />
                  {t("addressLine2")}<br />
                  {t("addressLine3")}
                </span>
              </li>
              <li><a href="mailto:support@d-alabs.com">{t("support")}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div><span className="mono dim">{t("businessInfo")}</span></div>
          <div className="mono dim">{t("rights")}</div>
        </div>
      </div>
    </footer>
  );
}
