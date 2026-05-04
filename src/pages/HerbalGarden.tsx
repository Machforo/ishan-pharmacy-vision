import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leaf, BookOpen } from "lucide-react";

const plants = [
  "Aloe Vera", "Tulsi", "Ashwagandha", "Neem", "Turmeric", "Ginger",
  "Brahmi", "Amla", "Shatavari", "Giloy", "Peppermint", "Moringa",
];

export default function HerbalGardenPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Herbal Garden"
        subtitle="Live botanical garden with 50+ medicinal plant species for hands-on pharmacognosy training"
        breadcrumbs={[{ label: "Labs" }, { label: "Herbal Garden" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About the Garden</p>
              <h2 className="font-bold text-foreground leading-tight">Learning from Living Nature</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Herbal Garden at Ishan Institute of Pharmacy is a unique educational asset housing over 50 species of medicinal and aromatic plants. Students identify, collect, and study plants in their living state — a skill critical for pharmacognosy and herbal drug development. Each plant is labelled with its botanical name, family, and traditional medicinal uses.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Herbal Garden" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          <div className="reveal max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Medicinal Plants</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {plants.map((plant) => (
                <div key={plant} className="p-3 rounded-xl border bg-card text-center hover:bg-gold-light transition-colors">
                  <Leaf className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-xs font-medium text-foreground">{plant}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
