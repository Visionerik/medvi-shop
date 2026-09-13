import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { translations, defaultLocale } from "@/lib/i18n/translations";

const base = translations[defaultLocale];

export const metadata: Metadata = {
  title: base.meta.title,
  description: base.meta.description,
  metadataBase: new URL("https://home.medvi.org"),
  openGraph: {
    title: base.meta.ogTitle,
    description: base.meta.ogDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={base.htmlLang}>
      <body className="min-h-screen bg-sand-50 text-ink-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
