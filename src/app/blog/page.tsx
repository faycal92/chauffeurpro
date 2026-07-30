import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Conseils pour Chauffeurs VTC",
  description:
    "Conseils, guides et actualités pour chauffeurs VTC et taxi : création de site web, réservation en ligne, SEO local et acquisition de clients.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/blog`,
    siteName: "DriveConnect",
    title: "Blog — Conseils pour Chauffeurs VTC",
    description:
      "Conseils, guides et actualités pour chauffeurs VTC et taxi : création de site web, réservation en ligne, SEO local et acquisition de clients.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-charcoal pb-20 pt-28">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Blog — Conseils pour Chauffeurs VTC
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              Guides pratiques sur la création de site web VTC, la réservation
              en ligne, le référencement local et l&apos;acquisition de
              clients pour chauffeurs VTC et taxi.
            </p>
          </div>

          <div className="mt-12">
            <BlogGrid posts={blogPosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
