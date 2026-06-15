import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultFaqCategories = [];

export default function FAQsPage() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("faqs");

  // Since faqs endpoint returns a collection (array of items)
  const faqCategories = Array.isArray(data) && data.length > 0
    ? [{ category: "Frequently Asked Questions", faqs: data.map((f: any) => ({ q: f.question, a: f.answer })) }]
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
