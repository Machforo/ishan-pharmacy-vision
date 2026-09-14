import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import PageGallery from "@/components/PageGallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Building2, Users2, Star, Award, CheckCircle2 } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const defaultStats = [
  { icon: TrendingUp, value: "95%+", label: "Placement Success Rate" },
  { icon: Star, value: "₹8.5 LPA", label: "Highest Package Offered" },
  { icon: Award, value: "₹4.2 LPA", label: "Average Starting Salary" },
  { icon: Building2, value: "50+", label: "Leading Pharma Recruiters" },
];

const defaultRecruiters = [
  { name: "Sun Pharma" },
  { name: "Cipla" },
  { name: "Mankind Pharma" },
  { name: "Dr. Reddy's Laboratories" },
  { name: "Abbott Healthcare" },
  { name: "Lupin Pharmaceuticals" },
  { name: "Dabur India" },
  { name: "Apollo Hospitals" },
  { name: "Fortis Healthcare" },
  { name: "MedPlus Health" },
];

const defaultTestimonials = [
  {
    name: "Priya Sharma",
    program: "B.Pharm Graduate",
    company: "Sun Pharma R&D",
    package: "₹6.8 LPA",
    quote: "The hands-on practical experience in Ishan's formulation and chemistry labs gave me a decisive edge during my technical interviews at Sun Pharma."
  },
  {
    name: "Rohit Gupta",
    program: "D.Pharm Graduate",
    company: "Apollo Pharmacy",
    package: "₹3.8 LPA",
    quote: "Direct hospital training and patient counseling sessions prepared me to step straight into dispensary management immediately after completing my diploma."
  },
  {
    name: "Ankita Singh",
    program: "B.Pharm Graduate",
    company: "Cipla Quality Assurance",
    package: "₹5.5 LPA",
    quote: "The analytical equipment training on HPLC and spectrophotometers at Ishan made corporate onboarding seamless and effortless."
  },
  {
    name: "Mohit Verma",
    program: "B.Pharm Graduate",
    company: "Dr. Reddy's Laboratories",
    package: "₹6.2 LPA",
    quote: "From mock technical interviews to resume workshops, the Corporate Resource Centre supported us at every single step of campus placement."
  }
];

export default function PlacementsPage() {
  const { data } = usePharmacyData("placements");
  const ref = useScrollReveal([data]);

  const stats = data?.placementNumbers?.length > 0 ? data.placementNumbers : defaultStats;
  const recruiters: any[] = data?.recruitingPartners?.length > 0 ? data.recruitingPartners : defaultRecruiters;
  const testimonials = data?.successStories?.length > 0 ? data.successStories : defaultTestimonials;
  const placementProcess: Array<{ step: string; desc: string }> = data?.placementProcess?.length > 0 ? data.placementProcess : [
    { step: "1", desc: "Pre-placement training: professional resume building, pharma aptitude, group discussions, and technical mock interviews." },
    { step: "2", desc: "Company registration, job description circulars, and role eligibility matching with eligible graduating students." },
    { step: "3", desc: "Online or on-campus aptitude screening and technical pharmaceutical knowledge assessment by the recruiter." },
    { step: "4", desc: "Formulation case studies, HR rounds, and technical panel interviews conducted by corporate scientists." },
    { step: "5", desc: "Offer letter issuance, institutional felicitation, and comprehensive onboarding assistance." },
  ];

  return (
    <Layout>
      <DynamicPageSections
        pageId="placements"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Corporate Placements & Career Outcomes"
                  subtitle="Consistent record of placements in premier pharmaceutical corporations, clinical research organizations, and hospital chains"
                  breadcrumbs={[{ label: "Career Outcomes" }]}
                  image={data?.bannerImage}
                />
              );

            case "placement_stats":
              return (
                <section className="py-16 md:py-20" ref={ref}>
                  <div className="container-wide">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                      {stats.map((s: any, i: number) => {
                        const Icon = s.icon && typeof s.icon !== "string" ? s.icon : TrendingUp;
                        return (
                          <div key={s.label || i} className="text-center p-6 rounded-2xl bg-card border shadow-sm">
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold/15 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-navy" />
                            </div>
                            <p className="text-2xl font-black text-navy">{s.value}</p>
                            <p className="text-xs text-muted-foreground mt-1 font-semibold">{s.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );

            case "top_pharma_recruiters":
              return (
                <section className="py-12 bg-muted/30 border-y">
                  <div className="container-wide max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
                      Top Pharmaceutical Recruiters & Hospital Networks
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                      {recruiters.map((r: any, i: number) => (
                        <div
                          key={r.name || i}
                          className="flex items-center justify-center p-6 rounded-xl border bg-card hover:shadow-md hover:border-gold/40 transition-all h-28 text-center"
                        >
                          {r.logo ? (
                            <img src={r.logo} alt={r.name} className="h-12 w-auto object-contain" />
                          ) : (
                            <span className="text-sm font-bold text-navy">{r.name || r}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "process":
              return (
                <section className="py-16 md:py-24">
                  <div className="container-wide max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                      Our Campus Placement & Training Methodology
                    </h2>
                    <div className="space-y-4">
                      {placementProcess.map((step: any, i: number) => (
                        <div key={i} className="flex gap-4 items-start p-5 rounded-2xl border bg-card shadow-sm">
                          <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold text-white">{step.step || i + 1}</span>
                          </div>
                          <p className="text-sm text-foreground/85 leading-relaxed pt-1.5">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "success_stories":
              return (
                <section className="pb-20 md:pb-28">
                  <div className="container-wide max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
                      Student Placement Success Stories
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {testimonials.map((t: any, i: number) => (
                        <div key={t.name || i} className="p-6 rounded-2xl border bg-card shadow-sm flex flex-col justify-between">
                          {(t.quote || t.message) && (
                            <p className="text-sm text-foreground/80 leading-relaxed italic mb-5">
                              "{t.quote || t.message}"
                            </p>
                          )}
                          <div className="flex items-center gap-3 pt-4 border-t">
                            <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold text-sm shrink-0">
                              {t.image ? (
                                <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover" />
                              ) : (
                                t.name?.[0] || "P"
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-foreground">{t.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {t.program} {t.company ? `· ${t.company}` : ""}
                              </p>
                              {t.package && <p className="text-xs font-semibold text-gold-dark">{t.package}</p>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {data?.images?.length > 0 && (
                      <div className="mt-16">
                        <PageGallery title="Campus Placement Drives" images={data.images} />
                      </div>
                    )}
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
