"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Quelle est la différence entre les 3 offres ?",
    answer:
      "L'offre Essentielle est parfaite pour avoir une présence en ligne et recevoir des demandes de contact. L'offre Professionnelle ajoute un système de réservation en ligne avec calcul de prix automatique. L'offre Premium est le système complet avec paiement en ligne, notifications WhatsApp et site bilingue.",
  },
  {
    question: "Est-ce que je dois m'occuper de la technique ?",
    answer:
      "Non. Nous gérons tout de A à Z — création, mise en ligne, domaine et hébergement. Vous n'avez rien à faire de technique.",
  },
  {
    question: "Combien de temps pour avoir mon site en ligne ?",
    answer:
      "Le délai dépend de la complexité de votre projet et de votre réactivité pour nous fournir les informations nécessaires (photo, textes, tarifs). Nous vous donnons un délai précis lors de notre premier échange.",
  },
  {
    question: "Est-ce que mon site sera visible sur Google ?",
    answer:
      "Oui. Chaque site est optimisé pour le référencement naturel (SEO) dès la livraison. L'offre Professionnelle et Premium incluent également un blog avec des articles SEO pour améliorer votre visibilité sur le long terme.",
  },
  {
    question: "Y a-t-il des frais mensuels après la création ?",
    answer:
      "L'hébergement et le nom de domaine sont inclus la première année. Après 1 an, l'hébergement revient à environ 5-10€/mois. Aucun frais caché, aucune surprise.",
  },
  {
    question: "Puis-je voir des exemples de sites que vous avez créés ?",
    answer:
      "Oui ! Consultez notre section Réalisations sur cette page. PrivateMove (privatemove.fr) est notre réalisation phare avec un score PageSpeed 100/100.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-charcoal py-20">
      <div className="container-px mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Questions fréquentes
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gold/15 bg-charcoal-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-gold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-foreground/75">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
