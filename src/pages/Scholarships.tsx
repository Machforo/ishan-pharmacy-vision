import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, ExternalLink } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import PageGallery from "@/components/PageGallery";

const defaultScholarships = [];

export default function ScholarshipsPage() {
  const { data } = usePharmacyData("admissions");
  const ref = useScrollReveal([data]);
  // Schema: scholarships = [{category, concession, description}]
  const scholarships = data?.scholarships?.length > 0 ? data.scholarships : defaultScholarships;

  return (
    <Layout>
      <PageHeader
        title="Scholarships"
        subtitle="Financial support options for deserving healthcare aspirants across all pharmacy programs"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Scholarships" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed">
                Ishan Pharmacy believes that financial constraints should never hinder a student's access to quality pharmaceutical education. We offer multiple scholarship schemes — including merit awards, category-based support, and need-based concessions — to ensure that every deserving student can pursue their healthcare career.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Student Success" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              {scholarships.slice(0, 3).map((s: any, i: number) => (
                <div key={s.category || i} className={`reveal delay-${Math.min(i, 5)}00 rounded-xl border bg-card p-6`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">{s.category}</h3>
                      <div className="grid gap-2 text-sm">
                        <div><span className="text-muted-foreground block text-xs">Benefit:</span><span className="text-foreground/80 font-medium">{s.concession}</span></div>
                        <div><span className="text-muted-foreground block text-xs">Details:</span><span className="text-foreground/80">{s.description}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.slice(3).map((s: any, i: number) => (
              <div key={s.category || i} className={`reveal delay-${Math.min(i, 5)}00 rounded-xl border bg-card p-6`}>
                <h3 className="font-semibold text-foreground mb-3">{s.category}</h3>
                <p className="text-sm text-foreground/80 mb-2 font-medium">{s.concession}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto mt-12 p-6 rounded-xl bg-section-alt border text-center">
            <p className="text-sm mb-3">Government Scholarships (SC/ST/OBC) are processed through:</p>
            <a href="https://scholarship.up.gov.in" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
              UP Scholarship Portal <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <PageGallery images={data?.pageGallery} />
      <EnquiryCTA />
    </Layout>
  );
}
