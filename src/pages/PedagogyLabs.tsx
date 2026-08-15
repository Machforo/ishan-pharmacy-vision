import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, Gavel, Video, Monitor, BookOpen, Scale } from "lucide-react";

export default function MootCourtPage() {
  const ref = useScrollReveal();

  const facilities = [
    {
      title: "High-Tech Moot Court Hall",
      description: "A professionally designed courtroom environment with a judge's bench, witness box, and counsel tables.",
      icon: <Gavel className="w-6 h-6 text-gold" />,
    },
    {
      title: "Video Recording & Review",
      description: "Equipped with HD cameras to record student arguments for self-evaluation and faculty feedback.",
      icon: <Video className="w-6 h-6 text-gold" />,
    },
    {
      title: "Digital Research Wing",
      description: "High-speed terminals with access to SCC Online and Manupatra for instant case law verification.",
      icon: <Monitor className="w-6 h-6 text-gold" />,
    },
    {
      title: "Memorial Drafting Zone",
      description: "Dedicated workspace for teams to collaborate on research and drafting of legal memorials.",
      icon: <BookOpen className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Moot Court & Clinical Training"
        subtitle="Bridging the gap between pharmaceutical theory and courtroom practice through intensive clinical training."
        breadcrumbs={[{ label: "Learning", href: "/news-events" }, { label: "Moot Court" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Advocacy Training</p>
              <h2 className="font-bold text-foreground leading-tight">
                Simulated Excellence for Future Advocates
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Ishan Pharmacy provides a state-of-the-art Moot Court Hall that simulates a realistic High Court environment. This facility is central to our Clinical Legal Education model, where students learn to research, draft memorials, and present oral arguments before a bench of legal experts and practicing advocates.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Mandatory mooting for all students starting from Year 1</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Structured training in pharmaceutical research and memorial drafting</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <p className="text-foreground/80 font-medium">Exposure to national and international moot court competitions</p>
                </div>
              </div>
            </div>

            <div className="reveal-right grid sm:grid-cols-2 gap-6">
              {facilities.map((f, i) => (
                <div key={i} className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Scale className="w-12 h-12 text-gold mx-auto" />
            <h2 className="font-bold text-foreground">Clinical Legal Education</h2>
            <p className="text-foreground/70 leading-relaxed">
              Our clinical training goes beyond mooting to include health awareness camps, client counseling sessions, and court visits. We ensure that every Ishan Pharmacy student is not just a degree holder, but a practice-ready pharmacy professional equipped with the ethics and skills required for modern advocacy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
