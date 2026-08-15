import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, ShieldCheck, Scale, HandHelping } from "lucide-react";

export default function LegalAidCellPage() {
  const ref = useScrollReveal();

  const services = [
    {
      icon: HandHelping,
      title: "Free Legal Advice",
      desc: "Our students, under the supervision of faculty advocates, provide free legal counseling to the underprivileged and marginalized sections of society."
    },
    {
      icon: ShieldCheck,
      title: "Legal Awareness Camps",
      desc: "We organize regular outreach programs in nearby villages and urban clusters to educate citizens about their fundamental rights and legal remedies."
    },
    {
      icon: Scale,
      title: "Para-Medical Training",
      desc: "The cell trains students as Para-Medical Volunteers (PLVs), empowering them to assist the District Legal Services Authority (DLSA) in various social initiatives."
    },
    {
      icon: Heart,
      title: "Social Justice Advocacy",
      desc: "We focus on issues such as women's rights, consumer protection, and labor laws, fostering a spirit of public service among future advocates."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Pharmacy Practice Cell" 
        subtitle="Bridging the gap between law and society through community service" 
        breadcrumbs={[{ label: "Governance" }, { label: "Pharmacy Practice Cell" }]} 
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="reveal-left order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Community Outreach</p>
              <h2 className="font-bold text-foreground leading-tight">
                Empowering the Underprivileged
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                The Pharmacy Practice Cell at Ishan Institute of Pharmacy is dedicated to the constitutional mandate of ensuring that justice is not denied to any citizen by reason of economic or other disabilities. It serves as a vital link between the institution and the community.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                By participating in the Pharmacy Practice Cell, students gain practical experience in handling real-life legal problems while developing a deep sense of social responsibility. Our students assist in drafting representations, conducting field surveys, and organizing awareness rallies on critical pharmacy practice issues.
              </p>
            </div>

            <div className="reveal-right order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&auto=format&fit=crop" 
                  alt="Pharmacy Practice Cell Activity" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-gold text-navy p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-xs uppercase tracking-wider font-semibold">Camps Conducted</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="reveal p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <s.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
