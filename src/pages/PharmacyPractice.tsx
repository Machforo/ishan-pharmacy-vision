import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Users, BookOpen, Stethoscope } from "lucide-react";

const highlights = [
  { icon: Stethoscope, title: "Clinical Training", description: "Students receive clinical pharmacy training, learning drug therapy management, patient counselling, and medication reconciliation." },
  { icon: Users, title: "Hospital Internship Program", description: "Structured hospital internship placements at leading hospitals in Greater Noida and Delhi NCR as part of the curriculum." },
  { icon: BookOpen, title: "Prescription Analysis", description: "Practice-oriented modules on prescription reading, drug interaction checking, and pharmacovigilance reporting." },
  { icon: Heart, title: "Community Pharmacy Skills", description: "Training in over-the-counter dispensing, patient counselling for chronic diseases, and community health awareness." },
];

export default function PharmacyPracticePage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Pharmacy Practice Lab"
        subtitle="Clinical pharmacy and patient-care training facility for future healthcare professionals"
        breadcrumbs={[{ label: "Labs" }, { label: "Pharmacy Practice" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">Patient-Centred Pharmaceutical Care</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmacy Practice Laboratory simulates a real-world hospital and community pharmacy environment. Students develop core clinical skills including drug dispensing, patient counselling, prescription verification, and pharmacovigilance reporting. The lab is equipped with a model dispensing counter, drug information centre, and clinical simulation tools.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Pharmacy Practice Laboratory" className="w-full h-[400px] object-cover" />
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
