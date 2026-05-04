import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  { name: "Cyber Law & Digital Security", duration: "3 Months", fee: "₹5,000", eligibility: "Any student / graduate", desc: "Covers IT Act 2000, cyber crimes, digital evidence, data protection, and social media regulations." },
  { name: "Intellectual Property Rights", duration: "2 Months", fee: "₹3,500", eligibility: "Law students / Professionals", desc: "Practical training in Patents, Trademarks, Copyrights registration, and IP litigation strategies." },
  { name: "Mediation & Conciliation (ADR)", duration: "3 Months", fee: "₹6,000", eligibility: "Law students", desc: "Learn alternative dispute resolution techniques, negotiation skills, and the role of a mediator in civil disputes." },
  { name: "Corporate Compliance", duration: "3 Months", fee: "₹6,000", eligibility: "Law / CS students", desc: "Focuses on SEBI regulations, Companies Act compliance, FEMA, and secretarial auditing." },
  { name: "Advanced Legal Drafting", duration: "1 Month", fee: "₹2,000", eligibility: "Law students", desc: "Intensive training in drafting writs, petitions, commercial contracts, and conveyance deeds." },
  { name: "Human Rights & Social Justice", duration: "2 Months", fee: "₹4,000", eligibility: "Any graduate", desc: "Understanding domestic and international human rights frameworks and public interest litigation (PIL)." },
];

export default function CertificateProgramsPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHeader
        title="Certificate Programs"
        subtitle="Specialized legal add-on courses that complement your degree and boost professional readiness"
        breadcrumbs={[{ label: "Learning", href: "/news-events" }, { label: "Certificate Programs" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="reveal rounded-2xl overflow-hidden border mb-12 shadow-sm max-w-4xl mx-auto">
            <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg" alt="Certificate Programs" className="w-full h-80 object-cover" />
          </div>
          <p className="reveal leading-relaxed max-w-3xl mb-12">
            Ishan Pharmacy offers structured certificate programs alongside regular degree courses. These specialized short courses help students develop practical skills that legal employers actively seek — from cyber law expertise to mediation skills and advanced legal drafting. All certificate programs include hands-on sessions, assessments, and a certificate of completion.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div key={p.name} className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <h3 className="font-bold text-foreground mb-2">{p.name}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-muted font-medium">{p.duration}</span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-medium">{p.fee}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4">{p.desc}</p>
                <p className="text-xs text-muted-foreground"><strong>Eligibility:</strong> {p.eligibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
