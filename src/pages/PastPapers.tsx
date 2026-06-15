import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

export default function PastPapersPage() {
  const { data } = usePharmacyData("pastpapers");
  const ref = useScrollReveal([data]);
  const current = data || {
    title: "Past Exam Papers",
    subtitle: "Previous year question papers for B.Pharm and D.Pharm",
    overview: "Access mandatory documents.",
    image: "",
    files: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: "Students" }, { label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-8">
              <div className="text-foreground/70 leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: current.overview }} />
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image || "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg"} alt="Resources" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-3">
            {(current.files || []).map((d: any, i: number) => (
              <div key={d.name || i} className={`reveal delay-${Math.min(i % 4, 3)}00 flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow`}>
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-destructive" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground truncate">{d.name}</h3>
                  <p className="text-xs text-muted-foreground">{d.category} · {d.fileType} · {d.size}</p>
                </div>
                <a href={d.url} target="_blank" rel="noreferrer" className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"><Download className="w-4 h-4" /></a>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}