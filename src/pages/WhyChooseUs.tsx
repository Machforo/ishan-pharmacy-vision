import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultReasons = [
  { icon: Shield, title: "PCI Approved & AKTU/BTE UP Affiliated", description: "Ishan Institute of Pharmacy is fully approved by the Pharmacy Council of India (PCI) and affiliated with AKTU & BTE UP, ensuring your diploma/degree is nationally recognized for professional practice." },
  { icon: Building, title: "10 Specialized Laboratories", description: "We offer 10 state-of-the-art pharmaceutical laboratories — from Pharmaceutics to Pharmacology — giving every student comprehensive hands-on training across all domains of pharmacy." },
  { icon: Award, title: "Regular Industrial Visits", description: "From early semesters, students visit leading pharmaceutical manufacturing plants (Sun Pharma, Cipla, Dr. Reddy's), providing firsthand insight into large-scale drug production and quality control." },
  { icon: Users, title: "Expert Industry Faculty", description: "Learn from a distinguished faculty of industry practitioners, research scientists, and pharmacologists who bridge academic theory with real-world pharmaceutical challenges." },
  { icon: GraduationCap, title: "Dedicated Placement & Training Cell", description: "Our Placement Cell maintains active relationships with top pharma companies and hospitals, ensuring our graduates receive top-tier job opportunities upon completing their programs." },
  { icon: BookOpen, title: "Dedicated Herbal Garden", description: "Our unique herbal garden provides students direct exposure to medicinal plants — essential for Pharmacognosy training — enriching practical knowledge beyond the classroom." },
  { icon: Lightbulb, title: "Modern Digital Library", description: "Students have access to a comprehensive medical and pharmaceutical library with thousands of titles, journals, and digital research databases, supporting research and academic excellence." },
  { icon: Heart, title: "Health Camps & Community Service", description: "Through regular health awareness camps and medical outreach initiatives, students develop a strong sense of social responsibility and a commitment to ethical public healthcare." },
];

export default function WhyIshanPharmacyPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  const whyContent: string | undefined = data?.WhyIshanPharmacy?.content;

  return (
    <Layout>
      <PageHeader
        title="Why Ishan Pharmacy?"
        subtitle="8 reasons why students choose Ishan Institute of Pharmacy for a career in healthcare and pharmaceuticals"
        breadcrumbs={[{ label: "Why Ishan Pharmacy?" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Ishan Institute of Pharmacy is not just an educational centre; it's a launchpad for healthcare leaders and pharmacists. Our commitment to laboratory training, ethical practice, and industry partnerships sets us apart in pharmaceutical education.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Excellence" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              {defaultReasons.slice(0, 4).map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className={`reveal delay-${Math.min(i % 3, 2)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}>
                    <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{i + 1}. {r.title}</h3>
                      <p className="text-sm leading-relaxed">{r.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-6xl mx-auto space-y-6">
            {defaultReasons.slice(4).map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className={`reveal delay-${Math.min(i % 3, 2)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow group`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{i + 5}. {r.title}</h3>
                    <p className="text-sm leading-relaxed">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EnquiryCTA title="Convinced? Take the Next Step" subtitle="Schedule a campus visit or speak with our admissions counsellor today." />
    </Layout>
  );
}
