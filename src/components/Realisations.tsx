export default function Realisations() {
  return (
    <section id="realisations" className="bg-charcoal-light py-20">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Notre réalisation
          </h2>
        </div>

        <div className="mt-12 rounded-2xl border border-gold/20 bg-charcoal-card p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-gold">
              PrivateMove
            </h3>
            <span className="rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-foreground/90">
              SEO 100/100 ✅
            </span>
          </div>

          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            Site VTC complet pour un chauffeur parisien. Réservation en
            ligne, calcul de prix en temps réel, possibilité de payer en
            ligne, notifications WhatsApp automatiques, localisation via
            Google Maps.
          </p>

          <a
            href="https://privatemove.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-gold-gradient px-8 text-base font-semibold text-charcoal transition-transform hover:scale-105"
          >
            Voir le site →
          </a>
        </div>
      </div>
    </section>
  );
}
