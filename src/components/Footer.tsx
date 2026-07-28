import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-charcoal py-10">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-foreground/60">
          © 2026 ChaufSitePro. Tous droits réservés.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          <Link href="/mentions-legales" className="hover:text-gold">
            Mentions légales
          </Link>
          <Link href="/cgv" className="hover:text-gold">
            CGV
          </Link>
          <a href="#contact" className="hover:text-gold">
            Contact
          </a>
          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
