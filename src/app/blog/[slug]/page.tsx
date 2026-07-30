import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleFaq from "@/components/blog/ArticleFaq";
import ArticleCta from "@/components/blog/ArticleCta";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: COMPANY_NAME,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-charcoal pb-20 pt-28">
        <div className="container-px mx-auto max-w-6xl">
          <Breadcrumbs title={post.title} />

          <header className="mt-6 max-w-3xl">
            <span className="w-fit rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/60">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">•</span>
              <span>{post.readingTime} min de lecture</span>
            </div>
          </header>

          <div className="mt-8 lg:hidden">
            <TableOfContents blocks={post.content} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <article className="min-w-0 max-w-3xl">
              <ArticleBody blocks={post.content} />
              <ArticleFaq faq={post.faq} />
              <ArticleCta articleTitle={post.title} />
              <RelatedPosts posts={related} />
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents blocks={post.content} />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
