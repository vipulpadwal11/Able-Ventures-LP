"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioCompanies } from "@/data/mockData";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = ["all", "Fintech", "Healthtech", "Independent Living", "Care Infrastructure"];

  const filteredCompanies = selectedFilter === "all"
    ? portfolioCompanies
    : portfolioCompanies.filter(c => c.industry.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
      {/* Header */}
      <section className="max-w-3xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Our Co-Creations
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          The Ventures
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed">
          A showcase of concept startups designed, validated, and launched inside our Dubai studio. These entities represent our core thesis in longevity tech.
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-border-accent pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-[4px] border transition-all ${
              selectedFilter.toLowerCase() === cat.toLowerCase()
                ? "bg-[#1A1B1D] text-[#F6F4EE] border-transparent"
                : "border-border-accent text-muted-text hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ventures Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
        {filteredCompanies.map((company) => (
          <div
            key={company.id}
            className="bg-card-bg border border-border-accent p-8 rounded-[10px] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(26,27,29,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                {/* Logo Character Badge */}
                <div className="w-11 h-11 bg-foreground text-background font-bold text-xl rounded-[8px] flex items-center justify-center group-hover:bg-primary group-hover:text-[#F6F4EE] transition-colors duration-300">
                  {company.logoLetter}
                </div>
                
                <div className="flex items-center gap-2">
                  {company.status === "stealth" && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-[4px]">
                      Stealth
                    </span>
                  )}
                  <span className="text-[10px] uppercase font-semibold tracking-wider bg-foreground/5 px-2.5 py-1 rounded-[4px] text-muted-text">
                    {company.stage}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-sans font-semibold mb-2 group-hover:text-primary transition-colors">
                {company.name}
              </h3>
              <p className="text-xs text-muted-text leading-relaxed">
                {company.description}
              </p>
            </div>

            <div className="border-t border-border-accent pt-5 mt-8 flex items-center justify-between text-xs text-muted-text">
              <span>{company.industry}</span>
              <span className="flex items-center gap-0.5 text-[#7E8083]">
                <span>studio concept</span>
              </span>
            </div>
          </div>
        ))}

        {filteredCompanies.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center gap-3 py-20 text-center border border-dashed border-border-accent rounded-[10px] bg-card-bg/20">
            <span className="text-sm font-semibold text-muted-text">No ventures found matching this sector.</span>
          </div>
        )}
      </section>
    </div>
  );
}
