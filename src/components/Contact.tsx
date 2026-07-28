"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL, WHATSAPP_LINK } from "@/lib/constants";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Demande de devis — ${name || "Site VTC"}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-charcoal-light py-20">
      <div className="container-px mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-3 text-foreground/70">
            Contactez-nous par WhatsApp ou via le formulaire ci-dessous
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_LINK(
              "Bonjour, je souhaite discuter de mon projet de site VTC."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 text-base font-semibold text-charcoal transition-transform hover:scale-105 sm:w-auto"
          >
            💬 Écrire sur WhatsApp
          </a>
        </div>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/15" />
          <span className="text-xs uppercase tracking-widest text-foreground/50">
            ou
          </span>
          <div className="h-px flex-1 bg-gold/15" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-gold/15 bg-charcoal-card p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/80">
              Nom
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-gold/20 bg-charcoal px-4 text-base text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-gold/20 bg-charcoal px-4 text-base text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground/80">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-gold/20 bg-charcoal px-4 text-base text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-gold/20 bg-charcoal px-4 py-3 text-base text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none"
              placeholder="Parlez-nous de votre projet..."
            />
          </div>

          <button
            type="submit"
            className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-gold-gradient px-8 text-base font-semibold text-charcoal transition-transform hover:scale-105"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
