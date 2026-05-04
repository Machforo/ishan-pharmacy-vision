import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Monitor, FlaskConical, Archive } from "lucide-react";

export default function MuseumComputerLabPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Museum & Computer Lab"
        subtitle="Pharmaceutical museum preserving drug heritage and a modern IT lab for digital pharmaceutical research"
        breadcrumbs={[{ label: "Labs" }, { label: "Museum & Computer Lab" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="reveal space-y-6 p-8 rounded-2xl border bg-card">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center">
                <Archive className="w-7 h-7 text-navy" />
              </div>
              <h2 className="font-bold text-foreground text-2xl">Pharmaceutical Museum</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Pharmaceutical Museum at Ishan Pharmacy houses a curated collection of historical drug specimens, antique dispensing equipment, traditional formulation tools, and botanical specimens. The museum offers students a living history of pharmaceutical science — from traditional Ayurvedic preparations to modern analytical instruments — fostering an appreciation of the field's rich heritage.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Historical crude drug specimens and herbarium</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Antique dispensing equipment and mortar collections</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Traditional formulation tools and measure sets</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Pharmacopoeia timeline and historical publications</li>
              </ul>
            </div>
            <div className="reveal space-y-6 p-8 rounded-2xl border bg-card">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center">
                <Monitor className="w-7 h-7 text-navy" />
              </div>
              <h2 className="font-bold text-foreground text-2xl">Computer Lab</h2>
              <p className="text-foreground/70 leading-relaxed">
                The state-of-the-art Computer Lab provides students with digital tools for pharmaceutical research, bioinformatics, and data analysis. With high-speed internet access and licensed pharmaceutical software, students can access global research databases, perform in-silico drug design studies, and develop computational skills essential for modern pharmaceutical research.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> 30+ high-performance workstations with licensed software</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Access to pharmaceutical databases and e-journals</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Bioinformatics and molecular docking software</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> 24/7 high-speed internet connectivity</li>
              </ul>
            </div>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="Pharmaceutical Museum" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border">
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Computer Laboratory" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
