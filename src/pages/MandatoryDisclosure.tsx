import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";

const disclosureItems = [
  { category: "Institution Details", items: ["Name: Ishan Institute of Pharmacy", "Address: Knowledge Park-III, Greater Noida", "Year of Establishment: 2017", "Status: Private Self-Financing", "Type: Co-educational Professional Institution"] },
  { category: "Academic Information", items: ["Programs Offered: D.Pharm, B.Pharm", "PCI Approval Status — Current", "Annual Intake per Program", "Faculty-Student Ratio", "Student Success Rate"] },
  { category: "Regulatory Information", items: ["PCI Approval Letters", "AKTU and BTE UP Affiliation Documents", "Anti-Ragging Committee Constitution", "Grievance Redressal Mechanism"] },
  { category: "Infrastructure", items: ["10 Specialized Pharmaceutical Laboratories", "Medical Library — Titles, Journals & Digital Resources", "Machine Room & Herbal Garden", "Health Camp & Community Reach"] },
  { category: "Faculty & Staff", items: ["List of Core Faculty with PCI-mandated Qualifications", "Visiting Industry Experts Profile", "Administrative Staff Details"] },
];

export default function MandatoryDisclosurePage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHeader
        title="Mandatory Disclosure"
        subtitle="PCI / AKTU / BTE UP format mandatory disclosure document — updated annually"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal bg-gold-light rounded-xl p-6 mb-12 flex items-start gap-4">
              <FileText className="w-6 h-6 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">PCI Compliance Statement</p>
                <p className="text-sm leading-relaxed">
                  The information provided below is submitted as required by the Pharmacy Council of India (PCI) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Registrar at Ishan Institute of Pharmacy, Knowledge Park, Greater Noida.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  PCI mandates public disclosure for the benefit of current and prospective students, healthcare practitioners, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, laboratory standards, and faculty expertise, ensuring accountability in pharmaceutical education.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {disclosureItems.map((section, i) => (
                <div key={section.category} className={`reveal delay-${Math.min(i, 4)}00 rounded-xl border bg-card p-6`}>
                  <h3 className="font-bold text-foreground mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
                <Download className="w-4 h-4" />
                Download Full Disclosure PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
