import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Users, Award, TrendingUp, Handshake } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const defaultProjects = [
  { title: "Development of Nanoparticle-Based Targeted Drug Delivery for Solid Tumor Therapy", pi: "Dr. Sandeep Singh", department: "Pharmaceutics", status: "Ongoing", funding: "AKTU Seed Research Grant" },
  { title: "Phytochemical Screening, Isolation and Antimicrobial Profiling of Indigenous Himalayan Flora", pi: "Dr. Megha Gupta", department: "Pharmacognosy", status: "Completed", funding: "Institutional R&D Grant" },
  { title: "Design, Formulation and Physicochemical Stability of Novel Herbal Transdermal Patches", pi: "Prof. Amit Das", department: "Pharmaceutics", status: "Ongoing", funding: "Industry Collaborative Grant" },
  { title: "In-Silico Screening of Novel Bioactive Heterocycles Using High-Throughput Molecular Docking", pi: "Mr. Vivek Verma", department: "Pharmaceutical Chemistry", status: "Ongoing", funding: "Institutional Research Cell" },
];

export default function ResearchProjectsPage() {
  const { data } = usePharmacyData("researchprojects");
  const ref = useScrollReveal([data]);
  const projects = data?.length > 0 ? data : defaultProjects;

  return (
    <Layout>
      <DynamicPageSections
        pageId="research_projects"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Research Projects & Innovations"
                  subtitle="Active pharmaceutical research initiatives, funded translational projects, and industry collaborations"
                  breadcrumbs={[{ label: "Research" }, { label: "Research Projects" }]}
                />
              );

            case "ongoing_research":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                      {[
                        { icon: FlaskConical, value: "12+", label: "Active Research Projects" },
                        { icon: Users, value: "10+", label: "Ph.D. & M.Pharm Investigators" },
                        { icon: Award, value: "35+", label: "High-Impact Journal Papers" },
                        { icon: TrendingUp, value: "4", label: "External Research Grants" },
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

                    <div className="space-y-5 max-w-4xl mx-auto">
                      <h3 className="text-xl font-bold text-foreground mb-4">Current Investigation Projects</h3>
                      {projects.map((p: any, i: number) => (
                        <div
                          key={p.title || i}
                          className={`reveal delay-${Math.min(i, 3)}00 p-6 rounded-2xl border bg-card hover:shadow-md transition-shadow`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-bold text-base text-foreground mb-2 leading-snug">{p.title}</h4>
                              <p className="text-xs text-muted-foreground mb-3">
                                Principal Investigator: <span className="font-semibold text-foreground">{p.pi}</span>
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-semibold text-foreground/80">
                                  {p.department}
                                </span>
                                <span className="px-2.5 py-1 rounded-md bg-gold/20 text-xs font-bold text-gold-dark">
                                  {p.funding}
                                </span>
                                <span
                                  className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                                    p.status === "Ongoing"
                                      ? "bg-emerald-100 text-emerald-800"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {p.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "grants_collaborations":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto text-center">
                    <Handshake className="w-10 h-10 text-navy mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Industrial & Academic R&D Partnerships
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      Ishan Institute of Pharmacy collaborates with leading Contract Research Organizations (CROs) and GMP formulations units across Delhi-NCR, allowing students to participate in live industry projects and validation studies.
                    </p>
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
