import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, ExternalLink } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultAccreditations = [
  { title: "PCI", description: "Mandatory recognition for pharmacy programs. Pharmacy Council of India.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=PCI" },
  { title: "AKTU", description: "Affiliation for B.Pharm degree programs. Dr. A.P.J. Abdul Kalam Technical University, Lucknow.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=AKTU" },
  { title: "BTE UP", description: "Affiliation for D.Pharm diploma programs. Board of Technical Education, Uttar Pradesh.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=BTE+UP" },
  { title: "JEECUP", description: "Joint Entrance Examination Council, Uttar Pradesh — for polytechnic and D.Pharm admissions.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=JEECUP" },
  { title: "URISE", description: "UP Rozgar aur Shiksha Initiative — online portal for student registration and educational services.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=URISE" },
  { title: "CUET", description: "Common University Entrance Test — accepted for B.Pharm admissions.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=CUET" },
  { title: "UP Scholarship", description: "Official UP Government Scholarship portal for SC/ST/OBC and EWS students.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=Scholarship" },
  { title: "UP Pharmacy Council", description: "State regulatory body for pharmacy practice and pharmacist registration in Uttar Pradesh.", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=UP+Pharmacy+Council" },
];

export default function ApprovalsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  const accreditations = data?.approvals?.length > 0 ? data.approvals : defaultAccreditations;

  return (
    <Layout>
      <PageHeader
        title="Approvals & Affiliations"
        subtitle="Ishan Pharmacy is fully recognized by the Pharmacy Council of India, ensuring the highest professional standards."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Approvals & Affiliations" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Regulatory Compliance</p>
            <h2 className="font-bold text-foreground">A Fully Accredited Institution</h2>
            <p className="text-foreground/70 leading-relaxed">
              Pharmaceutical education in India is strictly regulated to ensure that practicing pharmacists meet the highest standards of professional ethics and competence in healthcare. Ishan Institute of Pharmacy holds all mandatory approvals from the Pharmacy Council of India (PCI) and is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) and the Board of Technical Education, Uttar Pradesh (BTE UP). These certifications ensure that our diplomas and degrees are fully recognized for practice and higher education.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-navy">PCI</h4>
                <p className="text-xs">The primary regulator of pharmacy education in India, ensuring curriculum relevance and professional standards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-navy">AKTU</h4>
                <p className="text-xs">Provides academic affiliation for our degree programs (B.Pharm), conducts standardized examinations, and awards the final professional degree.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-navy">BTE UP</h4>
                <p className="text-xs">Provides academic affiliation for our diploma programs (D.Pharm) and conducts standardized board examinations.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accreditations.map((acc: any, i: number) => (
              <div key={acc.title || acc.name || i} className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 text-center shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-shadow`}>
                {acc.logo ? (
                  <img src={acc.logo} alt={acc.title || acc.name} className="h-28 md:h-32 mx-auto object-contain mb-6 transition-transform hover:scale-110 duration-500" loading="lazy" />
                ) : (
                  <div className="h-28 md:h-32 flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-navy">{acc.title || acc.name}</span>
                  </div>
                )}
                <h3 className="font-semibold text-foreground text-sm">{acc.title || acc.name}</h3>
                <p className="text-xs mt-2">{acc.description || acc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold-light border border-[hsl(var(--gold)/0.2)]">
              <FileText className="w-4 h-4 text-navy" />
              <span className="text-sm font-medium text-foreground/80">
                For approval letters and detailed disclosure documents, visit the{" "}
                <a href="/mandatory-disclosure" className="text-navy font-semibold hover:underline">Mandatory Disclosure</a> page.
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
