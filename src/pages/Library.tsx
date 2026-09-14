import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ShieldCheck, Database, Star } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

const fallbackIcons = [BookOpen, Database, ShieldCheck, Star];

export default function LibraryPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "Central Pharmacy Library",
    subtitle: "Extensive pharmaceutical collection, digital research terminals, and reference pharmacopoeias",
    overviewHeading: "Knowledge Hub for Pharmaceutical Research",
    overviewContent: "The Central Library at Ishan Institute of Pharmacy is stocked with thousands of volumes of Indian, British, and US Pharmacopoeias, medical encyclopedias, national and international journals, and research monographs.\n\nEquipped with digital library subscriptions to DELNET and ScienceDirect, quiet reading bays, and high-speed internet terminals, the library supports both student coursework and advanced research.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Standard Pharmacopoeias", description: "Complete collections of IP, BP, USP and Formularies for reference." },
      { title: "Digital Library Terminals", description: "Access to DELNET, open access scientific journals, and e-books." },
      { title: "Spacious Reading Hall", description: "Peaceful environment conducive to deep study and research writing." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "/library") : null;
  const current = pageData || fallback;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Facilities" }, { label: "Library" }]}
      />
    ),
    overview: (
      <section key="overview" className="pt-20 pb-8 md:pt-28 md:pb-12" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="font-bold text-foreground leading-tight text-3xl">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose prose-sm max-w-none rich-text" dangerouslySetInnerHTML={{ __html: rt(current.overviewContent) }} />
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image} alt={current.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    e_journals_books: (
      <section key="e_journals_books" className="py-8">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {current.highlights.map((h: any, i: number) => {
              const Icon = fallbackIcons[i % fallbackIcons.length];
              return (
                <div key={h.title || i} className={`reveal delay-${Math.min(i, 3)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    ),
    gallery: current?.images?.length > 0 ? (
      <section key="gallery" className="pb-16 md:pb-20">
        <div className="container-wide max-w-6xl mx-auto">
          <MediaGallery images={current.images} altPrefix={current?.title || "Facility photo"} />
        </div>
      </section>
    ) : null,
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "overview", "e_journals_books", "gallery", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="library"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}