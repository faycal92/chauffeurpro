import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.18), transparent 60%)",
        }}
      />
      <div className="container-px relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
          Sites web pour chauffeurs VTC
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
          Votre site VTC professionnel.{" "}
          <span className="gold-text">Vos clients directs.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 sm:text-lg">
          Nous créons des sites web sur-mesure pour les chauffeurs VTC.
          Réservation en ligne, calcul de prix automatique, paiement sécurisé.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#offres"
            className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-gold-gradient px-8 text-base font-semibold text-charcoal shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:w-auto"
          >
            Voir nos offres
          </a>
          <a
            href={WHATSAPP_LINK("Bonjour, je souhaite en savoir plus sur vos offres de site web VTC.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-gold/40 px-8 text-base font-semibold text-foreground transition-colors hover:bg-gold/10 sm:w-auto"
          >
            💬 Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
