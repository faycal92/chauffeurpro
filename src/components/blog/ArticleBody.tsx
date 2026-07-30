import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogBlock } from "@/lib/blog-data";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={`link-${key++}`}
        href={href}
        className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-gold-light"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-foreground/85">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={block.id}
                className="scroll-mt-24 pt-4 font-display text-2xl font-bold text-foreground sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                id={block.id}
                className="scroll-mt-24 pt-2 font-display text-xl font-bold text-gold"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-6">
                {block.items.map((item, i) => (
                  <li key={i}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-6">
                {block.items.map((item, i) => (
                  <li key={i}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "p":
          default:
            return <p key={index}>{renderInline(block.text)}</p>;
        }
      })}
    </div>
  );
}
