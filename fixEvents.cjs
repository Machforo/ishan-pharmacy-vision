const fs = require('fs');
const file = 'd:/FreeLance/ishan-pharmacy-vision/src/pages/EventsCalendar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import { Calendar, MapPin, Tag, Clock, Share2 } from "lucide-react";',
  'import { Calendar, MapPin, Tag, Clock, Share2, X, Send, User, Phone as PhoneIcon, BookOpen, CheckCircle } from "lucide-react";\nimport { useState } from "react";\nimport { motion, AnimatePresence } from "framer-motion";\nimport { toast } from "sonner";'
);

const hookStr = '  const events = eventsData?.length > 0 ? eventsData : [];';
const additionalState = `
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", course: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\\s.\\'-]+$/;
    if (!formData.name || !nameRegex.test(formData.name.trim())) {
      toast.error("Name should only contain alphabets and spaces.");
      return;
    }
    const phoneRegex = /^\\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(\`\${apiBase}/pharmacy/leads\`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: \`\${formData.phone}@placeholder.com\`,
          phone: formData.phone,
          course: formData.course,
          source: \`Event Application: \${selectedEvent?.title || selectedEvent?.name}\`
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
`;
content = content.replace(hookStr, hookStr + additionalState);

content = content.replace(
`                    <div>
                      <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{e.title || e.name}</h3>
                      <p className="text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>`,
`                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{e.title || e.name}</h3>
                      <p className="text-sm leading-relaxed">{e.description}</p>
                    </div>
                  </div>`
);

const buttonsStr = `<div className="md:w-32 flex items-center justify-end">
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-gold transition-colors text-center inline-block">
                        Register
                      </a>
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider text-center inline-block opacity-50 cursor-not-allowed">
                        Register
                      </span>
                    )}
                  </div>`;
const newButtonsStr = `<div className="md:w-32 flex flex-col items-center justify-center gap-2">
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
                  </div>`;
content = content.replace(buttonsStr, newButtonsStr);

const modalStr = `
      {/* Apply Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-navy/60 backdrop-blur-md">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isSubmitted && setSelectedEvent(null)} className="absolute inset-0" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-8">
              {!isSubmitted && (
                <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted text-navy hover:bg-gold transition-colors flex items-center justify-center z-10">
                  <X size={18} />
                </button>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">Apply for Event</h3>
                <p className="text-sm text-muted-foreground font-medium">{selectedEvent.title || selectedEvent.name}</p>
              </div>
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-navy">Application Received!</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed px-4">We will contact you soon.</p>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                    <input type="text" placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value.replace(/[^a-zA-Z\\s.\\'-]/g, '') }))} required className="w-full pl-10 pr-4 py-3 bg-muted/60 border rounded-xl outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white transition-all text-sm" />
                  </div>
                  <div className="relative">
                    <PhoneIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                    <input type="tel" placeholder="Mobile Number *" value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} required className="w-full pl-10 pr-4 py-3 bg-muted/60 border rounded-xl outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white transition-all text-sm" />
                  </div>
                  <div className="relative">
                    <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                    <select required value={formData.course} onChange={(e) => setFormData((p) => ({ ...p, course: e.target.value }))} className="w-full pl-10 pr-4 py-3 bg-muted/60 border rounded-xl outline-none focus:ring-2 focus:ring-gold/60 focus:bg-white appearance-none transition-all text-sm cursor-pointer">
                      <option value="">Select Programme *</option>
                      <option>D.Pharm - 2 Years</option>
                      <option>B.Pharm - 4 Years</option>
                      <option>Certificate Programmes</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2 group mt-2">
                    Submit Application
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
`;

content = content.replace('    </Layout>\n  );\n}', modalStr);

fs.writeFileSync(file, content, 'utf8');
console.log('EventsCalendar.tsx updated');
