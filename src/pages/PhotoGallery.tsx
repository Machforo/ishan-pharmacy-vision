import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

const cmsCategories = ["Pharmacy Labs", "Industrial Visits & Outreach", "Academic Excellence", "Cultural Activities", "Sports", "Campus Infrastructure"];

export default function PhotoGalleryPage() {
  const { data: photosData } = usePharmacyData("photos");
  const ref = useScrollReveal([photosData]);

  const photos: Array<{ title: string; url: string; category?: string }> = photosData?.length > 0 ? photosData : [
    { title: "Pharmaceutical Chemistry Synthesis Station", url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop", category: "Pharmacy Labs" },
    { title: "Pharmaceutics Formulation & Dissolution Unit", url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop", category: "Pharmacy Labs" },
    { title: "Industrial Plant Visit & GMP Training", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop", category: "Industrial Visits & Outreach" },
    { title: "Pharmacognosy Herbal Garden Inspection", url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop", category: "Pharmacy Labs" },
    { title: "National Pharmacy Week Celebration & Seminar", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop", category: "Academic Excellence" },
    { title: "Annual Sports Meet & Athletic Ground", url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop", category: "Sports" }
  ];
  
  const [filter, setFilter] = useState("All");
  const displayCategories = ["All", ...cmsCategories];
  const filtered = filter === "All" ? photos : photos.filter(p => p.category === filter);

  return (
    <Layout>
      <DynamicPageSections
        pageId="photo_gallery"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Photo Gallery"
                  subtitle="A visual record of pharmacy labs, scientific seminars, industrial visits, and vibrant campus life"
                  breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]}
                />
              );

            case "category_tabs":
              return (
                <div className="container-wide pt-16 pb-6">
                  <p className="leading-relaxed max-w-4xl mx-auto text-center mb-10 text-lg text-foreground/80">
                    Ishan Pharmacy's photo gallery provides an authentic glimpse into our advanced pharmaceutical laboratories, industrial factory excursions, scientific conferences, and energetic campus community.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {displayCategories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors active:scale-[0.97] ${
                          filter === c ? "bg-navy text-white shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              );

            case "photo_grid":
              return (
                <section className="pb-20 md:pb-28" ref={ref}>
                  <div className="container-wide">
                    {filtered.length === 0 ? (
                      <div className="py-20 text-center bg-muted/30 rounded-3xl border border-dashed">
                        <p className="text-muted-foreground">No photos found in the "{filter}" category yet.</p>
                        <button onClick={() => setFilter("All")} className="mt-4 text-navy font-bold hover:text-gold transition-colors underline">
                          View all photos
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filtered.map((photo, i) => (
                          <div
                            key={photo.url || i}
                            className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-md transition-shadow`}
                          >
                            <img
                              src={photo.url}
                              alt={photo.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                              <p className="text-white text-xs font-semibold line-clamp-2">{photo.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
