import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";
import { Play, Sparkles } from "lucide-react";

export default function VideoGalleryPage() {
  const { data: videosData } = usePharmacyData("videos");
  const ref = useScrollReveal([videosData]);

  const getYTId = (url: string) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const defaultVideos = [
    {
      title: "Comprehensive Walkthrough: 10 Specialized Pharmacy Labs at Ishan",
      category: "Campus Tour",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ytId: ""
    },
    {
      title: "B.Pharm & D.Pharm Hands-on Industrial Formulations & Machine Room Demo",
      category: "Academics",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ytId: ""
    },
    {
      title: "Pharmacy Student Experiences & Top Corporate Placement Drives",
      category: "Testimonial",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ytId: ""
    }
  ];

  const videos = videosData?.length > 0 ? videosData.map((v: any) => ({
    ...v,
    ytId: getYTId(v.url)
  })) : defaultVideos;

  return (
    <Layout>
      <DynamicPageSections
        pageId="video_gallery"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Video Gallery"
                  subtitle="Visual insights into pharmaceutical laboratories, academic sessions, and campus life at Ishan Pharmacy"
                  breadcrumbs={[{ label: "Gallery" }, { label: "Videos" }]}
                />
              );

            case "video_grid":
              return (
                <section className="py-16 md:py-20" ref={ref}>
                  <div className="container-wide">
                    <p className="leading-relaxed max-w-4xl mx-auto text-center mb-14 text-lg text-foreground/80">
                      Watch Ishan Pharmacy in action — advanced laboratory practicals, industrial manufacturing unit visits, scientific lectures, National Pharmacy Week events, and student testimonials.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos.map((v: any, i: number) => (
                        <div
                          key={v.title || v.ytId || i}
                          className={`reveal delay-${Math.min(i % 3, 2)}00 group rounded-xl border bg-card overflow-hidden hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-all`}
                        >
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
                              <div className="w-full h-full relative group/thumb cursor-pointer bg-slate-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center group-hover/thumb:scale-110 transition-transform shadow-lg shadow-gold/30 text-navy">
                                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                                  </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                  <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1 block">
                                    {v.category || "Pharmacy Tour"}
                                  </span>
                                  <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2">
                                    {v.title}
                                  </h3>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "campus_tours":
              return (
                <section className="py-12 bg-muted/30 border-y">
                  <div className="container-wide text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-bold uppercase tracking-wider mb-4">
                      <Sparkles className="w-3.5 h-3.5" /> Virtual Experience
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Schedule a Personalized In-Person or Guided Lab Walkthrough</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Experience our rotary tablet punch, dissolution testing systems, crude drug museum, and botanical garden live on campus with our faculty mentors.
                    </p>
                    <a
                      href="/admissions-enquiry"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors shadow-sm"
                    >
                      Book a Lab Tour
                    </a>
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
