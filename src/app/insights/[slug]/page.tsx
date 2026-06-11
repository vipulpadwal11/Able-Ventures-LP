import Link from "next/link";
import { articles } from "@/data/mockData";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = articles.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
      {/* Back Button */}
      <Link
        href="/insights"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-text hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Insights</span>
      </Link>

      {/* Hero Header */}
      <header className="flex flex-col gap-6 border-b border-border-accent pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-text">
          <span className="flex items-center gap-1.5 text-primary font-semibold uppercase">
            <Tag className="w-3.5 h-3.5" />
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishedAt}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans tracking-tight font-medium text-foreground leading-tight text-balance">
          {post.title}
        </h1>

        <p className="text-lg text-muted-text leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Main Prose Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none text-base text-foreground/90 leading-relaxed flex flex-col gap-6">
        <p className="text-xl font-medium font-sans leading-relaxed text-foreground">
          {post.content}
        </p>
        <p>
          At Able Ventures, our venture-building methodology centers on translating market challenges into secure software overlays and ambient sensors. When designing financial services, we address security co-signatures and cognitive scaling. In our healthtech work, we prioritize passive metrics to encourage active independent aging.
        </p>
        <h3 className="text-xl font-bold font-sans text-foreground mt-4">Addressing the Execution Gap</h3>
        <p>
          Unlike conventional incubators, we establish full technology and design stacks before hiring co-founders. This strategy significantly cuts validation cycles from over a year to less than 60 days. By validating economic and regulatory paths early, we ensure our spinoffs possess high-growth potential from launch.
        </p>
        <p>
          We continue to build partnerships with prominent healthcare providers, banks, and senior advocacy networks to secure scaling support for our portfolio.
        </p>
      </div>

      {/* Footer Meta */}
      <footer className="border-t border-border-accent pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-text">Published by Able Ventures Research</span>
        <Link
          href="/contact"
          className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-5 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
        >
          Discuss this Thesis
        </Link>
      </footer>
    </article>
  );
}
