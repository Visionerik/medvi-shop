"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/translations";

const options: { code: Locale; label: string; aria: string }[] = [
  { code: "en", label: "EN", aria: "English" },
  { code: "de", label: "DE", aria: "Deutsch" },
];

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const current = options.find((o) => o.code === locale) ?? options[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.languageSwitcher.ariaLabel}
        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-ink-800 transition hover:border-black/20 hover:bg-white"
      >
        <span>{current.label}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 text-ink-700 transition ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.languageSwitcher.ariaLabel}
          className="absolute right-0 top-full z-50 mt-2 min-w-[8rem] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card"
        >
          {options.map((o) => {
            const active = o.code === locale;
            return (
              <li key={o.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(o.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition ${
                    active
                      ? "bg-brand-100/60 text-brand-800"
                      : "text-ink-800 hover:bg-sand-50"
                  }`}
                >
                  <span className="font-medium">{o.label}</span>
                  <span className="ml-1 text-xs text-ink-700/70">
                    {o.aria}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
