import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";


const ICON_MAP: Record<string, any> = { Award, Users, Globe, BookOpen, Building, TrendingUp, Shield, Lightbulb, GraduationCap, Heart, CheckCircle };

const defaultReasons = [
  { title: 'PCI Approved', description: 'Fully approved by Pharmacy Council of India.', icon: Award },
  { title: 'Expert Faculty', description: 'Learn from industry veterans.', icon: Users },
  { title: 'Global Exposure', description: 'International partnerships.', icon: Globe },
  { title: 'Modern Curriculum', description: 'Updated syllabus.', icon: BookOpen },
  { title: '10 Advanced Labs', description: 'State of the art laboratories.', icon: Building },
  { title: 'High Placement Rate', description: 'Top recruiters visit us.', icon: TrendingUp },
  { title: 'Ethical Practice', description: 'Strong focus on ethics.', icon: Shield },
  { title: 'Research Focus', description: 'Innovative research projects.', icon: Lightbulb },
];

export default function WhyIshanPharmacyPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("homepage");
  const whyContent: string | undefined = data?.whyIshanContent;
  const reasonsData = data?.whyIshan?.length > 0 ? data.whyIshan : defaultReasons;

  return (
    <Layout>
      <PageHeader
        title={data?.whyIshanHeading || "Why Ishan Pharmacy?"}
        subtitle="8 reasons why students choose Ishan Institute of Pharmacy for a career in healthcare and pharmaceuticals"
        breadcrumbs={[{ label: "Why Ishan Pharmacy?" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed text-lg">
                {whyContent ? (
                  <div className="[&_p]:text-inherit [&>p]:mb-4 last:[&>p]:mb-0" dangerouslySetInnerHTML={{ __html: whyContent }} />
                ) : (
                  <>Ishan Institute of Pharmacy is not just an educational centre; it's a launchpad for healthcare leaders and pharmacists. Our commitment to laboratory training, ethical practice, and industry partnerships sets us apart in pharmaceutical education.</>
                )}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Excellence" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              {reasonsData.slice(0, 4).map((r: any, i: number) => {
                const Icon = typeof r.icon === 'string' ? (ICON_MAP[r.icon] || Award) : (r.icon || Award);
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
            {reasonsData.slice(4).map((r: any, i: number) => {
              const Icon = typeof r.icon === 'string' ? (ICON_MAP[r.icon] || Award) : (r.icon || Award);
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
