import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Settings, FlaskConical, Shield, BookOpen } from "lucide-react";

const highlights = [
  { icon: Settings, title: "Industrial Machinery", description: "Tablet press, capsule filling machine, coating pan, and fluid bed dryer for hands-on manufacturing training." },
  { icon: FlaskConical, title: "Formulation Scale-Up", description: "Students learn how lab-scale formulations are scaled up to batch-level production using industry-standard equipment." },
  { icon: Shield, title: "GMP & Validation", description: "Training in equipment qualification (IQ/OQ/PQ), calibration, and documentation as per current GMP requirements." },
  { icon: BookOpen, title: "Quality System Training", description: "Hands-on experience with batch manufacturing records, in-process checks, and finished product testing protocols." },
];

export default function MachineRoomPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Machine Room"
        subtitle="Industrial pharmaceutical machinery lab for large-scale manufacturing training"
        breadcrumbs={[{ label: "Labs" }, { label: "Machine Room" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="font-bold text-foreground leading-tight">Industrial-Grade Manufacturing Training</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Machine Room at Ishan Institute of Pharmacy houses industrial-scale pharmaceutical manufacturing equipment, giving students unparalleled exposure to real-world production environments. Students learn to operate, maintain, and document the use of machinery employed in large-scale drug manufacturing — directly applicable to careers in pharmaceutical production and quality control.
              </p>
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Machine Room" className="w-full h-[400px] object-cover" />
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
