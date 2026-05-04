import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Building2, Star, TrendingUp } from "lucide-react";

const alumni = [
  { name: "Priya Sharma", batch: "B.Pharm 2022", company: "Sun Pharma", role: "Senior Research Scientist" },
  { name: "Rohit Gupta", batch: "D.Pharm 2021", company: "Apollo Pharmacy", role: "Store Manager" },
  { name: "Ankita Singh", batch: "B.Pharm 2023", company: "Cipla", role: "QA Executive" },
  { name: "Mohit Verma", batch: "B.Pharm 2021", company: "Dr. Reddy's", role: "Production Supervisor" },
  { name: "Neha Jain", batch: "D.Pharm 2022", company: "MedPlus", role: "Retail Pharmacist" },
  { name: "Aditya Kumar", batch: "B.Pharm 2022", company: "AIIMS (Research)", role: "Research Fellow" },
];

export default function AlumniNetworkPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Alumni Network"
        subtitle="Celebrating the success of Ishan Pharmacy graduates across the pharmaceutical industry"
        breadcrumbs={[{ label: "Research & Placements" }, { label: "Alumni Network" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { icon: Users, value: "500+", label: "Alumni Network" },
              { icon: Building2, value: "40+", label: "Companies" },
              { icon: Star, value: "₹3.5 LPA", label: "Average Package" },
              { icon: TrendingUp, value: "95%", label: "Placement Rate" },
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
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Notable Alumni</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {alumni.map((a, i) => (
              <div key={a.name} className={`reveal delay-${Math.min(i % 3, 2)}00 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-navy">{a.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-bold text-foreground">{a.name}</h3>
                <p className="text-xs text-gold font-medium mt-1">{a.batch}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-sm font-semibold text-foreground">{a.role}</p>
                  <p className="text-xs text-muted-foreground">{a.company}</p>
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
