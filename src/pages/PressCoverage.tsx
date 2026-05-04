import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function PressCoveragePage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("gallery");
  const pressItems = data?.pressCoverage?.length > 0 ? data.pressCoverage.map((p: any) => ({
    publication: p.title.split('—')[1]?.trim() || "Press Release",
    date: p.date,
    headline: p.title.split('—')[0]?.trim() || p.title,
    url: p.url,
    tag: p.type || "Online"
  })) : [
    { publication: "Times of India", date: "15 March 2026", headline: "Ishan Institute of Pharmacy students excel in National Moot Court Competition", tag: "Print" },
    { publication: "Hindustan Times", date: "02 Feb 2026", headline: "Legal Aid Camp organized by Ishan Pharmacy provides free counseling to villagers", tag: "Print" },
    { publication: "LiveLaw", date: "20 Jan 2026", headline: "Ishan Pharmacy hosts national seminar on evolving digital evidence jurisprudence", tag: "Pharmacy Journal" },
    { publication: "NDTV", date: "05 Dec 2025", headline: "Law schools adapt to New Criminal Bills: Insights from Ishan Pharmacy experts", tag: "TV" },
    { publication: "Bar & Bench", date: "12 Nov 2025", headline: "Ishan Institute of Pharmacy announces expansion of free pharmacy outreach clinics", tag: "Online" },
  ];

  return (
    <Layout>
      <PageHeader title="Press Coverage" subtitle="Media archives detailing institutional milestones and academic achievements" breadcrumbs={[{ label: "Gallery" }, { label: "Press Coverage" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal leading-relaxed max-w-4xl mx-auto text-center mb-16 text-lg">
            Ishan Pharmacy's moot court achievements, pharmacy outreach work, and academic activities have been featured in regional and national media; this page archives press coverage for students, parents, and the pharmacy community.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {pressItems.map((item, i) => (
              <div key={i} className={`reveal delay-${Math.min(i, 5)}00 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6 rounded-xl border bg-card hover:shadow-[0_8px_30px_hsl(var(--navy)/0.06)] transition-all`}>
                <div className="w-full sm:w-40 aspect-video sm:aspect-square rounded-lg bg-muted flex flex-col items-center justify-center shrink-0 border relative overflow-hidden group">
                   <div className="absolute inset-0 flex items-center justify-center bg-muted/80">
                      <span className="text-xl opacity-40">📰</span>
                   </div>
                   <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <span className="text-xs font-bold text-white tracking-widest">VIEW</span>
                   </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider">{item.publication}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="px-2 py-0.5 rounded-md bg-gold/10 text-xs font-bold text-gold-dark">{item.tag}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">{item.headline}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
