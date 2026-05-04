import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, Gavel, Scale } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultReasons = [
  { icon: Shield, title: "PCI Approved", desc: "Recognized by Pharmacy Council of India ensuring top-tier academic standards." },
  { icon: Building, title: "10 Specialised Labs", desc: "State-of-the-art facilities including Pharmaceutics, Pharmacognosy, and Pharmacology labs." },
  { icon: Users, title: "Industry Faculty", desc: "Learn from experienced academicians and pharmaceutical industry experts." },
  { icon: TrendingUp, title: "Placement Support", desc: "Dedicated placement cell connecting graduates with leading pharma companies." },
];

export default function WhyIshanLawSection() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("homepage");
  const reasons = data?.standApart?.length > 0 ? data.standApart : defaultReasons;

  return (
    <section id="why-choose-us" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left */}
          <div className="reveal-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Why Choose Us</p>
            <h2 className="font-bold text-foreground leading-tight">
              What Makes Ishan Pharmacy Stand Apart
            </h2>
            <p className="mt-4 leading-relaxed">
              At Ishan Institute of Pharmacy, we bridge the gap between theoretical knowledge and practical application. Our focus on hands-on clinical training in 10 specialized labs ensures that every student graduates ready for the pharmaceutical industry.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-gold hover:text-navy transition-all active:scale-[0.97] shimmer-btn"
            >
              Schedule a Campus Tour
            </a>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r: any, i: number) => {
              const Icon = r.icon && typeof r.icon !== 'string' ? r.icon : Award;
              return (
                <div
                  key={r.title || i}
                  className={`reveal delay-${Math.min(i % 4, 4)}00 flex gap-4 p-5 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{r.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.desc || r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
