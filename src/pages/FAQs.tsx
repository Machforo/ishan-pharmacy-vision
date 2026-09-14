import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";
import { PhoneCall } from "lucide-react";

const defaultFaqList = [
  {
    category: "Admissions & Eligibility",
    q: "What is the eligibility criteria for admission into the B.Pharm program?",
    a: "Candidates must have passed 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics or Biology, securing at least 50% aggregate marks (45% for SC/ST candidates) from a recognized board. Direct admission under institutional quota and CUET/UPTAC counselling seats are available."
  },
  {
    category: "Admissions & Eligibility",
    q: "Is Ishan Institute of Pharmacy approved by the Pharmacy Council of India (PCI)?",
    a: "Yes, Ishan Institute of Pharmacy is permanently approved by the Pharmacy Council of India (PCI) under Section 12 of the Pharmacy Act, 1948. Our B.Pharm is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, and D.Pharm is affiliated with the Board of Technical Education, Uttar Pradesh (BTE UP)."
  },
  {
    category: "Courses & Curricula",
    q: "What is the difference between B.Pharm and D.Pharm?",
    a: "Bachelor of Pharmacy (B.Pharm) is an intensive 4-year undergraduate degree designed for careers in pharmaceutical R&D, drug formulation, regulatory affairs, quality assurance, hospital clinical pharmacy, and higher studies (M.Pharm/MBA). Diploma in Pharmacy (D.Pharm) is a 2-year foundation program focused on community pharmacy management, retail dispensing, and hospital dispensary operations."
  },
  {
    category: "Courses & Curricula",
    q: "Does the college have dedicated laboratories for practical training?",
    a: "Yes, the institute boasts 10 specialized, PCI-compliant laboratories including Pharmaceutical Chemistry, Pharmaceutics, Pharmacognosy, Pharmacology, Pharmacy Practice, Human Anatomy & Physiology, an Industrial Machine Room with rotary tablet punching presses, a crude drug museum, and an extensive medicinal herbal garden."
  },
  {
    category: "Placements & Internships",
    q: "How does the institute assist with industrial training and placements?",
    a: "Our dedicated Corporate Resource Centre (CRC) coordinates mandatory hospital internships, GMP plant visits, and on-campus recruitment drives. Top pharmaceutical corporations including Sun Pharma, Cipla, Mankind, Abbott, Dabur, and Apollo Hospitals actively recruit our graduates for roles in manufacturing, analytical QC, clinical research, and medical marketing."
  },
  {
    category: "Hostel & Campus Facilities",
    q: "Are separate hostel accommodations available for boys and girls?",
    a: "Yes, safe and hygienic residential hostels with 24/7 security, biometric access, nutritious mess dining, Wi-Fi connectivity, and power backup are available on campus for both boys and girls."
  }
];

export default function FAQsPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("faqs");
  const [selectedCat, setSelectedCat] = useState("All");

  const rawFaqs = Array.isArray(data) && data.length > 0
    ? data.map((f: any) => ({
        category: f.category || "General",
        q: f.question || f.q,
        a: f.answer || f.a
      }))
    : defaultFaqList;

  const categories = ["All", ...Array.from(new Set(rawFaqs.map(f => f.category)))];
  const filteredFaqs = selectedCat === "All" ? rawFaqs : rawFaqs.filter(f => f.category === selectedCat);

  return (
    <Layout>
      <DynamicPageSections
        pageId="faqs"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Frequently Asked Questions"
                  subtitle="Find answers to common questions regarding B.Pharm & D.Pharm admissions, PCI approvals, labs, and placements"
                  breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "FAQs" }]}
                />
              );

            case "category_tabs":
              return (
                <div className="container-wide pt-16 pb-4" ref={ref}>
                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCat(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          selectedCat === cat
                            ? "bg-navy text-white shadow-md shadow-navy/20"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              );

            case "faq_accordion":
              return (
                <section className="py-12 md:py-16">
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start max-w-6xl mx-auto">
                      <div>
                        <Accordion type="single" collapsible className="space-y-3">
                          {filteredFaqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl bg-card px-5 shadow-sm">
                              <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                                {faq.q}
                              </AccordionTrigger>
                              <AccordionContent className="text-sm leading-relaxed pb-4 text-foreground/80">
                                <div className="rich-text" dangerouslySetInnerHTML={{ __html: rt(faq.a) }} />
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      <div className="hidden lg:block sticky top-28 space-y-6">
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                            alt="Ishan Pharmacy Laboratories"
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                        <div className="p-6 rounded-2xl bg-gold-light/40 border border-gold/30">
                          <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center mb-3">
                            <PhoneCall className="w-5 h-5" />
                          </div>
                          <p className="text-sm font-bold text-navy mb-1">Still have questions?</p>
                          <p className="text-xs text-foreground/75 leading-relaxed mb-4">
                            Our pharmaceutical academic counselors are available Monday to Saturday, 9 AM to 6 PM.
                          </p>
                          <a
                            href="tel:+918448797700"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-navy/90 transition-colors shadow-sm"
                          >
                            Call: +91 8448797700
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return <EnquiryCTA />;

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}
