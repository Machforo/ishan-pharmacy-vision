import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, Gavel, Scale } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultReasons = [];

export default function WhyIshanLawSection() {
  const { data } = usePharmacyData("homepage");
  const reasons = data?.whyIshan?.length > 0 ? data.whyIshan : defaultReasons;
  const ref = useScrollReveal([reasons]);

  return (
    <section id="why-choose-us" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left */}
          <div className="reveal-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Why Choose Us</p>
            <h2 className="font-bold text-foreground leading-tight">
              {data?.whyIshanHeading || "What Makes Ishan Pharmacy Stand Apart"}
            </h2>
            {data?.whyIshanDescription ? (
              <div
                className="mt-4 leading-relaxed [&_p]:text-inherit [&>p]:mb-2 last:[&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: data.whyIshanDescription }}
              />
            ) : (
              <p className="mt-4 leading-relaxed">
                At Ishan Institute of Pharmacy, we bridge the gap between theoretical knowledge and practical application. Our focus on hands-on clinical training in 10 specialized labs ensures that every student graduates ready for the pharmaceutical industry.
              </p>
            )}
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
              const Icon = typeof r.icon === 'function' ? r.icon : Award;
              const isImageIcon = typeof r.icon === 'string' && r.icon.trim() !== '';

              return (
                <div
                  key={r.title || i}
                  className={`reveal delay-${Math.min(i % 4, 4)}00 flex gap-4 p-5 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    {isImageIcon ? (
                      <img src={r.icon} alt={r.title} className="w-6 h-6 object-contain" />
                    ) : (
                      <Icon className="w-5 h-5 text-navy" />
                    )}
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
