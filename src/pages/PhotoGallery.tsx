import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultAlbums = [];

const cmsCategories = ["Pharmacy Labs", "Industrial Visits & Outreach", "Academic Excellence", "Cultural Activities", "Sports", "Campus Infrastructure"];

export default function PhotoGalleryPage() {
  const { data: photosData } = usePharmacyData("photos");
  const ref = useScrollReveal([photosData]);

  // Dynamic photos from CMS or fallback to static placeholders
  const photos: Array<{title:string;url:string;category?:string}> = photosData?.length > 0 ? photosData : [];
  
  const [filter, setFilter] = useState("All");

  const usingCMS = photos.length > 0;
  const displayCategories = ["All", ...cmsCategories];
  
  // Filtering logic:
  // If using CMS, filter the flat photos array by category.
  // If not, filter the defaultAlbums array by category.
  const filtered = usingCMS 
    ? (filter === "All" ? photos : photos.filter(p => p.category === filter))
    : (filter === "All" ? defaultAlbums : defaultAlbums.filter(a => a.category === filter));

  const showPlaceholder = !usingCMS && filtered.length === 0 && filter !== "All";

  return (
    <Layout>
      <PageHeader title="Photo Gallery" subtitle="A visual record of pharmacy labs, seminars, industrial visits, and campus life" breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal leading-relaxed max-w-4xl mx-auto text-center mb-16 text-lg">
            Ishan Pharmacy's gallery is a visual record — pharmacy labs, industrial visits, awareness programs, cultural activities, sports meets, and campus life; browse through albums below.
          </p>

          <div className="reveal flex flex-wrap gap-2 mb-10 justify-center">
            {displayCategories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors active:scale-[0.97] ${filter === c ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>{c}</button>
            ))}
          </div>
          {showPlaceholder ? (
            <div className="reveal py-20 text-center bg-muted/30 rounded-3xl border border-dashed">
              <p className="text-muted-foreground">No photos found in the "{filter}" category yet.</p>
              <button onClick={() => setFilter("All")} className="mt-4 text-navy font-bold hover:text-gold transition-colors underline">View all photos</button>
            </div>
          ) : usingCMS ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {(filtered as Array<{title:string;url:string}>).map((photo, i) => (
                <div key={photo.url || i} className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer`}>
                  {photo.url ? (
                    <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted to-muted/50 gap-2">
                      <span className="text-muted-foreground/20 text-3xl font-bold">📷</span>
                      <span className="text-xs text-muted-foreground/40 text-center px-2">{photo.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            (filtered as typeof defaultAlbums).map((album) => (
              <div key={album.category} className="mb-12">
                <div className="flex items-baseline gap-4 mb-5">
                  <h2 className="text-xl font-bold text-foreground">{album.category}</h2>
                  <span className="text-sm text-muted-foreground">{album.date}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {album.images.map((img, i) => (
                    <div key={img.id} className={`reveal delay-${Math.min(i % 4, 3)}00 aspect-[4/3] rounded-xl bg-muted border overflow-hidden group cursor-pointer`}>
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          {!usingCMS && !showPlaceholder && <p className="text-center text-sm text-muted-foreground mt-8">Upload photos via the CMS gallery manager to populate this section.</p>}

        </div>
      </section>
    </Layout>
  );
}
