import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultAlbums = [
  { 
    category: "Pharmacy Labs", 
    date: "2025-26", 
    images: [
      { id: "mc-1", alt: "Pharmacy Lab 1", url: "https://placehold.co/1024x683/e2e8f0/1e293b?text=Pharmacy+Lab" },
      { id: "mc-2", alt: "Lab Experiments", url: "https://placehold.co/1024x769/e2e8f0/1e293b?text=Latest+Equipments" },
      { id: "mc-3", alt: "Practical Experiments", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Practical-experiments-1024x454.jpg" },
      { id: "mc-4", alt: "Practical Experiments 2", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Practical-experiments-2-1024x705.jpg" },
    ]
  },
  { 
    category: "Industrial Visits & Outreach", 
    date: "Experiential Learning", 
    images: [
      { id: "cj-1", alt: "Awareness Program", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Awareness-program-on-Ragging-and-Its-Consequences-1-1024x700.jpg" },
      { id: "cj-2", alt: "Webinar on Cancer", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Webinar-on-Awareness-about-Bladder-Cancer.jpg" },
      { id: "cj-3", alt: "Blood Donation Camp", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Blood-Donation-Camp-1024x769.jpg" },
    ]
  },
  { 
    category: "Campus Infrastructure", 
    date: "Facilities", 
    images: [
      { id: "infra-1", alt: "Campus Building", url: "https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" },
      { id: "infra-2", alt: "Library", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg" },
      { id: "infra-3", alt: "Hostel", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Girls-Hostel-1024x768.jpg" },
      { id: "infra-4", alt: "Digital Lab", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Online-Learning-1024x710.jpg" },
    ]
  },
  { 
    category: "Academic Excellence", 
    date: "Learning", 
    images: [
      { id: "acad-1", alt: "Classroom", url: "https://placehold.co/1024x769/e2e8f0/1e293b?text=Latest+Equipments" },
      { id: "acad-2", alt: "Seminar", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg" },
      { id: "acad-3", alt: "Presentation", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Smart-classroom-1024x674.jpg" },
      { id: "acad-4", alt: "Interactive Session", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Orientation-Program-for-New-Batch-1024x628.jpg" },
    ]
  },
  { 
    category: "Cultural Activities", 
    date: "Events", 
    images: [
      { id: "cl-1", alt: "Cultural Fest", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Inauguration-of-Spardha--1024x473.jpg" },
      { id: "cl-2", alt: "Dance Performance", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" },
      { id: "cl-6", alt: "Group Photo", url: "https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" },
    ]
  },
  { 
    category: "Sports", 
    date: "Athletics", 
    images: [
      { id: "cl-3", alt: "Sports 1", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" },
      { id: "cl-4", alt: "Sports 2", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" },
      { id: "cl-5", alt: "Sports 3", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" },
    ]
  }
];

const cmsCategories = ["Pharmacy Labs", "Industrial Visits & Outreach", "Academic Excellence", "Cultural Activities", "Sports", "Campus Infrastructure"];

export default function PhotoGalleryPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("gallery");

  // Dynamic photos from CMS or fallback to static placeholders
  const photos: Array<{title:string;url:string;category?:string}> = data?.photos?.length > 0 ? data.photos : [];
  
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
