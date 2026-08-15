import Layout from "@/components/Layout";
import ImageWithFallback from "@/components/ImageWithFallback";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { useState } from "react";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";



const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name is too long').regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address').or(z.literal(''))
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


    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema), defaultValues: { name: '', phone: '', email: '' } });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/${"pharmacy/leads"}`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "Contact Page" })
      });
      if (!response.ok) throw new Error("Failed to submit form");
      toast.success("Your message has been sent successfully!");
      setSubmitted(true);
      reset();
    } catch (err) { toast.error("Unable to send message."); }
  };

  return (
    <Layout>
      <PageHeader title="Contact Us" subtitle="Reach out for admissions enquiries, campus visits, and general information" breadcrumbs={[{ label: "Contact" }]} />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          {data?.bannerImage && (
            <div className="reveal mb-12 rounded-2xl overflow-hidden aspect-[21/9] shadow-lg">
              <ImageWithFallback src={data.bannerImage} alt="Banner" className="w-full h-full object-cover" />
            </div>
          )}
          <p className="reveal leading-relaxed max-w-3xl mb-12 text-lg">
            Ishan Pharmacy's team is available to assist prospective students, parents, enrolled students, and visitors. Admissions queries are given priority, with responses guaranteed within 24 working hours.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="reveal-left space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Directory</h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Admissions Office", value: "8448797700 (Phone & WhatsApp)", href: `tel:${mainContact.phone}` },
                    { icon: Mail, label: "Admissions Email", value: mainContact.email, href: `mailto:${mainContact.email}` },
                    { icon: Phone, label: "Academic Office", value: "0120-2323233", href: "tel:01202323233" },
                    { icon: Mail, label: "Principal's Office", value: "principal.pharmacy@ishan.ac", href: "mailto:principal.pharmacy@ishan.ac" },
                    { icon: MapPin, label: "Campus Address", value: mainContact.address },
                    { icon: Clock, label: "Office Hours", value: "Mon–Sat: 9:00 AM – 5:00 PM" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 p-4 rounded-xl border bg-card text-xs sm:text-sm">
                      <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-navy" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                        {href ? <a href={href} className="font-semibold text-navy hover:underline">{value}</a> : <p className="font-medium text-foreground">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a href={`https://wa.me/918448797700`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-colors w-full sm:w-auto">
                    <span className="text-lg">💬</span> Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border h-[300px]">
                <iframe src={mainContact.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Ishan Pharmacy Location" />
              </div>
            </div>

            <div className="reveal-right">
              <div className="bg-card rounded-2xl p-8 shadow-[0_8px_40px_hsl(var(--navy)/0.08)] border">
                <h3 className="text-xl font-bold text-foreground mb-6">Enquiry Form</h3>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-navy">✓</span>
                    </div>
                    <p className="font-semibold text-foreground mb-2">Enquiry Submitted!</p>
                    <p className="text-sm text-muted-foreground">We'll reach out to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-5 text-sm text-navy underline">Submit another enquiry</button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input {...register("name")} placeholder="Full Name*" className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.name ? 'border-red-500' : 'border-border/50'} bg-background/50 focus:bg-background focus:outline-none focus:ring-2 transition-all`} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <input {...register("phone")} type="tel" placeholder="Phone Number*" className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.phone ? 'border-red-500' : 'border-border/50'} bg-background/50 focus:bg-background focus:outline-none focus:ring-2 transition-all`} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div>
                      <input {...register("email")} type="email" placeholder="Email Address" className={`w-full px-4 py-3 text-sm rounded-lg border ${errors.email ? 'border-red-500' : 'border-border/50'} bg-background/50 focus:bg-background focus:outline-none focus:ring-2 transition-all`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 text-sm font-semibold bg-navy text-primary-foreground rounded-lg shadow-lg hover:bg-navy/90 transition-all">
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {data?.images && data.images.length > 0 && (
            <div className="reveal mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.images.map((img: any, i: number) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-shadow duration-300">
                  <ImageWithFallback src={img.url} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
