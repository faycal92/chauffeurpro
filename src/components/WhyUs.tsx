const REASONS = [
  {
    icon: "🚗",
    title: "Spécialiste VTC",
    description:
      "Nous ne créons que des sites pour chauffeurs VTC. Nous connaissons vos besoins mieux que personne.",
  },
  {
    icon: "💰",
    title: "0% de commission",
    description:
      "Vos clients vous contactent directement. Chaque euro encaissé est à vous.",
  },
  {
    icon: "⚡",
    title: "Technologie moderne",
    description:
      "Sites Next.js ultra-rapides. Vos clients adorent les sites qui chargent vite.",
  },
  {
    icon: "📱",
    title: "100% Mobile",
    description: "Nos sites sont conçus pour mobile et pour ordinateur.",
  },
  {
    icon: "🔍",
    title: "SEO 100/100",
    description:
      "Nos sites obtiennent un score de référencement naturel parfait de 100/100. Vos clients vous trouvent facilement sur Google.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-charcoal-light py-20">
      <div className="container-px mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Pourquoi choisir <span className="gold-text">DriveConnect</span> ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gold/10 bg-charcoal-card p-6 transition-colors hover:border-gold/30"
            >
              <div className="mb-4 text-4xl">{reason.icon}</div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
