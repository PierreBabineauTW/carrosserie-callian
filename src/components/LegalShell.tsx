"use client";

import type { ReactNode } from "react";
import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactFooter";
import { CookieBanner, StickyMobileCta } from "@/components/Overlays";
import { withBase } from "@/lib/site";

export function LegalShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="bg-white">
        <div className="bg-black pb-16 pt-[140px] text-white">
          <div className="container-default">
            <ShellSubtitle text={subtitle} />
            <h1 className="h-display text-[34px] sm:text-[50px]">{title}</h1>
          </div>
        </div>
        <div className="container-default section py-16! lg:py-24!">
          <div className="max-w-[800px]">{children}</div>
          <a href={withBase("/")} className="btn btn-outline mt-10">
            ← Accueil
          </a>
        </div>
      </main>
      <Footer />
      <StickyMobileCta />
      <CookieBanner />
    </LanguageProvider>
  );
}

function ShellSubtitle({ text }: { text: string }) {
  const { lang } = useLang();
  void lang;
  return <p className="subtitle">{text}</p>;
}

export function LegalRows({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-black/10 border-y border-black/10">
      {rows.map(([k, v]) => (
        <div key={k} className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
          <dt className="text-[14px] font-black uppercase tracking-widest">{k}</dt>
          <dd className="text-[15px] leading-6 text-black/65">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
