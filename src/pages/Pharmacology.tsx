import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Heart, BookOpen, Award } from "lucide-react";

const highlights = [
  { icon: FlaskConical, title: "Drug Effect Studies", description: "Students conduct experiments on isolated tissue preparations, animal models, and in-vitro systems to study drug actions and mechanisms." },
  { icon: Heart, title: "Cardiovascular Pharmacology", description: "Dedicated experiments on cardiac, antihypertensive, and anticoagulant drug evaluations with modern physiological recording systems." },
  { icon: BookOpen, title: "Toxicology Testing", description: "Assessment of drug toxicity and safety profiles using validated experimental models and dose-response analysis methodologies." },
  { icon: Award, title: "CNS Pharmacology", description: "Behavioural pharmacology experiments for studying anxiolytic, antidepressant, and nootropic drug effects in preclinical models." },
];

export default function PharmacologyPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Pharmacology Lab"
        subtitle="Advanced laboratory for studying drug actions, mechanisms, and therapeutic applications"
        breadcrumbs={[{ label: "Labs" }, { label: "Pharmacology" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">Understanding How Drugs Work</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmacology Laboratory is where students learn the science of drug actions and their therapeutic applications. Through carefully designed experiments, students investigate how drugs interact with receptors and biological systems to produce their desired and adverse effects. The lab supports the full pharmacology curriculum including autonomic, cardiovascular, CNS, and chemotherapeutic pharmacology.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Pharmacology Laboratory" className="w-full h-[400px] object-cover" />
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
