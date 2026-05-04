import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultFaqCategories = [
  {
    category: "Admissions",
    faqs: [
      { q: "What is the admission process for D.Pharm and B.Pharm?", a: "Admissions at Ishan Pharmacy are based on merit in qualifying examinations (10+2) and UPSEE/CUET counseling, followed by a personal interview." },
      { q: "What are the eligibility criteria for the programs?", a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with at least 50% marks (45% for SC/ST) from a recognized board." },
      { q: "Can I apply for admission before my 12th results are out?", a: "Yes, you can apply provisionally. Your admission will be finalized once you submit your qualifying marksheets meeting the eligibility criteria." },
      { q: "How do I contact an admissions counsellor?", a: "You can reach our admissions helpline at +91 8448797700 or use the WhatsApp button on the website for immediate assistance." },
    ],
  },
  {
    category: "Programmes",
    faqs: [
      { q: "Is Ishan Pharmacy approved by the Pharmacy Council of India?", a: "Yes, Ishan Institute of Pharmacy is fully approved by the Pharmacy Council of India (PCI) and affiliated with AKTU and BTE UP." },
      { q: "What is the focus of practical training?", a: "Practical training is emphasized through our 10 specialized laboratories, ensuring hands-on experience in drug formulation, analysis, and clinical pharmacology." },
      { q: "Are industrial visits mandatory?", a: "Yes, we regularly organize industrial visits to leading pharmaceutical manufacturing units to give students a real-world understanding of large-scale production." },
    ],
  },
  {
    category: "Fees & Scholarships",
    faqs: [
      { q: "What kind of scholarships are available?", a: "We offer merit-based scholarships based on academic excellence in 10+2 and special categories as per government norms." },
      { q: "Are installment options available for fee payment?", a: "Yes, annual fees can be paid in semester-wise installments. Our accounts office can provide a detailed schedule at the time of admission." },
      { q: "What are the payment modes accepted?", a: "Fees can be paid online via our portal (fee.ishan.ac), through bank demand drafts, or direct bank transfers." },
    ],
  },
  {
    category: "Campus Life",
    faqs: [
      { q: "What facilities are available in the Library?", a: "Our specialized medical library houses thousands of pharmacy books, journals, and reports, along with digital access to research databases." },
      { q: "What are the hostel facilities like?", a: "We provide separate, secure hostels for boys and girls with 24/7 security, Wi-Fi, and nutritious mess facilities within the Knowledge Park campus." },
      { q: "Are there clinical visits for first-year students?", a: "Yes, we initiate health awareness programs and preliminary clinical exposure from the first year itself to build a strong practical foundation." },
    ],
  },
  {
    category: "Career Outcomes",
    faqs: [
      { q: "How does the placement cell support pharmacy students?", a: "The cell facilitates internships with top pharmaceutical companies and hospitals, and provides placement support for roles in manufacturing, QA/QC, and clinical research." },
      { q: "What career paths can I pursue after B.Pharm?", a: "Graduates can work as clinical pharmacists, drug inspectors, research scientists, QA/QC professionals, or pursue higher studies like M.Pharm and Pharm.D." },
    ],
  },
];

export default function FAQsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("admissions");

  // If API provides faqs array, group them into a single category; otherwise fall back to default
  const faqCategories = data?.faq?.length > 0
    ? [{ category: "Frequently Asked Questions", faqs: data.faq.map((f: any) => ({ q: f.question, a: f.answer })) }]
    : defaultFaqCategories;

  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common queries about admissions, fees, campus life, and career outcomes"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "FAQs" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-10">
              {faqCategories.map((cat, ci) => (
                <div key={cat.category} className={`reveal delay-${Math.min(ci, 4)}00`}>
                  <h2 className="text-xl font-bold text-foreground mb-4">{cat.category}</h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {cat.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`${ci}-${i}`} className="border rounded-lg bg-card px-5">
                        <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="reveal hidden lg:block sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border mb-6">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Campus Life" className="w-full h-[450px] object-cover" />
              </div>
              <div className="p-6 rounded-xl bg-gold-light border border-[hsl(var(--gold)/0.2)]">
                <p className="text-sm font-bold text-navy mb-2">Still have questions?</p>
                <p className="text-xs leading-relaxed">Our admissions counselors are available Monday to Saturday, 9 AM to 6 PM.</p>
                <a href="tel:+918448797700" className="inline-block mt-3 text-sm font-bold text-navy hover:underline">Call: +91 8448797700</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
