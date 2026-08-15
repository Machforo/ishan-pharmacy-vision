import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, Users, Mic2, Briefcase, Trophy } from "lucide-react";

export default function DebatesGDPage() {
  const ref = useScrollReveal();

  const activities = [
    {
      title: "Constitutional & Legal Debates",
      description: "Regular sessions on landmark judgments, constitutional amendments, and evolving legal doctrines.",
      icon: <Mic2 className="w-6 h-6 text-gold" />,
    },
    {
      title: "Case Law Analysis GDs",
      description: "Group discussions centered around recent High Court and Supreme Court rulings and their societal impact.",
      icon: <Briefcase className="w-6 h-6 text-gold" />,
    },
    {
      title: "Mock Parliamentary Sessions",
      description: "Specialized training where students debate bills, policies, and legislative procedures.",
      icon: <Trophy className="w-6 h-6 text-gold" />,
    },
    {
      title: "Extempore Legal Arguments",
      description: "Spontaneous drills to improve quick thinking, legal reasoning, and oral advocacy skills.",
      icon: <MessageSquare className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Debates & Group Discussions"
        subtitle="Articulating legal arguments, defending perspectives, and building the foundations of advocacy."
        breadcrumbs={[{ label: "Learning", href: "/news-events" }, { label: "Debates & GD" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Advocacy Culture</p>
              <h2 className="font-bold text-foreground leading-tight">
                Preparing Students for India's Courtrooms
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                At Ishan Pharmacy, we believe the ability to articulate and defend legal arguments is as important as academic excellence. Regular debates and GD sessions prepare students for litigation, corporate pharmacy practice, and competitive exams like the Judiciary. This culture of open dialogue helps build confidence, critical thinking, and the ability to view a case from multiple legal perspectives.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold text-foreground">Participation includes:</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-sm"><Users className="w-4 h-4 text-gold" /> Inter-college competitions</li>
                  <li className="flex items-center gap-2 text-sm"><Users className="w-4 h-4 text-gold" /> Campus debate society</li>
                  <li className="flex items-center gap-2 text-sm"><Users className="w-4 h-4 text-gold" /> Faculty-led workshops</li>
                  <li className="flex items-center gap-2 text-sm"><Users className="w-4 h-4 text-gold" /> Alumni mentoring sessions</li>
                </ul>
              </div>
            </div>

            <div className="reveal-right grid gap-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border bg-card hover:bg-muted transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    {a.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">{a.title}</h3>
                    <p className="text-sm">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-bold">Past Event Highlights</h2>
            <p className="text-white/70 leading-relaxed">
              Our students have consistently won accolades at regional and national debate competitions. Notable wins include the Greater Noida Inter-College Management Debate and the CCS University Zonal Cultural Meet.
            </p>
            <div className="pt-4">
              <p className="text-gold font-bold">Open to all students. Check the Events Calendar for the next session.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
