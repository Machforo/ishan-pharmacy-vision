import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, BookOpen, X, Mail, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const eminentFaculty = [
  {
    name: "Dr. Sandeep Singh",
    designation: "Principal",
    qualification: "PhD, M.Pharm",
    specialisation: "Pharmaceutics & Drug Delivery",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Sandeep Singh is a visionary academician dedicated to the advancement of pharmaceutical education in India. With extensive experience in drug formulation, he has mentored hundreds of aspiring pharmacists."
  },
  {
    name: "Prof. Rajesh Khanna",
    designation: "Professor",
    qualification: "M.Pharm, PhD",
    specialisation: "Pharmacology & Toxicology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Prof. Rajesh Khanna brings profound insights into pharmacological sciences. His clinical approach to teaching ensures that students understand the therapeutic actions and safe usage of drugs."
  },
  {
    name: "Dr. Megha Gupta",
    designation: "Associate Professor",
    qualification: "PhD, M.Pharm",
    specialisation: "Pharmaceutical Chemistry",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Megha Gupta is a specialist in drug synthesis and analysis. She leads our Research & Development wing, encouraging students to contribute to national and international pharmaceutical journals."
  },
  {
    name: "Ms. Anjali Sharma",
    designation: "Assistant Professor",
    qualification: "M.Pharm",
    specialisation: "Pharmacognosy & Natural Products",
    image: "https://images.unsplash.com/photo-1580894732230-282b963aee2b?auto=format&fit=crop&w=800&q=80",
    bio: "Ms. Anjali Sharma bridges the gap between traditional herbal medicine and modern drug discovery. She mentors our students in identifying and extracting active pharmaceutical ingredients from natural sources."
  }
];

export default function FacultySection() {
  const ref = useScrollReveal();
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
  const { data } = usePharmacyData("faculty");
  const faculty = data?.length > 0 ? data : (data?.data?.length > 0 ? data.data : eminentFaculty);

  return (
    <section className="py-20 md:py-28 bg-section-alt" ref={ref}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Academic Leaders</p>
            <h2 className="reveal delay-100 text-3xl md:text-5xl font-bold text-navy">
              Eminent Faculty & Mentors
            </h2>
            <p className="reveal delay-200 mt-5 leading-relaxed">
              Our faculty members are distinguished pharmaceutical scholars and industry experts, dedicated to nurturing the next generation of healthcare professionals through practice-oriented mentorship.
            </p>
          </div>
          <Link 
            to="/faculty" 
            className="reveal delay-300 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors group"
          >
            View Full Directory
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.slice(0, 4).map((f: any, i: number) => (
            <div 
              key={f.name} 
              onClick={() => setSelectedFaculty(f)}
              className={`reveal delay-${i % 4}00 group bg-card rounded-[2rem] border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={f.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name || 'F')}&background=0A1432&color=D4AF37`} 
                  alt={f.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-2">
                    <div className="p-2 rounded-lg bg-gold/90 text-white"><GraduationCap size={16} /></div>
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur text-white"><Award size={16} /></div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-bold text-xl text-navy group-hover:text-gold transition-colors">{f.name}</h3>
                <p className="text-xs font-bold text-gold uppercase tracking-widest mt-1">{f.designation}</p>
                <div className="mt-4 pt-4 border-t border-muted space-y-3">
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <BookOpen size={14} className="text-gold" />
                    {f.specialisation}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-muted text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {f.qualification}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Faculty Detail Modal ── */}
        <AnimatePresence>
          {selectedFaculty && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFaculty(null)}
                className="absolute inset-0 bg-navy/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl bg-card rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-navy/5 text-navy hover:bg-gold hover:text-white transition-all shadow-sm"
                >
                  <X size={24} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-muted">
                  <img 
                    src={selectedFaculty.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedFaculty.name || 'F')}&background=0A1432&color=D4AF37`} 
                    alt={selectedFaculty.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  <div className="mb-8">
                    <p className="text-sm font-bold text-gold uppercase tracking-[0.2em] mb-2">Faculty Profile</p>
                    <h2 className="font-bold text-navy leading-tight">{selectedFaculty.name}</h2>
                    <p className="text-lg font-semibold text-navy/60 mt-1">{selectedFaculty.designation}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <p className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Qualification</p>
                      <p className="text-sm font-bold text-navy">{selectedFaculty.qualification}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30">
                      <p className="text-xs font-bold text-navy/40 uppercase tracking-widest mb-1">Specialisation</p>
                      <p className="text-sm font-bold text-navy">{selectedFaculty.specialisation}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-navy uppercase tracking-widest mb-3 border-b pb-2">Biography</h4>
                      <p className="text-foreground/70 leading-relaxed italic">
                        "{selectedFaculty.bio}"
                      </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-gold transition-colors">
                        <Mail size={16} /> Contact
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-navy text-sm font-bold hover:bg-muted/80 transition-colors">
                        <Linkedin size={16} /> LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
