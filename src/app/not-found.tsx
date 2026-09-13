import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n'existe pas. Retournez à l'accueil Carrosserie Callian pour demander un devis gratuit.",
};

export default function NotFound() {
  return (
    <main className="container-default section text-center">
      <p className="subtitle">404</p>
      <h1 className="h-display text-[44px]">Page introuvable</h1>
      <p className="mx-auto mt-4 max-w-md text-black/60">
        La page demandée n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour demander un devis.
      </p>
      <a href="/" className="btn btn-primary mt-8">
        Retour à l&apos;accueil →
      </a>
    </main>
  );
}
