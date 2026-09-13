"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-full bg-brand-700 text-white font-display text-lg"
              >
                M
              </span>
              <span className="font-display text-xl tracking-tight text-ink-900">
                MEDVi
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-700">
              {f.description}
            </p>
            <div className="mt-6 rounded-2xl border border-black/5 bg-sand-50 p-4">
              <p className="text-xs uppercase tracking-widest text-ink-700/70">
                {f.partnersLabel}
              </p>
              <p className="mt-2 text-sm text-ink-800">{f.partnersValue}</p>
            </div>
          </div>

          {f.columns.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm uppercase tracking-widest text-ink-900">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-700 transition hover:text-brand-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-xs text-ink-700/70">
          <p className="max-w-4xl leading-relaxed">{f.disclaimer}</p>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>{f.copyright(year)}</p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-brand-700">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
