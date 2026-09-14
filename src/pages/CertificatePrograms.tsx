import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import PageGallery from "@/components/PageGallery";
import { rt } from "@/lib/richText";

const defaultPrograms = [
  { name: "Pharmacovigilance & Clinical Trials", duration: "3 Months", fee: "₹5,000", eligibility: "B.Pharm / D.Pharm students", desc: "Learn about drug safety monitoring, adverse event reporting, and clinical trial regulations." },
  { name: "Drug Regulatory Affairs", duration: "2 Months", fee: "₹3,500", eligibility: "Pharmacy students", desc: "Understanding FDA, EMA, and CDSCO regulations, and preparation of CTD/eCTD dossiers." },
  { name: "Medical Coding & Billing", duration: "3 Months", fee: "₹6,000", eligibility: "Any life science graduate", desc: "Learn ICD-10, CPT coding, and healthcare revenue cycle management." }
];

export default function CertificateProgramsPage() {
  const { data } = usePharmacyData("certificates");
  const { data: pageConfigData } = usePharmacyData("admissions");
  const ref = useScrollReveal([data, pageConfigData]);
  
  const pageData = pageConfigData?.certificateProgramsPage;
  const programs = data?.length > 0 ? data : defaultPrograms;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title={pageData?.title || "Certificate Programs"}
        subtitle={pageData?.subtitle || "Specialized pharmaceutical add-on courses that complement your degree and boost industry readiness"}
        breadcrumbs={[{ label: "Learning", href: "/news-events" }, { label: "Certificate Programs" }]}
      />
    ),
    certification_partners: (
      <section key="certification_partners" className="pt-16 pb-8" ref={ref}>
        <div className="container-wide max-w-4xl mx-auto">
          <div className="reveal rounded-2xl overflow-hidden border mb-10 shadow-sm">
            <img src={pageData?.image || "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1024&q=80"} alt="Certificate Programs" className="w-full h-80 object-cover" />
          </div>
          {pageData?.description ? (
            <div className="reveal leading-relaxed text-center rich-text text-foreground/70" dangerouslySetInnerHTML={{ __html: rt(pageData.description) }} />
          ) : (
            <p className="reveal leading-relaxed text-center text-foreground/70">
              Ishan Institute of Pharmacy offers structured certificate programs alongside regular degree courses. These specialized short courses help students develop practical skills that pharmaceutical and healthcare employers actively seek — from pharmacovigilance and drug regulatory affairs to medical coding and quality assurance.
            </p>
          )}
        </div>
      </section>
    ),
    programs_grid: (
      <section key="programs_grid" className="py-8">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((p, i) => (
              <div key={p.name} className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                {p.image && <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-5" />}
                <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-muted font-medium">{p.duration}</span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-medium">{p.fee}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-foreground/80">{p.desc}</p>
                <p className="text-xs text-muted-foreground"><strong>Eligibility:</strong> {p.eligibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    cta: (
      <div key="cta">
        <PageGallery images={data?.pageGallery} />
        <EnquiryCTA />
      </div>
    )
  };

  const defaultOrder = ["header", "certification_partners", "programs_grid", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="certificate_programs"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
