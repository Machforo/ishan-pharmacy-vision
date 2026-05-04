import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Microscope, BookOpen, Award } from "lucide-react";

const highlights = [
  { icon: FlaskConical, title: "Advanced Synthesis Lab", description: "Equipped with modern synthesis apparatus, rotary evaporators, and reflux assemblies for hands-on drug synthesis experiments." },
  { icon: Microscope, title: "Analytical Instruments", description: "UV-Vis spectrophotometers, FT-IR, HPLC, and flame photometers for comprehensive pharmaceutical analysis." },
  { icon: BookOpen, title: "Medicinal Chemistry Focus", description: "Curriculum covers drug design, QSAR studies, and the chemistry of natural and synthetic pharmaceutical compounds." },
  { icon: Award, title: "Research & Publications", description: "Faculty actively guide students in research projects, leading to presentations and publications in pharmaceutical chemistry." },
];

export default function PharmaceuticalChemistryPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Pharmaceutical Chemistry Lab"
        subtitle="State-of-the-art synthesis and analytical laboratory for pharmaceutical science students"
        breadcrumbs={[{ label: "Labs", href: "/pharmaceutical-chemistry" }, { label: "Pharmaceutical Chemistry" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">Where Chemistry Meets Pharmacy</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmaceutical Chemistry Laboratory at Ishan Institute of Pharmacy is a fully equipped facility designed to provide students with comprehensive training in drug synthesis, analysis, and quality assessment. Students gain hands-on experience in organic synthesis, medicinal chemistry reactions, and analytical techniques essential for careers in pharmaceutical R&D and quality control.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                The lab supports the D.Pharm and B.Pharm curricula with experiments aligned to PCI and university syllabus requirements, ensuring students are prepared for professional practice and higher education.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="Pharmaceutical Chemistry Laboratory" className="w-full h-[400px] object-cover" />
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
