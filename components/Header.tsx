"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.weightLoss, href: "#weight-loss" },
    { label: t.nav.womensHealth, href: "#womens-health" },
    { label: t.nav.mensHealth, href: "#mens-health" },
    { label: t.nav.nutrition, href: "#nutrition" },
    { label: t.nav.supplements, href: "#supplements" },
    { label: t.nav.peptides, href: "#peptides" },
    { label: t.nav.hair, href: "#hair" },
    { label: t.nav.skincare, href: "#skincare" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-sand-50/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full bg-brand-700 text-white font-display text-lg"
          >
            M
          </span>
          <span className="font-display text-xl tracking-tight text-ink-900">
            MEDVi
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-700 transition hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#login" className="text-sm text-ink-700 hover:text-brand-700">
            {t.nav.signIn}
          </a>
          <a href="#get-started" className="btn-primary">
            {t.nav.getStarted}
          </a>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t.nav.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70"
          >
            <span className="sr-only">{t.nav.openMenu}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-sand-50">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-ink-800 hover:bg-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-black/5 pt-4">
              <a href="#login" className="btn-secondary flex-1">
                {t.nav.signIn}
              </a>
              <a href="#get-started" className="btn-primary flex-1">
                {t.nav.getStarted}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
