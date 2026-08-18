import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Tag, Clock, Share2, X, Send, User, Phone as PhoneIcon, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { usePharmacyData } from "@/hooks/usePharmacyData";


export default function EventsCalendarPage() {
  const { data: eventsData } = usePharmacyData("calendarevents");
  const ref = useScrollReveal([eventsData]);
  const events = eventsData?.length > 0 ? eventsData : [];
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s.\'-]+$/;
    if (!formData.name || !nameRegex.test(formData.name.trim())) {
      toast.error("Name should only contain alphabets and spaces.");
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/pharmacy/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: `${formData.phone}@placeholder.com`,
          phone: formData.phone,
          course: formData.course,
          source: `Event Application: ${selectedEvent?.title || selectedEvent?.name}`
        }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
      toast.success("Application received!");
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", course: "" });
        setSelectedEvent(null);
      }, 3000);
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    }
  };




  return (
    <Layout>
      <PageHeader
        title="Events Calendar"
        subtitle="Stay updated with academic, cultural, and professional events at Ishan Institute of Pharmacy."
        breadcrumbs={[{ label: "Events Calendar" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="reveal-up space-y-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">What's Happening</p>
              <h2 className="font-bold text-foreground leading-tight">
                Plan Your Campus Experience
              </h2>
              <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Ishan Institute of Pharmacy maintains a packed events calendar including national seminars, guest lectures, cultural festivals, sports meets, and placement drives. This helps students plan their participation and never miss an opportunity for growth.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-xs font-bold text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                  <Share2 className="w-3 h-3" /> Export to Google Calendar
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 text-xs font-bold text-navy hover:bg-gold hover:text-white transition-all shadow-sm">
                  <Share2 className="w-3 h-3" /> Download iCal
                </button>
              </div>
            </div>

            <div className="reveal-up grid gap-6">
              {events.map((e: any, i: number) => (
                <div key={i} className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border bg-card hover:border-gold transition-all duration-300">
                  <div className="md:w-32 shrink-0 flex flex-col items-center justify-center p-4 bg-muted rounded-xl text-center group-hover:bg-gold group-hover:text-white transition-colors">
                    <Calendar className="w-6 h-6 mb-2" />
                    <span className="text-sm font-bold uppercase tracking-tighter leading-none">{e.date?.split(',')[0] || ''}</span>
                    <span className="text-xl font-black leading-none">{e.date?.split(' ')?.[1]?.replace(',', '') || ''}</span>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-gold/10 text-xs font-bold text-gold uppercase tracking-widest">{e.category}</span>
                      <div className="flex items-center gap-1.5 text-foreground/50 text-xs font-medium">
                        <MapPin className="w-3 h-3" /> {e.venue}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{e.title || e.name}</h3>
                      <p className="text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>

                  <div className="md:w-32 flex flex-col items-center justify-center gap-2">
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 rounded-lg bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors text-center inline-block">
                        Register
                      </a>
                    ) : null}
                    <button
                      onClick={() => setSelectedEvent(e)}
                      className="w-full px-4 py-2 rounded-lg border border-gold text-gold text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors text-center inline-block"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => !isSubmitted && setSelectedEvent(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl overflow-hidden border"
            >
              <div className="bg-navy p-6 md:p-8 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <button
                  onClick={() => !isSubmitted && setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-primary-foreground/50 hover:text-white transition-colors"
                  disabled={isSubmitted}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative z-10 text-center space-y-2">
                  <h3 className="text-2xl font-bold">Apply for Event</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {selectedEvent.title || selectedEvent.name}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-navy">Application Sent!</h4>
                    <p className="text-foreground/70">
                      We have received your application for {selectedEvent.title || selectedEvent.name}. We will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-gold" /> Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border bg-muted/50 focus:bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-gold" /> Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border bg-muted/50 focus:bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gold" /> Current Course
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border bg-muted/50 focus:bg-background focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="e.g. B.Pharm 2nd Year"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-3.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 mt-6"
                    >
                      Submit Application <Send className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-center text-foreground/50 mt-4">
                      By submitting, you agree to our terms and privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </Layout>
  );
}
