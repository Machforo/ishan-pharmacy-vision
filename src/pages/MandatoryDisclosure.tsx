import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";

import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultDisclosureItems = [
  { category: "Institution Details", items: ["Name: Ishan Institute of Pharmacy", "Address: Knowledge Park-III, Greater Noida", "Year of Establishment: 2017", "Status: Private Self-Financing", "Type: Co-educational Professional Institution"] },
  { category: "Academic Information", items: ["Programs Offered: D.Pharm, B.Pharm", "PCI Approval Status — Current", "Annual Intake per Program", "Faculty-Student Ratio", "Student Success Rate"] },
  { category: "Regulatory Information", items: ["PCI Approval Letters", "AKTU and BTE UP Affiliation Documents", "Anti-Ragging Committee Constitution", "Grievance Redressal Mechanism"] },
  { category: "Infrastructure", items: ["10 Specialized Pharmaceutical Laboratories", "Medical Library — Titles, Journals & Digital Resources", "Machine Room & Herbal Garden", "Health Camp & Community Reach"] },
  { category: "Faculty & Staff", items: ["List of Core Faculty with PCI-mandated Qualifications", "Visiting Industry Experts Profile", "Administrative Staff Details"] },
];

export default function MandatoryDisclosurePage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("mandatorydisclosure");
  
  const statement = data?.statement || `The information provided below is submitted as required by the Pharmacy Council of India (PCI) and is updated annually to ensure full transparency. Any discrepancies found in the reported data should be immediately brought to the notice of the Registrar at Ishan Institute of Pharmacy, Knowledge Park, Greater Noida.\n\nPCI mandates public disclosure for the benefit of current and prospective students, healthcare practitioners, and regulatory authorities. It serves as a comprehensive record of the institution's facilities, laboratory standards, and faculty expertise, ensuring accountability in pharmaceutical education.`;
  
  const disclosureItems = data?.disclosureItems?.length > 0 
    ? data.disclosureItems.map((item: any) => ({
        category: item.category,
        items: item.items ? item.items.split('\n') : []
      }))
    : defaultDisclosureItems;

  return (
    <Layout>
      <PageHeader
        title="Mandatory Disclosure"
        subtitle="PCI / AKTU / BTE UP format mandatory disclosure document — updated annually"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {data?.bannerImage && (
            <div className="reveal mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
              <ImageWithFallback src={data.bannerImage} alt="Banner" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="max-w-4xl mx-auto">
            <div className="reveal bg-gold-light rounded-xl p-6 mb-12 flex items-start gap-4">
              <FileText className="w-6 h-6 text-navy shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">PCI Compliance Statement</p>
                <div className="text-sm leading-relaxed whitespace-pre-wrap space-y-4">
                  {statement}
                </div>
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
          
          {data?.images && data.images.length > 0 && (
            <div className="reveal mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.images.map((img: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback src={img.url} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
