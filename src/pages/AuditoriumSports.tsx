import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Music, Trophy } from "lucide-react";

export default function AuditoriumSportsPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Auditorium & Sports"
        subtitle="World-class auditorium and sports facilities supporting holistic student development"
        breadcrumbs={[{ label: "Campus" }, { label: "Auditorium & Sports" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="reveal space-y-6 p-8 rounded-2xl border bg-card">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center">
                <Music className="w-7 h-7 text-navy" />
              </div>
              <h2 className="font-bold text-foreground text-2xl">Seminar Hall & Auditorium</h2>
              <p className="text-foreground/70 leading-relaxed">
                The state-of-the-art auditorium at Ishan Pharmacy provides a professional venue for guest lectures, annual convocations, cultural programmes, and national-level seminars and conferences in pharmaceutical science.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Capacity: 500+ seats with modern audio-visual equipment</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> HD projection and professional sound system</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Regular guest lectures by industry experts</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Annual Pharmacy Week celebrations</li>
              </ul>
            </div>
            <div className="reveal space-y-6 p-8 rounded-2xl border bg-card">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center">
                <Trophy className="w-7 h-7 text-navy" />
              </div>
              <h2 className="font-bold text-foreground text-2xl">Sports Facilities</h2>
              <p className="text-foreground/70 leading-relaxed">
                We believe in holistic education. The Ishan campus sports complex encourages students to maintain a healthy mind and body alongside their academic pursuits.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Cricket, Basketball, and Badminton courts</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Gymnasium with modern fitness equipment</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Regular inter-college sports competitions</li>
                <li className="flex gap-2"><span className="text-gold font-bold">•</span> Trained sports coaches and facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
