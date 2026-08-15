import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PrivacyPolicyPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed text-sm">
                Ishan Educational Group ("we," "us," "our") is committed to protecting the privacy of visitors to our websites (ishan.ac and all sub-sites including pharmacy.ishan.ac). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit forms.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" alt="Ishan Pharmacy Institutional Ethics" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 space-y-6 text-sm leading-relaxed">
              <h2 className="text-lg font-bold text-foreground">Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide when filling out enquiry forms, admission applications, feedback forms, or fee payment portals. This includes: name, email address, phone number, mailing address, date of birth, educational qualifications, and payment information.</p>
              <h2 className="text-lg font-bold text-foreground">How We Use Your Information</h2>
              <p>We use the information collected to: process admission applications, respond to enquiries, send academic communications, process fee payments, improve our website and services, comply with regulatory obligations, and maintain student records as required by UGC and university regulations.</p>
              <h2 className="text-lg font-bold text-foreground">Cookies</h2>
              <p>Our website may use cookies to enhance user experience. Cookies are small files stored on your device that help us understand website usage patterns. You may disable cookies through your browser settings, though this may affect certain website functionalities.</p>
              <h2 className="text-lg font-bold text-foreground">Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
              <h2 className="text-lg font-bold text-foreground">Contact Us</h2>
              <p>For questions about this Privacy Policy, contact us at <a href="mailto:info@ishan.ac" className="text-navy font-semibold">info@ishan.ac</a> or write to: Ishan Educational Group, Knowledge Park-III, Greater Noida, UP 201308.</p>
              <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
