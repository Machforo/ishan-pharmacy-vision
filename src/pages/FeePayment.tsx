import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function FeePaymentPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("feepayment");
  const content = data?.content;

  return (
    <Layout>
      <PageHeader title={content?.title || "Fee Payment"} subtitle="Pay your fees online securely through our portal" breadcrumbs={[{ label: "Students" }, { label: "Fee Payment" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="reveal rounded-2xl overflow-hidden shadow-2xl border">
              <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Girls-Hostel-1024x768.jpg" alt="Online Services" className="w-full h-80 object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <div className="reveal space-y-4 mb-10">
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">{content?.instructions || "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Pharmacy as your institution, choose your program (BA LLB / LLB), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment."}</p>
                <p className="text-sm text-muted-foreground">For payment issues, contact the accounts office at <a href="tel:+918448797700" className="text-navy font-semibold">8448797700</a></p>
              </div>
              <a href={content?.link || "https://fee.ishan.ac"} target="_blank" rel="noopener" className="reveal delay-100 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-gold text-foreground rounded-lg shadow-[0_4px_16px_hsl(var(--gold)/0.3)] hover:shadow-[0_6px_24px_hsl(var(--gold)/0.4)] transition-shadow active:scale-[0.97]">
                Go to Fee Payment Portal →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
