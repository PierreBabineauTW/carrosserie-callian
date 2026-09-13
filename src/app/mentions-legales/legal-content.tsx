"use client";

import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactFooter";
import { business } from "@/i18n/dictionaries";

function Content() {
  const { lang } = useLang();
  const fr = lang === "fr";
  const rows: [string, string][] = fr
    ? [
        ["Éditeur du site", `${business.name} — ${business.address} — ${business.phone}`],
        ["Objet", "Site vitrine de présentation de l'atelier. Devis indicatifs, sans valeur contractuelle."],
        ["Données personnelles", "Le formulaire de devis transmet uniquement les informations saisies, utilisées pour vous recontacter. Aucune mesure d'audience, aucun traceur, aucune revente de données."],
        ["Vos droits", "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en appelant l'atelier."],
        ["Crédits visuels", "Visuels temporaires issus de la démo du template, en cours de remplacement par les photos de l'atelier."],
        ["Hébergement", "À compléter : nom et adresse de l'hébergeur."],
      ]
    : [
        ["Publisher", `${business.name} — ${business.address} — ${business.phone}`],
        ["Purpose", "Brochure website for the workshop. Indicative quotes, non-contractual."],
        ["Personal data", "The quote form only forwards what you type, used to call you back. No analytics, no trackers, no data resale."],
        ["Your rights", "You may request access, correction or deletion of your data by calling the workshop."],
        ["Visual credits", "Temporary visuals from the template demo, being replaced with workshop photos."],
        ["Hosting", "To complete: host name and address."],
      ];
  return (
    <main className="bg-white">
      <div className="bg-black pb-16 pt-[140px] text-white">
        <div className="container-default">
          <p className="subtitle">{fr ? "Informations légales" : "Legal information"}</p>
          <h1 className="h-display text-[38px] sm:text-[54px]">{fr ? "Mentions légales" : "Legal notice"}</h1>
        </div>
      </div>
      <div className="container-default section py-16! lg:py-24!">
        <dl className="max-w-[800px] divide-y divide-black/10 border-y border-black/10">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
              <dt className="text-[14px] font-black uppercase tracking-widest">{k}</dt>
              <dd className="text-[15px] leading-6 text-black/65">{v}</dd>
            </div>
          ))}
        </dl>
        <a href="/" className="btn btn-outline mt-10">
          ← {fr ? "Retour à l'accueil" : "Back home"}
        </a>
      </div>
    </main>
  );
}

export function MentionsLegales() {
  return (
    <LanguageProvider>
      <Header />
      <Content />
      <Footer />
    </LanguageProvider>
  );
}
