import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Building2, Star, TrendingUp, CheckCircle2, UserPlus } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const defaultAlumni = [
  { name: "Priya Sharma", batch: "B.Pharm 2022", company: "Sun Pharma", role: "Senior Research Scientist, Formulation R&D" },
  { name: "Rohit Gupta", batch: "D.Pharm 2021", company: "Apollo Pharmacy", role: "Cluster Pharmacy Manager" },
  { name: "Ankita Singh", batch: "B.Pharm 2023", company: "Cipla", role: "Quality Assurance Executive" },
  { name: "Mohit Verma", batch: "B.Pharm 2021", company: "Dr. Reddy's Laboratories", role: "Production Supervisor, Oral Solid Dosage" },
  { name: "Neha Jain", batch: "D.Pharm 2022", company: "MedPlus Health", role: "Registered Dispensing Pharmacist" },
  { name: "Aditya Kumar", batch: "B.Pharm 2022", company: "Fortis Healthcare", role: "Clinical Pharmacist" },
];

export default function AlumniNetworkPage() {
  const { data } = usePharmacyData("alumninetwork");
  const ref = useScrollReveal([data]);
  const alumni = data?.length > 0 ? data : defaultAlumni;
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", batch: "", program: "B.Pharm", company: "", role: "" });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <Layout>
      <DynamicPageSections
        pageId="alumni_network"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Alumni Network & Community"
                  subtitle="Celebrating the global achievements of Ishan Pharmacy graduates across manufacturing, research, and healthcare"
                  breadcrumbs={[{ label: "Community" }, { label: "Alumni Network" }]}
                />
              );

            case "alumni_directory":
              return (
                <section className="py-16 md:py-20" ref={ref}>
                  <div className="container-wide">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                      {[
                        { icon: Users, value: "1,000+", label: "Registered Alumni" },
                        { icon: Building2, value: "50+", label: "Corporate Organizations" },
                        { icon: Star, value: "₹4.2 LPA", label: "Average Package" },
                        { icon: TrendingUp, value: "95%+", label: "Career Placement Rate" },
                      ].map(({ icon: Icon, value, label }) => (
                        <div key={label} className="reveal text-center p-6 rounded-2xl bg-card border shadow-sm">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold/15 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-navy" />
                          </div>
                          <p className="font-bold text-navy text-2xl">{value}</p>
                          <p className="text-xs text-muted-foreground mt-1 font-semibold">{label}</p>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                      Distinguished Pharmacists & Industry Leaders
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      {alumni.map((a: any, i: number) => (
                        <div
                          key={a.name || i}
                          className={`reveal delay-${Math.min(i % 3, 2)}00 p-6 rounded-2xl border bg-card hover:shadow-lg transition-all flex flex-col justify-between`}
                        >
                          <div>
                            <div className="w-13 h-13 rounded-2xl bg-navy text-gold font-bold flex items-center justify-center mb-4 text-base shadow-sm">
                              {a.name
                                .split(" ")
                                .map((n: string) => n[0])
                                .join("")}
                            </div>
                            <h3 className="font-bold text-foreground text-base leading-snug">{a.name}</h3>
                            <p className="text-xs text-gold-dark font-semibold mt-0.5">{a.batch}</p>
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <p className="text-sm font-semibold text-foreground leading-snug">{a.role}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{a.company}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "testimonials":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Alumni Mentorship & Career Guidance Program
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      Our alumni frequently return to campus as guest lecturers, placement interviewers, and student mentors, offering real-world guidance on licensing examinations, GPAT, and foreign higher studies.
                    </p>
                  </div>
                </section>
              );

            case "registration_form":
              return (
                <section className="py-16 md:py-24">
                  <div className="container-wide max-w-2xl mx-auto">
                    <div className="p-8 rounded-3xl border bg-card shadow-lg">
                      <div className="flex items-center gap-2 text-navy font-bold justify-center mb-2">
                        <UserPlus className="w-5 h-5 text-gold-dark" />
                        <h3 className="text-xl">Join the Ishan Pharmacy Alumni Association</h3>
                      </div>
                      <p className="text-xs text-muted-foreground text-center mb-6">
                        Stay connected with batchmates, post job openings, and mentor budding pharmacists.
                      </p>

                      {registered ? (
                        <div className="text-center py-8 space-y-2">
                          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                          <h4 className="font-bold text-foreground">Welcome to the Alumni Network!</h4>
                          <p className="text-xs text-muted-foreground">
                            Your details have been updated in the official Ishan Pharmacy Alumni Directory.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleRegister} className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Full Name</label>
                              <input
                                required
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="Your Name"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Email</label>
                              <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="your.email@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Program Completed</label>
                              <select
                                value={form.program}
                                onChange={(e) => setForm({ ...form, program: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                              >
                                <option value="B.Pharm">B.Pharm</option>
                                <option value="D.Pharm">D.Pharm</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Graduating Batch</label>
                              <input
                                required
                                type="text"
                                value={form.batch}
                                onChange={(e) => setForm({ ...form, batch: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="e.g. 2023"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Current Organization</label>
                              <input
                                required
                                type="text"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="e.g. Sun Pharma, Apollo"
                              />
                            </div>
                            <div>
                              <label className="text-xs font-semibold text-foreground/80 mb-1 block">Designation / Role</label>
                              <input
                                required
                                type="text"
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                                className="w-full px-3.5 py-2 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                                placeholder="e.g. QA Executive, Pharmacist"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-navy/90 transition-all shadow-md"
                          >
                            Register in Alumni Association
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return <EnquiryCTA />;

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}
