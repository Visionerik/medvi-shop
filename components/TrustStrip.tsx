"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();
  const items = [t.trustStrip.featuredIn, ...t.trustStrip.outlets];

  return (
    <section aria-label={t.trustStrip.featuredIn} className="border-y border-black/5 bg-white/60">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-xs uppercase tracking-[0.2em] text-ink-700/70">
        {items.map((label, idx) => (
          <span
            key={`${label}-${idx}`}
            className={
              idx === 0
                ? "font-semibold text-brand-700"
                : "font-medium"
            }
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
