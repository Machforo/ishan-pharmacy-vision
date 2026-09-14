import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import DynamicPageSections from "@/components/DynamicPageSections";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, MessageSquare, MapPin, Laptop } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdmissionsEnquiryPage() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", program: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    if (!nameRegex.test(form.name.trim())) {
      toast.error("Name should only contain alphabets and spaces.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (form.email && !emailRegex.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/pharmacy/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, email: form.email || form.phone + "@placeholder.com", message: "Programme: " + form.program + ". " + form.message, source: "Admissions Enquiry" }),
      });
      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }
      toast.success("Enquiry submitted successfully!");
      setSubmitted(true);
    } catch (err) {
      toast.error("Unable to submit enquiry. Please try again.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const defaultSections: Record<string, React.ReactNode> = {
    header: (
      <PageHeader
        key="header"
        title="Admissions Enquiry"
        subtitle="Start your journey with personal guidance and expert counselling."
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Enquiry" }]}
      />
    ),
    info: (
      <section key="info" className="py-12" ref={ref}>
        <div className="container-wide max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Begin Your Journey</h2>
          <p className="text-foreground/70 leading-relaxed">
            Choosing the right institution is a significant decision. At Ishan Institute of Pharmacy, we offer personal guidance to help you navigate your academic and career path. Whether you are curious about our programmes, eligibility, or campus life, our admissions team is here to provide all the information you need.
          </p>
          <div className="bg-gold-light p-6 rounded-2xl border border-gold/20 flex gap-4">
            <MapPin className="w-6 h-6 text-navy shrink-0" />
            <p className="text-sm font-medium text-navy">We warmly invite you and your parents to visit our campus in Knowledge Park III for a guided tour and a one-on-one interaction with our faculty.</p>
          </div>
        </div>
      </section>
    ),
    counselling: (
      <section key="counselling" className="py-8">
        <div className="container-wide max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-gold" /> Personal Counselling Session
          </h3>
          <p className="text-sm leading-relaxed">During your counselling session at Ishan Institute of Pharmacy, you can expect:</p>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Eligibility Assessment
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Career Fit Analysis
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Detailed Fee Breakdown
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold" /> Scholarship Guidance
            </li>
          </ul>
        </div>
      </section>
    ),
    portal_info: (
      <section key="portal_info" className="py-8">
        <div className="container-wide max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Laptop className="w-5 h-5 text-gold" /> Online Admissions Portal
          </h3>
          <p className="text-sm leading-relaxed">
            For your convenience, our online admissions portal allows you to track your application, upload documents, and pay fees digitally, ensuring a low-friction admission experience from anywhere.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border mt-6">
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1024&q=80" alt="Ishan Pharmacy Admissions" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>
    ),
    form: (
      <section key="form" className="py-12">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Enquire Now</h3>
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto text-gold">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Thank You!</h4>
                <p className="text-foreground/60 leading-relaxed">Your enquiry has been received. Our admissions counsellor will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-sm text-gold font-bold hover:underline">Submit another enquiry</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider ml-1">Full Name</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value.replace(/[^a-zA-Z\s.'-]/g, '') }))} required className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider ml-1">Phone Number</label>
                    <input type="tel" placeholder="10-digit mobile" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} required className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" placeholder="rahul@example.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider ml-1">Programme of Interest</label>
                  <select value={form.program} onChange={e => setForm(p => ({ ...p, program: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none" required>
                    <option value="">Select Programme</option>
                    <option value="B.Pharm">Bachelor of Pharmacy (B.Pharm - 4 Years)</option>
                    <option value="D.Pharm">Diploma in Pharmacy (D.Pharm - 2 Years)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider ml-1">Message (Optional)</label>
                  <textarea placeholder="Tell us more about your query..." rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-4 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-gold hover:text-navy transition-all active:scale-[0.98] disabled:opacity-50">
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    )
  };

  const defaultOrder = ["header", "info", "counselling", "portal_info", "form"];

  return (
    <Layout>
      <DynamicPageSections
        pageId="admissions_enquiry"
        defaultSections={defaultSections}
        defaultOrder={defaultOrder}
      />
    </Layout>
  );
}
