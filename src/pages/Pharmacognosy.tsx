import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leaf, FlaskConical, Microscope, BookOpen } from "lucide-react";

const highlights = [
  { icon: Leaf, title: "Herbal Drug Identification", description: "Students learn macroscopic and microscopic identification of crude drugs, including morphological and histological studies." },
  { icon: FlaskConical, title: "Phytochemical Extraction", description: "Hands-on extraction of bioactive compounds like alkaloids, flavonoids, and glycosides using solvent extraction and chromatographic techniques." },
  { icon: Microscope, title: "Biological Standardisation", description: "Standardisation of herbal drugs using biological methods to ensure potency, purity, and quality of plant-based medicines." },
  { icon: BookOpen, title: "Herbal Garden Integration", description: "Direct access to our on-campus herbal garden with 50+ medicinal plant species for live botanical studies and collection." },
];

export default function PharmacognosyPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Pharmacognosy Lab"
        subtitle="Dedicated laboratory for the study of natural drugs and medicinal plant sciences"
        breadcrumbs={[{ label: "Labs" }, { label: "Pharmacognosy" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Laboratory Overview</p>
              <h2 className="font-bold text-foreground leading-tight">Exploring the Science of Natural Medicines</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmacognosy Laboratory bridges the ancient wisdom of traditional medicine with modern pharmaceutical science. Students study the botany, chemistry, and pharmacology of natural drugs derived from plants, animals, and minerals. The lab is equipped with advanced extraction apparatus, chromatography systems, and microscopy tools for comprehensive phytochemical analysis.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Pharmacognosy Laboratory" className="w-full h-[400px] object-cover" />
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
