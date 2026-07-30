import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading" className="mt-16">
      <h2
        id="related-posts-heading"
        className="font-display text-2xl font-bold text-foreground"
      >
        À lire aussi
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-gold/10 bg-charcoal-card p-5 transition-colors hover:border-gold/40"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              {post.category}
            </span>
            <h3 className="mt-2 font-display text-base font-bold text-foreground group-hover:text-gold">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
