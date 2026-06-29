"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import Stagger from "@/components/Stagger";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";
import {
  ArrowIcon,
  FlaskMotif,
  GreatSigil,
  ProductSigil,
  SulfurSigil,
  SaltSigil,
  MercurySigil,
} from "@/components/sigils";

const DISCIPLINES = [
  { num: "01", key: "ai", Glyph: SulfurSigil },
  { num: "02", key: "data", Glyph: SaltSigil },
  { num: "03", key: "cloud", Glyph: MercurySigil },
] as const;

const PROCESS = ["discover", "prototype", "evaluate", "ship"] as const;
const STATS = ["s1", "s2", "s3", "s4"] as const;
const NOTES = ["n1", "n2", "n3"] as const;

function IndexLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="index-label">
      <span className="br">[</span>&nbsp; {children} &nbsp;<span className="br">]</span>
    </div>
  );
}

export default function HomePage() {
  const t = useTranslations("Home");
  const marquee = t.raw("marquee") as string[];

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="grid-bg" />
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1 className="text-balance rise" style={{ animationDelay: ".02s" }}>
                {t("heroTitle")}
              </h1>
              <p className="lede text-pretty rise" style={{ animationDelay: ".1s" }}>
                {t("heroLede")}
              </p>
              <div className="cta-row rise" style={{ animationDelay: ".18s" }}>
                <Magnetic>
                  <Link className="btn btn-primary" href="/support">
                    {t("heroCta1")} <ArrowIcon />
                  </Link>
                </Magnetic>
                <a className="btn btn-ghost" href="#work">
                  {t("heroCta2")}
                </a>
              </div>
              <div className="hero-meta rise" style={{ animationDelay: ".26s" }}>
                {(["m1", "m2", "m3"] as const).map((k) => (
                  <div key={k}>
                    <div className="stat-num">
                      <CountUp value={t(`heroMeta.${k}.num`)} />
                    </div>
                    <div className="stat-label">{t(`heroMeta.${k}.label`)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rise" style={{ animationDelay: ".14s", display: "grid", placeItems: "center" }}>
              <FlaskMotif size={376} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} style={{ display: "flex", gap: 60 }}>
              {marquee.map((s, j) => (
                <div className="marquee-item" key={`${i}-${j}`}>
                  <span>{s}</span>
                  <span className="dot" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <IndexLabel>01 &mdash; {t("whatLabel")}</IndexLabel>
                <h2 className="text-balance" style={{ marginTop: 16 }}>
                  {t("whatTitle")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("whatMeta")}</div>
            </div>
          </Reveal>

          <Stagger className="expertise-grid">
            {DISCIPLINES.map((d) => {
                const tags = t.raw(`disciplines.${d.key}.tags`) as string[];
                return (
                  <div className="expertise-card" key={d.key}>
                    <div>
                      <div className="sym">
                        <d.Glyph />
                      </div>
                      <div className="index" style={{ marginTop: 18 }}>
                        {d.num} / {t("disciplineLabel")}
                      </div>
                      <h3>{t(`disciplines.${d.key}.title`)}</h3>
                      <p className="text">{t(`disciplines.${d.key}.desc`)}</p>
                    </div>
                    <div className="tags">
                      {tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
          </Stagger>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <IndexLabel>02 &mdash; {t("workLabel")}</IndexLabel>
                <h2 className="text-balance" style={{ marginTop: 16 }}>
                  {t("workTitle")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("workMeta")}</div>
            </div>
          </Reveal>

          <Stagger className="products-grid">
            <a className="product-card" href="https://signgpt.org" target="_blank" rel="noreferrer">
                <div>
                  <div className="kicker">
                    <span style={{ display: "inline-block", width: 16, height: 1, background: "currentColor" }} />
                    {t("products.signgpt.kicker")}
                  </div>
                  <h3>SignGPT</h3>
                  <p className="desc">{t("products.signgpt.desc")}</p>
                </div>
                <div className="visual">
                  <ProductSigil kind="sign" />
                </div>
                <div className="visit">
                  {t("products.signgpt.visit")} <ArrowIcon />
                </div>
              </a>

              <a className="product-card" href="https://lembic.ai" target="_blank" rel="noreferrer">
                <div>
                  <div className="kicker">
                    <span style={{ display: "inline-block", width: 16, height: 1, background: "currentColor" }} />
                    {t("products.lembic.kicker")}
                  </div>
                  <h3>Lembic AI</h3>
                  <p className="desc">{t("products.lembic.desc")}</p>
                </div>
                <div className="visual">
                  <ProductSigil kind="lembic" />
                </div>
                <div className="visit">
                  {t("products.lembic.visit")} <ArrowIcon />
                </div>
              </a>
          </Stagger>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <IndexLabel>03 &mdash; {t("processLabel")}</IndexLabel>
                <h2 className="text-balance" style={{ marginTop: 16 }}>
                  {t("processTitle")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("processMeta")}</div>
            </div>
          </Reveal>

          <Stagger className="process-list">
            {PROCESS.map((p, i) => (
                <div className="process-row" key={p}>
                  <div className="roman">{String(i + 1).padStart(2, "0")}</div>
                  <div className="title-block">
                    <h3>{t(`process.${p}.title`)}</h3>
                  </div>
                  <div className="desc">{t(`process.${p}.desc`)}</div>
                </div>
              ))}
          </Stagger>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stats-band">
              <div className="grid-bg" />
              <Stagger className="stats-grid">
                {STATS.map((s) => (
                  <div key={s}>
                    <div className="stat-num">
                      <CountUp value={t(`stats.${s}.num`)} />
                    </div>
                    <div className="stat-label">{t(`stats.${s}.label`)}</div>
                  </div>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSIDE THE LAB */}
      <section className="section">
        <div className="container">
          <div className="about-hero">
            <Reveal>
              <div>
                <IndexLabel>04 &mdash; {t("aboutLabel")}</IndexLabel>
                <h2 className="text-balance" style={{ marginTop: 16 }}>
                  {t("aboutTitle")}
                </h2>
                <p className="lede text-pretty" style={{ marginTop: 20 }}>
                  {t("aboutBody1")}
                </p>
                <p className="text-pretty dim" style={{ marginTop: 14, fontSize: "1.05rem", lineHeight: 1.65 }}>
                  {t("aboutBody2")}
                </p>
                <div
                  className="mono dim"
                  style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 28, alignItems: "center" }}
                >
                  <span>{t("aboutFacts.a")}</span>
                  <span style={{ color: "var(--line-strong)" }}>/</span>
                  <span>{t("aboutFacts.b")}</span>
                  <span style={{ color: "var(--line-strong)" }}>/</span>
                  <span>{t("aboutFacts.c")}</span>
                </div>
                <div style={{ marginTop: 30 }}>
                  <Link className="btn btn-ghost" href="/about">
                    {t("aboutCta")} <ArrowIcon />
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="sigil-wrap float" style={{ minHeight: 360 }}>
                <GreatSigil size={420} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FROM THE LAB */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: 36,
              }}
            >
              <div>
                <IndexLabel>05 &mdash; {t("notesLabel")}</IndexLabel>
                <h2 className="text-balance" style={{ marginTop: 16 }}>
                  {t("notesTitle")}
                </h2>
              </div>
              <Link
                href="/news"
                style={{ fontSize: 14.5, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 7 }}
              >
                {t("notesMore")} <ArrowIcon size={13} />
              </Link>
            </div>
          </Reveal>

          <Stagger className="news-list">
            {NOTES.map((n) => (
                <Link href="/news" className="news-row" key={n}>
                  <div className="date">{t(`notes.${n}.date`)}</div>
                  <div className="news-title">{t(`notes.${n}.title`)}</div>
                  <div className="tag">{t(`notes.${n}.tag`)}</div>
                  <div className="arrow-end">
                    <ArrowIcon size={16} />
                  </div>
                </Link>
              ))}
          </Stagger>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section">
        <div className="grid-bg" />
        <div className="sigil-bg">
          <GreatSigil size={620} />
        </div>
        <div className="container">
          <Reveal>
            <IndexLabel>{t("ctaEyebrow")}</IndexLabel>
            <h2 className="text-balance" style={{ marginTop: 18 }}>
              {t("ctaTitle")}
            </h2>
            <p className="cta-sub text-pretty">{t("ctaSub")}</p>
            <div className="cta-row">
              <Magnetic>
                <Link className="btn btn-primary" href="/support">
                  {t("ctaBtn1")} <ArrowIcon />
                </Link>
              </Magnetic>
              <a className="btn btn-ghost" href="mailto:contact@d-alabs.com">
                contact@d-alabs.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
