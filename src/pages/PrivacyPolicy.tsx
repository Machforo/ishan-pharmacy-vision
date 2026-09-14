import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function PrivacyPolicyPage() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <DynamicPageSections
        pageId="privacy_policy"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Privacy Policy & Terms"
                  subtitle="How Ishan Educational Group protects and handles student and applicant personal data"
                  breadcrumbs={[{ label: "Governance" }, { label: "Privacy Policy" }]}
                />
              );

            case "policy_content":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                      <div className="reveal space-y-6">
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          Ishan Educational Group ("we," "us," "our") is committed to safeguarding the privacy and security of visitors to our websites (ishan.ac and pharmacy.ishan.ac). This Privacy Policy explains how we collect, store, protect, and process your personal information when you access our portal, submit admission inquiries, or pay fees online.
                        </p>
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
                            alt="Ishan Pharmacy Institutional Ethics"
                            className="w-full h-80 object-cover"
                          />
                        </div>
                      </div>

                      <div className="reveal delay-100 space-y-6 text-sm leading-relaxed text-foreground/80">
                        <div>
                          <h2 className="text-base font-bold text-foreground mb-1.5">1. Information We Collect</h2>
                          <p className="text-xs text-foreground/75 leading-relaxed">
                            We collect information voluntarily submitted through admission enquiry forms, application portals, and counseling appointments. This includes: candidate name, contact numbers, email address, academic marks (10+2 / CUET), parent details, and transaction reference numbers.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-base font-bold text-foreground mb-1.5">2. Usage of Information</h2>
                          <p className="text-xs text-foreground/75 leading-relaxed">
                            Collected information is utilized strictly to: process B.Pharm and D.Pharm applications, provide academic counseling, issue admission offer letters, send semester fee receipts, and fulfill regulatory compliance obligations under PCI and AKTU Lucknow.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-base font-bold text-foreground mb-1.5">3. Data Security & Confidentiality</h2>
                          <p className="text-xs text-foreground/75 leading-relaxed">
                            We implement industry-standard 256-bit SSL encryption, firewalls, and restricted database access protocols. We never sell, lease, or rent personal data to third-party commercial marketing agencies.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-base font-bold text-foreground mb-1.5">4. Cookies & Web Analytics</h2>
                          <p className="text-xs text-foreground/75 leading-relaxed">
                            Our portal uses minimal analytical cookies to optimize page loading speeds and understand visitor traffic trends. You may modify your browser settings to decline cookies at any time.
                          </p>
                        </div>

                        <div className="pt-4 border-t text-xs text-muted-foreground">
                          <p>
                            For inquiries regarding our data privacy practices, email <strong className="text-navy">info@ishan.ac</strong> or visit:
                          </p>
                          <p className="mt-1 font-medium text-foreground">
                            Ishan Institute of Pharmacy, Knowledge Park-III, Greater Noida, UP 201308.
                          </p>
                          <p className="mt-2 text-[11px] text-muted-foreground">Last updated: 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}
