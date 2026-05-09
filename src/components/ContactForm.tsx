"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const t = useTranslations("Support.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      type: "contact" as const,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={t("fields.name")}
          placeholder={t("fields.namePlaceholder")}
          required
          error={errors.name?.[0]}
          disabled={submitting}
        />
        <Field
          id="email"
          name="email"
          type="email"
          label={t("fields.email")}
          placeholder={t("fields.emailPlaceholder")}
          required
          error={errors.email?.[0]}
          disabled={submitting}
        />
      </div>
      <Field
        id="subject"
        label={t("fields.subject")}
        placeholder={t("fields.subjectPlaceholder")}
        required
        error={errors.subject?.[0]}
        disabled={submitting}
      />
      <Field
        id="message"
        label={t("fields.message")}
        placeholder={t("fields.messagePlaceholder")}
        required
        textarea
        error={errors.message?.[0]}
        disabled={submitting}
      />

      {status === "error" && Object.keys(errors).length === 0 && (
        <p className="text-sm text-red-400">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary text-sm w-full sm:w-auto px-6"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>
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
  textarea = false,
  error,
  disabled,
}: {
  id: string;
  name?: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name ?? id}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          className={`field min-h-32 resize-none ${error ? "field-error" : ""}`}
        />
      ) : (
        <input
          id={id}
          name={name ?? id}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          className={`field ${error ? "field-error" : ""}`}
        />
      )}
      {error && (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
