import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DynamicPageSections from "@/components/DynamicPageSections";
import { PhoneCall, ShieldAlert, CheckCircle, Mail, AlertTriangle } from "lucide-react";

export default function AntiRaggingPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <DynamicPageSections
        pageId="anti_ragging"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Anti-Ragging Compliance Zone"
                  subtitle="Strict zero-tolerance policy in accordance with Pharmacy Council of India (PCI) & UGC directives"
                  breadcrumbs={[{ label: "Governance" }, { label: "Anti-Ragging" }]}
                />
              );

            case "policy_content":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                      <div className="reveal space-y-6">
                        <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                          <div className="flex items-center gap-2 text-destructive font-bold text-sm mb-2">
                            <ShieldAlert className="w-5 h-5" />
                            <span>24x7 National Anti-Ragging Helpline</span>
                          </div>
                          <p className="text-3xl font-black text-navy">1800-180-5522</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Toll-free | Round-the-clock national monitoring helpline
                          </p>
                        </div>

                        <p className="text-foreground/75 leading-relaxed text-sm">
                          As mandated by the Hon'ble Supreme Court of India, the Pharmacy Council of India (PCI), and the University Grants Commission (UGC), Ishan Institute of Pharmacy enforces a rigorous zero-tolerance policy against ragging in all forms across classrooms, specialized laboratories, dining halls, and residential hostels.
                        </p>
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          Ragging is recognized as a cognizable criminal offense. Any student found guilty of engaging in, encouraging, or abetting ragging is liable to immediate expulsion, criminal FIR filing with Uttar Pradesh Police, and permanent debarment from pharmacy council registration.
                        </p>

                        <div className="rounded-2xl overflow-hidden shadow-xl border mt-6">
                          <img
                            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
                            alt="Ishan Pharmacy Safe Campus Environment"
                            className="w-full h-72 object-cover"
                          />
                        </div>
                      </div>

                      <div className="reveal delay-100 space-y-6">
                        <div className="p-6 rounded-2xl border bg-card shadow-sm">
                          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            Anti-Ragging Squad & Committee
                          </h3>
                          <p className="text-foreground/75 leading-relaxed text-sm">
                            Our standing Anti-Ragging Committee comprises senior professors of pharmaceutical sciences, hostel wardens, local administration representatives, and student mentors who maintain 24/7 vigil across the Greater Noida campus.
                          </p>
                        </div>

                        <div className="p-6 rounded-2xl border bg-card shadow-sm space-y-4">
                          <h3 className="text-base font-bold text-foreground">How to Report an Incident</h3>
                          <ol className="space-y-2.5 text-xs text-foreground/80 list-decimal pl-5 leading-relaxed">
                            <li>Dial National Anti-Ragging Helpline: <strong>1800-180-5522</strong> (Toll-Free, 24x7)</li>
                            <li>Email the Institutional Anti-Ragging Squad: <strong>registrar@ishan.ac</strong></li>
                            <li>Drop an anonymous grievance in the Anti-Ragging Box at the Pharmacy Block</li>
                            <li>Directly report to the Principal or Hostel Warden at any time</li>
                            <li>Register an online complaint at <strong>www.antiragging.in</strong></li>
                          </ol>
                        </div>

                        <div className="p-6 rounded-2xl bg-gold-light/40 border border-gold/30">
                          <h3 className="text-sm font-bold text-navy mb-2">The Pharmacist's Oath & Code of Ethics</h3>
                          <p className="text-xs text-foreground/80 leading-relaxed">
                            Every student and parent executes a statutory affidavit at the time of admission, committing to uphold the dignity of the pharmaceutical profession and cultivate a supportive, harassment-free environment for all peers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "helpline":
              return (
                <section className="py-12 bg-muted/40 border-y">
                  <div className="container-wide max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                      <div className="p-5 rounded-xl bg-card border">
                        <PhoneCall className="w-6 h-6 text-navy mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Campus Helpline</p>
                        <p className="font-bold text-foreground text-sm mt-1">+91 8448797700</p>
                      </div>
                      <div className="p-5 rounded-xl bg-card border">
                        <Mail className="w-6 h-6 text-navy mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Email Redressal</p>
                        <p className="font-bold text-foreground text-sm mt-1">antiragging@ishan.ac</p>
                      </div>
                      <div className="p-5 rounded-xl bg-card border">
                        <AlertTriangle className="w-6 h-6 text-gold-dark mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground uppercase font-semibold">Confidentiality</p>
                        <p className="font-bold text-foreground text-sm mt-1">100% Identity Protection</p>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return (
                <section className="py-12 bg-navy text-white text-center">
                  <div className="container-wide max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                    <p className="text-white/80 text-xs mb-5">
                      Your identity will remain completely anonymous. We ensure swift and decisive action within 2 hours.
                    </p>
                    <a
                      href="mailto:antiragging@ishan.ac"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold text-navy text-xs font-bold hover:bg-gold-light transition-colors shadow-md"
                    >
                      Report an Incident Securely
                    </a>
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
