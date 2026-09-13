"use client";

import { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Translation } from "@/lib/i18n/translations";

type ProgramKey = keyof Translation["programs"];

export type Program = {
  id: string;
  key: ProgramKey;
  accent?: "brand" | "sand" | "rose" | "blue" | "amber" | "violet" | "teal";
  reverse?: boolean;
  icon?: ReactNode;
};

const accentMap: Record<NonNullable<Program["accent"]>, string> = {
  brand: "from-mint-100 via-sand-50 to-white",
  sand: "from-sand-100 via-sand-50 to-white",
  rose: "from-rose-100 via-sand-50 to-white",
  blue: "from-sky-100 via-sand-50 to-white",
  amber: "from-amber-100 via-sand-50 to-white",
  violet: "from-violet-100 via-sand-50 to-white",
  teal: "from-teal-100 via-sand-50 to-white",
};

export default function ProgramSection({ program }: { program: Program }) {
  const { t } = useLanguage();
  const { id, key, accent = "brand", reverse = false, icon } = program;
  const content = t.programs[key];
  const common = t.programCommon;

  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-ink-700">{content.description}</p>
          <ul className="mt-8 space-y-3">
            {content.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-700/10 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-ink-800">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="#get-started" className="btn-primary">
              {common.ctaLabel}
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
          </div>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <div className="group relative">
            <div className={`absolute -inset-8 rounded-[3rem] bg-gradient-to-br ${accentMap[accent]} blur-3xl transition duration-500 group-hover:opacity-90`} />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-card ring-1 ring-black/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-glow">
              <div
                className={`grid aspect-[5/4] w-full place-items-center rounded-2xl bg-gradient-to-br ${accentMap[accent]}`}
              >
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white shadow-soft ring-4 ring-white/60 transition duration-500 group-hover:scale-105">
                  <div className="text-brand-700">{icon}</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-sand-50 p-3">
                  <p className="text-xs text-ink-700/70">{common.consult}</p>
                  <p className="mt-1 font-display text-lg text-brand-700">{common.consultValue}</p>
                </div>
                <div className="rounded-2xl bg-sand-50 p-3">
                  <p className="text-xs text-ink-700/70">{common.shipping}</p>
                  <p className="mt-1 font-display text-lg text-brand-700">{common.shippingValue}</p>
                </div>
                <div className="rounded-2xl bg-sand-50 p-3">
                  <p className="text-xs text-ink-700/70">{common.support}</p>
                  <p className="mt-1 font-display text-lg text-brand-700">{common.supportValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
