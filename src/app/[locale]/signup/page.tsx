"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/sigils";

export default function SignupPage() {
  const t = useTranslations("Signup.hero");
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingTop: 160, paddingBottom: 200, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 28 }}>
            <span>{t("eyebrow")}</span>
          </div>
          <h1 className="text-balance" style={{ marginBottom: 24 }}>
            {t("titleA")}
            <span className="serif-italic gold">{t("em")}</span>
            {t("titleB")}
          </h1>
          <p className="dim" style={{ fontSize: 18, marginBottom: 40 }}>
            {t("lede")}
          </p>
          <Link className="btn btn-primary" href="/">
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
