import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Clock, MessageSquare, PhoneCall } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import DynamicPageSections from "@/components/DynamicPageSections";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long").regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email address").or(z.literal(""))
});

export default function ContactPage() {
  const { data } = usePharmacyData("contact");
  const ref = useScrollReveal([data]);
  const mainContact = data?.address ? data : {
    address: "Knowledge Park-III, Greater Noida, Uttar Pradesh 201308",
    phone: "8448797700",
    email: "admissions@ishan.ac",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2!2d77.49!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIshan+Institute+of+Pharmacy!5e0!3m2!1sen!2sin!4v1"
  };

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "" }
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (formData: z.infer<typeof contactSchema>) => {
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/pharmacy/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Contact Page" })
      });
      if (!response.ok) throw new Error("Failed to submit form");
      toast.success("Your message has been sent successfully!");
      setSubmitted(true);
      reset();
    } catch (err) {
      toast.error("Unable to send message.");
    }
  };

  return (
    <Layout>
      <DynamicPageSections
        pageId="contact"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title="Contact Ishan Pharmacy"
                  subtitle="Reach out for B.Pharm & D.Pharm admissions enquiries, campus tours, and academic information"
                  breadcrumbs={[{ label: "Contact" }]}
                />
              );

            case "contact_cards":
              return (
                <section className="pt-16 md:pt-20 pb-10" ref={ref}>
                  <div className="container-wide">
                    {data?.bannerImage && (
                      <div className="mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
                        <ImageWithFallback src={data.bannerImage} alt="Contact Banner" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <p className="leading-relaxed max-w-3xl mb-10 text-lg text-foreground/80">
                      Our admissions counsellors and administrative offices are available Monday through Saturday. Admissions queries receive guaranteed responses within 24 hours.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {[
                        { icon: Phone, label: "Admissions Helpline", value: "+91 8448797700", href: "tel:8448797700" },
                        { icon: Mail, label: "Admissions Email", value: mainContact.email, href: `mailto:${mainContact.email}` },
                        { icon: Phone, label: "Academic / Principal Office", value: "0120-2323233", href: "tel:01202323233" },
                        { icon: Mail, label: "Registrar Secretariat", value: "registrar@ishan.ac", href: "mailto:registrar@ishan.ac" },
                        { icon: MapPin, label: "Campus Address", value: mainContact.address },
                        { icon: Clock, label: "Office Timings", value: "Mon–Sat: 9:00 AM – 5:00 PM" },
                      ].map(({ icon: Icon, label, value, href }) => (
                        <div key={label} className="flex items-start gap-4 p-5 rounded-2xl border bg-card shadow-sm">
                          <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-navy" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{label}</p>
                            {href ? (
                              <a href={href} className="font-bold text-navy text-sm hover:underline">
                                {value}
                              </a>
                            ) : (
                              <p className="font-semibold text-foreground text-xs leading-snug">{value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "inquiry_form":
              return (
                <section className="py-12">
                  <div className="container-wide max-w-4xl mx-auto">
                    <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border">
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-bold uppercase tracking-wider mb-2">
                          <MessageSquare className="w-3.5 h-3.5" /> Direct Message
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Send an Admissions Enquiry</h3>
                        <p className="text-xs text-muted-foreground mt-1">Our counsellor will reach out directly with program brochures and eligibility details.</p>
                      </div>

                      {submitted ? (
                        <div className="text-center py-10">
                          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-emerald-700">✓</span>
                          </div>
                          <p className="font-bold text-foreground mb-1 text-lg">Enquiry Submitted Successfully!</p>
                          <p className="text-xs text-muted-foreground">We will connect with you within 24 hours.</p>
                          <button onClick={() => setSubmitted(false)} className="mt-5 text-xs text-navy font-bold underline">
                            Submit another inquiry
                          </button>
                        </div>
                      ) : (
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <input
                                {...register("name")}
                                placeholder="Full Name*"
                                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                                  errors.name ? "border-red-500" : "border-border/60"
                                } bg-background focus:outline-none focus:ring-2 focus:ring-navy/20`}
                              />
                              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                              <input
                                {...register("phone")}
                                type="tel"
                                placeholder="10-Digit Phone Number*"
                                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                                  errors.phone ? "border-red-500" : "border-border/60"
                                } bg-background focus:outline-none focus:ring-2 focus:ring-navy/20`}
                              />
                              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>
                          </div>
                          <div>
                            <input
                              {...register("email")}
                              type="email"
                              placeholder="Email Address"
                              className={`w-full px-4 py-3 text-sm rounded-xl border ${
                                errors.email ? "border-red-500" : "border-border/60"
                              } bg-background focus:outline-none focus:ring-2 focus:ring-navy/20`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 text-sm font-semibold bg-navy text-white rounded-xl shadow-md hover:bg-navy/90 transition-all active:scale-[0.98]"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </section>
              );

            case "campus_map":
              return (
                <section className="py-12">
                  <div className="container-wide max-w-5xl mx-auto">
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">Knowledge Park Campus Location</h3>
                    <div className="rounded-3xl overflow-hidden border shadow-md h-[380px]">
                      <iframe
                        src={mainContact.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Ishan Pharmacy Location Map"
                      />
                    </div>
                  </div>
                </section>
              );

            case "emergency_contacts":
              return (
                <section className="py-12 bg-navy text-white text-center">
                  <div className="container-wide max-w-2xl mx-auto">
                    <PhoneCall className="w-8 h-8 text-gold mx-auto mb-2" />
                    <h4 className="text-lg font-bold mb-1">24x7 Campus Helpline & WhatsApp Support</h4>
                    <p className="text-white/80 text-xs mb-4">
                      Direct WhatsApp assistance for outstation candidates, hostel bookings, and campus directions.
                    </p>
                    <a
                      href="https://wa.me/918448797700"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#128C7E] transition-colors shadow-md"
                    >
                      <span>💬</span> WhatsApp Now: 8448797700
                    </a>
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
