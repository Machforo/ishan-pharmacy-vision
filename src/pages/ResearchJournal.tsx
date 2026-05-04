import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

export default function ResearchJournalPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Ishan Pharmacy Review" subtitle="A peer-reviewed pharmacy journal dedicated to contemporary pharmaceutical scholarship" breadcrumbs={[{ label: "Research" }, { label: "Ishan Pharmacy Review" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <p className="text-foreground/70 leading-relaxed">Ishan Pharmacy Review is the flagship peer-reviewed research journal published by the Ishan Institute of Pharmacy. Dedicated to fostering high-quality pharmaceutical scholarship, the journal publishes original research papers, case comments, and book reviews on contemporary pharmacy practice issues, constitutional developments, and international law. Published bi-annually, it serves as a platform for academicians, pharmaceutical practitioners, and students to contribute to the evolving pharmaceutical discourse in India and abroad.</p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Pharmacy-Lab-1024x683.jpg" alt="Ishan Pharmacy Research" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[{ label: "Journal Name", value: "Ishan Pharmacy Review" }, { label: "Frequency", value: "Bi-annual" }, { label: "Format", value: "Peer-Reviewed" }, { label: "Focus", value: "Contemporary Pharmacy Practice Issues" }].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl border bg-card">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
                Submission Guidelines <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
