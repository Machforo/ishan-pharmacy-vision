import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, MapPin, Calendar, ArrowRight } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export default function IndustrialVisitsPage() {
  const { data } = usePharmacyData("industrialvisits");
  const ref = useScrollReveal([data]);
  const current = data || {
    title: "Industrial Visits",
    subtitle: "",
    overviewHeading: "",
    overviewContent: "",
    visits: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Industry Connect</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />
            </div>
            <div className="reveal-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current?.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"} alt="Industrial Visit" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="reveal font-bold text-2xl text-center mb-10">Recent Visits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {(current.visits || []).map((v: any, i: number) => (
                <div key={i} className={`reveal delay-${Math.min(i % 4, 3)}00 p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{v.company}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/60">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {v.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {v.date}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5 text-navy" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{v.description}</p>
                  <div className="bg-muted p-4 rounded-xl border border-border/50">
                    <p className="text-xs font-bold text-navy mb-1 uppercase tracking-wider">Key Takeaway</p>
                    <p className="text-sm italic">"{v.takeaways}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}