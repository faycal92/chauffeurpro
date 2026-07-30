"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const categories = ["Tous", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-colors ${
              active === category
                ? "border-gold bg-gold-gradient text-charcoal"
                : "border-gold/20 text-foreground/70 hover:border-gold/50 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-charcoal-card transition-colors hover:border-gold/40"
          >
            <div className="flex h-40 items-center justify-center bg-gold-gradient/10 bg-charcoal-light text-4xl">
              🚗
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="w-fit rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                {post.category}
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-gold">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-foreground/50">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
