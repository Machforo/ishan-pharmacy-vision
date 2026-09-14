import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Award, FileCheck } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const defaultPublications = [
  { title: "Novel Mucoadhesive Nanoparticulate Drug Delivery Systems for Enhanced Oral Bioavailability", authors: "Dr. Sandeep Singh, Dr. Megha Gupta", journal: "Asian Journal of Pharmaceutics (Scopus)", year: "2025" },
  { title: "Phytochemical Characterization and Broad-Spectrum Antimicrobial Evaluation of Ocimum sanctum Extracts", authors: "Prof. Amit Das, Ms. Anjali Sharma", journal: "Journal of Pharmacognosy & Phytochemistry", year: "2024" },
  { title: "Formulation Optimization and In-Vitro Dissolution Kinetics of Sustained-Release Metformin HCl Bilayer Tablets", authors: "Dr. Sandeep Singh, Mr. Karan Bajaj", journal: "International Journal of Applied Pharmaceutics", year: "2024" },
  { title: "In-Silico Molecular Docking and ADMET Profiling of Novel Thiazolidinedione Derivatives as PPAR-γ Agonists", authors: "Mr. Vivek Verma, Ms. Neha Singh", journal: "Medicinal Chemistry Research", year: "2024" },
  { title: "Comparative Pharmacological Screening of Adaptogenic Polyherbal Formulations against Restraint Stress in Rodents", authors: "Dr. Megha Gupta, Prof. Rajesh Khanna", journal: "Journal of Ethnopharmacology", year: "2023" },
  { title: "Chromatographic Quality Control & Heavy Metal Limit Profiling in Standardized Herbal Formulations", authors: "Ms. Anjali Sharma, Prof. Amit Das", journal: "Pharmacognosy Reviews", year: "2023" },
];

const defaultPatents = [
  { title: "Self-Nanoemulsifying Drug Delivery System (SNEDDS) for Poorly Water-Soluble Antidiabetic Agents", appNo: "Application No. 202411048291 A", status: "Published (Indian Patent Office)", year: "2024" },
  { title: "Standardized Polyherbal Topical Gel Composition with Enhanced Wound Healing and Antimicrobial Efficacy", appNo: "Application No. 202311029184 A", status: "Published & Under Examination", year: "2023" }
];

export default function PublicationsPage() {
  const { data } = usePharmacyData("publications");
  const ref = useScrollReveal([data]);
  const publications = data?.length > 0 ? data : defaultPublications;

  return (
    <Layout>
      <DynamicPageSections
        pageId="publications"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Faculty Research Publications"
                  subtitle="Peer-reviewed research papers and scientific innovations authored by Ishan Pharmacy scholars"
                  breadcrumbs={[{ label: "Research" }, { label: "Publications" }]}
                />
              );

            case "faculty_papers":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <p className="reveal text-foreground/75 leading-relaxed max-w-3xl mx-auto text-center mb-12 text-sm sm:text-base">
                      The faculty and postgraduate scholars of Ishan Institute of Pharmacy actively advance global healthcare knowledge. Our peer-reviewed publications span targeted nanomedicines, phytomedicines, analytical method validation, and clinical pharmacovigilance.
                    </p>
                    <div className="space-y-4 max-w-4xl mx-auto">
                      {publications.map((p: any, i: number) => (
                        <div
                          key={p.title || i}
                          className={`reveal delay-${Math.min(i, 4)}00 p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow flex items-start gap-4`}
                        >
                          <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                            <BookOpen className="w-5 h-5 text-navy" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground text-sm leading-snug mb-1">{p.title}</h3>
                            <p className="text-xs text-muted-foreground mb-3">{p.authors}</p>
                            <div className="flex flex-wrap gap-2 items-center">
                              <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-semibold text-foreground/80">
                                {p.journal}
                              </span>
                              <span className="px-2.5 py-1 rounded-md bg-gold/20 text-xs font-bold text-gold-dark">
                                {p.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "patents_published":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
                        <Award className="w-3.5 h-3.5" /> Intellectual Property
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Filed & Published Pharmaceutical Patents</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {defaultPatents.map((pat, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-card border shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-navy mb-2">
                              <FileCheck className="w-4 h-4 text-emerald-600" />
                              <span>{pat.appNo}</span>
                            </div>
                            <h4 className="font-semibold text-sm text-foreground mb-3 leading-snug">{pat.title}</h4>
                          </div>
                          <div className="flex items-center justify-between text-xs pt-3 border-t text-muted-foreground">
                            <span className="font-medium text-emerald-700">{pat.status}</span>
                            <span>{pat.year}</span>
                          </div>
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
