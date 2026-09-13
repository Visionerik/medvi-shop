"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-100/60 via-sand-50 to-sand-50" />
      <div className="container-x relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {h.eyebrow}
          </span>
          <h1 className="mt-6 heading-display">
            {h.headlineStart}
            <em className="not-italic text-brand-700">{h.headlineEm}</em>
            {h.headlineEnd}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
            {h.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="btn-primary">
              {h.ctaPrimary}
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#weight-loss" className="btn-secondary">
              {h.ctaSecondary}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-700/70">
                {h.statPatientsLabel}
              </dt>
              <dd className="mt-1 font-display text-3xl text-ink-900">
                {h.statPatientsValue}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-700/70">
                {h.statRatingLabel}
              </dt>
              <dd className="mt-1 font-display text-3xl text-ink-900">
                {h.statRatingValue}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ink-700/70">
                {h.statStatesLabel}
              </dt>
              <dd className="mt-1 font-display text-3xl text-ink-900">
                {h.statStatesValue}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-14 lg:col-span-5 lg:mt-0">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-200/60 via-sand-100 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-soft ring-1 ring-black/5">
              <div
                className="aspect-[4/5] w-full bg-gradient-to-br from-brand-100 via-sand-100 to-white"
                aria-hidden
              >
                <div className="flex h-full flex-col justify-end p-8">
                  <div className="mx-auto w-40 h-40 rounded-full bg-brand-600/10 grid place-items-center">
                    <div className="w-24 h-24 rounded-full bg-white shadow-card grid place-items-center">
                      <span className="font-display text-4xl text-brand-700">
                        Rx
                      </span>
                    </div>
                  </div>
                  <p className="mt-8 text-center font-display text-xl text-ink-900">
                    {h.cardHeading}
                  </p>
                  <p className="mt-1 text-center text-sm text-ink-700">
                    {h.cardSub}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 -bottom-6 hidden rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5 sm:block">
              <p className="text-xs uppercase tracking-widest text-ink-700/70">
                {h.badgeConsultLabel}
              </p>
              <p className="mt-1 font-display text-2xl text-brand-700">
                {h.badgeConsultValue}
              </p>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5 sm:block">
              <p className="text-xs uppercase tracking-widest text-ink-700/70">
                {h.badgeShipsLabel}
              </p>
              <p className="mt-1 font-display text-2xl text-brand-700">
                {h.badgeShipsValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
