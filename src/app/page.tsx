"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { focusAreas, portfolioCompanies, articles } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Shield, HeartPulse, Sparkles, Home, UserCheck, ArrowRight, Activity, Plus } from "lucide-react";

export default function HomePage() {
  const [activeFocusTab, setActiveFocusTab] = useState(focusAreas[0].id);
  const [activeModelStep, setActiveModelStep] = useState(0);

  const modelSteps = [
    {
      title: "Opportunity Discovery",
      description: "We identify systemic quality-of-life bottlenecks for aging populations through rigorous database analysis and caregiver interviews.",
      milestone: "100+ ideas triaged annually"
    },
    {
      title: "Validation Phase",
      description: "We build minimal high-fidelity prototypes to validate unit economics, user compliance, and clinical/regulatory pathways.",
      milestone: "2-month rigorous sprint"
    },
    {
      title: "Team Formation",
      description: "We recruit elite operators, clinical specialists, and domain-expert executives as co-founders to lead the venture.",
      milestone: "Full equity alignment"
    },
    {
      title: "Venture Launch",
      description: "We spin off the company, invest initial seed capital, and embed operational support (design, tech, growth).",
      milestone: "First institutional check"
    },
    {
      title: "Scale Support",
      description: "We provide follow-on funding and strategic distribution partnerships with healthcare and financial institutions.",
      milestone: "Scale to Series A and beyond"
    }
  ];

  const currentTabDetails = focusAreas.find((f) => f.id === activeFocusTab) || focusAreas[0];

  const getFocusAreaIcon = (id: string) => {
    switch (id) {
      case "financial-security":
        return <Shield className="w-5 h-5" />;
      case "healthtech":
        return <HeartPulse className="w-5 h-5" />;
      case "healthy-aging":
        return <Sparkles className="w-5 h-5" />;
      case "independent-living":
        return <Home className="w-5 h-5" />;
      case "care-infrastructure":
        return <UserCheck className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getFocusAreaImage = (id: string) => {
    switch (id) {
      case "financial-security":
        return "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"; // wealth
      case "healthtech":
        return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"; // clinical diagnostics
      case "healthy-aging":
        return "https://images.unsplash.com/photo-1571844307560-f17ab2ecd78a?auto=format&fit=crop&w=800&q=80"; // healthy senior
      case "independent-living":
        return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"; // home interior
      case "care-infrastructure":
        return "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"; // caregiver holding hand
      default:
        return "https://images.unsplash.com/photo-1571844307560-f17ab2ecd78a?auto=format&fit=crop&w=800&q=80";
    }
  };

  const getArticleImage = (id: string) => {
    switch (id) {
      case "longevity-economy":
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80";
      case "senior-fintech":
        return "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80";
      case "passive-diagnostics":
        return "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <div className="flex flex-col gap-24 md:gap-36 pb-24 relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-8 md:pt-14 max-w-7xl mx-auto w-full">
        {/* Subtle grid background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#E3DFD5_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 border border-border-accent bg-card-bg/70 px-3.5 py-1 rounded-[4px] self-start shadow-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                enhancing ageless quality of life
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans tracking-tight text-foreground font-medium leading-[0.95] text-balance">
              Building companies that improve how people age.
            </h1>

            <p className="text-lg md:text-xl text-muted-text max-w-2xl leading-relaxed">
              Able Ventures is a premium Dubai-based venture studio and investment platform focused on Enhancing the Ageless Quality of Life by building fintech, healthtech, and independent living solutions from scratch.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/focus-areas"
                className="text-xs font-bold tracking-wider uppercase bg-primary text-white px-7 py-4 rounded-sm hover:bg-primary-hover transition-all-custom shadow-[0_6px_20px_rgba(249,58,62,0.2)]"
              >
                Explore Thesis
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold tracking-wider uppercase border border-border-accent hover:border-foreground bg-card-bg/60 px-7 py-4 rounded-sm transition-colors"
              >
                Contact Studio
              </Link>
            </div>
          </div>

          {/* Large Premium Hero Graphic Side Panel */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 relative">
            <div className="aspect-[3/4] w-full rounded-[12px] border border-border-accent bg-card-bg p-2 relative shadow-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                alt="Active healthy longevity"
                className="w-full h-full object-cover rounded-[8px] filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary">Mission Portfolio</span>
                <h3 className="text-base font-bold text-foreground mt-1">Sustaining Healthspan</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Demographic Shift Narrative Block */}
      <section className="bg-[#1A1B1D] text-[#F6F4EE] py-24 px-6 border-y border-[#2A2B2D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2A2B2D_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono">
              Market Thesis
            </span>
            <h2 className="text-3xl md:text-6xl font-sans tracking-tight font-medium leading-[1.05] text-white">
              The Silver Shift: An Unprecedented Opportunity
            </h2>
            <p className="text-[#A1A3A6] text-base leading-relaxed max-w-xl">
              Traditional venture models treat aging as a logistical problem of late-stage decline. At Able Ventures, we believe the longevity economy is an active building canvas. Older adults demand specialized wealth management, diagnostics, and home structures. We build businesses to meet these generational shifts.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-[#222325] border border-[#2A2B2D] p-8 rounded-[10px] flex flex-col justify-between h-60 shadow-md">
              <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-mono">$15T</span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Global Longevity Economy</h4>
                <p className="text-xs text-[#7E8083] leading-relaxed">The aggregated economic footprint of aging populations by 2030.</p>
              </div>
            </div>
            <div className="bg-[#222325] border border-[#2A2B2D] p-8 rounded-[10px] flex flex-col justify-between h-60 shadow-md">
              <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-mono">1 in 6</span>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Aged 60+ Globally by 2030</h4>
                <p className="text-xs text-[#7E8083] leading-relaxed">Demanding customized, secure, and intuitive digital interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Focus Areas Interactive Section */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        <div className="lg:col-span-4 flex flex-col gap-6 justify-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono">
            Venture Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-medium leading-tight">
            Sectors we build in.
          </h2>
          <p className="text-muted-text text-sm leading-relaxed max-w-sm">
            We operate in five core longevity verticals. Click on the categories below to examine our research, metrics, and co-creation theses.
          </p>

          <div className="flex flex-col gap-2 border-t border-border-accent pt-6 mt-2">
            {focusAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveFocusTab(area.id)}
                onMouseEnter={() => setActiveFocusTab(area.id)}
                className={`flex items-center gap-3 text-left py-3 px-4 rounded-[6px] transition-all text-sm font-medium ${
                  activeFocusTab === area.id
                    ? "bg-card-bg text-primary border-l-2 border-primary shadow-[0_4px_12px_rgba(26,27,29,0.03)]"
                    : "text-foreground/75 hover:bg-card-bg/50 hover:text-foreground"
                }`}
              >
                {getFocusAreaIcon(area.id)}
                <span>{area.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Detail Card Panel */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 bg-card-bg border border-border-accent rounded-[12px] overflow-hidden shadow-lg min-h-[460px]">
          
          {/* Card Left Details */}
          <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-border-accent pb-6 mb-6">
                <h3 className="text-xl font-sans font-bold text-foreground flex items-center gap-2.5">
                  <span className="p-2 bg-primary/10 text-primary rounded-[6px]">
                    {getFocusAreaIcon(activeFocusTab)}
                  </span>
                  {currentTabDetails.title}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-text">The Bottleneck</span>
                  <p className="text-xs leading-relaxed text-foreground/80">{currentTabDetails.problem}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Our Solution Focus</span>
                  <p className="text-xs leading-relaxed text-foreground/90">{currentTabDetails.opportunity}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border-accent pt-6 mt-8 flex items-center justify-between w-full">
              <div className="text-left">
                <span className="block text-xl font-extrabold tracking-tight text-foreground">{currentTabDetails.metric}</span>
                <span className="block text-[8px] uppercase tracking-wider text-muted-text mt-0.5 max-w-[180px] leading-snug">{currentTabDetails.metricLabel}</span>
              </div>
              <Link
                href="/focus-areas"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase text-primary hover:text-primary-hover transition-colors"
              >
                <span>Detailed Thesis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card Right Tab Image */}
          <div className="md:col-span-5 relative hidden md:block aspect-square md:aspect-auto">
            <Image
              src={getFocusAreaImage(activeFocusTab)}
              alt={currentTabDetails.title}
              fill
              className="object-cover filter grayscale contrast-125 border-l border-border-accent"
              sizes="(max-w-768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
          </div>
          
        </div>
      </section>

      {/* 4. Venture Studio Model Section (Interactive Lifecycle Steps) */}
      <section className="bg-card-bg border-y border-border-accent py-24 px-6 shadow-[inset_0_4px_16px_rgba(26,27,29,0.01)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono">
              Venture Building Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-medium mt-3 mb-4">
              Our Co-Creation Lifecycle
            </h2>
            <p className="text-muted-text text-sm leading-relaxed max-w-xl">
              We operate as partners from day zero. We identify systemic opportunities, validate economic structures, write the first lines of code, and align co-founder equity models before spinning companies out.
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 flex flex-col gap-3">
              {modelSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModelStep(idx)}
                  onMouseEnter={() => setActiveModelStep(idx)}
                  className={`flex items-center justify-between text-left p-4 rounded-[6px] border border-transparent transition-all ${
                    activeModelStep === idx
                      ? "bg-[#1A1B1D] text-white shadow-md"
                      : "hover:bg-foreground/5 hover:border-border-accent text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                      activeModelStep === idx ? "bg-primary text-white" : "bg-foreground/10"
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">{step.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeModelStep === idx ? "translate-x-1" : "opacity-0"
                  }`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-background border border-border-accent p-8 md:p-10 rounded-[10px] flex flex-col justify-between shadow-sm min-h-[300px]">
              <div className="flex flex-col gap-6">
                <span className="text-[9px] uppercase font-bold tracking-widest text-primary font-mono">
                  Lifecycle Phase 0{activeModelStep + 1}
                </span>
                <h3 className="text-2xl font-sans font-semibold text-foreground">
                  {modelSteps[activeModelStep].title}
                </h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  {modelSteps[activeModelStep].description}
                </p>
              </div>

              <div className="border-t border-border-accent pt-6 mt-8 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Deliverable</span>
                <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-[4px] font-bold uppercase tracking-wider font-mono">
                  {modelSteps[activeModelStep].milestone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfolio Preview Section */}
      <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-border-accent pb-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono">
              Venture Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight mt-3">
              The Portfolio Concepts
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-0.5"
          >
            <span>All Ventures</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioCompanies.slice(0, 3).map((company) => (
            <div
              key={company.id}
              className="bg-card-bg border border-border-accent p-8 rounded-[10px] flex flex-col justify-between hover:shadow-[0_4px_16px_rgba(26,27,29,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Dynamic Concept Logo Mark */}
                  <div className="w-11 h-11 bg-foreground text-background font-bold text-lg rounded-[8px] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {company.logoLetter}
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-wider bg-foreground/5 px-2.5 py-1 rounded-[4px] text-muted-text">
                    {company.stage}
                  </span>
                </div>
                <h3 className="text-lg font-sans font-bold mb-2 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  {company.description}
                </p>
              </div>

              <div className="border-t border-border-accent pt-5 mt-8 flex items-center justify-between text-xs text-muted-text">
                <span>{company.industry}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#7E8083]">
                  studio concept
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Insights Thought Leadership Preview */}
      <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-12">
        <div className="flex items-end justify-between border-b border-border-accent pb-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono">
              Thought Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight mt-3">
              Venture Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-0.5"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid with Unsplash Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.slug}`}
              className="flex flex-col gap-4 group"
            >
              <div className="aspect-[16/9] w-full rounded-[8px] border border-border-accent overflow-hidden relative shadow-sm">
                <img
                  src={getArticleImage(post.id)}
                  alt={post.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[9px] uppercase font-bold tracking-wider text-primary">{post.category}</span>
                <h3 className="text-base font-sans font-bold leading-snug group-hover:text-primary transition-colors">
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
        </div>
      </section>

      {/* 7. Action CTA Section */}
      <section className="max-w-7xl mx-auto w-full px-6 mt-8">
        <div className="bg-[#1A1B1D] text-[#F6F4EE] border border-[#2A2B2D] p-12 md:p-20 rounded-[16px] text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#2A2B2D_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
          
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono z-10">
            Let's Collaborate
          </span>
          <h2 className="text-3xl md:text-6xl font-sans tracking-tight font-medium max-w-3xl leading-[1.05] text-white z-10">
            Building something meaningful? Let's talk.
          </h2>
          <p className="text-[#A1A3A6] text-sm md:text-base max-w-lg leading-relaxed z-10">
            Whether you are an exceptional operator, a visionary founder, or a strategic partner looking to support a healthier lifespan, we would love to connect.
          </p>
          <Link
            href="/contact"
            className="text-xs font-bold tracking-wider uppercase bg-primary text-white px-9 py-4.5 rounded-sm hover:bg-primary-hover transition-all-custom mt-2 shadow-[0_6px_22px_rgba(249,58,62,0.35)] z-10"
          >
            Contact Able Ventures
          </Link>
        </div>
      </section>
      
    </div>
  );
}
