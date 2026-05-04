import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function BestPracticesPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  // Schema: bestPractices is an array of { title, content }
  const practices: Array<{title:string;content:string}> = data?.bestPractices?.length > 0 ? data.bestPractices : [];
  const legacyContent = practices.length === 0 ? null : null; // just to keep clarity

  return (
    <Layout>
      <PageHeader
        title="Best Practices"
        subtitle="NAAC-documented institutional best practices that define Ishan Pharmacy's excellence"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Best Practices" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto prose prose-foreground">
            <div className="reveal space-y-8">
              {practices.length > 0 ? (
                practices.map((p, i) => (
                  <div key={p.title || i} className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-bold text-foreground mb-3">{i+1}. {p.title}</h2>
                    <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{p.content}</p>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">
                    Ishan Institute of Pharmacy is committed to bridging the gap between classroom theory and courtroom practice. Our best practices are systematically documented for NAAC peer review, ensuring that every initiative contributes to the professional and ethical development of our aspiring advocates.
                  </p>
                  <div className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-bold text-foreground mb-3">1. Integrated Clinical Legal Education</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Starting from the first year, students are exposed to real-world legal proceedings through structured court visits, jail visits, and police station observations. This practice ensures that students understand the procedural nuances of the Indian legal system and the practical challenges of litigation.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-bold text-foreground mb-3">2. Moot Court as a Core Pedagogy</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Beyond theoretical lectures, we utilize our high-tech Moot Court Hall for mandatory simulation exercises. Every student is mentored in memorial drafting and oral advocacy, preparing them for national-level competitions and successful professional careers in the higher judiciary.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-bold text-foreground mb-3">3. Community Legal Aid & Social Advocacy</h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Our Pharmacy Practice Cell actively organizes awareness camps in neighboring villages, where students provide free legal counseling under the supervision of faculty advocates. This practice fosters a sense of social responsibility and provides students with live experience in dealing with diverse pharmacy practice issues.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border bg-card">
                    <h2 className="text-xl font-bold text-foreground mb-3">Institutional Outcomes</h2>
                    <p className="text-foreground/70 leading-relaxed italic">
                      These practices have resulted in a significant increase in student participation in national legal events, higher success rates in judicial examinations, and a growing reputation for producing practice-ready pharmacy professionals.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
