import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";
import { Briefcase, Send, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const defaultJobs = [
  { title: "Professor / Associate Professor — Pharmacology", qualification: "M.Pharm & Ph.D in Pharmacology (PCI Approved)", experience: "8+ Years Teaching/R&D", dept: "Pharmacology", type: "Full-time" },
  { title: "Assistant Professor — Pharmaceutics", qualification: "M.Pharm (Pharmaceutics) with GPAT / Ph.D", experience: "2–5 Years Teaching", dept: "Pharmaceutics", type: "Full-time" },
  { title: "Assistant Professor — Pharmaceutical Chemistry", qualification: "M.Pharm (Pharmaceutical Chemistry)", experience: "1–4 Years Experience", dept: "Pharmaceutical Chemistry", type: "Full-time" },
  { title: "Senior Laboratory Technician — Machine Room & Formulations", qualification: "D.Pharm / B.Pharm with Industrial Operation Experience", experience: "3+ Years Lab Experience", dept: "Machine Room", type: "Full-time" },
  { title: "Medicinal Herbal Garden Curator / Botanist", qualification: "B.Sc/M.Sc Botany or D.Pharm", experience: "2+ Years Plant Cultivation", dept: "Pharmacognosy", type: "Full-time" },
];

export default function CareersPage() {
  const { data } = usePharmacyData("careers");
  const ref = useScrollReveal([data]);
  const jobs = data?.length > 0 ? data : defaultJobs;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [candidate, setCandidate] = useState({ name: "", email: "", phone: "", post: "Assistant Professor", experience: "", cvLink: "" });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Application details submitted successfully!");
  };

  return (
    <Layout>
      <DynamicPageSections
        pageId="careers"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Academic & Research Careers"
                  subtitle="Join an inspiring faculty of pharmaceutical scientists, clinical experts, and healthcare educators at Ishan"
                  breadcrumbs={[{ label: "Careers" }]}
                />
              );

            case "job_openings":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    {jobs[0]?.bannerImage && (
                      <div className="reveal mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
                        <ImageWithFallback src={jobs[0].bannerImage} alt="Careers Banner" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto mb-16">
                      <div className="reveal space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                          <Briefcase className="w-3.5 h-3.5" /> Work With Us
                        </div>
                        <h2 className="text-3xl font-bold text-foreground leading-tight">
                          Empowering the Next Generation of Pharmaceutical Pioneers
                        </h2>
                        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
                          Ishan Institute of Pharmacy invites applications from passionate educators, experienced laboratory scientists, and dynamic administrative professionals. We offer UGC/PCI pay scales, internal seed research funding, and a collegial academic environment.
                        </p>
                      </div>
                      <div className="reveal-right">
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <ImageWithFallback
                            src={jobs[0]?.image || "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"}
                            alt="Ishan Pharmacy Faculty Culture"
                            className="w-full h-72 object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                      <h3 className="text-2xl font-bold text-foreground mb-6">Current Faculty & Staff Openings</h3>
                      {jobs.map((j: any, i: number) => (
                        <div
                          key={j.title || i}
                          className={`reveal delay-${Math.min(i, 3)}00 p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
                        >
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground text-base leading-snug">{j.title}</h4>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span><strong>Qualifications:</strong> {j.qualification}</span>
                              <span className="w-1 h-1 rounded-full bg-border" />
                              <span><strong>Experience:</strong> {j.experience}</span>
                            </div>
                            <div className="flex gap-2 mt-3">
                              <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-semibold text-foreground/80">
                                {j.dept}
                              </span>
                              <span className="px-2.5 py-1 rounded-md bg-gold/20 text-xs font-bold text-gold-dark">
                                {j.type}
                              </span>
                            </div>
                          </div>
                          <a
                            href="mailto:careers@ishan.ac"
                            className="shrink-0 text-center px-6 py-2.5 text-xs font-bold bg-navy text-white rounded-xl hover:bg-navy/90 transition-all shadow-sm"
                          >
                            Apply via Email
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "cv_submission_form":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide max-w-2xl mx-auto">
                    <div className="p-8 rounded-3xl border bg-card shadow-md">
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">Quick Profile Submission</h3>
                      <p className="text-xs text-muted-foreground text-center mb-6">
                        Submit your details directly to the Ishan Human Resources & Academic Talent Desk.
                      </p>

                      {formSubmitted ? (
                        <div className="text-center py-8 space-y-2">
                          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                          <h4 className="font-bold text-foreground">Profile Received</h4>
                          <p className="text-xs text-muted-foreground">
                            Our HR committee will review your credentials and contact you within 14 working days.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleApply} className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Full Name</label>
                              <input
                                required
                                type="text"
                                value={candidate.name}
                                onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="Dr. / Mr. / Ms."
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Email</label>
                              <input
                                required
                                type="email"
                                value={candidate.email}
                                onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Phone Number</label>
                              <input
                                required
                                type="tel"
                                value={candidate.phone}
                                onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="+91 9876543210"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Applying For</label>
                              <select
                                value={candidate.post}
                                onChange={(e) => setCandidate({ ...candidate, post: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                              >
                                <option>Professor (Pharmacology / Pharmaceutics)</option>
                                <option>Associate Professor</option>
                                <option>Assistant Professor</option>
                                <option>Laboratory Instructor / Technician</option>
                                <option>Administrative Staff</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-foreground/80 mb-1 block">LinkedIn / Google Scholar / Drive CV Link</label>
                            <input
                              type="url"
                              value={candidate.cvLink}
                              onChange={(e) => setCandidate({ ...candidate, cvLink: e.target.value })}
                              className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                              placeholder="https://drive.google.com/... or LinkedIn Profile"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 shadow-md"
                          >
                            <Send className="w-4 h-4" /> Submit Application
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return (
                <section className="py-12 bg-navy text-white text-center">
                  <div className="container-wide max-w-2xl mx-auto">
                    <Mail className="w-8 h-8 text-gold mx-auto mb-2" />
                    <h4 className="text-lg font-bold mb-1">Direct HR Contact</h4>
                    <p className="text-white/80 text-xs mb-3">
                      You can also directly email your detailed CV and publications summary to:
                    </p>
                    <a
                      href="mailto:careers@ishan.ac"
                      className="inline-block text-gold font-bold text-sm hover:underline"
                    >
                      careers@ishan.ac
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
