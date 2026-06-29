"use client";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { ArrowIcon, GreatSigil } from "@/components/sigils";

const TENETS = ["substance", "deeply", "senior", "compound"] as const;

export default function AboutPage() {
  const t = useTranslations("About");
  const team = t.raw("team") as { i: string; name: string; role: string }[];
  const establishment = t.raw("establishment") as { k: string; v: string }[];

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="container">
          <div className="about-hero">
            <div>
              <div className="eyebrow left" style={{ marginBottom: 28 }}>
                <span>{t("heroEyebrow")}</span>
              </div>
              <h1 className="text-balance" style={{ marginBottom: 32 }}>
                {t("heroTitleA")}
                <span className="serif-italic gold">{t("heroEm")}</span>
                {t("heroTitleB")}
              </h1>
              <p className="lede" style={{ fontSize: 20, maxWidth: 540 }}>
                {t("heroLede")}
              </p>
            </div>
            <div className="sigil-wrap float">
              <GreatSigil size={400} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                padding: "80px 0",
              }}
            >
              <div className="eyebrow left" style={{ marginBottom: 40 }}>
                <span>{t("tenetsEyebrow")}</span>
              </div>
              <div className="tenets-grid">
                {TENETS.map((key) => (
                  <div key={key}>
                    <div className="serif-italic gold" style={{ fontSize: 48, marginBottom: 12, lineHeight: 1 }}>
                      {t(`tenets.${key}.n`)}
                    </div>
                    <h3 style={{ marginBottom: 12 }}>{t(`tenets.${key}.t`)}</h3>
                    <p className="dim" style={{ fontSize: 15 }}>
                      {t(`tenets.${key}.d`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 80 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 20 }}>
                  <span>{t("teamEyebrow")}</span>
                </div>
                <h2>
                  {t("teamTitleA")}
                  <span className="serif-italic gold">{t("teamEm")}</span>
                  {t("teamTitleB")}
                </h2>
              </div>
              <div className="meta">{t("teamMeta")}</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="team-grid">
              {team.map((p) => (
                <div className="team-card" key={p.name}>
                  <div className="team-portrait">{p.i}</div>
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="company-grid">
              <div>
                <div className="eyebrow left" style={{ marginBottom: 20 }}>
                  <span>{t("establishmentEyebrow")}</span>
                </div>
                <h2 style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>{t("establishmentTitle")}</h2>
              </div>
              <div className="kv-list">
                {establishment.map((r) => (
                  <div className="kv-row" key={r.k}>
                    <div className="k">{r.k}</div>
                    <div className="v">{r.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-section" style={{ paddingTop: 60 }}>
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
