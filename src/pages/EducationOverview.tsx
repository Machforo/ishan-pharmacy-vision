import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { GraduationCap, Scale, ArrowRight, CheckCircle2 } from "lucide-react";

export default function EducationOverviewPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHeader
        title="Legal Programs"
        subtitle="BCI-approved BA LLB and LLB programs preparing future advocates and judicial officers"
        breadcrumbs={[{ label: "Programs Overview" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden border mb-12 shadow-md">
              <img src="https://placehold.co/1024x769/e2e8f0/1e293b?text=Latest+Equipments" alt="Academics at Ishan Pharmacy" className="w-full h-96 object-cover" />
            </div>
            <div className="reveal space-y-5 mb-16">
              <p className="text-foreground/70 leading-relaxed">
                The Ishan Institute of Pharmacy offers Bar Council of India (BCI) approved Integrated BA LLB (5 Years) and LLB (3 Years) programs affiliated with CCS University, Meerut. Our pedagogical approach focuses on clinical legal education, ensuring students develop strong analytical, research, and advocacy skills. With a state-of-the-art Moot Court Hall, dedicated Pharmacy Practice Cell, and mandatory court visits, Ishan Pharmacy provides a comprehensive platform for students to excel in litigation, corporate law, and judicial services.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "BCI approved institution", "NAAC Accredited", "CCS University affiliated",
                  "Clinical Legal Education focus", "Mandatory Court & Jail visits", "Specialized Moot Court training",
                  "Dedicated Judicial Services Cell", "Access to SCC Online & Manupatra"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Link to="/courses/ba-llb" className="reveal group block p-8 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <GraduationCap className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">BA LLB</h3>
                <p className="text-sm text-muted-foreground mb-1">5-Year Integrated Program</p>
                <p className="text-sm mb-4">A comprehensive 5-year program merging humanities with law for students after 10+2. BCI approved.</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link to="/courses/llb" className="reveal delay-100 group block p-8 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold-light flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Scale className="w-7 h-7 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">LLB</h3>
                <p className="text-sm text-muted-foreground mb-1">3-Year Professional Program</p>
                <p className="text-sm mb-4">A rigorous 3-year professional course for graduates from any discipline. BCI approved.</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
