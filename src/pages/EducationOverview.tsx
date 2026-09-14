import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { GraduationCap, Pill, ArrowRight, CheckCircle2 } from "lucide-react";

export default function EducationOverviewPage() {
  const ref = useScrollReveal();

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Pharmacy Programs"
        subtitle="PCI-approved B.Pharm and D.Pharm programs preparing future healthcare professionals"
        breadcrumbs={[{ label: "Programs Overview" }]}
      />
    ),
    curriculum_standards: (
      <section key="curriculum_standards" className="pt-16 pb-8" ref={ref}>
        <div className="container-wide max-w-4xl mx-auto">
          <div className="reveal rounded-2xl overflow-hidden border mb-10 shadow-md">
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1024&q=80" alt="Academics at Ishan Pharmacy" className="w-full h-80 object-cover" />
          </div>
          <div className="reveal space-y-5">
            <p className="text-foreground/70 leading-relaxed">
              The Ishan Institute of Pharmacy offers Pharmacy Council of India (PCI) approved Bachelor of Pharmacy (B.Pharm - 4 Years) affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) and Diploma in Pharmacy (D.Pharm - 2 Years) affiliated with the Board of Technical Education, Uttar Pradesh (BTE UP). Our pedagogical framework blends rigorous academic theory with intensive hands-on lab training across 10 specialized pharmaceutical laboratories.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "PCI Approved Institution", "AKTU & BTE UP Affiliated", "10 Specialized State-of-the-Art Labs",
                "Industrial Pilot Plant & Machine Room", "Extensive Medicinal Herbal Garden", "Hospital Clinical Internships",
                "Regular Industrial GMP Plant Visits", "Dedicated Placement & Training Cell"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    b_pharm_highlight: (
      <section key="b_pharm_highlight" className="py-4">
        <div className="container-wide max-w-4xl mx-auto">
          <Link to="/courses/b-pharm" className="reveal group block p-8 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <GraduationCap className="w-7 h-7 text-navy" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Bachelor of Pharmacy (B.Pharm)</h3>
            <p className="text-sm text-muted-foreground mb-1">4-Year Degree Program • Affiliated with AKTU • PCI Approved</p>
            <p className="text-sm text-foreground/70 mb-4 leading-relaxed">A comprehensive 4-year undergraduate degree preparing students for R&D, clinical research, drug manufacturing, quality assurance, and hospital pharmacy careers.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
              View Program Details <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    ),
    d_pharm_highlight: (
      <section key="d_pharm_highlight" className="py-4">
        <div className="container-wide max-w-4xl mx-auto">
          <Link to="/courses/d-pharm" className="reveal group block p-8 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <Pill className="w-7 h-7 text-navy" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Diploma in Pharmacy (D.Pharm)</h3>
            <p className="text-sm text-muted-foreground mb-1">2-Year Diploma Program • Affiliated with BTE UP • PCI Approved</p>
            <p className="text-sm text-foreground/70 mb-4 leading-relaxed">An industry-focused 2-year diploma providing the foundational qualification to become a registered pharmacist, work in community pharmacies, and healthcare dispensing.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
              View Program Details <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    ),
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "curriculum_standards", "b_pharm_highlight", "d_pharm_highlight", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="education_overview"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
