import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VTCPro — Sites Web Professionnels pour Chauffeurs VTC",
  description:
    "VTCPro crée des sites web sur-mesure pour chauffeurs VTC en France. Réservation en ligne, calcul de prix automatique, paiement Stripe. Devis gratuit.",
  keywords: [
    "site web VTC",
    "création site VTC",
    "site chauffeur VTC",
    "site réservation VTC",
    "développeur web VTC France",
  ],
  authors: [{ name: COMPANY_NAME }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: "VTCPro — Sites Web Professionnels pour Chauffeurs VTC",
    description:
      "VTCPro crée des sites web sur-mesure pour chauffeurs VTC en France. Réservation en ligne, calcul de prix automatique, paiement Stripe. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  description:
    "Création de sites web sur-mesure pour chauffeurs VTC en France. Réservation en ligne, calcul de prix automatique, paiement sécurisé.",
  url: SITE_URL,
  areaServed: "FR",
  telephone: "+33750978900",
  priceRange: "299€ - 1299€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  serviceType: "Création de sites web pour chauffeurs VTC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
