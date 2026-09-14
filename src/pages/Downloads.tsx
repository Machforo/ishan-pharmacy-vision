import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, Download } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function DownloadsPage() {
  const { data } = usePharmacyData("downloads");
  const ref = useScrollReveal([data]);

  const defaultFiles = [
    { name: "B.Pharm 4-Year PCI Standard Syllabus & Course Scheme", category: "Academic Syllabus", fileType: "PDF", size: "2.4 MB", url: "#" },
    { name: "D.Pharm 2-Year PCI Education Regulations 2020 Scheme", category: "Academic Syllabus", fileType: "PDF", size: "1.8 MB", url: "#" },
    { name: "Ishan Institute of Pharmacy Information Brochure 2026", category: "Admissions", fileType: "PDF", size: "4.2 MB", url: "#" },
    { name: "Laboratory Safety Manual & Good Laboratory Practices (GLP) Handbook", category: "Lab Guidelines", fileType: "PDF", size: "1.2 MB", url: "#" },
    { name: "Anti-Ragging Undertaking & Student Affidavit Form", category: "Forms", fileType: "PDF", size: "350 KB", url: "#" },
    { name: "Hostel Rules & Residential Accommodation Form", category: "Campus", fileType: "PDF", size: "520 KB", url: "#" }
  ];

  const current = data || {
    title: "Downloads & Resources",
    subtitle: "Syllabi, academic regulations, admission brochures, and mandatory forms",
    overview: "Current and prospective students of Ishan Institute of Pharmacy can download official syllabi prescribed by the Pharmacy Council of India (PCI), academic calendars, laboratory safety manuals, and institutional forms here.",
    image: "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg",
    files: defaultFiles
  };

  const fileList = current.files && current.files.length > 0 ? current.files : defaultFiles;

  return (
    <Layout>
      <DynamicPageSections
        pageId="downloads"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={current.title || "Downloads & Resources"}
                  subtitle={current.subtitle || "Syllabi, academic regulations, admission brochures, and mandatory forms"}
                  breadcrumbs={[{ label: "Students" }, { label: "Downloads" }]}
                />
              );

            case "overview":
              return (
                <section className="py-16 md:py-20" ref={ref}>
                  <div className="container-wide">
                    {current.bannerImage && (
                      <div className="mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
                        <ImageWithFallback src={current.bannerImage} alt="Downloads Banner" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Official Academic & Institutional Documents</h2>
                        <div
                          className="text-foreground/75 leading-relaxed prose max-w-none rich-text"
                          dangerouslySetInnerHTML={{ __html: rt(current.overview) }}
                        />
                        <p className="text-xs text-muted-foreground">
                          All syllabi and forms adhere strictly to Pharmacy Council of India (PCI), AKTU, and BTE UP directives.
                        </p>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-xl border">
                        <ImageWithFallback
                          src={current.image || "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg"}
                          alt="Pharmacy Resources"
                          className="w-full h-72 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "forms_brochures":
              return (
                <section className="pb-20 md:pb-28">
                  <div className="container-wide max-w-4xl mx-auto">
                    <h3 className="font-bold text-xl text-foreground mb-6">Document Repository</h3>
                    <div className="space-y-3">
                      {fileList.map((d: any, i: number) => (
                        <div
                          key={d.name || i}
                          className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow"
                        >
                          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                            <FileText className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-foreground truncate">{d.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {d.category || "General"} · {d.fileType || "PDF"} {d.size ? `· ${d.size}` : ""}
                            </p>
                          </div>
                          <a
                            href={d.url || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 p-2.5 rounded-lg bg-muted hover:bg-navy hover:text-white transition-colors text-muted-foreground"
                            aria-label={`Download ${d.name}`}
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </div>
                      ))}
                    </div>
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