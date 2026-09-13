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
        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-14 hidden h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent lg:block"
          />
          {steps.map((s, idx) => (
            <div key={s.n} className="card relative p-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-700 text-white shadow-soft">
                <span className="font-display text-xl">{idx + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
