import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { toast } from "sonner";
import { rt } from "@/lib/richText";
import DynamicPageSections from "@/components/DynamicPageSections";
import { Star, MessageSquareHeart, ShieldCheck } from "lucide-react";

export default function FeedbackPage() {
  const { data: contactData } = usePharmacyData("contact");
  const ref = useScrollReveal([contactData]);
  const pageData = contactData?.feedbackPage;

  const [form, setForm] = useState({ name: "", userType: "", programme: "", subject: "", message: "", rating: "5" });
  const [submitting, setSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

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
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
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
      <DynamicPageSections
        pageId="feedback"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={pageData?.title || "Stakeholder Feedback"}
                  subtitle={pageData?.subtitle || "Help us continuously elevate institutional excellence — share your observations and suggestions"}
                  breadcrumbs={[{ label: "Contact", href: "/contact" }, { label: "Feedback" }]}
                />
              );

            case "feedback_form":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                      <div className="reveal space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                          <MessageSquareHeart className="w-3.5 h-3.5" /> Continuous Improvement
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">
                          Your Voice Shapes Our Pharmaceutical Standards
                        </h2>
                        {pageData?.description ? (
                          <div
                            className="text-foreground/75 leading-relaxed text-sm prose max-w-none rich-text"
                            dangerouslySetInnerHTML={{ __html: rt(pageData.description) }}
                          />
                        ) : (
                          <p className="text-foreground/75 leading-relaxed text-sm">
                            Ishan Institute of Pharmacy values continuous feedback from enrolled students, parents, visiting industry recruiters, and hospital preceptors. Feedback regarding laboratory maintenance, faculty guidance, examination fairness, and hostel facilities directly assists our Internal Quality Assurance Cell (IQAC) and the Principal's office.
                          </p>
                        )}
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src={pageData?.image || "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop"}
                            alt="Ishan Pharmacy Campus Quality"
                            className="w-full h-72 object-cover"
                          />
                        </div>
                      </div>

                      <div className="reveal delay-100 bg-card rounded-3xl p-8 md:p-10 shadow-lg border">
                        <h3 className="text-xl font-bold text-foreground mb-4">Share Your Feedback</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Your Name (Optional)"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value.replace(/[^a-zA-Z\s.'-]/g, "") })}
                              className="w-full px-4 py-3 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                            />
                            <select
                              required
                              value={form.userType}
                              onChange={(e) => setForm({ ...form, userType: e.target.value })}
                              className="w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy/20"
                            >
                              <option value="">I am a...*</option>
                              <option>Current Student</option>
                              <option>Parent / Guardian</option>
                              <option>Alumnus / Alumna</option>
                              <option>Industry Recruiter</option>
                              <option>Campus Visitor</option>
                            </select>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <select
                              value={form.programme}
                              onChange={(e) => setForm({ ...form, programme: e.target.value })}
                              className="w-full px-4 py-3 text-sm rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy/20"
                            >
                              <option value="">Programme (Optional)</option>
                              <option>B.Pharm</option>
                              <option>D.Pharm</option>
                              <option>None / General</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Subject / Department*"
                              required
                              value={form.subject}
                              onChange={(e) => setForm({ ...form, subject: e.target.value })}
                              className="w-full px-4 py-3 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20"
                            />
                          </div>

                          <textarea
                            placeholder="Your detailed feedback or suggestion*"
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full px-4 py-3 text-sm rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                          />

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-t mt-3 pt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-foreground">Rating:</span>
                              <div className="flex gap-1" onMouseLeave={() => setHoverRating(0)}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <label key={star} className="cursor-pointer" onMouseEnter={() => setHoverRating(star)}>
                                    <input
                                      type="radio"
                                      name="rating"
                                      value={star}
                                      checked={form.rating === String(star)}
                                      onChange={(e) => setForm({ ...form, rating: e.target.value })}
                                      className="sr-only"
                                    />
                                    <span
                                      className={`text-2xl transition-all ${
                                        star <= (hoverRating || Number(form.rating))
                                          ? "text-gold scale-110 inline-block"
                                          : "text-muted-foreground/30 inline-block"
                                      }`}
                                    >
                                      ★
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full sm:w-auto px-7 py-3 text-xs font-bold bg-navy text-white rounded-xl shadow-md hover:bg-navy/90 transition-all active:scale-[0.97] disabled:opacity-60"
                            >
                              {submitting ? "Submitting..." : "Submit Feedback"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return (
                <section className="py-12 bg-muted/40 border-y">
                  <div className="container-wide max-w-3xl mx-auto text-center">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-base font-bold text-foreground mb-1">
                      Internal Quality Assurance Cell (IQAC) Notice
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-xl mx-auto">
                      All feedback is analyzed in quarterly institutional review meetings to continuously update curricula, laboratory chemicals, and student amenities.
                    </p>
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
