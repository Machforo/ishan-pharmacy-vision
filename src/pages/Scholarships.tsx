import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, ExternalLink } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultScholarships = [
  { category: "Merit-Based Scholarship", concession: "Up to 50% Tuition Waiver", description: "Awarded to students scoring 85%+ in 10+2 with PCB/PCM or top rankers in UPSEE/CUET." },
  { category: "Girl Child Scholarship", concession: "25% Fee Concession", description: "Special initiative to encourage female students pursuing careers in pharmaceutical sciences." },
  { category: "Sibling / Ward of Armed Forces", concession: "20% Tuition Fee Concession", description: "Offered to wards of defense personnel, police officers, and paramilitary forces." }
];

export default function ScholarshipsPage() {
  const { data } = usePharmacyData("admissions");
  const ref = useScrollReveal([data]);
  const scholarships = data?.scholarships?.length > 0 ? data.scholarships : defaultScholarships;
  const introDesc = data?.scholarshipPage?.description || "Ishan Pharmacy believes that financial constraints should never hinder a student's access to quality pharmaceutical education. We offer multiple scholarship schemes — including merit awards, category-based support, and need-based concessions — to ensure that every deserving student can pursue their healthcare career.";
  const introImg = data?.scholarshipPage?.image || "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80";

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Scholarships"
        subtitle="Financial support options for deserving healthcare aspirants across all pharmacy programs"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Scholarships" }]}
        image={data?.bannerImage}
      />
    ),
    guidelines: (
      <section key="guidelines" className="pt-16 pb-8" ref={ref}>
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Scholarship Guidelines & Support</h2>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                {introDesc}
              </p>
            </div>
            <div className="reveal rounded-2xl overflow-hidden shadow-2xl border">
              <img src={introImg} alt="Ishan Pharmacy Student Success" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    ),
    merit_scholarships: (
      <section key="merit_scholarships" className="py-8">
        <div className="container-wide max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Available Scholarships</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((s: any, i: number) => (
              <div key={s.category || i} className={`reveal delay-${Math.min(i, 5)}00 rounded-xl border bg-card p-6 shadow-sm`}>
                <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.category}</h3>
                <p className="text-sm text-gold font-bold mb-2">{s.concession}</p>
                <p className="text-xs text-foreground/70 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-section-alt border text-center">
            <p className="text-sm mb-3">Government Scholarships (SC/ST/OBC) are processed through:</p>
            <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
              UP Scholarship Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    ),
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "guidelines", "merit_scholarships", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="scholarships"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
