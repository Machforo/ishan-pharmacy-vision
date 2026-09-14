import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, BookCheck, ShieldCheck, FileText } from "lucide-react";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function ResearchJournalPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <DynamicPageSections
        pageId="research_journal"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Ishan Pharmaceutical Review"
                  subtitle="A peer-reviewed scientific journal dedicated to contemporary pharmaceutical research and healthcare scholarship"
                  breadcrumbs={[{ label: "Research" }, { label: "Ishan Pharmaceutical Review" }]}
                />
              );

            case "overview":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                      <div className="reveal space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                          <BookCheck className="w-4 h-4" /> Flagship Scientific Journal
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                          Fostering Rigorous Pharmaceutical Inquiry
                        </h2>
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          <strong>Ishan Pharmaceutical Review (IPR)</strong> is the flagship peer-reviewed biannual journal published by the Ishan Institute of Pharmacy. Dedicated to fostering high-impact pharmaceutical scholarship, the journal publishes original empirical research papers, technical review articles, and case comments spanning novel drug delivery systems (NDDS), pharmacology & toxicology, crude herbal standardization, and clinical pharmacy trials.
                        </p>
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          Published bi-annually with open-access availability, the journal provides an esteemed platform for academicians, industrial scientists, hospital clinicians, and postgraduate scholars across India and abroad.
                        </p>
                      </div>

                      <div className="reveal delay-100">
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                            alt="Ishan Pharmaceutical Review Research"
                            className="w-full h-80 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "editorial_board":
              return (
                <section className="pb-16 md:pb-24">
                  <div className="container-wide max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: "Journal Title", value: "Ishan Pharmaceutical Review" },
                        { label: "Publication Frequency", value: "Bi-Annual (June & Dec)" },
                        { label: "Review Model", value: "Double-Blind Peer-Reviewed" },
                        { label: "Core Scope", value: "Pharmaceutics & Pharmacology" },
                      ].map((s) => (
                        <div key={s.label} className="p-5 rounded-2xl border bg-card shadow-sm">
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                          <p className="text-sm font-bold text-navy mt-1">{s.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-8 rounded-3xl border bg-card shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="space-y-1 text-center sm:text-left">
                        <h3 className="font-bold text-foreground text-lg">Call for Papers & Manuscript Submissions</h3>
                        <p className="text-xs text-muted-foreground">
                          Manuscripts formatted according to Vancouver style are accepted year-round via the editorial desk.
                        </p>
                      </div>
                      <a
                        href="mailto:journal@ishan.ac"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-navy text-white rounded-xl hover:bg-navy/90 transition-colors shrink-0 shadow-md shadow-navy/20"
                      >
                        <FileText className="w-4 h-4" /> Submit Manuscript <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
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
