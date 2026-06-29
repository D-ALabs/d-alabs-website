"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { ArrowIcon, GreatSigil } from "@/components/sigils";

type Item = { date: string; tag: string; title: string; excerpt: string };

export default function NewsPage() {
  const t = useTranslations("News");
  const items = t.raw("items") as Item[];
  const filters = [
    { key: "all", label: t("filterAll") },
    { key: "product", label: t("filterProduct") },
    { key: "research", label: t("filterResearch") },
    { key: "engineering", label: t("filterEngineering") },
    { key: "lab", label: t("filterLab") },
  ];

  const [active, setActive] = useState<string>("all");
  const activeLabel = filters.find((f) => f.key === active)?.label ?? "";
  const filtered = active === "all" ? items : items.filter((i) => i.tag === activeLabel);

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container">
          <div className="eyebrow left" style={{ marginBottom: 28 }}>
            <span>{t("heroEyebrow")}</span>
          </div>
          <h1 className="text-balance" style={{ maxWidth: 920 }}>
            {t("heroTitleA")}
            <span className="serif-italic gold">{t("heroEm")}</span>
            {t("heroTitleB")}
          </h1>
          <p className="lede" style={{ fontSize: 20, maxWidth: 600, marginTop: 20 }}>
            {t("heroLede")}
          </p>

          <div style={{ display: "flex", gap: 6, marginTop: 56, flexWrap: "wrap" }}>
            {filters.map((f) => {
              const on = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    border: "1px solid",
                    background: on ? "var(--accent)" : "transparent",
                    color: on ? "var(--bg)" : "var(--ink-dim)",
                    borderColor: on ? "var(--accent)" : "var(--line)",
                    borderRadius: 999,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="news-list">
            {filtered.map((n, i) => (
              <Reveal key={n.title} delay={i * 40}>
                <div className="news-row">
                  <div className="date">{n.date}</div>
                  <div>
                    <div className="news-title text-balance">{n.title}</div>
                    <div className="dim" style={{ fontSize: 14, marginTop: 6, maxWidth: 620 }}>
                      {n.excerpt}
                    </div>
                  </div>
                  <div className="tag">— {n.tag}</div>
                  <div className="arrow-end">
                    <ArrowIcon />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ paddingTop: 40, paddingBottom: 160 }}>
        <div className="sigil-bg">
          <GreatSigil size={480} />
        </div>
        <div className="container">
          <h2 className="text-balance" style={{ maxWidth: 800 }}>
            {t("ctaTitleA")}
            <span className="serif-italic gold">{t("ctaEm")}</span>
            {t("ctaTitleB")}
          </h2>
          <p className="cta-sub">{t("ctaSub")}</p>
          <form
            style={{
              display: "flex",
              gap: 8,
              maxWidth: 460,
              margin: "0 auto",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("ctaPlaceholder")}
              style={{
                flex: 1,
                minWidth: 240,
                padding: "14px 18px",
                background: "transparent",
                border: "1px solid var(--line-strong)",
                borderRadius: 999,
                color: "var(--ink)",
                fontFamily: "inherit",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button className="btn btn-primary" type="submit">
              {t("ctaBtn")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
