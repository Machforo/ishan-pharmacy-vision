import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";
import { Award, Newspaper } from "lucide-react";

export default function PressCoveragePage() {
  const { data: pressData } = usePharmacyData("press");
  const ref = useScrollReveal([pressData]);
  
  const pressItems = pressData?.length > 0 ? pressData.map((p: any) => ({
    publication: p.publication || "Press Release",
    date: p.date,
    headline: p.headline || p.title,
    url: p.url || "",
    tag: p.tag || p.type || "Online"
  })) : [
    { publication: "The Times of India", date: "15 March 2026", headline: "Ishan Pharmacy Students Formulate Novel Herbal Drug Delivery Nano-Emulsion, File Patent", tag: "Print" },
    { publication: "Hindustan Times", date: "02 Feb 2026", headline: "Free Health & Pharmacovigilance Awareness Camp Organized by Ishan Pharmacy in Greater Noida", tag: "Print" },
    { publication: "Pharma Times", date: "20 Jan 2026", headline: "Ishan Institute of Pharmacy Hosts National Conference on AI in Drug Discovery and Formulations", tag: "Journal" },
    { publication: "Express Healthcare", date: "05 Dec 2025", headline: "Greater Noida Pharmacy Colleges Lead in Clinical Research: Special Feature on Ishan Pharmacy", tag: "Online" },
    { publication: "Dainik Jagran", date: "12 Nov 2025", headline: "PCI Accredited Ishan Institute of Pharmacy Records 95%+ Placement Drives with Leading Multi-National Firms", tag: "Print" },
  ];

  const digitalFeatures = [
    { source: "Pharmacy Council of India Bulletin", title: "Exemplary Compliance & Modern Machine Room Infrastructure at Ishan Institute of Pharmacy", year: "2025" },
    { source: "Higher Education Review", title: "Top 10 Promising Pharmacy Colleges in North India for Practical Laboratory Training", year: "2024" },
    { source: "National Health Conclave", title: "Institutional Excellence Award for Community Health & Rational Drug Dispensing Education", year: "2024" }
  ];

  return (
    <Layout>
      <DynamicPageSections
        pageId="press_coverage"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Press & Media Coverage"
                  subtitle="Media archives detailing academic achievements, clinical milestones, and innovations at Ishan Pharmacy"
                  breadcrumbs={[{ label: "Gallery" }, { label: "Press Coverage" }]}
                />
              );

            case "media_articles":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <p className="reveal leading-relaxed max-w-4xl mx-auto text-center mb-14 text-lg text-foreground/80">
                      Ishan Pharmacy's scientific research accomplishments, community healthcare camps, national seminars, and high-impact placement drives are widely recognized in print, digital, and broadcast news.
                    </p>
                    <div className="max-w-4xl mx-auto space-y-4">
                      {pressItems.map((item, i) => (
                        <div
                          key={i}
                          className={`reveal delay-${Math.min(i, 5)}00 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.06)] transition-all`}
                        >
                          <div className="w-full sm:w-36 aspect-video sm:aspect-square rounded-lg bg-muted flex flex-col items-center justify-center shrink-0 border relative overflow-hidden group">
                            {item.url ? (
                              <img
                                src={item.url}
                                alt={item.headline}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-navy/5 text-navy">
                                <Newspaper className="w-8 h-8 opacity-40" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                              <span className="text-xs font-bold text-navy uppercase tracking-wider">{item.publication}</span>
                              <span className="w-1 h-1 rounded-full bg-border" />
                              <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                              <span className="w-1 h-1 rounded-full bg-border" />
                              <span className="px-2 py-0.5 rounded-md bg-gold/15 text-xs font-bold text-gold-dark">{item.tag}</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{item.headline}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "press_clippings":
              return (
                <section className="py-16 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
                        <Award className="w-3.5 h-3.5" /> Recognitions
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Digital Media & Institutional Awards</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {digitalFeatures.map((feat, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-card border shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                              <span className="font-bold text-navy">{feat.source}</span>
                              <span>{feat.year}</span>
                            </div>
                            <p className="text-sm font-medium text-foreground leading-snug">{feat.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
