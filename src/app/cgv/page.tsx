import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — ChaufSitePro",
  description: "Conditions générales de vente des prestations de création de sites web ChaufSitePro pour chauffeurs VTC.",
};

export default function Cgv() {
  return (
    <main className="min-h-screen bg-charcoal px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gold hover:underline">
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="mt-6 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Conditions Générales de Vente
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 1 — Objet
            </h2>
            <p>
              Les présentes CGV régissent les prestations de création de
              sites web proposées par {COMPANY_NAME} aux chauffeurs VTC
              (offres Essentielle, Professionnelle et Premium), telles que
              décrites sur ce site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 2 — Commande
            </h2>
            <p>
              Toute commande est validée après échange préalable (WhatsApp,
              email ou formulaire de contact) et acceptation du devis
              correspondant à l&apos;offre choisie.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 3 — Tarifs et paiement
            </h2>
            <p>
              Les tarifs sont indiqués en euros toutes taxes comprises. Un
              acompte peut être demandé à la commande, le solde étant dû à la
              livraison du site. Les modalités de paiement sont précisées
              lors de l&apos;établissement du devis.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 4 — Délais de livraison
            </h2>
            <p>
              Les délais de réalisation dépendent de la complexité du projet
              et de la réactivité du client à fournir les éléments
              nécessaires (textes, photos, tarifs). Un délai indicatif est
              communiqué avant le démarrage du projet.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 5 — Hébergement et nom de domaine
            </h2>
            <p>
              Le nom de domaine et l&apos;hébergement sont inclus pendant la
              première année. Au-delà, le renouvellement est à la charge du
              client, à un tarif préférentiel communiqué à l&apos;approche de
              l&apos;échéance.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 6 — Support et garantie
            </h2>
            <p>
              L&apos;offre Premium inclut 3 mois de support technique après
              livraison. Toute prestation additionnelle hors garantie fera
              l&apos;objet d&apos;un devis séparé.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-lg font-bold text-gold">
              Article 7 — Contact
            </h2>
            <p>
              Pour toute question relative aux présentes CGV, vous pouvez
              nous contacter à {CONTACT_EMAIL}.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
