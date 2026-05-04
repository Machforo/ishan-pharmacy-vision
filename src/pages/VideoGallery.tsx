import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultVideos = [
  { title: "National Moot Court Competition Final Round", category: "Moot Court Highlights", ytId: "" },
  { title: "Understanding The New Criminal Laws", category: "Faculty Talks", ytId: "" },
  { title: "My Journey at Ishan Pharmacy", category: "Student Testimonials", ytId: "" },
  { title: "Supreme Court Visit Documentary", category: "Court Visits", ytId: "" },
  { title: "Annual Cultural Fest Kshitiz", category: "Events", ytId: "" },
  { title: "Legal Aid Camp in Rural Noida", category: "Events", ytId: "" },
];

export default function VideoGalleryPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("gallery");

  const getYTId = (url: string) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const videos = data?.videos?.length > 0 ? data.videos.map((v: any) => ({
    ...v,
    ytId: getYTId(v.url)
  })) : defaultVideos;

  return (
    <Layout>
      <PageHeader title="Video Gallery" subtitle="Visual insights into academic and extracurricular life at Ishan Pharmacy" breadcrumbs={[{ label: "Gallery" }, { label: "Videos" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal leading-relaxed max-w-4xl mx-auto text-center mb-16 text-lg">
            Watch Ishan Pharmacy in action — moot court performances, court visit documentaries, faculty talks, student testimonials; subscribe to the YouTube channel to stay updated.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v: any, i: number) => (
              <div key={v.title || v.ytId || i} className={`reveal delay-${Math.min(i % 3, 2)}00 group rounded-xl border bg-card overflow-hidden hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-shadow cursor-pointer`}>
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                  {v.ytId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.ytId}`}
                      title={v.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full relative group/thumb cursor-pointer bg-navy-dark">
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover/thumb:bg-gold group-hover/thumb:scale-110 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                          <svg className="w-6 h-6 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1 block">{v.category}</span>
                        <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2">{v.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Video placeholders shown — embed YouTube videos via CMS.</p>
        </div>
      </section>
    </Layout>
  );
}
