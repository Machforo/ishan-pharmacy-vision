import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";
import { ShieldCheck, AlertTriangle } from "lucide-react";

const defaultRules = [
  { title: "1. Professional Conduct & Pharmacist's Ethics", content: "Pharmacy students are expected to maintain the highest standards of decorum and professional dignity, reflecting the noble nature of the healthcare profession. Respectful behavior towards faculty, patients during clinical training, laboratory staff, and peers is mandatory." },
  { title: "2. Prescribed Dress Code & White Apron Mandate", content: "As per Pharmacy Council of India (PCI) standards, every student must wear a clean, ironed White Lab Apron with an official institutional identity card in all practical laboratory sessions and industrial training trips. Formal business attire is required during regular lecture hours." },
  { title: "3. Minimum 80% Attendance (PCI Directives)", content: "A strict minimum of 80% attendance in both theory classes and practical laboratories is mandatory for each subject as required by PCI, AKTU, and BTE UP. Students falling short of this mandatory quota are automatically barred from appearing in university examinations." },
  { title: "4. Practical Integrity & Research Ethics", content: "Falsification of laboratory observations, plagiarizing journal reports, or tampering with analytical equipment is strictly prohibited and treated as severe academic dishonesty, liable to suspension or expulsion." },
  { title: "5. Chemical Handling & Laboratory Decorum", content: "Students must strictly follow standard operating procedures (SOPs) when handling toxic reagents, concentrated acids, organic solvents, and microbial cultures. Personal mobile phone usage inside laboratories is forbidden to prevent distraction and chemical contamination." },
  { title: "6. Zero Tolerance Against Ragging & Substance Abuse", content: "In compliance with UGC and Supreme Court directives, ragging, alcohol consumption, smoking, or possession of narcotic substances on campus or in student hostels will lead to immediate police FIR registration and expulsion." }
];

export default function CodeOfConductPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("codeofconduct");
  
  const rules = data?.rules?.length > 0 
    ? data.rules.map((item: any) => ({
        title: item.category,
        content: item.items
      }))
    : defaultRules;

  return (
    <Layout>
      <DynamicPageSections
        pageId="code_of_conduct"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Code of Conduct & Discipline"
                  subtitle="Professional healthcare ethics, laboratory safety guidelines, and campus decorum"
                  breadcrumbs={[{ label: "Governance" }, { label: "Code of Conduct" }]}
                />
              );

            case "code_content":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    {data?.bannerImage && (
                      <div className="reveal mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
                        <ImageWithFallback src={data.bannerImage} alt="Code of Conduct Banner" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start max-w-6xl mx-auto">
                      <div className="space-y-8">
                        <div className="bg-muted/40 p-6 rounded-2xl border">
                          <div className="flex items-center gap-2 text-navy font-bold mb-2">
                            <ShieldCheck className="w-5 h-5 text-gold-dark" />
                            <span>Commitment to Pharmaceutical Excellence</span>
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {data?.intro || "As future healthcare professionals, students at Ishan Institute of Pharmacy are entrusted with public well-being and medication safety. Every student must internalize the ethical obligations of the Pharmacist Oath and uphold unquestionable integrity."}
                          </p>
                        </div>

                        <div className="space-y-6">
                          {rules.map((s: any, idx: number) => (
                            <div key={idx} className="p-6 rounded-2xl border bg-card shadow-sm hover:border-gold/30 transition-all">
                              <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                                {s.title}
                              </h3>
                              <p className="text-sm text-foreground/75 leading-relaxed pl-4">
                                {s.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="hidden lg:block sticky top-28 space-y-6">
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <ImageWithFallback
                            src={data?.image || "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"}
                            alt="Ishan Pharmacy Laboratory Discipline"
                            className="w-full h-[420px] object-cover"
                          />
                        </div>
                        <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20 text-xs text-foreground/80 leading-relaxed">
                          <div className="flex items-center gap-1.5 font-bold text-destructive mb-1 text-sm">
                            <AlertTriangle className="w-4 h-4" /> Disciplinary Committee
                          </div>
                          Violations of ethical or safety protocols are reviewed by the Institutional Disciplinary Board presided over by the Principal.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "guidelines":
              return (
                <section className="py-12 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto text-center">
                    <h4 className="text-lg font-bold text-foreground mb-2">Good Laboratory Practices (GLP)</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      All practical labs enforce strict GLP adherence — protective eyewear, safety shoes, fume cupboard exhaust operation, and segregated chemical waste disposal bins.
                    </p>
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
