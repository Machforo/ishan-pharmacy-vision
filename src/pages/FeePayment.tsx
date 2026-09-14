import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { CreditCard, ShieldCheck, FileCheck } from "lucide-react";

export default function FeePaymentPage() {
  const { data } = usePharmacyData("feepayment");
  const ref = useScrollReveal([data]);
  const content = data || {};

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title={content?.title || "Fee Payment"}
        subtitle="Pay your fees online securely through our portal"
        breadcrumbs={[{ label: "Students" }, { label: "Fee Payment" }]}
      />
    ),
    fee_schedule: (
      <section key="fee_schedule" className="pt-16 pb-8" ref={ref}>
        <div className="container-wide max-w-5xl mx-auto">
          {content?.bannerImage && (
            <div className="reveal mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
              <ImageWithFallback src={content.bannerImage} alt="Banner" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal rounded-2xl overflow-hidden shadow-2xl border">
              <ImageWithFallback src={content?.image || "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1024&q=80"} alt="Online Services" className="w-full h-80 object-cover" />
            </div>
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Online Fee Payment Instructions</h2>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                {content?.instructions || "Pay tuition fees, hostel charges, and examination fees online through the Ishan Fee Payment Portal. Select Ishan Pharmacy as your institution, choose your program (B.Pharm / D.Pharm), and complete payment via net banking, UPI, or card. Download your receipt immediately after payment."}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80 p-3 rounded-lg border bg-card">
                  <CreditCard className="w-4 h-4 text-gold shrink-0" /> Net Banking / UPI / Cards
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80 p-3 rounded-lg border bg-card">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" /> 100% Secure Gateway
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80 p-3 rounded-lg border bg-card">
                  <FileCheck className="w-4 h-4 text-gold shrink-0" /> Instant Receipt Generation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    online_payment_gateway: (
      <section key="online_payment_gateway" className="py-8">
        <div className="container-wide max-w-xl mx-auto text-center">
          <div className="p-8 rounded-2xl border bg-card shadow-lg space-y-6">
            <h3 className="text-xl font-bold text-foreground">Proceed to Payment Gateway</h3>
            <p className="text-sm text-foreground/70">You will be redirected to the secure official fee collection portal.</p>
            <a href={content?.link || "https://fee.ishan.ac"} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 w-full py-4 text-base font-bold bg-gold text-navy rounded-xl shadow-[0_4px_16px_hsl(var(--gold)/0.3)] hover:bg-gold-light transition-all active:scale-[0.97]">
              Go to Fee Payment Portal →
            </a>
          </div>
        </div>
      </section>
    ),
    helpdesk: (
      <section key="helpdesk" className="py-8">
        <div className="container-wide max-w-xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-section-alt border text-sm text-muted-foreground">
            For payment issues or fee structure verification, contact the accounts office at{" "}
            <a href="tel:+918448797700" className="text-navy font-bold hover:underline">
              8448797700
            </a>{" "}
            or email{" "}
            <a href="mailto:accounts@ishan.ac" className="text-navy font-bold hover:underline">
              accounts@ishan.ac
            </a>
          </div>
        </div>
      </section>
    ),
    cta: (
      <div key="cta">
        {content?.images && content.images.length > 0 && (
          <div className="container-wide py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.images.map((img: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback src={img.url} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
        <EnquiryCTA />
      </div>
    )
  };

  const defaultOrder = ["header", "fee_schedule", "online_payment_gateway", "helpdesk", "cta"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="fee_payment"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
