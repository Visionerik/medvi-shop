"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileStickyCTA() {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-x flex items-center gap-3 py-3">
        <a
          href="#weight-loss"
          className="flex-1 rounded-full border border-brand-700/25 bg-white px-4 py-3 text-center text-sm font-semibold text-brand-800 transition hover:bg-sand-50"
        >
          {t.hero.ctaSecondary}
        </a>
        <a
          href="#get-started"
          className="flex-1 rounded-full bg-brand-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
        >
          {t.nav.getStarted}
        </a>
      </div>
    </div>
  );
}
