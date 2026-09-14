import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import MediaGallery from "@/components/MediaGallery";
import PageGallery from "@/components/PageGallery";
import PageSections from "@/components/PageSections";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

export type CampusSectionKey = "auditorium" | "sports" | "library" | "itLab" | "culturalActivities";

interface Spec { label?: string; value?: string }
interface GalleryImage { url?: string; caption?: string }

export interface CampusSectionContent {
  title?: string;
  subtitle?: string;
  heading?: string;
  content?: string;
  badge?: string;
  bannerImage?: string;
  images?: GalleryImage[];
  specs?: Spec[];
  notes?: { title?: string; items?: string[] };
}

interface CampusLifePageProps {
  sectionKey: CampusSectionKey;
  /** "centered" = banner above copy. "split" = feature image beside copy. */
  layout?: "centered" | "split";
  breadcrumbs?: { label: string; href?: string }[];
  /** Shown only until an admin fills the section in. */
  defaults?: CampusSectionContent;
  /** Tailwind column classes for the specs grid. */
  specsGrid?: string;
}

/**
 * Every campus-life page (auditorium, sports, library, IT lab, cultural
 * activities) renders from `/api/pharmacy/campuslife`. One component keeps the
 * five pages consistent and means a new campus page is a three-line wrapper.
 *
 * Image counts are not fixed: `images` is rendered through MediaGallery, which
 * adapts its grid to however many photos the admin has added.
 */
export default function CampusLifePage({
  sectionKey,
  layout = "centered",
  breadcrumbs,
  defaults = {},
  specsGrid = "sm:grid-cols-2 lg:grid-cols-4",
}: CampusLifePageProps) {
  const { data } = usePharmacyData("campuslife");
  const section: CampusSectionContent = data?.[sectionKey] || {};
  const ref = useScrollReveal([section]);

  const title = section.title || defaults.title || "";
  const subtitle = section.subtitle || defaults.subtitle;
  const heading = section.heading || defaults.heading;
  const content = section.content || defaults.content;
  const badge = section.badge || defaults.badge;
  const bannerImage = section.bannerImage || defaults.bannerImage;
  const images = section.images?.length ? section.images : defaults.images || [];
  const specs = section.specs?.length ? section.specs : defaults.specs || [];
  const notes = section.notes?.items?.length ? section.notes : defaults.notes;

  const specsBlock = specs.length > 0 && (
    <div className={`reveal delay-100 grid gap-4 ${specsGrid}`}>
      {specs.map((s, i) => (
        <div key={s.label || i} className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
          <p className="text-sm font-semibold text-foreground">{s.value}</p>
        </div>
      ))}
    </div>
  );

  const notesBlock = notes?.items?.length ? (
    <div className="reveal delay-200 rounded-xl border bg-section-alt p-6">
      {notes.title && <h3 className="font-semibold text-foreground mb-3">{notes.title}</h3>}
      <ul className="space-y-2 text-sm text-foreground/80">
        {notes.items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-gold shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader key="header" title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
    ),
    banner_image: bannerImage ? (
      <div key="banner_image" className="container-wide mt-10">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border shadow-[0_8px_40px_hsl(var(--navy)/0.1)]">
          <img src={bannerImage} alt={title} className="w-full h-[350px] md:h-[400px] object-cover" />
        </div>
      </div>
    ) : null,
    overview: (
      <section key="overview" className="py-16 md:py-20" ref={ref}>
        <div className="container-wide">
          {layout === "split" ? (
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {bannerImage && (
                  <div className="reveal relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                      <img src={bannerImage} alt={title} className="w-full h-full object-cover" />
                    </div>
                    {badge && (
                      <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-4 rounded-xl shadow-xl font-bold hidden md:block">
                        {badge}
                      </div>
                    )}
                  </div>
                )}

                <div className="reveal-right space-y-6">
                  {heading && <h2 className="text-3xl font-bold text-foreground leading-tight">{heading}</h2>}
                  {content && (
                    <div className="text-foreground/70 leading-relaxed rich-text" dangerouslySetInnerHTML={{ __html: rt(content) }} />
                  )}
                  {specs.length > 0 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {specs.map((s, i) => (
                        <div key={s.label || i} className="px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80 flex items-center justify-between gap-3">
                          <span className="text-xs text-muted-foreground">{s.label}</span>
                          <span className="font-semibold text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-12">
              {heading && <h2 className="reveal text-3xl font-bold text-foreground leading-tight">{heading}</h2>}
              {content && (
                <div className="reveal text-foreground/70 leading-relaxed rich-text" dangerouslySetInnerHTML={{ __html: rt(content) }} />
              )}
            </div>
          )}
        </div>
      </section>
    ),
    specs_grid: specsBlock ? (
      <div key="specs_grid" className="container-wide max-w-4xl mx-auto mb-12">
        {specsBlock}
      </div>
    ) : null,
    notes: notesBlock ? (
      <div key="notes" className="container-wide max-w-4xl mx-auto mb-12">
        {notesBlock}
      </div>
    ) : null,
    gallery: images.length > 0 ? (
      <section key="gallery" className="pb-16 md:pb-20">
        <div className="container-wide max-w-4xl mx-auto">
          <MediaGallery images={images} altPrefix={title} className="reveal" />
        </div>
      </section>
    ) : null,
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "banner_image", "overview", "specs_grid", "notes", "gallery", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId={sectionKey}
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
