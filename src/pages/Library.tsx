import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, ShieldCheck, MapPin, Star } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

const fallbackIcons = [CheckCircle2, ShieldCheck, MapPin, Star];

export default function LibraryPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "Library",
    subtitle: "State-of-the-art infrastructure providing an enriching environment for students",
    overviewHeading: "Exceptional Facilities",
    overviewContent: "Ishan Institute of Pharmacy provides world-class infrastructure designed to foster academic excellence and personal growth. Our campus is equipped with modern amenities that cater to the comprehensive needs of our students.\n\nFrom advanced study areas to comfortable living spaces, every aspect of our campus has been thoughtfully designed to create a conducive environment for both learning and recreation.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Modern Amenities", description: "Fully equipped with the latest technology and resources." },
      { title: "Safe Campus", description: "24/7 security and a secure environment for all students." },
      { title: "Accessible Location", description: "Strategically located for easy connectivity." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "/library") : null;
  const current = pageData || fallback;

  return (
    <Layout>
      <PageHeader
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Facilities" }, { label: "Library" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose prose-sm max-w-none rich-text" dangerouslySetInnerHTML={{ __html: rt(current.overviewContent) }} />
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image} alt={current.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
      {current?.images?.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="container-wide max-w-6xl mx-auto">
            <MediaGallery images={current.images} altPrefix={current?.title || "Facility photo"} />
          </div>
        </section>
      )}
      <EnquiryCTA />
    </Layout>
  );
}