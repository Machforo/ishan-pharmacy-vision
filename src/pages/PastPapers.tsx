import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, FileText, Search } from "lucide-react";
import { useState } from "react";

export default function PastPapersPage() {
  const ref = useScrollReveal();
  const [searchTerm, setSearchTerm] = useState("");

  const papers = [
    { program: "BA LLB", year: "2023", semester: "Sem 1", subject: "Constitutional Law — I", size: "1.2 MB" },
    { program: "BA LLB", year: "2023", semester: "Sem 1", subject: "Law of Torts", size: "1.1 MB" },
    { program: "LLB", year: "2023", semester: "Sem 1", subject: "Jurisprudence", size: "1.5 MB" },
    { program: "LLB", year: "2023", semester: "Sem 2", subject: "Indian Penal Code", size: "2.1 MB" },
    { program: "BA LLB", year: "2022", semester: "Sem 4", subject: "Family Law — II", size: "1.8 MB" },
    { program: "LLB", year: "2022", semester: "Sem 3", subject: "Civil Procedure Code", size: "1.4 MB" },
  ];

  const filteredPapers = papers.filter(p => 
    p.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <PageHeader
        title="Past Exam Papers"
        subtitle="Access previous years' question papers for comprehensive exam preparation."
        breadcrumbs={[{ label: "Past Papers" }]}
      />

      <section className="py-20" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="reveal-up grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Exam Resources</p>
                <h2 className="font-bold text-foreground leading-tight">Prepare with Confidence</h2>
                <p className="text-foreground/70 leading-relaxed">
                  Access previous years' CCS University question papers for BA LLB and LLB. These are invaluable resources for understanding exam patterns and frequently asked questions. Papers are organised by programme, semester, and year.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg" alt="Ishan Pharmacy Exam Preparation" className="w-full h-64 object-cover" />
              </div>
            </div>

            <div className="reveal-up">
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by subject or programme..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-muted border-b">
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Programme</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Year / Sem</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredPapers.map((p, i) => (
                        <tr key={i} className="hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-navy">{p.program}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-gold" />
                              <span className="text-sm text-foreground/80">{p.subject}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs">{p.year} | {p.semester}</span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="inline-flex items-center gap-2 text-gold hover:text-navy transition-colors font-bold text-xs uppercase tracking-wider">
                              <Download className="w-4 h-4" />
                              {p.size}
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredPapers.length === 0 && (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-foreground/50">
                            No papers found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-foreground/50">
                New papers are added after each CCS University examination cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
