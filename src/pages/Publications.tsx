import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  { title: "Novel Drug Delivery Systems for Enhanced Bioavailability", authors: "Dr. Sandeep Singh, Dr. Megha Gupta", journal: "Asian Journal of Pharmaceutics", year: "2024", doi: "#" },
  { title: "Phytochemical Analysis of Ocimum sanctum for Antimicrobial Activity", authors: "Prof. Amit Das, Ms. Anjali Sharma", journal: "Journal of Pharmacognosy", year: "2023", doi: "#" },
  { title: "Formulation and Evaluation of Sustained Release Tablets of Metformin", authors: "Dr. Sandeep Singh, Mr. Karan Bajaj", journal: "International Journal of Pharmaceutics", year: "2023", doi: "#" },
  { title: "In-Silico ADMET Prediction of Novel Antidiabetic Compounds", authors: "Mr. Vivek Verma, Ms. Neha Singh", journal: "Medicinal Chemistry Research", year: "2024", doi: "#" },
  { title: "Comparative Pharmacological Study of Herbal Adaptogenic Plants", authors: "Dr. Megha Gupta, Prof. Rajesh Khanna", journal: "Journal of Ethnopharmacology", year: "2022", doi: "#" },
  { title: "Quality Control Parameters for Herbal Formulations: A Review", authors: "Ms. Anjali Sharma, Prof. Amit Das", journal: "Pharmacognosy Reviews", year: "2023", doi: "#" },
];

export default function PublicationsPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader
        title="Research Publications"
        subtitle="Peer-reviewed research contributions by Ishan Pharmacy faculty and students"
        breadcrumbs={[{ label: "Research" }, { label: "Publications" }]}
      />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <p className="reveal text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            The faculty and students of Ishan Institute of Pharmacy are actively engaged in pharmaceutical research, regularly publishing in national and international peer-reviewed journals. Our research spans drug delivery, phytochemistry, medicinal chemistry, and clinical pharmacy.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {publications.map((p, i) => (
              <div key={p.title} className={`reveal delay-${Math.min(i, 4)}00 p-6 rounded-xl border bg-card hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5 text-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{p.authors}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">{p.journal}</span>
                      <span className="px-2.5 py-1 rounded-md bg-gold-light text-xs font-medium text-navy">{p.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
