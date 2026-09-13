import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const siteUrl = "https://www.carrosserie-callian.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carrosserie Callian — Carrosserie, peinture & vitrage à Callian (83)",
    template: "%s — Carrosserie Callian",
  },
  description:
    "La Carrosserie à Callian (133 chemin des Combes) : débosselage sans peinture, peinture au colorimètre, pare-brise, pare-chocs, sinistres. Devis gratuit sous 24 h. 04 94 50 07 97.",
  keywords: ["carrosserie Callian", "peinture auto Var", "débosselage", "pare-brise Callian", "réparation sinistre", "pays de Fayence"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Carrosserie Callian",
    title: "Carrosserie Callian — Carrosserie, peinture & vitrage (83)",
    description: "Débosselage, peinture au colorimètre, pare-brise et sinistres à Callian. Devis gratuit.",
    images: [{ url: "/sites/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/hero-truck.jpg", width: 1200, height: 630, alt: "Atelier de carrosserie Callian" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = { themeColor: "#000000" };

// No analytics, no tracking scripts.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "La Carrosserie — Callian",
    image: `${siteUrl}/sites/carrepairtemplate-webflow-io-e0f44567/home-pages-home-v1-b3493274/hero-truck.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "133 chemin des Combes",
      addressLocality: "Callian",
      postalCode: "83440",
      addressCountry: "FR",
    },
    telephone: "+33494500797",
    priceRange: "€€",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "89" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "08:30", closes: "12:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "14:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:30", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:30", closes: "12:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "14:00", closes: "17:30" },
    ],
  };
  return (
    <html lang="fr" className={nunito.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
