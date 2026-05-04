import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Calendar, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const steps = [
  { num: "01", title: "UPSEE / CUET Counselling", desc: "For B.Pharm, begin by participating in the UPSEE (AKTU) or CUET-based state counselling. For D.Pharm, register on the BTE UP portal. Seat allotment is based on your 10+2 merit." },
  { num: "02", title: "Application at Ishan Pharmacy", desc: "After counselling, submit your application form at Ishan Institute of Pharmacy, Knowledge Park-III, Greater Noida, along with the required documents." },
  { num: "03", title: "Personal Interaction & Aptitude Check", desc: "Shortlisted candidates are invited for a brief interaction to assess their suitability, interest in healthcare, and readiness for rigorous laboratory-based study." },
  { num: "04", title: "Document Verification", desc: "Visit our campus with all original documents — 10+2 marksheets, transfer/migration certificates, and character certificates — for physical verification by the admissions office." },
  { num: "05", title: "Admission Finalization", desc: "Confirm your seat by submitting the requisite admission fees. Our team will assist with the final enrollment on the AKTU / BTE UP portals and PCI registration." },
];

const documents = [
  "10th Marksheet & Certificate (Original + 3 Copies)",
  "12th Marksheet with PCB/PCM (Original + 3 Copies)",
  "Transfer & Migration Certificates",
  "Character Certificate from last institution",
  "Aadhar Card (Original + Copy)",
  "8 Passport-size Photographs",
  "UPSEE / CUET Score / Allotment Letter",
  "Category Certificate (if applicable — SC/ST/OBC)",
  "Income Certificate (for scholarship applicants)",
  "Medical Fitness Certificate",
];

export default function AdmissionsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("admissions");
  
  const howToApply = data?.howToApply?.length > 0 ? data.howToApply : steps;
  const docs = data?.documents?.length > 0 ? data.documents.map((d: any) => d.docName) : documents;
  const alert = data?.alertBanner || { title: "Admissions Open for 2025-26", content: "Applications are being accepted for D.Pharm and B.Pharm programs.", isActive: true };
  const contact = data?.admissionContact || { phone: "8448797700", email: "admissions@ishan.ac" };

  return (
    <Layout>
      <PageHeader
        title="Admissions 2025-26"
        subtitle="Your pathway to a career in healthcare — D.Pharm & B.Pharm"
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Alert banner */}
            {alert.isActive && (
              <div className="reveal bg-gold-light rounded-xl p-6 mb-10 border border-[hsl(var(--gold)/0.2)]">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-navy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{alert.title}</p>
                    <p className="text-sm">{alert.content}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="reveal grid sm:grid-cols-2 gap-6 mb-14">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Admissions" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border hidden sm:block">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Life" className="w-full h-64 object-cover" />
              </div>
            </div>

            {/* Steps */}
            <h2 className="text-2xl font-bold text-foreground mb-8">Admission Process</h2>
            
            <div className="space-y-6 mb-16">
              {howToApply.map((step: any, i: number) => (
                <div key={step.step || step.num || i} className={`reveal delay-${Math.min(i, 4)}00 flex gap-5 p-6 rounded-xl border bg-card`}>
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">{step.step || step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Documents */}
            <h2 className="text-2xl font-bold text-foreground mb-6">Document Checklist</h2>
            <div className="reveal grid sm:grid-cols-2 gap-3 mb-16">
              {docs.map((doc: string, i: number) => (
                <div key={i} className="flex items-start gap-2.5 px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {doc}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="reveal rounded-xl border bg-section-alt p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-3">Ready to Join Ishan Institute of Pharmacy?</h3>
              <p className="text-sm mb-8">Begin your pharmacy journey today by filling out our online application form.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <button className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold bg-gold text-navy rounded-xl hover:bg-gold-light transition-all shadow-lg active:scale-[0.97] shimmer-btn">
                  Apply Online Now
                </button>
              </div>

              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Or get in touch with us</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:+91${contact.phone}`} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg hover:bg-navy/90 transition-colors active:scale-[0.97]">
                  <Phone className="w-4 h-4" /> Call: {contact.phone}
                </a>
                <a href={`https://wa.me/91${contact.phone}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-navy/20 text-navy rounded-lg hover:bg-navy/5 transition-colors active:scale-[0.97]">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
