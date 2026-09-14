import { useState } from "react";
import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function PastPapersPage() {
  const { data } = usePharmacyData("pastpapers");
  const ref = useScrollReveal([data]);
  const [selectedProg, setSelectedProg] = useState("All");

  const defaultPapers = [
    { name: "Pharmaceutics - I (Sem 1) — End-Term Examination", category: "B.Pharm", year: "2025", fileType: "PDF", size: "480 KB", url: "#" },
    { name: "Pharmaceutical Inorganic Chemistry (Sem 1) — Question Paper", category: "B.Pharm", year: "2025", fileType: "PDF", size: "520 KB", url: "#" },
    { name: "Human Anatomy and Physiology - II (Sem 2) — Question Paper", category: "B.Pharm", year: "2024", fileType: "PDF", size: "610 KB", url: "#" },
    { name: "Pharmacology - I (Sem 4) — AKTU Board Examination", category: "B.Pharm", year: "2024", fileType: "PDF", size: "540 KB", url: "#" },
    { name: "Pharmaceutics (Year 1) — BTE UP Annual Board Paper", category: "D.Pharm", year: "2025", fileType: "PDF", size: "450 KB", url: "#" },
    { name: "Pharmacognosy (Year 1) — BTE UP Annual Board Paper", category: "D.Pharm", year: "2024", fileType: "PDF", size: "490 KB", url: "#" },
    { name: "Pharmacy Law & Ethics (Year 2) — BTE UP Examination", category: "D.Pharm", year: "2024", fileType: "PDF", size: "510 KB", url: "#" },
    { name: "Pharmacotherapeutics (Year 2) — Model Question Paper", category: "D.Pharm", year: "2025", fileType: "PDF", size: "530 KB", url: "#" }
  ];

  const current = data || {
    title: "Previous Examination Papers",
    subtitle: "AKTU University & BTE UP board question papers for B.Pharm and D.Pharm",
    overview: "Past examination question papers serve as a high-yield study aid for pharmacy students preparing for internal sessional and university end-term examinations. Reviewing recurring question patterns, mark allocations, and case studies enhances exam readiness.",
    image: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg",
    files: defaultPapers
  };

  const papers = current.files && current.files.length > 0 ? current.files : defaultPapers;
  const filteredPapers = selectedProg === "All" 
    ? papers 
    : papers.filter((p: any) => p.category?.toLowerCase().includes(selectedProg.toLowerCase()) || p.name?.toLowerCase().includes(selectedProg.toLowerCase()));

  return (
    <Layout>
      <DynamicPageSections
        pageId="past_papers"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={current.title || "Previous Examination Papers"}
                  subtitle={current.subtitle || "AKTU University & BTE UP board question papers for B.Pharm and D.Pharm"}
                  breadcrumbs={[{ label: "Students" }, { label: "Past Papers" }]}
                />
              );

            case "year_tabs":
              return (
                <div className="container-wide pt-16 pb-4" ref={ref}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {["All", "B.Pharm", "D.Pharm"].map((prog) => (
                      <button
                        key={prog}
                        onClick={() => setSelectedProg(prog)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          selectedProg === prog
                            ? "bg-navy text-white shadow-md shadow-navy/20"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {prog === "All" ? "All Programs" : `${prog} Papers`}
                      </button>
                    ))}
                  </div>
                </div>
              );

            case "question_paper_catalog":
              return (
                <section className="py-12 md:py-16">
                  <div className="container-wide max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">Prepare with Board-Certified Papers</h3>
                        <div
                          className="text-foreground/75 leading-relaxed prose max-w-none rich-text text-sm"
                          dangerouslySetInnerHTML={{ __html: rt(current.overview) }}
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-md border">
                        <ImageWithFallback
                          src={current.image || "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg"}
                          alt="Library Examination Archive"
                          className="w-full h-56 object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {filteredPapers.map((d: any, i: number) => (
                        <div
                          key={d.name || i}
                          className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-gold-dark" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-foreground truncate">{d.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {d.category || "Pharmacy"} {d.year ? `· Year ${d.year}` : ""} {d.fileType ? `· ${d.fileType}` : ""} {d.size ? `· ${d.size}` : ""}
                            </p>
                          </div>
                          <a
                            href={d.url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 p-2.5 rounded-lg bg-muted hover:bg-navy hover:text-white transition-colors text-muted-foreground"
                            aria-label={`Download ${d.name}`}
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return <EnquiryCTA />;

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}