import { focusAreas } from "@/data/mockData";
import { Shield, HeartPulse, Sparkles, Home, UserCheck } from "lucide-react";

export default function FocusAreasPage() {
  const getFocusAreaIcon = (id: string) => {
    switch (id) {
      case "financial-security":
        return <Shield className="w-8 h-8 text-primary" />;
      case "healthtech":
        return <HeartPulse className="w-8 h-8 text-primary" />;
      case "healthy-aging":
        return <Sparkles className="w-8 h-8 text-primary" />;
      case "independent-living":
        return <Home className="w-8 h-8 text-primary" />;
      case "care-infrastructure":
        return <UserCheck className="w-8 h-8 text-primary" />;
      default:
        return <Sparkles className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      {/* Header */}
      <section className="max-w-3xl flex flex-col gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Investment Thesis
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight font-medium text-foreground leading-[1.1]">
          Sectors of Innovation
        </h1>
        <p className="text-lg md:text-xl text-muted-text leading-relaxed">
          We actively explore, validate, and build companies within five core sectors that directly affect the physical longevity, financial security, and personal independence of aging populations.
        </p>
      </section>

      {/* Focus Areas Detail Grid */}
      <section className="flex flex-col gap-12 border-t border-border-accent pt-12">
        {focusAreas.map((area, idx) => (
          <div 
            key={area.id}
            id={area.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-border-accent/40 ${
              idx === focusAreas.length - 1 ? "border-b-0 pb-0" : ""
            }`}
          >
            {/* Column 1: Header/Icon & Key Metric */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="p-3 bg-primary/10 w-fit rounded-[8px]">
                  {getFocusAreaIcon(area.id)}
                </div>
                <h2 className="text-2xl md:text-3xl font-sans font-medium text-foreground">
                  {area.title}
                </h2>
                <p className="text-sm text-muted-text leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="bg-card-bg border border-border-accent/60 p-5 rounded-[6px] w-fit">
                <span className="block text-2xl font-bold tracking-tight text-primary">{area.metric}</span>
                <span className="block text-[10px] uppercase tracking-wider text-muted-text mt-0.5 max-w-[200px] leading-snug">
                  {area.metricLabel}
                </span>
              </div>
            </div>

            {/* Column 2: Challenge vs Opportunity narrative */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-card-bg border border-border-accent p-8 md:p-10 rounded-[10px] shadow-sm">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                  The Industry Challenge
                </span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {area.problem}
                </p>
              </div>

              <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-border-accent/50 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Venture Co-Creation Focus
                </span>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {area.opportunity}
                </p>
              </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}
