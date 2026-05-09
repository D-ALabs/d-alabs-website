"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm() {
  const t = useTranslations("Signup.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      type: "signup" as const,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: (fd.get("company") as string) || undefined,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors ?? {});
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <p className="text-foreground text-pretty">{t("success")}</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="card p-8 space-y-5" noValidate>
      <Field
        id="signup-name"
        name="name"
        label={t("fields.name")}
        placeholder={t("fields.namePlaceholder")}
        required
        error={errors.name?.[0]}
        disabled={submitting}
      />
      <Field
        id="signup-email"
        name="email"
        type="email"
        label={t("fields.email")}
        placeholder={t("fields.emailPlaceholder")}
        required
        error={errors.email?.[0]}
        disabled={submitting}
      />
      <Field
        id="signup-company"
        name="company"
        label={t("fields.company")}
        placeholder={t("fields.companyPlaceholder")}
        error={errors.company?.[0]}
        disabled={submitting}
      />

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-400">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary text-sm w-full"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>

      <p className="text-xs text-center text-foreground-subtle">
        {t("consent")}
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  error,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        className={`field ${error ? "field-error" : ""}`}
      />
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
