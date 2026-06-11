"use client";

import Link from "next/link";
import { articles } from "@/data/mockData";
import { ArrowRight, Mail } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      {/* Header */}
      <section className="max-w-3xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Thought Leadership
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          Venture Insights
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed">
          Deep-dives into demographic shifts, security paradigms in senior fintech, clinical-compliance strategies in healthtech, and operating frameworks for venture building.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-border-accent pt-12">
        {articles.map((post) => (
          <Link
            key={post.id}
            href={`/insights/${post.slug}`}
            className="flex flex-col gap-4 group"
          >
            {/* Minimal Placeholder Visual */}
            <div className="aspect-[16/9] w-full bg-[#1A1B1D]/5 border border-border-accent rounded-[6px] flex items-center justify-center p-6 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-300">
              <span className="text-xs uppercase font-mono tracking-widest text-muted-text group-hover:text-primary">
                {post.category}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-semibold text-primary">{post.category}</span>
              <h3 className="text-lg font-sans font-semibold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-text line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[10px] text-muted-text mt-1">
                <span>{post.publishedAt}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup Card (Requested specifically on Insights and Contact pages only) */}
      <section className="bg-card-bg border border-border-accent p-8 md:p-12 rounded-[12px] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2 text-primary">
            <Mail className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Stay Informed</span>
          </div>
          <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground">
            Sign up for the Longevity Briefing.
          </h3>
          <p className="text-xs text-muted-text leading-relaxed">
            A monthly newsletter delivering verified database insights, venture building opportunities, and market research on healthy aging technologies directly to your inbox.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 w-full lg:max-w-md" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your professional email"
            className="w-full text-sm bg-background border border-border-accent px-4 py-3 rounded-sm focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="text-xs font-semibold uppercase tracking-wider bg-foreground text-background px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
