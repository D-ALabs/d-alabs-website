"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import {
  ArrowIcon,
  GreatSigil,
  MercurySigil,
  ProductSigil,
  SaltSigil,
  StageGlyph,
  SulfurSigil,
} from "@/components/sigils";

const EXPERTISE = [
  { num: "01", key: "ai", Symbol: SulfurSigil },
  { num: "02", key: "data", Symbol: SaltSigil },
  { num: "03", key: "cloud", Symbol: MercurySigil },
] as const;

const PROCESS = [
  { roman: "I", key: "nigredo" },
  { roman: "II", key: "albedo" },
  { roman: "III", key: "citrinitas" },
  { roman: "IV", key: "rubedo" },
] as const;

export default function HomePage() {
  const t = useTranslations("Home");
  const marquee = t.raw("marquee") as string[];

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow left" style={{ marginBottom: 32 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      display: "inline-block",
                    }}
                  />
                  {t("heroEyebrow")}
                </span>
              </div>
              <h1 className="text-balance">
                {t("heroTitleA")}
                <span className="em">{t("heroEmA")}</span>
                {t("heroTitleB")}
                <span className="em">{t("heroEmB")}</span>
                {t("heroTitleC")}
              </h1>
              <p className="lede text-pretty">{t("heroLede")}</p>
              <div className="cta-row">
                <Link className="btn btn-primary" href="/services">
                  {t("heroCta1")} <ArrowIcon />
                </Link>
                <Link className="btn btn-ghost" href="/about">
                  {t("heroCta2")}
                </Link>
              </div>
              <div className="hero-meta">
                <div>
                  <div className="stat-num">02</div>
                  <div className="stat-label">{t("heroStat1")}</div>
                </div>
                <div>
                  <div className="stat-num">III</div>
                  <div className="stat-label">{t("heroStat2")}</div>
                </div>
                <div>
                  <div className="stat-num">IV</div>
                  <div className="stat-label">{t("heroStat3")}</div>
                </div>
              </div>
            </div>
            <div className="sigil-wrap float" style={{ minHeight: 560 }}>
              <GreatSigil size={560} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} style={{ display: "flex", gap: 80 }}>
              {marquee.map((s, j) => (
                <div className="marquee-item" key={`${i}-${j}`}>
                  <span style={{ fontStyle: j % 2 === 0 ? "italic" : "normal" }}>{s}</span>
                  <span className="dot" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* EXPERTISE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 24 }}>
                  <span>{t("expertiseEyebrow")}</span>
                </div>
                <h2 className="text-balance">
                  {t("expertiseTitleA")}
                  <span className="serif-italic gold">{t("expertiseEm")}</span>
                  {t("expertiseTitleB")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("expertiseMeta")}</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="expertise-grid">
              {EXPERTISE.map((item) => {
                const tags = t.raw(`expertise.${item.key}.tags`) as string[];
                return (
                  <div className="expertise-card" key={item.key}>
                    <div>
                      <div className="sym">
                        <item.Symbol />
                      </div>
                      <div className="index" style={{ marginTop: 16 }}>
                        {item.num} / {t("disciplineLabel")}
                      </div>
                      <h3>{t(`expertise.${item.key}.title`)}</h3>
                      <p className="text">{t(`expertise.${item.key}.desc`)}</p>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 24 }}>
                  <span>{t("productsEyebrow")}</span>
                </div>
                <h2 className="text-balance">
                  {t("productsTitleA")}
                  <span className="serif-italic gold">{t("productsEm")}</span>
                  {t("productsTitleB")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("productsMeta")}</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="products-grid">
              <a className="product-card" href="https://signgpt.org" target="_blank" rel="noreferrer">
                <div>
                  <div className="kicker">
                    <span style={{ display: "inline-block", width: 16, height: 1, background: "currentColor" }} />
                    {t("products.signgpt.kicker")}
                  </div>
                  <h3>SignGPT</h3>
                  <p className="desc">{t("products.signgpt.desc")}</p>
                  <div className="visual">
                    <ProductSigil kind="sign" />
                  </div>
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
                  <div className="visual">
                    <ProductSigil kind="lembic" />
                  </div>
                </div>
                <div className="visit">
                  {t("products.lembic.visit")} <ArrowIcon />
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 24 }}>
                  <span>{t("processEyebrow")}</span>
                </div>
                <h2 className="text-balance">
                  {t("processTitleA")}
                  <span className="serif-italic gold">{t("processEm")}</span>
                  {t("processTitleB")}
                </h2>
              </div>
              <div className="meta text-pretty">{t("processMeta")}</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="process-list">
              {PROCESS.map((p, i) => (
                <div className="process-row" key={p.key}>
                  <div className="roman">{p.roman}</div>
                  <div className="title-block">
                    <div className="stage">{t(`process.${p.key}.stage`)}</div>
                    <h3>{t(`process.${p.key}.title`)}</h3>
                  </div>
                  <div className="desc">{t(`process.${p.key}.desc`)}</div>
                  <div className="glyph-end">
                    <StageGlyph stage={(i + 1) as 1 | 2 | 3 | 4} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="sigil-bg">
          <GreatSigil size={680} />
        </div>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 32, justifyContent: "center" }}>
              <span>{t("ctaEyebrow")}</span>
            </div>
            <h2 className="text-balance">
              {t("ctaTitleA")}
              <span className="serif-italic gold">{t("ctaEm")}</span>
              {t("ctaTitleB")}
            </h2>
            <p className="cta-sub text-pretty">{t("ctaSub")}</p>
            <a className="btn btn-primary" href="mailto:contact@d-alabs.com">
              {t("ctaBtn")} <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
