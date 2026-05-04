import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Landmark, Shield, Users, Scale, FileText } from "lucide-react";

export default function IndustrialVisitsPage() {
  const ref = useScrollReveal();

  const visits = [
    {
      company: "District & Sessions Court, Gautam Buddh Nagar",
      sector: "District Judiciary",
      program: "BA LLB, LLB",
      year: "2023-24",
      outcome: "Understanding the practical procedure of trial courts, filing of suits, and examination of witnesses.",
    },
    {
      company: "Supreme Court of India, New Delhi",
      sector: "Apex Court",
      program: "BA LLB, LLB",
      year: "2023-24",
      outcome: "Observing constitutional bench proceedings and understanding the nuances of appellate advocacy.",
    },
    {
      company: "Central Jail, Tihar",
      sector: "Correctional Services",
      program: "BA LLB, LLB",
      year: "2022-23",
      outcome: "First-hand exposure to prison administration, reformation activities, and the rights of the incarcerated.",
    },
    {
      company: "NCDRC, New Delhi",
      sector: "Consumer Disputes",
      program: "BA LLB",
      year: "2022-23",
      outcome: "Observing summary procedures and consumer rights enforcement in quasi-judicial bodies.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Court & Jail Visits"
        subtitle="Bridging the gap between pharmaceutical theory and courtroom practice through structured exposure."
        breadcrumbs={[{ label: "Court & Jail Visits" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Clinical Legal Education</p>
              <h2 className="font-bold text-foreground leading-tight">
                Law in Motion: Beyond Textbooks
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                At Ishan Pharmacy, we believe that the legal profession is best mastered through direct observation. Court and Jail visits are an integral part of our clinical legal education model. Students visit trial courts, high courts, and the supreme court to witness the living law in action. These structured visits ensure that our students are familiar with the procedural realities of the Indian judicial system long before they begin their practice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border bg-card flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-gold" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Judiciary</span>
                </div>
                <div className="p-4 rounded-xl border bg-card flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Human Rights</span>
                </div>
                <div className="p-4 rounded-xl border bg-card flex items-center gap-3">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Advocacy</span>
                </div>
                <div className="p-4 rounded-xl border bg-card flex items-center gap-3">
                  <Scale className="w-5 h-5 text-gold" />
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Justice</span>
                </div>
              </div>
            </div>

            <div className="reveal-right">
               <div className="rounded-3xl overflow-hidden shadow-2xl border mb-6">
                 <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Awareness-program-on-Ragging-and-Its-Consequences-1-1024x700.jpg" alt="Outreach and Court Visit" className="w-full h-80 object-cover" />
               </div>
               <div className="bg-section-alt rounded-3xl p-8 md:p-10 border shadow-sm">
                 <h3 className="text-2xl font-bold text-foreground mb-6">Why These Visits Matter</h3>
                 <ul className="space-y-6">
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                       <span className="text-xs font-bold text-gold">1</span>
                     </div>
                     <p className="text-foreground/70 text-sm">Understanding procedural law (CrPC, CPC, Evidence Act) in actual trial court settings.</p>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                       <span className="text-xs font-bold text-gold">2</span>
                     </div>
                     <p className="text-foreground/70 text-sm">Observing courtroom etiquette and the professional conduct of advocates and judges.</p>
                   </li>
                   <li className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                       <span className="text-xs font-bold text-gold">3</span>
                     </div>
                     <p className="text-foreground/70 text-sm">Developing empathy and social responsibility through exposure to prison reformation and pharmacy outreach needs.</p>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Recent Institutional Visits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visits.map((v, i) => (
              <div key={i} className="group p-6 rounded-2xl border bg-background hover:border-gold transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-navy transition-colors">{v.company}</h4>
                    <p className="text-xs font-semibold text-gold uppercase tracking-widest">{v.sector}</p>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded">{v.year}</span>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-foreground/80 leading-relaxed italic">"{v.outcome}"</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-border/50 text-xs font-bold text-foreground/50 uppercase">
                    <span>Program: {v.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
