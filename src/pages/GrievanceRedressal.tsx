import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DynamicPageSections from "@/components/DynamicPageSections";
import { ShieldCheck, Send, CheckCircle2, PhoneCall, Mail } from "lucide-react";

export default function GrievanceRedressalPage() {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", category: "Academic", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <DynamicPageSections
        pageId="grievance_redressal"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Students Grievance Redressal"
                  subtitle="Structured, confidential, and time-bound mechanism for addressing student, faculty, and stakeholder concerns"
                  breadcrumbs={[{ label: "Governance" }, { label: "Grievance Redressal" }]}
                />
              );

            case "grievance_content":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                      <div className="reveal space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4 text-gold-dark" /> Statutory Mechanism
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                          Institutional Grievance Redressal Committee (SGRC)
                        </h2>
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          As mandated by the Pharmacy Council of India (PCI), AKTU Lucknow, and UGC regulations, Ishan Institute of Pharmacy has established a dedicated Students Grievance Redressal Committee. We guarantee a transparent, fair, and time-bound process for addressing issues regarding academic instruction, laboratory access, examination evaluation, fee queries, and campus facilities.
                        </p>
                        <div className="rounded-2xl overflow-hidden shadow-xl border mt-6">
                          <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                            alt="Ishan Pharmacy Academic Administration"
                            className="w-full h-72 object-cover"
                          />
                        </div>
                      </div>

                      <div className="reveal delay-100 space-y-6">
                        <h3 className="text-lg font-bold text-foreground">Standard Redressal Workflow</h3>
                        <ol className="space-y-3 text-xs leading-relaxed">
                          {[
                            "Submit a written petition or submit via the digital portal below.",
                            "Acknowledgment issued within 24 hours with a confidential Docket Tracking ID.",
                            "Preliminary scrutiny and fact-finding conducted by the SGRC Committee.",
                            "Comprehensive resolution or hearing scheduled within 7 working days.",
                            "If unresolved, student may escalate to the Principal & Managing Director.",
                            "Statutory right of representation before AKTU Ombudsman / PCI Appellate Authority."
                          ].map((s, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="w-5 h-5 rounded-full bg-navy flex items-center justify-center shrink-0 text-xs font-bold text-white mt-0.5">
                                {i + 1}
                              </span>
                              <span className="text-foreground/80">{s}</span>
                            </li>
                          ))}
                        </ol>

                        <div className="p-5 rounded-2xl border bg-muted/40 space-y-2">
                          <h4 className="font-bold text-foreground text-sm">SGRC Secretariat & Helpdesk</h4>
                          <div className="flex items-center gap-2 text-xs text-foreground/80">
                            <Mail className="w-3.5 h-3.5 text-navy" />
                            <span>Email: <strong>grievances@ishan.ac</strong></span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-foreground/80">
                            <PhoneCall className="w-3.5 h-3.5 text-navy" />
                            <span>Helpline: <strong>+91 8448797700</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "contact_form":
              return (
                <section className="pb-20 md:pb-28">
                  <div className="container-wide max-w-3xl mx-auto">
                    <div className="p-8 rounded-3xl border bg-card shadow-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                        Submit an Online Grievance
                      </h3>
                      <p className="text-xs text-muted-foreground text-center mb-6">
                        All submissions are handled with strict statutory confidentiality.
                      </p>

                      {submitted ? (
                        <div className="text-center py-10 space-y-3">
                          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                          <h4 className="text-lg font-bold text-foreground">Grievance Registered Successfully</h4>
                          <p className="text-xs text-muted-foreground max-w-md mx-auto">
                            Your docket number has been created. The SGRC secretariat will contact you at {formData.email} within 24 working hours.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Full Name</label>
                              <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="Student or Parent Name"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Email Address</label>
                              <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Contact Number</label>
                              <input
                                required
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="+91 9876543210"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Grievance Category</label>
                              <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                              >
                                <option value="Academic">Academic / Lecture Delivery</option>
                                <option value="Laboratory">Laboratory & Practical Equipment</option>
                                <option value="Examination">Internal Assessment / Exam Issue</option>
                                <option value="Hostel">Hostel & Mess Amenities</option>
                                <option value="Administration">Accounts & Administrative</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-foreground/80 mb-1 block">Details of Grievance</label>
                            <textarea
                              required
                              rows={4}
                              value={formData.description}
                              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                              className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                              placeholder="Please provide factual details, dates, and relevant context..."
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 shadow-md"
                          >
                            <Send className="w-4 h-4" /> Submit Confidential Grievance
                          </button>
                        </form>
                      )}
                    </div>
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
