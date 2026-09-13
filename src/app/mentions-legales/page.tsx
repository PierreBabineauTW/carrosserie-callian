import type { Metadata } from "next";
import { MentionsLegales } from "./legal-content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site vitrine La Carrosserie — Callian.",
  robots: { index: true, follow: false },
};

export default function Page() {
  return <MentionsLegales />;
}
