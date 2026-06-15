import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FlaskConical, Microscope, BookOpen, Award } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const fallbackIcons = [FlaskConical, Microscope, BookOpen, Award];

export default function HumanAnatomyLabPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("facilities");
  
  const fallback = {
    title: "Human Anatomy Lab",
    subtitle: "State-of-the-art facility for pharmaceutical science students",
    overviewHeading: "Where Theory Meets Practice",
    overviewContent: "This laboratory is a fully equipped facility designed to provide students with comprehensive training. Students gain hands-on experience essential for careers in pharmaceutical R&D and quality control.\n\nThe lab supports the curricula with experiments aligned to PCI and university syllabus requirements, ensuring students are prepared for professional practice and higher education.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    highlights: [
      { title: "Advanced Equipment", description: "Equipped with modern apparatus for hands-on experiments." },
      { title: "Analytical Focus", description: "Comprehensive analytical training for professional development." },
      { title: "Research & Publications", description: "Faculty actively guide students in research projects." }
    ]
  };

  const pageData = data?.length > 0 ? data.find((d: any) => d.slug === "/human-anatomy") : null;
  const current = pageData || fallback;

  return (
    <Layout>
      <PageHeader
        title={current.title}
        subtitle={current.subtitle}
        breadcrumbs={[{ label: "Labs" }, { label: "Human Anatomy Lab" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Facility Overview</p>
              <h2 className="font-bold text-foreground leading-tight">{current.overviewHeading}</h2>
              <div className="text-foreground/70 leading-relaxed whitespace-pre-wrap prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: current.overviewContent }} />
            </div>
            <div className="reveal">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src={current.image} alt={current.title} className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {current.highlights.map((h: any, i: number) => {
              const Icon = fallbackIcons[i % fallbackIcons.length];
              return (
                <div key={h.title || i} className={`reveal delay-${Math.min(i, 3)}00 flex gap-5 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{h.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/70">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}