import type { Metadata } from "next";
import { MerciContent } from "./merci-content";

export const metadata: Metadata = {
  title: "Demande envoyée",
  description: "Votre demande de devis a bien été reçue par Carrosserie Callian. On vous rappelle très vite.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <MerciContent />;
}
