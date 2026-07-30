import type { BlogBlock } from "@/lib/blog-data";

export default function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks.filter(
    (block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2"
  );

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Sommaire"
      className="rounded-2xl border border-gold/15 bg-charcoal-card p-6"
    >
      <p className="font-display text-sm font-bold uppercase tracking-wide text-gold">
        Sommaire
      </p>
      <ol className="mt-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="flex min-h-[44px] items-center text-foreground/75 hover:text-gold"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
