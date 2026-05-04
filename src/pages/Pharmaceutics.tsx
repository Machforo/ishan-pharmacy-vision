import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Layers, Beaker, Award } from "lucide-react";

const highlights = [
  { icon: FlaskConical, title: "Dosage Form Preparation", description: "Students prepare tablets, capsules, syrups, suspensions, and emulsions using industry-standard equipment and formulation techniques." },
  { icon: Layers, title: "Biopharmaceutics & Pharmacokinetics", description: "Hands-on experiments in drug dissolution, bioavailability studies, and pharmacokinetic data analysis for optimised drug delivery." },
  { icon: Beaker, title: "Sterile Manufacturing Unit", description: "A dedicated sterile room for aseptic preparation of injectables, eye drops, and other parenteral formulations." },
  { icon: Award, title: "GMP Compliance Training", description: "Students are trained in Good Manufacturing Practice (GMP) guidelines, documentation, and batch record preparation." },
];

export default function PharmaceuticsPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Pharmaceutics Lab"
        subtitle="Comprehensive formulation and drug delivery laboratory for pharmacy students"
        breadcrumbs={[{ label: "Labs" }, { label: "Pharmaceutics" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">The Art & Science of Drug Formulation</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmaceutics Laboratory is the cornerstone of the pharmacy curriculum at Ishan Institute of Pharmacy. Students learn the science of formulating drugs into patient-friendly dosage forms — from simple tablets and capsules to complex sustained-release systems and sterile injectables. The lab is equipped with tableting machines, capsule filling machines, coating pans, and dissolution test apparatus.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Pharmaceutics Laboratory" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className={`reveal delay-${Math.min(i, 3)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
