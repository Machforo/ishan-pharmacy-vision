import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic2, Calendar, Award } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function GuestLecturesPage() {
  const { data } = usePharmacyData("guestlectures");
  const ref = useScrollReveal([data]);

  const defaultEvents = [
    {
      speaker: "Dr. Arvind Saxena",
      designation: "VP - Formulations R&D, Sun Pharma Ltd.",
      topic: "Recent Advances in Targeted Nanotechnology Drug Delivery Systems",
      takeaways: "Practical insights into solubility enhancement of BCS Class II & IV molecules and regulatory documentation.",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      speaker: "Ms. Shalini Srivastava",
      designation: "Head of Regulatory Affairs, Mankind Pharma",
      topic: "USFDA, EMA & CDSCO Dossier Filing and Common Technical Document (CTD) Structuring",
      takeaways: "Understanding eCTD submission specifications, bio-equivalence protocols, and stability test criteria.",
      date: "November 2025",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      speaker: "Dr. P. K. Bhattacharya",
      designation: "Director - Clinical Pharmacovigilance, Fortis Healthcare",
      topic: "Role of Pharmacists in Modern Hospital Clinical Governance & Patient Safety",
      takeaways: "Therapeutic drug monitoring, ADR reporting systems, and mitigating drug-drug interactions.",
      date: "August 2025",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const current = data || {
    title: "Guest Lectures & Seminars",
    subtitle: "Distinguished pharmaceutical leaders, researchers, and regulatory specialists sharing real-world industry perspectives",
    overviewHeading: "Bridging Academic Theory with Pharmaceutical Innovation",
    overviewContent: "At Ishan Institute of Pharmacy, guest lectures and technical symposiums are an integral part of curriculum delivery. Renowned pharmaceutical executives, hospital clinicians, and research scientists regularly visit our Greater Noida campus to mentor students on cutting-edge formulation techniques, regulatory compliance, quality control assays, and clinical pharmacy trials.",
    events: defaultEvents
  };

  const eventsList = current.events && current.events.length > 0 ? current.events : defaultEvents;

  return (
    <Layout>
      <DynamicPageSections
        pageId="guest_lectures"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={current.title || "Guest Lectures & Seminars"}
                  subtitle={current.subtitle || "Distinguished pharmaceutical leaders, researchers, and regulatory specialists sharing real-world industry perspectives"}
                  breadcrumbs={[{ label: "Learning" }, { label: "Guest Lectures" }]}
                />
              );

            case "distinguished_speakers":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                      <div className="reveal-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider">
                          <Award className="w-3.5 h-3.5" /> Beyond Textbooks
                        </div>
                        <h2 className="text-3xl font-bold text-foreground leading-tight">
                          {current.overviewHeading || "Bridging Academic Theory with Pharmaceutical Innovation"}
                        </h2>
                        <div
                          className="text-foreground/75 leading-relaxed prose max-w-none rich-text"
                          dangerouslySetInnerHTML={{ __html: rt(current.overviewContent) }}
                        />
                      </div>
                      <div className="reveal-right">
                        <div className="rounded-2xl overflow-hidden shadow-xl border bg-card">
                          <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                            alt="Pharma Seminar & Keynote Lecture"
                            className="w-full h-80 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "lecture_archive":
              return (
                <section className="pb-20 md:pb-28">
                  <div className="container-wide">
                    <h3 className="font-bold text-2xl text-foreground text-center mb-10">
                      Recent Keynote Lectures & Technical Masterclasses
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {eventsList.map((e: any, i: number) => (
                        <div
                          key={i}
                          className="group p-6 rounded-2xl border bg-card hover:bg-muted/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                        >
                          <div>
                            {e.image && (
                              <div className="mb-5 rounded-xl overflow-hidden shadow-sm border h-44">
                                <img
                                  src={e.image}
                                  alt={e.speaker}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center text-gold-dark shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                                <Mic2 className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground leading-snug">{e.speaker}</h4>
                                <p className="text-xs text-foreground/60">{e.designation}</p>
                              </div>
                            </div>
                            <div className="space-y-2 mb-4">
                              <h5 className="text-sm font-bold text-navy leading-tight">{e.topic}</h5>
                              <p className="text-xs text-foreground/75 leading-relaxed italic">"{e.takeaways}"</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-3 border-t text-xs font-bold text-gold uppercase tracking-widest">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{e.date}</span>
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