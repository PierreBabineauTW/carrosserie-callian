import type { Metadata } from "next";
import { LegalRows, LegalShell } from "@/components/LegalShell";
import { business } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité : aucune mesure d'audience, aucun traceur. Vos données servent uniquement à vous recontacter.",
};

const rows: [string, string][] = [
  ["Responsable", `${business.name} — ${business.address} — ${business.phone}`],
  ["Données collectées", "Nom, téléphone, immatriculation/sujet et description du dommage — uniquement ce que vous saisissez dans le formulaire de devis."],
  ["Finalité", "Vous recontacter pour établir un devis. Aucune prospection automatisée, aucune revente."],
  ["Traceurs", "Aucun : pas de mesure d'audience, pas de publicité, pas de cookies tiers. Seuls deux réglages techniques sont mémorisés dans votre navigateur (langue, bannière cookies)."],
  ["Durée", "Les demandes de devis sont conservées le temps du traitement puis archivées selon les obligations légales."],
  ["Vos droits", "Accès, rectification, suppression : appelez l'atelier, on s'en occupe directement."],
];

export default function Page() {
  return (
    <LegalShell title="Politique de confidentialité" subtitle="Vie privée">
      <LegalRows rows={rows} />
    </LegalShell>
  );
}
