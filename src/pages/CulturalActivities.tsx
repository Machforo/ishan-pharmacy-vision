import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function CulturalActivitiesPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");
  const cultural = data?.culturalActivities;
  const content = cultural?.content;
  const specs = cultural?.specs?.length > 0 ? cultural.specs : [
    { label: "Flagship Event", value: "Kshitiz Fest" },
    { label: "Activities", value: "Music, Dance, Drama, Arts" },
    { label: "Clubs", value: "Literary, Cultural, Tech" }
  ];

  return (
    <Layout>
      <PageHeader title="Cultural Activities" subtitle="Kshitiz fest, drama, music, dance, and creative expression at Ishan Institute of Pharmacy" breadcrumbs={[{ label: "Learning" }, { label: "Cultural Activities" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Inauguration-of-Spardha--1024x473.jpg" alt="Cultural Fest" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-4 rounded-xl shadow-xl font-bold hidden md:block">
                KSHITIZ FEST
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-foreground leading-tight">Celebrating Creative Excellence</h2>
            {content ? (
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content}</p>
            ) : (
              <>
                <p className="text-foreground/70 leading-relaxed">Cultural activities at Ishan Institute of Pharmacy are anchored by Kshitiz — the annual inter-college cultural festival that draws participation from across the Delhi NCR region. Spanning three days of music, dance, drama, fashion, art, and literary competitions, Kshitiz is a platform for students to showcase their talents beyond the classroom.</p>
                <p className="text-foreground/70 leading-relaxed">Throughout the year, Ishan Institute of Pharmacy organizes cultural events including Republic Day and Independence Day celebrations, talent shows, photography contests, rangoli competitions, and departmental cultural programs.</p>
              </>
            )}
            
            <h2 className="text-xl font-bold text-foreground">Cultural Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((s: any, i: number) => (
                <div key={s.label || i} className="px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80 flex items-center justify-between">
                   <span className="text-xs text-muted-foreground">{s.label}</span>
                   <span className="font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" alt="Dance Performance" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Orientation-Program-for-New-Batch-1024x628.jpg" alt="Cultural Event" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
