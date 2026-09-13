import type { Metadata } from "next";
import { LegalRows, LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales : devis gratuits, tarifs indicatifs ajustés après diagnostic, garantie peinture et réparations.",
};

const rows: [string, string][] = [
  ["Devis", "Tout devis est gratuit et sans engagement. Il est ferme une fois signé : aucun travail supplémentaire sans votre accord."],
  ["Tarifs affichés", "Les forfaits du site sont des prix « à partir de », ajustés après examen du véhicule. Le prix final figure toujours sur le devis signé."],
  ["Délais", "Les délais annoncés dépendent de la disponibilité des pièces et des accords d'expertise en cas de sinistre."],
  ["Garantie", "Peinture et réparations garanties contre tout défaut d'exécution. Pièces remplacées selon les préconisations constructeur ou équivalent."],
  ["Sinistres", "Nous préparons le dossier (photos, devis) mais la décision d'indemnisation appartient à votre assurance et à l'expert."],
  ["Litiges", "En cas de désaccord, contactez d'abord l'atelier : on règle 99 % des problèmes autour d'une tasse de café."],
];

export default function Page() {
  return (
    <LegalShell title="Conditions générales" subtitle="Transparence">
      <LegalRows rows={rows} />
    </LegalShell>
  );
}
