import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function StudentPortalPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("studentportal");
  const content = data?.content;

  return (
    <Layout>
      <PageHeader title={content?.title || "Student Portal"} subtitle="Access timetables, attendance, and university results" breadcrumbs={[{ label: "Students" }, { label: "Student Portal" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content?.instructions || "Current Ishan Pharmacy students can access their academic profiles, attendance records, and library resources through the unified student portal. University examination results are available via the CCS University portal."}</p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg" alt="Ishan Pharmacy Student Resources" className="w-full h-80 object-cover" />
              </div>
            </div>
            
            <div className="space-y-6">
              {content?.link ? (
                <div className="flex justify-center">
                  <a href={content.link} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold text-foreground rounded-lg shadow-[0_4px_16px_hsl(var(--gold)/0.3)] hover:shadow-[0_6px_24px_hsl(var(--gold)/0.4)] transition-shadow active:scale-[0.97]">
                    Access Student Portal →
                  </a>
                </div>
              ) : (
                <div className="reveal delay-100 grid gap-4">
                  <a href="https://login.microsoftonline.com" target="_blank" rel="noopener" className="flex items-center gap-6 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-[#0078d4]/10 flex items-center justify-center"><span className="text-xl font-bold text-[#0078d4]">O</span></div>
                    <div>
                      <h3 className="font-semibold text-foreground">Office 365 Login</h3>
                      <p className="text-xs text-muted-foreground">Email, calendar, and OneDrive</p>
                    </div>
                  </a>
                  <a href="https://www.ccsuniversity.ac.in/result" target="_blank" rel="noopener" className="flex items-center gap-6 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-gold-light flex items-center justify-center"><span className="text-xl font-bold text-navy">R</span></div>
                    <div>
                      <h3 className="font-semibold text-foreground">CCS University Results</h3>
                      <p className="text-xs text-muted-foreground">Check examination results</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
