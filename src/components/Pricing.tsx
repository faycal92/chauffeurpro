import { WHATSAPP_LINK } from "@/lib/constants";

const PLANS = [
  {
    name: "Essentielle",
    price: "299€",
    badge: "Démarrer",
    subtitle: "Votre présence en ligne professionnelle",
    features: [
      "Site vitrine professionnel",
      "Page accueil + services + contact",
      "Formulaire de contact",
      "SEO de base optimisé",
      "100% responsive mobile",
      "Nom de domaine inclus 1 an",
      "Hébergement inclus 1 an",
    ],
    highlighted: false,
  },
  {
    name: "Professionnelle",
    price: "699€",
    badge: "Le plus populaire",
    subtitle: "Recevez des réservations directement sur votre site",
    features: [
      "Tout l'Essentiel +",
      "Formulaire de réservation en ligne",
      "Calcul de prix en temps réel",
      "Google Maps (autocomplétion adresses)",
      "Notifications email automatiques",
      "Page tarifs détaillée",
      "Blog SEO (3 articles)",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "1299€",
    badge: "Complet",
    subtitle: "Le système complet comme les grands",
    features: [
      "Tout le Professionnel +",
      "Paiement en ligne sécurisé (Stripe)",
      "Notifications WhatsApp automatiques",
      "Choix de véhicules (Eco/Berline/Van)",
      "Trajet retour inclus",
      "Mise à disposition à l'heure",
      "Site bilingue FR/EN",
      "Blog SEO (5 articles)",
      "Support 3 mois inclus",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="offres" className="bg-charcoal py-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Nos offres
          </h2>
          <p className="mt-3 text-foreground/70">
            Choisissez l&apos;offre adaptée à votre activité
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-gold bg-charcoal-card shadow-2xl shadow-gold/20 lg:-translate-y-4 lg:scale-105"
                  : "border-gold/10 bg-charcoal-card"
              }`}
            >
              <span
                className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  plan.highlighted
                    ? "bg-gold-gradient text-charcoal"
                    : "border border-gold/30 text-gold"
                }`}
              >
                {plan.badge}
              </span>

              <h3 className="font-display text-2xl font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-foreground/60">{plan.subtitle}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-gold">
                  {plan.price}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/85"
                  >
                    <span className="mt-0.5 text-gold">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK(
                  `Bonjour, je suis intéressé(e) par l'offre ${plan.name} (${plan.price}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex min-h-[48px] w-full items-center justify-center rounded-full px-6 text-base font-semibold transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? "bg-gold-gradient text-charcoal"
                    : "border border-gold/40 text-foreground hover:bg-gold/10"
                }`}
              >
                Choisir cette offre
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
