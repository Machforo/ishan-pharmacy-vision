import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";

const downloads = [
  { name: "BA LLB (Hons) Syllabus 2024-25", type: "PDF", category: "Syllabus", size: "2.4 MB" },
  { name: "LLB Syllabus 2024-25", type: "PDF", category: "Syllabus", size: "1.8 MB" },
  { name: "Academic Calendar 2024-25", type: "PDF", category: "Calendar", size: "850 KB" },
  { name: "Moot Court Competition Guidelines", type: "PDF", category: "Clinical", size: "1.2 MB" },
  { name: "Court Visit Diary Proforma", type: "PDF", category: "Clinical", size: "450 KB" },
  { name: "Internship Completion Certificate Format", type: "PDF", category: "Forms", size: "280 KB" },
  { name: "Scholarship Application Form", type: "PDF", category: "Forms", size: "350 KB" },
  { name: "Anti-Ragging Undertaking (BCI Format)", type: "PDF", category: "Forms", size: "210 KB" },
];

export default function DownloadsPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Downloads" subtitle="Timetables, syllabi, forms, and notices for current students" breadcrumbs={[{ label: "Students" }, { label: "Downloads" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed">
                Access mandatory forms, academic calendars, and syllabus documents. All documents are in PDF format for easy accessibility across devices. For any specific document not listed here, please contact the academic office.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg" alt="Ishan Pharmacy Resources" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-3">
            {downloads.map((d, i) => (
              <div key={d.name} className={`reveal delay-${Math.min(i % 4, 3)}00 flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow`}>
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0"><FileText className="w-5 h-5 text-destructive" /></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-foreground truncate">{d.name}</h3>
                  <p className="text-xs text-muted-foreground">{d.category} · {d.type} · {d.size}</p>
                </div>
                <button className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"><Download className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
}
