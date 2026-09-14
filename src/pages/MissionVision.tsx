import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Eye, Compass } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function MissionVisionPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("aboutus");
  
  const mv = data?.missionVision;
  
  const vision = mv?.vision || `To be a global center of excellence in pharmaceutical education, recognized for producing ethical healthcare professionals, research innovators, and industry leaders who serve the cause of public health with integrity.`;
  
  const missionStr = mv?.mission;
  const missionList = missionStr ? missionStr.split('\n').filter((x: string) => x.trim() !== '') : [
    "To provide practice-oriented pharmaceutical education that integrates rigorous academic scholarship with laboratory training and clinical exposure.",
    "To foster critical thinking, ethical reasoning, and a profound understanding of patient care among our students.",
    "To serve the community through active health awareness camps and medical aid programs, bridging the gap between healthcare and society.",
    "To prepare students for diverse pharmaceutical careers in manufacturing, research, clinical practice, and public health through expert mentorship.",
  ];

  const defaultCoreValues: any[] = [];

  const coreValuesStr = mv?.coreValues;
  const coreValues = coreValuesStr
    ? coreValuesStr.split('\n').filter((x: string) => x.trim() !== '')
        .map((v: string) => ({ title: v.trim(), description: '' }))
    : defaultCoreValues;

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Mission & Vision"
        subtitle="Guiding principles that drive pharmaceutical excellence and ethical practice at Ishan Pharmacy"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />
    ),
    banner_image: (
      <div key="banner_image" className="container-wide mt-10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9]">
            <img src={mv?.image1 || "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"} alt="Ishan Pharmacy Excellence" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9] hidden sm:block">
            <img src={mv?.image2 || "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"} alt="Ishan Pharmacy Campus" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    ),
    vision: (
      <section key="vision" className="py-12 md:py-16" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Eye className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg leading-relaxed whitespace-pre-wrap">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    mission: (
      <section key="mission" className="py-12 md:py-16 bg-section-alt">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="font-bold text-foreground mb-4">Our Mission</h2>
                <ul className="space-y-3">
                  {missionList.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                      <p className="text-foreground/70 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    core_values: coreValues.length > 0 ? (
      <section key="core_values" className="py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gold-light flex items-center justify-center shrink-0">
                <Compass className="w-8 h-8 text-navy" />
              </div>
              <div>
                <h2 className="font-bold text-foreground mb-4">Core Values</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coreValues.map((v: any, i: number) => (
                    <div key={v.title || i} className="p-4 rounded-xl border bg-card">
                      <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{v.description || v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : null,
    cta: <EnquiryCTA key="cta" />
  };

  const defaultOrder = ["header", "banner_image", "vision", "mission", "core_values", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="mission_vision"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
