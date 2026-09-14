import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download, CheckCircle2 } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const defaultDisclosureItems = [
  { category: "Institution Details", items: ["Name: Ishan Institute of Pharmacy", "Address: Knowledge Park-III, Greater Noida, Gautam Buddha Nagar, UP 201308", "Year of Establishment: 2017", "Status: Self-Financing Professional Institution", "Type: Co-educational College of Pharmaceutical Sciences"] },
  { category: "Academic Information", items: ["Programs Offered: Bachelor of Pharmacy (B.Pharm - 4 Years), Diploma in Pharmacy (D.Pharm - 2 Years)", "PCI Approval Status: Approved under Section 12 of the Pharmacy Act, 1948", "Annual Intake: B.Pharm (100 seats), D.Pharm (60 seats)", "Faculty-Student Ratio: 1:15 as mandated by PCI standards", "Examination Results: AKTU & BTE UP Board Examinations"] },
  { category: "Regulatory Information", items: ["Pharmacy Council of India (PCI) Permanent Approval Letters", "Dr. A.P.J. Abdul Kalam Technical University (AKTU) Affiliation Order (Code 885)", "Board of Technical Education, Uttar Pradesh (BTE UP) Affiliation (Code 2727)", "Anti-Ragging Squad & Committee Constitution", "Internal Complaints Committee & Gender Sensitization Cell"] },
  { category: "Laboratory & Campus Infrastructure", items: ["10 Specialized Pharmaceutical Laboratories (Pharmaceutics, Pharmacology, Pharmacognosy, etc.)", "Central Machine Room equipped with Rotary Tablet Press and Granulators", "Medicinal Plant Herbal Garden with 100+ Authenticated Species", "Pharmacy Museum & Bioinformatics Terminals", "Central Library with Delnet, E-Journals and Pharmacopoeias"] },
  { category: "Faculty & Staff Standards", items: ["Faculty Roster meeting PCI qualifications (M.Pharm & Ph.D holders)", "Full-Time Laboratory Technicians and Registered Pharmacist Instructors", "Continuous Faculty Development Programs (FDPs) and Industry Sabbaticals"] },
];

export default function MandatoryDisclosurePage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("mandatorydisclosure");
  
  const statement = data?.statement || `The information provided below is submitted as required under the Pharmacy Act 1948, Pharmacy Council of India (PCI) directives, AKTU Lucknow, and BTE UP Lucknow regulations. It is updated annually to ensure full statutory transparency for current and prospective students, parents, healthcare authorities, and the public. Any inquiries or verifications regarding reported data should be addressed to the Registrar at Ishan Institute of Pharmacy, Knowledge Park-III, Greater Noida.`;
  
  const disclosureItems = data?.disclosureItems?.length > 0 
    ? data.disclosureItems.map((item: any) => ({
        category: item.category,
        items: item.items ? item.items.split('\n') : []
      }))
    : defaultDisclosureItems;

  return (
    <Layout>
      <DynamicPageSections
        pageId="mandatory_disclosure"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Mandatory Statutory Disclosure"
                  subtitle="PCI / AKTU / BTE UP format mandatory disclosure document — updated annually"
                  breadcrumbs={[{ label: "Governance" }, { label: "Mandatory Disclosure" }]}
                />
              );

            case "compliance_statement":
              return (
                <section className="py-16 md:py-20" ref={ref}>
                  <div className="container-wide max-w-4xl mx-auto">
                    {data?.bannerImage && (
                      <div className="mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
                        <ImageWithFallback src={data.bannerImage} alt="Mandatory Disclosure Banner" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="bg-gold-light/40 border border-gold/30 rounded-2xl p-6 md:p-8 flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 shadow-md">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <h2 className="text-base font-bold text-navy uppercase tracking-wider">
                            PCI & Statutory Compliance Statement
                          </h2>
                        </div>
                        <div className="text-sm leading-relaxed text-foreground/80 whitespace-pre-wrap">
                          {statement}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "documents_table":
              return (
                <section className="pb-20 md:pb-28">
                  <div className="container-wide max-w-4xl mx-auto">
                    <div className="space-y-6">
                      {disclosureItems.map((section: any, i: number) => (
                        <div key={section.category || i} className="rounded-2xl border bg-card p-6 shadow-sm">
                          <h3 className="font-bold text-lg text-navy mb-4 border-b pb-2">
                            {section.category}
                          </h3>
                          <ul className="space-y-2.5">
                            {section.items.map((item: string, j: number) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-foreground/85">
                                <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 text-center">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-white rounded-xl hover:bg-navy/90 transition-all active:scale-[0.98] shadow-md shadow-navy/20"
                      >
                        <Download className="w-4 h-4" />
                        Download Full Statutory Disclosure Document (PDF)
                      </button>
                    </div>
                  </div>
                </section>
              );

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}
