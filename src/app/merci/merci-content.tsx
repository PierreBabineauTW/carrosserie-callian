"use client";

import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactFooter";
import { business } from "@/i18n/dictionaries";

function Content() {
  const { lang } = useLang();
  const fr = lang === "fr";
  return (
    <main className="bg-white">
      <div className="bg-black pb-20 pt-[160px] text-white">
        <div className="container-default max-w-[800px] text-center">
          <p className="mx-auto grid h-16 w-16 place-items-center bg-[#1557ff] text-3xl font-black">✓</p>
          <h1 className="h-display mt-6 text-[38px] sm:text-[54px]">{fr ? "Demande bien reçue !" : "Request received!"}</h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-white/70">
            {fr
              ? "Merci — on vous rappelle très vite aux horaires d'ouverture. Pour une urgence, appelez directement l'atelier."
              : "Thanks — we'll call you back during opening hours. For anything urgent, call the workshop directly."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={business.phoneHref} className="btn btn-light">
              {business.phone}
            </a>
            <a href="/" className="btn btn-outline-light">
              ← {fr ? "Retour à l'accueil" : "Back home"}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export function MerciContent() {
  return (
    <LanguageProvider>
      <Header />
      <Content />
      <Footer />
    </LanguageProvider>
  );
}
