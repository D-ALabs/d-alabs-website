"use client";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import {
  ArrowIcon,
  GreatSigil,
  MercurySigil,
  SaltSigil,
  SulfurSigil,
} from "@/components/sigils";

const DISCIPLINES = [
  { key: "ai", Sigil: SulfurSigil },
  { key: "data", Sigil: SaltSigil },
  { key: "cloud", Sigil: MercurySigil },
] as const;

const ENGAGEMENTS = ["discovery", "build", "embedded"] as const;

export default function ServicesPage() {
  const t = useTranslations("Services");
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 920 }}>
            <div className="eyebrow left" style={{ marginBottom: 28 }}>
              <span>{t("heroEyebrow")}</span>
            </div>
            <h1 className="text-balance">
              {t("heroTitleA")}
              <span className="serif-italic gold">{t("heroEm")}</span>
              {t("heroTitleB")}
            </h1>
            <p className="lede" style={{ maxWidth: 680, fontSize: 20 }}>
              {t("heroLede")}
            </p>
          </div>
        </div>
      </section>

      {DISCIPLINES.map(({ key, Sigil }) => {
        const offerings = t.raw(`disciplines.${key}.offerings`) as { k: string; v: string }[];
        const tags = t.raw(`disciplines.${key}.tags`) as string[];
        return (
          <section
            className="section"
            key={key}
            style={{ paddingTop: 60, paddingBottom: 60, borderTop: "1px solid var(--line)" }}
          >
            <div className="container">
              <Reveal>
                <div className="services-block">
                  <div style={{ position: "sticky", top: 120 }}>
                    <div style={{ color: "var(--accent)", opacity: 0.9, marginBottom: 20 }}>
                      <Sigil size={120} />
                    </div>
                    <div className="mono dim" style={{ marginBottom: 12 }}>
                      {t(`disciplines.${key}.num`)}
                    </div>
                    <h2 style={{ fontSize: "clamp(48px, 6vw, 80px)", marginBottom: 16 }}>
                      {t(`disciplines.${key}.title`)}
                    </h2>
                    <p className="serif-italic dim" style={{ fontSize: 20 }}>
                      {t(`disciplines.${key}.subtitle`)}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 20, color: "var(--ink)", marginBottom: 40, lineHeight: 1.55 }}>
                      {t(`disciplines.${key}.intro`)}
                    </p>
                    <div className="kv-list">
                      {offerings.map((o) => (
                        <div className="kv-row" key={o.k}>
                          <div className="k">{o.k}</div>
                          <div className="v">{o.v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: 11,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--ink-dim)",
                            border: "1px solid var(--line)",
                            padding: "5px 11px",
                            borderRadius: 999,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 20 }}>
                  <span>{t("engagementEyebrow")}</span>
                </div>
                <h2>
                  {t("engagementTitleA")}
                  <span className="serif-italic gold">{t("engagementEm")}</span>
                  {t("engagementTitleB")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("engagementMeta")}</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="engagement-grid">
              {ENGAGEMENTS.map((k) => (
                <div className="card" key={k}>
                  <span className="corner tl" />
                  <span className="corner tr" />
                  <span className="corner bl" />
                  <span className="corner br" />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 24,
                    }}
                  >
                    <div className="serif-italic gold" style={{ fontSize: 36 }}>
                      {t(`engagement.${k}.roman`)}
                    </div>
                    <div className="mono dim">{t(`engagement.${k}.dur`)}</div>
                  </div>
                  <h3 style={{ marginBottom: 12 }}>{t(`engagement.${k}.label`)}</h3>
                  <p className="dim" style={{ fontSize: 14 }}>
                    {t(`engagement.${k}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-section" style={{ paddingTop: 80, paddingBottom: 160 }}>
        <div className="sigil-bg">
          <GreatSigil size={520} />
        </div>
        <div className="container">
          <h2 className="text-balance">
            {t("ctaTitleA")}
            <span className="serif-italic gold">{t("ctaEm")}</span>
            {t("ctaTitleB")}
          </h2>
          <p className="cta-sub">{t("ctaSub")}</p>
          <a className="btn btn-primary" href="mailto:contact@d-alabs.com">
            {t("ctaBtn")} <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
