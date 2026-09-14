import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Trophy, Activity, Award, Users } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

const fallbackIcons = [Trophy, Activity, Award, Users];

export default function AuditoriumSportsPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "Auditorium & Sports Arena",
    subtitle: "Venues for scientific conferences, cultural convocations, and athletic development",
    overviewHeading: "Holistic Student Development",
    overviewContent: "Ishan Institute of Pharmacy features a state-of-the-art air-conditioned auditorium equipped with advanced acoustic sound systems and audio-visual projection facilities, capable of seating 500+ attendees for academic seminars, scientific symposiums, and cultural festivals.\n\nOur extensive sports complex provides outdoor sports grounds for cricket and football, as well as indoor arenas for badminton, table tennis, chess, and a fully equipped gymnasium.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Acoustic Auditorium", description: "500+ capacity auditorium with high-definition projection for national conferences." },
      { title: "Outdoor Athletic Grounds", description: "Expansive campus grounds for cricket, football, and annual athletic meets." },
      { title: "Indoor Sports & Fitness", description: "Dedicated badminton courts, table tennis stations, and student gymnasium." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "/auditorium-sports") : null;
  const current = pageData || fallback;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Facilities" }, { label: "Auditorium & Sports" }]}
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
    facilities_grid: (
      <section key="facilities_grid" className="py-8">
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

  const defaultOrder = ["header", "overview", "facilities_grid", "gallery", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="auditorium_sports"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}