import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star, CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultStats = [
  { icon: TrendingUp, value: "95%", label: "Placement Rate" },
  { icon: Building2, value: "40+", label: "Pharma Company Partners" },
  { icon: Users2, value: "500+", label: "Pharmacists Placed" },
  { icon: Star, value: "₹3.5 LPA", label: "Average Package" },
];

const defaultRecruiters = [
  { name: "Sun Pharma", logo: "" },
  { name: "Cipla", logo: "" },
  { name: "Dr. Reddy's", logo: "" },
  { name: "Lupin", logo: "" },
  { name: "Mankind Pharma", logo: "" },
  { name: "Torrent Pharma", logo: "" },
  { name: "Apollo Pharmacy", logo: "" },
  { name: "Medplus", logo: "" },
  { name: "Fortis Healthcare", logo: "" },
  { name: "AIIMS (Research)", logo: "" },
  { name: "Zydus Lifesciences", logo: "" },
  { name: "Hetero Drugs", logo: "" },
];

const defaultTestimonials = [
  { name: "Rahul Deshmukh", program: "B.Pharm 2022", company: "Sun Pharma", quote: "The laboratory training and industrial visits at Ishan Pharmacy were instrumental in preparing me for production roles. I felt industry-ready from day one." },
  { name: "Sanya Malhotra", program: "D.Pharm 2021", company: "Apollo Pharmacy", quote: "The placement cell's focus on retail and hospital pharmacy helped me secure a great role. The clinical training I received here is invaluable." },
  { name: "Priyanka Singh", program: "B.Pharm 2023", company: "Cipla — QA Department", quote: "The dedicated Placement Cell provided me with structured guidance and mock interviews that helped me crack the QA Manager role in my first attempt." },
  { name: "Arjun Verma", program: "B.Pharm 2022", company: "Dr. Reddy's R&D", quote: "Ishan Pharmacy's faculty, many of whom have industry experience, gave me a real-world perspective that textbooks can't provide. Highly recommended." },
];

export default function PlacementsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("placements");

  // Schema field names: placementNumbers, recruitingPartners, successStories, placementProcess
  const stats = data?.placementNumbers?.length > 0 ? data.placementNumbers : defaultStats;
  const recruiters: string[] = data?.recruitingPartners?.length > 0
    ? data.recruitingPartners.map((r: any) => r.name || r)
    : defaultRecruiters;
  const testimonials = data?.successStories?.length > 0 ? data.successStories : defaultTestimonials;
  const placementProcess: Array<{step:string;desc:string}> = data?.placementProcess?.length > 0 ? data.placementProcess : [
    { step: "1", desc: "Pre-placement training: resume building, aptitude, group discussion, mock interviews" },
    { step: "2", desc: "Company registration and job description sharing with students" },
    { step: "3", desc: "Aptitude test and/or technical assessment by the recruiter" },
    { step: "4", desc: "Group discussion and personal interview rounds" },
    { step: "5", desc: "Offer letter issuance and onboarding support" },
  ];

  return (
    <Layout>
      <PageHeader title="Career Outcomes" subtitle="Consistent record of placements in top-tier pharma companies, hospitals, and research institutions" breadcrumbs={[{ label: "Career Outcomes" }]} />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {/* Stats */}
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s: any, i: number) => {
              const Icon = s.icon && typeof s.icon !== 'string' ? s.icon : TrendingUp;
              return (
                <div key={s.label || i} className="text-center p-6 rounded-xl bg-section-alt border">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-light flex items-center justify-center"><Icon className="w-6 h-6 text-navy" /></div>
                  <p className="font-bold text-navy">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
                </div>
              );
            })}
          </div>

          {/* Process */}
          <div className="reveal delay-100 max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Placement Process</h2>
            <div className="space-y-4">
              {placementProcess.map((step: any, i: number) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg border bg-card">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center shrink-0"><span className="text-xs font-bold text-primary-foreground">{step.step || i+1}</span></div>
                  <p className="text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiters */}
          <div className="reveal delay-200 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Our Recruiting Partners</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {recruiters.map((r: any, i: number) => (
                <div key={r.name || i} className="flex items-center justify-center p-8 rounded-xl border bg-card hover:shadow-md transition-shadow h-32">
                  {r.logo ? (
                    <img src={r.logo} alt={r.name} className="h-16 md:h-20 w-auto object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-foreground/50">{r.name || r}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="reveal delay-300">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Student Success Stories</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {testimonials.map((t: any, i: number) => (
                <div key={t.name || i} className="p-6 rounded-xl border bg-card">
                  {(t.quote || t.message) && <p className="text-sm leading-relaxed italic mb-4">"{t.quote || t.message}"</p>}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center">
                      {t.image ? <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover" /> : <span className="text-sm font-bold text-navy">{t.name?.[0]}</span>}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.program}{t.program && t.company ? " → " : ""}{t.company}</p>
                      {t.package && <p className="text-xs font-medium text-gold">{t.package}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
