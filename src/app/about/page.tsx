import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Cpu, HeartHandshake, Compass } from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Long-Term Thinking",
      description: "We build for decades, not quarters. We avoid short-term speculative hype cycles and focus on structural solutions that address generational shifts."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Builder Mentality",
      description: "We are operator-first. We do not sit back and read slide decks; we write code, conduct clinical validations, design interfaces, and build operations from scratch."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Absolute Alignment",
      description: "We invest significant resources and co-founder equity upfront, ensuring that our incentives align completely with our founders and long-term partners."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Longevity Optimization",
      description: "Every company we build must answer a single question: Does this materially improve quality of life, independence, or financial security as people age?"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20 md:gap-32">
      {/* Hero Header */}
      <section className="max-w-4xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Our Purpose
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          Redefining the experience of aging through technology.
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed max-w-3xl">
          Able Ventures is a specialized venture studio and investment platform focused on building and backing companies that improve the quality of life, financial security, and independence of older adults globally.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-border-accent pt-12">
        <div className="lg:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-text">
            The Studio Story
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground mt-2">
            Why we co-build.
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-6 text-base text-foreground/90 leading-relaxed max-w-3xl">
          <p>
            Traditional venture capital is designed to allocate capital to existing startups. However, in highly regulated and nuanced industries like fintech for seniors, preventive healthtech, and care coordination, the barrier to entry is execution, not capital.
          </p>
          <p>
            Able Ventures was founded in 2023 in Dubai to change this equation. We operate as a venture studio, meaning we co-create startups from day zero. We identify systemic opportunities, validate ideas through custom prototypes, assemble world-class founding teams, and back them with initial capital and deep operational execution.
          </p>
          <p>
            By combining capital with hands-on product design, clinical strategy, and engineering capabilities, we drastically reduce execution risk and accelerate the journey to product-market fit.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="flex flex-col gap-12 border-t border-border-accent pt-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-text">
            Operating Philosophy
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground mt-2">
            Our guiding principles.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, idx) => (
            <div key={idx} className="bg-card-bg border border-border-accent p-8 rounded-[8px] flex flex-col gap-4">
              <div className="p-2.5 bg-primary/10 w-fit rounded-[6px]">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-text leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-[#1A1B1D] text-[#F6F4EE] border border-[#2A2B2D] p-12 md:p-16 rounded-[12px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-sans font-semibold text-white">Join the Studio</h3>
          <p className="text-[#A1A3A6] text-sm max-w-xl leading-relaxed">
            Are you a builder, operator, or clinical specialist looking to co-found the next generation of longevity tech companies? Let's connect.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase bg-primary text-white px-6 py-3.5 rounded-sm hover:bg-primary-hover transition-colors whitespace-nowrap self-start md:self-center shadow-md"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
