"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const { eyebrow, title, steps } = t.howItWorks;

  return (
    <section id="how" className="relative py-20 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card p-6">
              <p className="font-display text-4xl text-brand-700/80">{s.n}</p>
              <h3 className="mt-4 font-display text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
