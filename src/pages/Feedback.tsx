import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useState } from "react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { toast } from "sonner";
import PageGallery from "@/components/PageGallery";

export default function FeedbackPage() {
  const { data } = usePharmacyData("feedback");
  const ref = useScrollReveal([data]);

  const [form, setForm] = useState({ name: "", userType: "", programme: "", subject: "", message: "", rating: "5" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name) {
      const nameRegex = /^[a-zA-Z\s.'-]+$/;
      if (!nameRegex.test(form.name.trim())) {
        toast.error("Name should only contain alphabets and spaces.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiBase}/pharmacy/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed");
      toast.success("Feedback submitted successfully. Thank you!");
      setForm({ name: "", userType: "", programme: "", subject: "", message: "", rating: "5" });
    } catch (err) {
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader title="Feedback" subtitle="Help us improve — share your experience as a student, parent, or visitor" breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Feedback" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-8">
              <p className="text-foreground/70 leading-relaxed text-lg">
                Ishan Pharmacy values feedback from students, parents, and visitors — assessment of academic quality, faculty, facilities, and administrative support helps us improve. All responses are carefully reviewed by the Quality Assurance Cell and reach the Principal's office directly. Your inputs remain private and confidential.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" alt="Ishan Pharmacy Campus" className="w-full h-80 object-cover" />
              </div>
            </div>
            <div className="reveal delay-100 bg-card rounded-2xl p-8 shadow-sm border">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name (optional)" value={form.name} onChange={(e) => setForm({...form, name: e.target.value.replace(/[^a-zA-Z\s.'-]/g, '')})} className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow" />
                  <select required value={form.userType} onChange={(e) => setForm({...form, userType: e.target.value})} className="w-full px-4 py-3 text-sm rounded-lg border bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow">
                    <option value="">I am a...*</option><option>Student</option><option>Parent</option><option>Visitor</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select value={form.programme} onChange={(e) => setForm({...form, programme: e.target.value})} className="w-full px-4 py-3 text-sm rounded-lg border bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow">
                    <option value="">Programme (Optional)</option><option>D.Pharm</option><option>B.Pharm</option><option>None</option>
                  </select>
                  <input type="text" placeholder="Subject*" required value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow" />
                </div>
                <textarea placeholder="Your Message*" required rows={5} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold)/0.5)] transition-shadow resize-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-t mt-4 pt-4">
                   <div className="flex items-center gap-3">
                     <span className="text-sm font-medium text-foreground">Rating:</span>
                     <div className="flex gap-1">
                       {[1, 2, 3, 4, 5].map(star => (
                         <label key={star} className="cursor-pointer">
                           <input type="radio" name="rating" value={star} checked={form.rating === String(star)} onChange={(e) => setForm({...form, rating: e.target.value})} className="sr-only peer" required />
                           <span className="text-2xl text-muted peer-checked:text-gold hover:text-gold-light transition-colors">★</span>
                         </label>
                       ))}
                     </div>
                   </div>
                   <button type="submit" disabled={submitting} className="w-full sm:w-auto px-8 py-3 text-sm font-semibold bg-navy text-primary-foreground rounded-lg shadow-lg hover:bg-navy/90 transition-all active:scale-[0.97] disabled:opacity-60">{submitting ? "Submitting..." : "Submit Feedback"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    <PageGallery images={data?.pageGallery} />
    </Layout>
  );
}
