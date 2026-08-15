import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GrievanceRedressalPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Grievance Redressal" subtitle="Structured process for addressing student and stakeholder concerns" breadcrumbs={[{ label: "Governance" }, { label: "Grievance Redressal" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-6">
              <p className="text-foreground/70 leading-relaxed text-sm">As mandated by the Bar Council of India and the University Grants Commission, Ishan Institute of Pharmacy has established a comprehensive Grievance Redressal Mechanism. We are committed to maintaining a transparent, fair, and time-bound process for addressing concerns related to academic matters, administrative services, and campus facilities.</p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" alt="Ishan Pharmacy Administration" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6">
              <h2 className="text-lg font-bold text-foreground">Redressal Process</h2>
              <ol className="space-y-3 text-sm">
                {["Submit a written complaint to the Grievance Redressal Cell or email registrar@ishan.ac", "Complaint acknowledged within 24 hours with a unique reference number", "Investigation conducted by the committee with strict confidentiality", "Resolution communicated to the complainant within 7 working days", "If unsatisfied, escalate to the Principal with the original reference number", "Final appeal to the Vice Chancellor of CCS University if resolution is inadequate"].map((s, i) => (
                  <li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center shrink-0 text-xs font-bold text-primary-foreground">{i + 1}</span>{s}</li>
                ))}
              </ol>
              <div className="p-5 rounded-xl border bg-section-alt">
                <h3 className="font-semibold text-foreground mb-2">Internal Complaints Committee</h3>
                <p className="text-sm">Email: <a href="mailto:registrar@ishan.ac" className="text-navy font-semibold">registrar@ishan.ac</a></p>
                <p className="text-sm">Phone: <a href="tel:+918448797700" className="text-navy font-semibold">8448797700</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
