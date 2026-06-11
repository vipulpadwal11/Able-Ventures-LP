import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Milestone, Handshake, Users } from "lucide-react";

export default function VentureStudioPage() {
  const lifecycle = [
    {
      icon: <Milestone className="w-6 h-6 text-primary" />,
      title: "01 · Opportunity Discovery",
      description: "We analyze database demographics and run local caregiver/senior surveys in Dubai and global networks to locate severe service gaps."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "02 · Validation Engine",
      description: "We construct lightweight high-fidelity functional prototypes to pressure-test consumer compliance, unit economics, and data security."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "03 · Founder Matching",
      description: "We recruit highly experienced operators, domain specialists, and clinical leaders, aligning equity matrices as co-founders."
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary" />,
      title: "04 · Launch & Funding",
      description: "We spin out the validated entity, inject primary pre-seed capital, and provide operational support across design, product, and code."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20 md:gap-32">
      {/* Header */}
      <section className="max-w-3xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Operating Framework
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          The Co-Creation Engine
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed">
          Unlike traditional venture capital firms that review pitch decks, Able Ventures is an active builder. We write the initial code, secure primary regulatory approvals, and partner with operators to design the future of longevity.
        </p>
      </section>

      {/* Grid Comparison: Studio vs VC */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border-accent pt-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase tracking-wider text-[#1A1B1D]">
            Venture Studio Model
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Idea Origination</strong>: Starts inside the studio through data analysis and field research.</span>
            </li>
            <li className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Hands-On Support</strong>: Full engineering, design, and growth teams embedded on day zero.</span>
            </li>
            <li className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span><strong>Risk Reduction</strong>: Extensive prototype validation before spinning out and hiring co-founders.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 border-t md:border-t-0 md:border-l border-border-accent/60 pt-8 md:pt-0 md:pl-12">
          <h2 className="text-xl font-bold uppercase tracking-wider text-muted-text">
            Traditional Venture Capital
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm text-muted-text leading-relaxed">
              <span className="w-5 h-5 rounded-full border border-border-accent flex items-center justify-center text-[10px] shrink-0 mt-0.5">X</span>
              <span><strong>Idea Origination</strong>: Exclusively sourced from inbound pitches or external founders.</span>
            </li>
            <li className="flex gap-3 text-sm text-muted-text leading-relaxed">
              <span className="w-5 h-5 rounded-full border border-border-accent flex items-center justify-center text-[10px] shrink-0 mt-0.5">X</span>
              <span><strong>Hands-On Support</strong>: Minimal board-level guidance and occasional advisory networking.</span>
            </li>
            <li className="flex gap-3 text-sm text-muted-text leading-relaxed">
              <span className="w-5 h-5 rounded-full border border-border-accent flex items-center justify-center text-[10px] shrink-0 mt-0.5">X</span>
              <span><strong>Risk Reduction</strong>: Investment occurs after product build, shifting risk entirely onto founders.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Lifecycle Flow */}
      <section className="flex flex-col gap-12 border-t border-border-accent pt-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-text">
            Studio Lifecycle
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground mt-2">
            From opportunity to institutional scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lifecycle.map((step, idx) => (
            <div key={idx} className="bg-card-bg border border-border-accent p-6 rounded-[8px] flex flex-col justify-between min-h-[260px]">
              <div className="flex flex-col gap-4">
                <div className="p-2 bg-primary/10 w-fit rounded-[4px]">
                  {step.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground leading-snug">{step.title}</h3>
                <p className="text-xs text-muted-text leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Block */}
      <section className="bg-[#1A1B1D] text-[#F6F4EE] border border-[#2A2B2D] p-12 md:p-16 rounded-[12px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-sans font-semibold text-white">Engage with Able Ventures</h3>
          <p className="text-[#A1A3A6] text-sm max-w-xl leading-relaxed">
            Are you a strategic clinical provider, bank asset holder, or founding operator looking to partner with our Dubai venture ecosystem? Let's connect.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase bg-primary text-white px-6 py-3.5 rounded-sm hover:bg-primary-hover transition-colors whitespace-nowrap self-start md:self-center shadow-md"
        >
          <span>Initiate Partnership</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
