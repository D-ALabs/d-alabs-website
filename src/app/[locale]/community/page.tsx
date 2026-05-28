"use client";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import { ArrowIcon, GreatSigil } from "@/components/sigils";

type Program = { tag: string; title: string; desc: string };
type Upcoming = { date: string; month: string; tag: string; title: string; place: string };

export default function CommunityPage() {
  const t = useTranslations("Community");
  const programs = t.raw("programs") as Program[];
  const upcoming = t.raw("upcoming") as Upcoming[];

  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div className="container">
          <div className="eyebrow left" style={{ marginBottom: 28 }}>
            <span>{t("heroEyebrow")}</span>
          </div>
          <h1 className="text-balance" style={{ maxWidth: 1000 }}>
            {t("heroTitleA")}
            <span className="serif-italic gold">{t("heroEm")}</span>
            {t("heroTitleB")}
          </h1>
          <p className="lede" style={{ fontSize: 20, maxWidth: 640, marginTop: 20 }}>
            {t("heroLede")}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="community-grid">
              {programs.map((c) => (
                <div className="community-card" key={c.title}>
                  <span className="pill">
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "currentColor",
                        display: "inline-block",
                      }}
                    />
                    {c.tag}
                  </span>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="title">
                <div className="eyebrow left" style={{ marginBottom: 20 }}>
                  <span>{t("upcomingEyebrow")}</span>
                </div>
                <h2>
                  {t("upcomingTitleA")}
                  <span className="serif-italic gold">{t("upcomingEm")}</span>
                  {t("upcomingTitleB")}
                </h2>
              </div>
              <div className="meta">{t("upcomingMeta")}</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="news-list">
              {upcoming.map((e, i) => (
                <div className="news-row" key={i}>
                  <div>
                    <div className="serif-italic gold" style={{ fontSize: 28 }}>
                      {e.date}
                    </div>
                    <div className="mono dim" style={{ marginTop: 4 }}>
                      {e.month}
                    </div>
                  </div>
                  <div>
                    <div className="news-title">{e.title}</div>
                    <div className="dim" style={{ fontSize: 13, marginTop: 6 }}>
                      {e.place}
                    </div>
                  </div>
                  <div className="tag">— {e.tag}</div>
                  <div className="arrow-end">
                    <ArrowIcon />
                  </div>
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
          <h2 className="text-balance" style={{ maxWidth: 900 }}>
            {t("ctaTitleA")}
            <span className="serif-italic gold">{t("ctaEm")}</span>
            {t("ctaTitleB")}
          </h2>
          <p className="cta-sub">{t("ctaSub")}</p>
          <a className="btn btn-primary" href="mailto:community@d-alabs.com">
            {t("ctaBtn")} <ArrowIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
