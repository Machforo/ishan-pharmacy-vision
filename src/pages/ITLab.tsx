import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, Wifi, Clock, Shield } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultSpecs = [
  { label: "Research Terminals", value: "60+ high-end systems" },
  { label: "Pharmaceutical Databases", value: "Manupatra, SCC Online, LexisNexis" },
  { label: "Internet Speed", value: "100 Mbps dedicated" },
  { label: "Operating Systems", value: "Windows 11 Professional" },
  { label: "Software", value: "MS Office 365, Grammarly, Turnitin (Plagiarism Check)" },
  { label: "Timings", value: "8:30 AM – 6:30 PM (Mon-Sat)" },
];

export default function ITLabPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");
  const itLab = data?.itLab;
  const content = itLab?.content;
  const specs = itLab?.specs?.length > 0 ? itLab.specs : defaultSpecs;

  return (
    <Layout>
      <PageHeader
        title="Digital Research Lab"
        subtitle="State-of-the-art computing facilities for comprehensive pharmaceutical research and drafting"
        breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Research Lab" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden border mb-12 shadow-sm">
              <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Online-Learning-1024x710.jpg" alt="Digital Research Lab" className="w-full h-80 object-cover" />
            </div>
            <div className="reveal space-y-5 mb-12">
              {content ? (
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content}</p>
              ) : (
                <>
                  <p className="text-foreground/70 leading-relaxed">
                    The Digital Research Lab at Ishan Institute of Pharmacy is designed to provide students with the technological tools essential for modern pharmacy practice. In an era where case law research and memorial drafting have become digitized, our lab ensures that students are proficient in using premier pharmaceutical databases.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    The lab is equipped with 60+ high-end terminals featuring 24/7 access to Manupatra, SCC Online, and LexisNexis. Beyond research, the facility supports students in mastering legal drafting software, document management, and academic writing tools like Grammarly and Turnitin.
                  </p>
                </>
              )}
            </div>

            <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {specs.map((s: any, i: number) => (
                <div key={s.label || i} className="p-4 rounded-xl border bg-card">
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="text-sm font-semibold text-foreground">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="reveal delay-200 rounded-xl border bg-section-alt p-6">
              <h3 className="font-semibold text-foreground mb-3">Lab Rules</h3>
              <ul className="space-y-2 text-sm">
                <li>• Students must carry their ID card to access the lab</li>
                <li>• No food or beverages inside the lab area</li>
                <li>• Personal USB drives require prior scanning approval</li>
                <li>• Report any hardware/software issues to the lab attendant immediately</li>
                <li>• Save work regularly — the institute is not responsible for data loss</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
