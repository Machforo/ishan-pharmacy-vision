import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Scale, Users, Gavel, GraduationCap } from "lucide-react";

export default function MootCourtPage() {
  const ref = useScrollReveal();

  const features = [
    {
      icon: Gavel,
      title: "Simulated Court Environment",
      desc: "A meticulously designed hall that replicates the atmosphere of a High Court, complete with judicial benches, witness boxes, and advocacy podia."
    },
    {
      icon: Users,
      title: "Regular Practice Sessions",
      desc: "Weekly moot court sessions are integrated into the curriculum, allowing students to sharpen their oral advocacy and legal reasoning skills."
    },
    {
      icon: Scale,
      title: "National Competitions",
      desc: "Ishan Pharmacy hosts and participates in prestigious National Moot Court Competitions, providing students with exposure to complex legal debates."
    },
    {
      icon: GraduationCap,
      title: "Expert Mentorship",
      desc: "Sessions are presided over by practicing senior advocates and retired judges who provide invaluable feedback on courtroom etiquette and pharmacy practice strategy."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Moot Court Hall" 
        subtitle="Where pharmaceutical theory meets the art of advocacy" 
        breadcrumbs={[{ label: "Infrastructure" }, { label: "Moot Court Hall" }]} 
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="reveal-left relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img 
                  src="https://placehold.co/1024x683/e2e8f0/1e293b?text=Pharmacy+Lab" 
                  alt="Moot Court Hall at Ishan Institute of Pharmacy" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="text-xs uppercase tracking-wider font-semibold">Clinical Training</p>
              </div>
            </div>

            <div className="reveal-right space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Clinical Legal Education</p>
              <h2 className="font-bold text-foreground leading-tight">
                Mastering the Art of Advocacy
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The Moot Court Hall at Ishan Institute of Pharmacy is the heart of our clinical legal education program. It is designed to provide students with a realistic courtroom experience, bridging the gap between classroom lectures and professional practice. 
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Participation in moot courts is mandatory for all students, ensuring they develop essential skills such as case analysis, pharmaceutical research, memorial drafting, and oral presentation. Our students are trained to handle pressure, think on their feet, and respect the decorum of the judicial process.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="reveal p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <f.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
