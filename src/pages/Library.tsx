import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";
export default function LibraryPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");
  const defaultImage = "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg";
  const library = data?.library;
  const content = library?.content;
  const specs = library?.specs?.length > 0 ? library.specs : [
    { label: "Total Titles", value: "10,000+" },
    { label: "Law Reports", value: "AIR, SCC, SCR" },
    { label: "Digital Access", value: "Manupatra, SCC Online" },
    { label: "Bare Acts", value: "150+ unique titles" },
    { label: "Reading Room", value: "150+ seats" },
    { label: "Timings", value: "8 AM – 8 PM" },
    { label: "Journals", value: "National & Int'l" },
    { label: "Borrowing", value: "4 books / 14 days" },
  ];
  return (
    <Layout>
      <PageHeader
        title="Pharmacy Library"
        subtitle="A specialized resource centre for pharmaceutical scholarship and research"
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Library" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] mb-10 border">
              <img src={defaultImage} alt="Ishan Institute of Pharmacy Library" className="w-full h-[400px] object-cover" />
            </div>
            <div className="reveal space-y-5 mb-12">
              {content ? (
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content}</p>
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">
                    The Pharmacy Library at Ishan Institute of Pharmacy is the academic cornerstone of our institution, meticulously curated to support the research needs of aspiring advocates and legal scholars. Our collection includes an extensive range of pharmaceutical texts, commentaries, and encyclopedias across diverse branches of law.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    We maintain complete sets of the All India Reporter (AIR), Supreme Court Cases (SCC), and Supreme Court Reports (SCR). To ensure our students stay abreast of contemporary developments, we provide 24/7 access to premier digital databases such as Manupatra and SCC Online. The library also features a dedicated reading zone and a digital research wing equipped with high-speed terminals.
                  </p>
                </>
              )}
            </div>
            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.label || i} className="p-4 rounded-xl border bg-card">
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
