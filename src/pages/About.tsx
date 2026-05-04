import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultMilestones = [
  { year: "1994", event: "Ishan Institute of Management & Technology established as the foundation of the group" },
  { year: "2017", event: "Ishan Institute of Pharmacy established with Pharmacy Council of India (PCI) approval" },
  { year: "2018", event: "Introduction of Diploma in Pharmacy (D.Pharm) program" },
  { year: "2021", event: "Launch of Bachelor of Pharmacy (B.Pharm) program" },
  { year: "2023", event: "Setup of 10 specialized, state-of-the-art pharmaceutical laboratories" },
  { year: "2025", event: "Crossed 500+ pharmacy alumni successfully placed in top healthcare institutions" },
];

export default function AboutPage() {
  const ref = useScrollReveal();
  const { data, isLoading } = useIshanLawData("aboutus");
  const fallback = `Established with a vision to revolutionize pharmaceutical education, Ishan Institute of Pharmacy stands as a premier center for healthcare studies in Knowledge Park, Greater Noida. Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU) and the Board of Technical Education, Uttar Pradesh (BTE UP), and recognized by the Pharmacy Council of India (PCI), our institution is committed to producing healthcare professionals who excel in both theory and practice.

Our curriculum is designed to bridge the gap between classroom learning and industrial/clinical reality. From the very first semester, students are exposed to practical applications through our specialized laboratories, regular industrial visits, and clinical training sessions. We offer two flagship professional programs: the Diploma in Pharmacy (D.Pharm) and the Bachelor of Pharmacy (B.Pharm), both structured to meet the modern demands of the pharmaceutical and healthcare sectors.

The Ishan Pharmacy campus provides a specialized environment for pharmaceutical scholarship, featuring 10 advanced laboratories, a comprehensive medical library, a herbal garden, and a dedicated Placement Cell. We invite aspiring healthcare professionals to join our community and build a formidable foundation for a career in clinical pharmacy, research, or pharmaceutical manufacturing.`;

  // Schema: aboutus.ourStory = { title, content } | aboutus.keyDifferentiators = [{title, description}]
  const ourStory = data?.ourStory;
  const milestones = data?.milestones?.length > 0 ? data.milestones : defaultMilestones;
  const keyDiffRaw = data?.keyDifferentiators;
  const keyDifferentiators: string[] = keyDiffRaw?.length > 0
    ? keyDiffRaw.map((k: any) => typeof k === 'string' ? k : k.title)
    : [
      "PCI Approved Professional Programs",
      "AKTU & BTE UP Affiliation",
      "10 Specialized Laboratories",
      "Dedicated Herbal Garden & Machine Room",
      "Regular Industrial Visits",
      "Clinical Training in Top Hospitals",
      "Dedicated Placement & Training Cell",
      "Experienced Faculty from Industry & Academia",
    ];

  return (
    <Layout>
      <PageHeader
        title={ourStory?.title || "About Ishan Pharmacy"}
        subtitle="Excellence in pharmaceutical education and practice-oriented learning since 2017."
        breadcrumbs={[{ label: "About Ishan Pharmacy" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)]">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Ishan-Campus.jpg" alt="Students and faculty at Ishan Institute of Pharmacy campus" className="w-full h-[400px] object-cover" />
              </div>
            </div>

            <div className="reveal-right space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Story</p>
              <h2 className="font-bold text-foreground leading-tight">
                {ourStory?.title || "Legacy of Shaping Professional Excellence"}
              </h2>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                {ourStory?.content || fallback}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-section-alt">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Our Journey</p>
            <h2 className="font-bold text-foreground">Milestones of Growth</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0 relative">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {milestones.map((m: any, i: number) => (
              <div key={m.year || i} className={`relative flex items-start gap-6 py-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-12`}>
                <div className={`shrink-0 w-11 h-11 rounded-full bg-gold flex items-center justify-center z-10 shadow-[0_2px_12px_hsl(var(--gold)/0.3)]`}>
                  <span className="text-xs font-bold text-foreground">{m.year}</span>
                </div>
                <div className={`bg-card rounded-xl border p-5 shadow-sm flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-sm text-foreground/80 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-foreground mb-8">Key Differentiators</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {keyDifferentiators.map((item: string, i: number) => (
                <div key={item || i} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
