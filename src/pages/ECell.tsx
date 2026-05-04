import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lightbulb, Rocket, Users, Briefcase, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ECellPage() {
  const ref = useScrollReveal();

  const offerings = [
    {
      title: "Business Plan Workshops",
      description: "Structured sessions to help students transform ideas into viable business models.",
      icon: <Lightbulb className="w-6 h-6 text-gold" />,
    },
    {
      title: "Startup Mentorship",
      description: "Direct access to industry experts and successful alumni entrepreneurs.",
      icon: <Users className="w-6 h-6 text-gold" />,
    },
    {
      title: "Pitch Competitions",
      description: "Platforms to pitch ideas to faculty and industry panels for feedback.",
      icon: <Trophy className="w-6 h-6 text-gold" />,
    },
    {
      title: "Incubation Support",
      description: "Guidance on prototyping, legal registration, and early-stage growth.",
      icon: <Rocket className="w-6 h-6 text-gold" />,
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Entrepreneurship Cell & Internships"
        subtitle="Nurturing the next generation of business leaders and creators."
        breadcrumbs={[{ label: "E-Cell & Internships" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About E-Cell</p>
              <h2 className="font-bold text-foreground leading-tight">
                Fueling Innovation at Ishan Institute of Pharmacy
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The Entrepreneurship Cell at Ishan Institute of Pharmacy is established to nurture business creators. We provide a platform for students to ideate, prototype, and pitch their business ideas. Mentored by experienced faculty and industry experts, the E-Cell bridges the gap between academic theory and real-world business execution.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {offerings.map((o, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">{o.icon}</div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground">{o.title}</h4>
                      <p className="text-xs leading-relaxed">{o.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right bg-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 space-y-6">
                <Briefcase className="w-12 h-12 text-gold" />
                <h3 className="font-bold leading-tight">Internship Programme</h3>
                <p className="text-white/70 leading-relaxed">
                  Our mandatory 4-8 week industry internship programme provides students with essential exposure to corporate environments. The Internship Coordinator facilitates placements across BFSI, IT, Retail, and Manufacturing sectors.
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-center gap-2">• Dedicated internship placement support</li>
                  <li className="flex items-center gap-2">• Corporate tie-ups for live projects</li>
                  <li className="flex items-center gap-2">• Mentored experiential learning</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all pt-4">
                  Enquire about Internships <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Alumni Spotlight</p>
            <h2 className="text-3xl font-bold text-foreground">Entrepreneurial Success Stories</h2>
            <p className="text-foreground/70">
              Many Ishan Institute of Pharmacy graduates have successfully launched their own ventures, serving as role models for current students. From technology startups to consulting firms, our alumni network continues to inspire the next generation of creators.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
