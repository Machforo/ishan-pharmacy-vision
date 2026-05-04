import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Users, Award, TrendingUp } from "lucide-react";

const projects = [
  { title: "Development of Nanoparticle-Based Drug Delivery for Cancer Therapy", pi: "Dr. Sandeep Singh", department: "Pharmaceutics", status: "Ongoing", funding: "AKTU Research Grant" },
  { title: "Phytochemical Screening and Antimicrobial Activity of Regional Medicinal Plants", pi: "Dr. Megha Gupta", department: "Pharmacognosy", status: "Completed", funding: "Institutional Funding" },
  { title: "Formulation and Evaluation of Herbal Cosmetics from Natural Extracts", pi: "Prof. Amit Das", department: "Pharmacognosy", status: "Ongoing", funding: "DST-SERB" },
  { title: "In-Silico Screening of Novel Antidiabetic Compounds Using Molecular Docking", pi: "Mr. Vivek Verma", department: "Pharmaceutical Chemistry", status: "Ongoing", funding: "Institutional Funding" },
];

export default function ResearchProjectsPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Research Projects"
        subtitle="Active pharmaceutical research initiatives led by Ishan Pharmacy faculty"
        breadcrumbs={[{ label: "Research" }, { label: "Research Projects" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { icon: FlaskConical, value: "10+", label: "Active Projects" },
              { icon: Users, value: "8", label: "Research Faculty" },
              { icon: Award, value: "25+", label: "Publications" },
              { icon: TrendingUp, value: "3", label: "Funded Projects" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="reveal text-center p-6 rounded-xl bg-section-alt border">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-light flex items-center justify-center">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <p className="font-bold text-navy text-xl">{value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <div key={p.title} className={`reveal delay-${Math.min(i, 3)}00 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">PI: <span className="font-medium text-foreground">{p.pi}</span></p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">{p.department}</span>
                      <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">{p.funding}</span>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${p.status === "Ongoing" ? "bg-green-100 text-green-800" : "bg-muted text-muted-foreground"}`}>
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
      <EnquiryCTA />
    </Layout>
  );
}
