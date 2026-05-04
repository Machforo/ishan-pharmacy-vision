import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Microscope, BookOpen, FlaskConical, Users } from "lucide-react";

const highlights = [
  { icon: Microscope, title: "Advanced Microscopy", description: "High-powered compound and dissection microscopes for histological and anatomical studies of human tissues and organ systems." },
  { icon: BookOpen, title: "Anatomical Models & Charts", description: "Comprehensive 3D anatomical models, skeletal systems, and detailed anatomical charts covering all major body systems." },
  { icon: FlaskConical, title: "Physiological Experiments", description: "Hands-on experiments in human physiology including blood grouping, haemoglobin estimation, and ECG analysis." },
  { icon: Users, title: "Integrated Pharmacology Foundation", description: "Anatomy and physiology training provides the essential foundation for understanding how drugs interact with the human body." },
];

export default function HumanAnatomyPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Human Anatomy & Physiology Lab"
        subtitle="Foundational laboratory for understanding the structure and function of the human body"
        breadcrumbs={[{ label: "Labs" }, { label: "Human Anatomy" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">The Blueprint of Life</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Human Anatomy and Physiology Laboratory provides pharmacy students with a thorough understanding of human body structure and function — the essential foundation for pharmacological study. Equipped with anatomical models, microscopy stations, and physiological measurement tools, this lab ensures students can contextualise drug actions within the biological systems they affect.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="Human Anatomy Laboratory" className="w-full h-[400px] object-cover" />
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
