import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Home, ShieldCheck, Utensils, Wifi } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

const fallbackIcons = [Home, ShieldCheck, Utensils, Wifi];

export default function HostelFacilitiesPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "Hostel Facilities",
    subtitle: "Secure, comfortable, and hygienic residential accommodation for pharmacy students",
    overviewHeading: "A Home Away from Home",
    overviewContent: "Ishan Institute of Pharmacy provides separate, well-appointed on-campus hostels for boys and girls with 24/7 security, CCTV surveillance, and dedicated resident wardens.\n\nOur residential accommodations feature furnished AC and non-AC rooms, high-speed Wi-Fi, 24-hour power backup, clean RO drinking water, modern dining halls serving balanced and nutritious vegetarian meals, and recreational common rooms.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Furnished Living Spaces", description: "Choice of single, twin, and triple sharing rooms with study tables and wardrobes." },
      { title: "24/7 Security & Wardens", description: "Round-the-clock security personnel, biometric entry, and resident faculty supervision." },
      { title: "Hygienic Dining Hall", description: "Nutritious multi-cuisine meal plans prepared in clean, modern kitchen facilities." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "/hostel") : null;
  const current = pageData || fallback;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Facilities" }, { label: "Hostel Facilities" }]}
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
    rooms_amenities: (
      <section key="rooms_amenities" className="py-8">
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

  const defaultOrder = ["header", "overview", "rooms_amenities", "gallery", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="hostel"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}