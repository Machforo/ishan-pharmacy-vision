import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SkillDevelopmentPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Skill Development" subtitle="Advocacy skills, pharmaceutical research, and courtroom etiquette integrated into our curriculum" breadcrumbs={[{ label: "Learning" }, { label: "Skill Development" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide"><div className="max-w-3xl mx-auto reveal space-y-6">
          <p className="text-foreground/70 leading-relaxed">The Skill Development Cell at Ishan Pharmacy organizes specialized workshops and clinical training sessions designed to transform pharmacy aspirants into practice-ready advocates. These programs focus on the core competencies required for successful litigation, judicial services, and corporate pharmacy careers.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Pharmaceutical Research & Online Databases",
              "Drug Formulation & Analysis",
              "Mooting & Oral Advocacy",
              "Client Counseling & Interviewing",
              "ADR, Mediation & Conciliation",
              "Courtroom Etiquette & Decorum",
              "Public Speaking & Debating",
              "Case Analysis & Strategic Reasoning"
            ].map((s) => (
              <div key={s} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> {s}
              </div>
            ))}
          </div>
        </div></div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
