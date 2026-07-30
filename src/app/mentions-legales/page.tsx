import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_NAME, CONTACT_EMAIL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales — DriveConnect",
  description: "Mentions légales de DriveConnect, agence de création de sites web pour chauffeurs VTC.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-charcoal px-5 pb-16 pt-28 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-gold hover:underline">
            ← Retour à l&apos;accueil
          </Link>

          <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Mentions légales
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="mb-2 font-display text-lg font-bold text-gold">
                Éditeur du site
              </h2>
              <p>
                Le présent site est édité par {COMPANY_NAME}, agence de
                création de sites web spécialisée dans le secteur du transport
                VTC (Véhicule de Transport avec Chauffeur) en France.
              </p>
              <p className="mt-2">
                Contact : {CONTACT_EMAIL} — WhatsApp : +{WHATSAPP_NUMBER}
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-bold text-gold">
                Hébergement
              </h2>
              <p>
                Le site est hébergé par un prestataire d&apos;hébergement web
                professionnel. Les informations détaillées relatives à
                l&apos;hébergeur sont disponibles sur simple demande auprès de
                {" "}{COMPANY_NAME}.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-bold text-gold">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes,
                images, graphismes, logo) est la propriété exclusive de
                {" "}{COMPANY_NAME}, sauf mention contraire. Toute reproduction
                sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="mb-2 font-display text-lg font-bold text-gold">
                Données personnelles
              </h2>
              <p>
                Les informations collectées via le formulaire de contact sont
                utilisées uniquement dans le cadre de la relation commerciale
                avec {COMPANY_NAME} et ne sont en aucun cas cédées à des tiers.
                Conformément au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification et de suppression de vos
                données, exerçable en nous contactant à {CONTACT_EMAIL}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
