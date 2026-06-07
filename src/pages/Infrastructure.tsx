import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Wifi, Monitor, BookOpen, Building2, Cctv, MapPin, ArrowRight, Scale } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const facilities = [
  { icon: Building2, title: "Moot Court Hall", desc: "A realistic High Court environment for regular clinical training, oral advocacy practice, and national competitions.", link: "/moot-court" },
  { icon: BookOpen, title: "Pharmacy Library", desc: "Extensive collection of pharmaceutical texts, law reports (AIR, SCC), and international journals with a dedicated research wing.", link: "/library" },
  { icon: Monitor, title: "Digital Research Lab", desc: "High-speed IT lab with 24/7 access to Manupatra, SCC Online, and LexisNexis for comprehensive pharmaceutical research.", link: "/it-lab" },
  { icon: Scale, title: "Legal Aid Clinic", desc: "A dedicated facility for community service where students provide free legal counseling under expert supervision.", link: "/legal-aid-cell" },
  { icon: Monitor, title: "Smart Classrooms", desc: "Modern air-conditioned lecture halls equipped with AV systems for interactive legal discussions and case presentations." },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "Seamless connectivity across the campus to support digital learning and research terminals." },
];

export default function InfrastructurePage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");
  const intro = `Ishan Institute of Pharmacy's campus is strategically located in Knowledge Park III, Greater Noida, offering a specialized environment designed for pharmaceutical scholarship and professional training. The campus is built on a foundation of tradition and modern infrastructure, providing a premium learning experience for aspiring advocates.

Our facilities include a high-tech Moot Court Hall, a comprehensive pharmacy library with digital research terminals, and a dedicated Pharmacy Practice Cell for community service. We also provide smart classrooms and secure campus-wide Wi-Fi, ensuring that our students have access to the best tools for pharmaceutical research and advocacy.

The campus is highly accessible, situated in the heart of Greater Noida's educational hub and well-connected by major transport links, including the Pari Chowk Metro Station, making it an ideal choice for serious pharmacy professionals.`;

  return (
    <Layout>
      <PageHeader
        title="Campus Infrastructure"
        subtitle="Modern facilities designed to create an optimal learning environment"
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Infrastructure" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="reveal max-w-3xl mb-14">
            <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
              {intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="reveal rounded-2xl overflow-hidden border shadow-sm">
              <img src="https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" alt="Campus Building" className="w-full h-64 object-cover" />
            </div>
            <div className="reveal delay-100 rounded-2xl overflow-hidden border shadow-sm">
              <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Library-2-1024x769.jpg" alt="Institutional Facility" className="w-full h-64 object-cover" />
            </div>
            <div className="reveal delay-200 rounded-2xl overflow-hidden border shadow-sm">
              <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Girls-Hostel-1024x768.jpg" alt="Campus Infrastructure" className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              const content = (
                <div className={`reveal delay-${Math.min(i, 5)}00 bg-card rounded-xl border p-6 h-full hover:shadow-[0_8px_30px_hsl(var(--navy)/0.08)] transition-shadow ${f.link ? 'group cursor-pointer' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed">{f.desc}</p>
                  {f.link && (
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              );
              return f.link ? <Link key={f.title} to={f.link}>{content}</Link> : <div key={f.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
