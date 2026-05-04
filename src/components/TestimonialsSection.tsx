import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, User, Users } from "lucide-react";

const studentTestimonials = [
  { 
    name: "Rahul Deshmukh", 
    role: "B.Pharm Graduate, 2023", 
    text: "The clinical training and lab exposure at Ishan Pharmacy were instrumental in my transition to the industry. I felt industry-ready from day one of my job at Sun Pharma.", 
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Sanya Malhotra", 
    role: "D.Pharm Student, 2024", 
    text: "Access to state-of-the-art laboratories and guidance from industry-experienced faculty has truly elevated my practical skills.", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Priyanka Singh", 
    role: "B.Pharm Student, 2025", 
    text: "The dedicated placement cell provides structured guidance that is rare to find. The mock interviews and guest lectures from industry experts are incredibly helpful.", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
  }
];

const parentTestimonials = [
  { 
    name: "Mr. Sunil Vats", 
    role: "Parent (B.Pharm Student)", 
    text: "Seeing my daughter excel in her pharmaceutical research projects at Ishan Pharmacy was a proud moment. The institution truly focuses on professional grooming.", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" 
  },
  { 
    name: "Mrs. Kavita Rawat", 
    role: "Parent (D.Pharm Student)", 
    text: "The health awareness camps organized by the college have given my son a deep sense of social responsibility along with his pharmacy diploma.", 
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" 
  }
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<'students' | 'parents'>('students');

  return (
    <section className="py-16 md:py-24 bg-section-alt overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4 opacity-80">Success Stories</p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight">Hear From Our <span className="text-gold">Community</span></h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-card border shadow-inner rounded-2xl">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-8 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'students' ? 'bg-navy text-white shadow-lg translate-y-[-2px]' : 'text-navy/40 hover:text-navy'}`}
            >
              <div className="flex items-center gap-2"><User size={18} /> Students</div>
            </button>
            <button
              onClick={() => setActiveTab('parents')}
              className={`px-8 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'parents' ? 'bg-navy text-white shadow-lg translate-y-[-2px]' : 'text-navy/40 hover:text-navy'}`}
            >
              <div className="flex items-center gap-2"><Users size={18} /> Parents</div>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-section-alt to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-section-alt to-transparent z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-8 animate-marquee"
            >
              {[...(activeTab === 'students' ? studentTestimonials : parentTestimonials), ...(activeTab === 'students' ? studentTestimonials : parentTestimonials)].map((t, i) => (
                <div key={`${t.name}-${i}`} className="shrink-0 w-[380px] bg-card border border-muted hover:border-gold/30 rounded-[2.5rem] p-8 relative shadow-lg hover:shadow-2xl transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-navy">{t.name}</h4>
                      <p className="text-xs font-bold text-gold uppercase tracking-wider">{t.role}</p>
                    </div>
                    <div className="ml-auto text-gold/10">
                      <Quote size={40} />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-gold text-gold" />)}
                  </div>

                  <p className="text-foreground/70 leading-relaxed italic text-sm line-clamp-4">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
