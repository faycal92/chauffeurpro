import Link from "next/link";

export default function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-foreground/60">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-gold">
            Accueil
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/blog" className="hover:text-gold">
            Blog
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="max-w-[60vw] truncate text-foreground/80 sm:max-w-xs" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
