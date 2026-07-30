import { WHATSAPP_LINK } from "@/lib/constants";

export default function ArticleCta({ articleTitle }: { articleTitle: string }) {
  return (
    <div className="mt-16 rounded-2xl border border-gold/20 bg-charcoal-card p-8 text-center">
      <h2 className="font-display text-2xl font-bold text-foreground">
        Prêt à créer votre site web VTC ?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-foreground/70">
        Discutons de votre projet et obtenez un devis gratuit pour votre site
        internet de chauffeur VTC ou taxi.
      </p>
      <a
        href={WHATSAPP_LINK(
          `Bonjour, j'ai lu votre article "${articleTitle}" et je souhaite en savoir plus sur vos offres de site web VTC.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 text-base font-semibold text-charcoal transition-transform hover:scale-105"
      >
        💬 Discuter sur WhatsApp
      </a>
    </div>
  );
}
