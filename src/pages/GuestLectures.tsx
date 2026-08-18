import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mic2, Calendar } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";

export default function GuestLecturesPage() {
  const { data } = usePharmacyData("guestlectures");
  const ref = useScrollReveal([data]);
  const current = data || {
    title: "Guest Lectures & Seminars",
    subtitle: "",
    overviewHeading: "",
    overviewContent: "",
    events: []
  };

  return (
    <Layout>
      <PageHeader title={current.title} subtitle={current.subtitle} breadcrumbs={[{ label: current.title }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Beyond Textbooks</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed prose max-w-none rich-text" dangerouslySetInnerHTML={{ __html: rt(current.overviewContent) }} />
            </div>
            <div className="reveal-right space-y-4">
              {(current.events || []).map((e: any, i: number) => (
                <div key={i} className="group p-6 rounded-2xl border bg-card hover:bg-muted transition-all duration-300">
                  {e.image && (
                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm border h-48">
                      <img src={e.image} alt={e.speaker} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                      <Mic2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{e.speaker}</h4>
                      <p className="text-xs text-foreground/50">{e.designation}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-sm font-bold text-navy leading-tight">{e.topic}</h5>
                    <p className="text-xs leading-relaxed italic">"{e.takeaways}"</p>
                    <div className="flex items-center gap-2 pt-2 text-xs font-bold text-gold uppercase tracking-widest">
                      <Calendar className="w-3 h-3" /><span>{e.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}