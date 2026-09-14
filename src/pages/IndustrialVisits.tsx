import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, MapPin, Calendar, CheckCircle } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function IndustrialVisitsPage() {
  const { data } = usePharmacyData("industrialvisits");
  const ref = useScrollReveal([data]);

  const defaultVisits = [
    {
      company: "Mankind Pharma Limited",
      location: "Paonta Sahib, Himachal Pradesh",
      date: "January 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive tour of WHO-GMP certified solid oral dosage manufacturing blocks, high-speed blister packing lines, and automated HVAC cleanroom systems.",
      takeaways: "Observed cleanroom air filtration cascades (ISO Class 5 & 7), sterile gowning procedures, and real-time in-process quality control tests."
    },
    {
      company: "Jubilant Generics R&D Facility",
      location: "Noida Sector 59, UP",
      date: "October 2025",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      description: "Exposure to analytical method validation, automated HPLC systems, gas chromatography spectrometers, and stability testing chambers compliant with ICH guidelines.",
      takeaways: "Understood chromatographic peak integration, impurity profiling of APIs, and documentation standards for USFDA regulatory filings."
    },
    {
      company: "Dabur India Ayurvedic & Phytomedicine Plant",
      location: "Sahibabad, Ghaziabad",
      date: "August 2025",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      description: "Observation of large-scale standardized herbal extraction, spray drying units, formulation of therapeutic syrups, and quality testing of natural crude botanicals.",
      takeaways: "Learned heavy metal limit tests, microbial load validation for polyherbal formulations, and modern phytopharmaceutical standardization."
    }
  ];

  const current = data || {
    title: "Industrial Plant Visits",
    subtitle: "Direct on-site exposure to pharmaceutical manufacturing plants, automated cleanrooms, and analytical testing centers",
    overviewHeading: "Bridging Classroom Knowledge with WHO-GMP Industrial Operations",
    overviewContent: "At Ishan Institute of Pharmacy, industrial tours provide students with hands-on understanding of large-scale drug formulation, aseptic cleanrooms, automated tablet compression, blister packaging, and stringent quality control protocols. Regular educational excursions to leading pharmaceutical hubs in Delhi-NCR, Baddi, and Haridwar ensure our graduates are production-ready on day one.",
    visits: defaultVisits
  };

  const visitsList = current.visits && current.visits.length > 0 ? current.visits : defaultVisits;

  return (
    <Layout>
      <DynamicPageSections
        pageId="industrial_visits"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={current.title || "Industrial Plant Visits"}
                  subtitle={current.subtitle || "Direct on-site exposure to pharmaceutical manufacturing plants, automated cleanrooms, and analytical testing centers"}
                  breadcrumbs={[{ label: "Learning" }, { label: "Industrial Visits" }]}
                />
              );

            case "pharma_plants_visited":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                      <div className="reveal-left space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                          Industry Connect
                        </p>
                        <h2 className="text-3xl font-bold text-foreground leading-tight">
                          {current.overviewHeading || "Bridging Classroom Knowledge with WHO-GMP Industrial Operations"}
                        </h2>
                        <div
                          className="text-foreground/75 leading-relaxed prose max-w-none rich-text"
                          dangerouslySetInnerHTML={{ __html: rt(current.overviewContent) }}
                        />
                      </div>
                      <div className="reveal-right">
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src={current?.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"}
                            alt="Pharma Manufacturing Plant Excursion"
                            className="w-full h-[380px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "visit_reports":
              return (
                <section className="pb-16 md:pb-24">
                  <div className="container-wide">
                    <h3 className="font-bold text-2xl text-center text-foreground mb-12">
                      Recent Plant Tours & Practical Exposures
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visitsList.map((v: any, i: number) => (
                        <div
                          key={i}
                          className={`reveal delay-${Math.min(i % 3, 2)}00 p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 group flex flex-col justify-between`}
                        >
                          <div>
                            {v.image && (
                              <div className="mb-5 rounded-xl overflow-hidden shadow-sm border h-44">
                                <img
                                  src={v.image}
                                  alt={v.company}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors leading-snug">
                                  {v.company}
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/60 mt-1">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-gold" /> {v.location}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3 text-gold" /> {v.date}
                                  </span>
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Building2 className="w-5 h-5 text-navy" />
                              </div>
                            </div>
                            <p className="text-xs text-foreground/75 leading-relaxed mb-4">{v.description}</p>
                          </div>
                          <div className="bg-muted/60 p-3.5 rounded-xl border border-border/50">
                            <p className="text-xs font-bold text-navy mb-1 uppercase tracking-wider flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-emerald-600" /> Key Takeaway
                            </p>
                            <p className="text-xs italic text-foreground/80">"{v.takeaways}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "gallery":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide text-center max-w-3xl mx-auto">
                    <h4 className="text-xl font-bold text-foreground mb-3">Industry Preparedness & Live Exposure</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every semester, students submit comprehensive visit logs and batch process flow diagrams, bridging the gap between theoretical pharmacokinetics and commercial factory production.
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