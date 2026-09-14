import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Calendar, Search, X } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultEvents = [];

export default function NewsEventsPage() {
  const { data: newsData } = usePharmacyData("news");
  const ref = useScrollReveal([newsData]);
  const events = newsData?.length > 0 
    ? newsData.map((e: any) => ({ ...e, excerpt: e.description })) 
    : defaultEvents;

  const categories = ["All", ...Array.from(new Set(events.map((e: any) => e.category))).filter(Boolean) as string[]];
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsSearch, setNewsSearch] = useState("");

  const filteredEvents = events.filter((e: any) => {
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    const matchesSearch = newsSearch.trim() === "" || 
      e.title.toLowerCase().includes(newsSearch.toLowerCase()) || 
      (e.excerpt || "").toLowerCase().includes(newsSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="News & Events"
        subtitle="Stay updated with the latest happenings at Ishan Pharmacy — scientific conferences, health awareness camps, seminars, and more"
        breadcrumbs={[{ label: "News & Events" }]}
      />
    ),
    featured_news: (
      <section key="featured_news" className="pt-16 pb-4" ref={ref}>
        <div className="container-wide">
          <div className="reveal max-w-2xl mx-auto mb-8 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search news, events, seminars..."
              value={newsSearch}
              onChange={(e) => setNewsSearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-card border rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm"
            />
            {newsSearch && (
              <button 
                onClick={() => setNewsSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="reveal flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all active:scale-[0.97] ${
                  activeCategory === cat ? "bg-navy text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
    ),
    events_list: (
      <section key="events_list" className="py-8">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((item: any, i: number) => (
              <article key={item.title || i} className={`reveal delay-${Math.min(i % 3, 2)}00 group bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-[0_8px_30px_hsl(var(--navy)/0.1)] transition-shadow cursor-pointer`}>
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground/20">{(item.category || item.title || "N")?.[0]}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {item.category && <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">{item.category}</span>}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground leading-snug mb-2 group-hover:text-navy transition-colors">{item.title}</h3>
                  {item.excerpt && <p className="text-xs leading-relaxed line-clamp-2 text-foreground/70">{item.excerpt}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "featured_news", "events_list", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="news_events"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
