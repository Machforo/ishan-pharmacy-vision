import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, ArrowUpRight, Search, X, GraduationCap, Briefcase } from "lucide-react";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgramsSection() {
  const ref = useScrollReveal();
  const { data } = usePharmacyData("programs");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fallbackPrograms = [
    { 
      name: "D.Pharm", 
      type: "Diploma",
      category: "2 Years",
      description: "Diploma in Pharmacy. 2 Years.", 
      link: "/courses/d-pharm",
      overview: "A comprehensive diploma program focusing on the fundamental concepts of pharmaceutical science. Prepares students for entry-level roles in pharmacies and hospitals.",
      outcomes: ["Pharmacist", "Medical Representative", "Lab Technician", "Entrepreneur"]
    },
    { 
      name: "B.Pharm", 
      type: "Bachelor",
      category: "4 Years",
      description: "Bachelor of Pharmacy. 4 Years.", 
      link: "/courses/b-pharm",
      overview: "An advanced undergraduate degree providing deep knowledge of drug formulation, testing, and therapeutic application. Ideal for careers in research, manufacturing, and clinical pharmacy.",
      outcomes: ["Clinical Pharmacist", "Quality Control Analyst", "Drug Inspector", "Research Associate"]
    },
    { 
      name: "Certificate Courses", 
      type: "Value-Added",
      category: "Short-Term",
      description: "Specialized Pharmaceutical Certifications. 6 Months.", 
      link: "/certificate-programs",
      overview: "Bridge the gap between theory and practice with specialized courses in Pharmacovigilance, Regulatory Affairs, and Clinical Research.",
      outcomes: ["Regulatory Specialist", "Clinical Researcher", "Pharmacovigilance Officer"]
    }
  ];
  
  const programs = data?.length > 0 ? data : (data?.data?.length > 0 ? data.data : fallbackPrograms);
  
  // Dynamically generate available filters
  const availableTypes = Array.from(new Set(programs.map((p: any) => p.type))).filter(Boolean) as string[];
  const availableCats = Array.from(new Set(programs.map((p: any) => p.category))).filter(Boolean) as string[];
  const filterOptions = ["All", ...availableTypes, ...availableCats];

  const [activeFilter, setActiveFilter] = useState("All");
  const [programSearch, setProgramSearch] = useState("");

  const filteredPrograms = programs.filter((p: any) => {
    const matchesFilter = activeFilter === "All" || p.type === activeFilter || p.category === activeFilter;
    const matchesSearch = programSearch.trim() === "" || p.name.toLowerCase().includes(programSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="programs" className="py-12 md:py-20 bg-section-alt overflow-hidden" ref={ref}>
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Academic Excellence</p>
          <h2 className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Programs Designed for Real-World Success
          </h2>
          <p className="reveal delay-200 mt-5 leading-relaxed">
            PCI approved professional pharmaceutical programs affiliated to AKTU and BTE UP, designed to bridge the gap between academic theory and clinical practice.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="reveal delay-300 max-w-5xl mx-auto mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all active:scale-[0.97] ${
                  activeFilter === f ? "bg-navy text-white shadow-xl" : "bg-white text-navy hover:bg-gold hover:text-navy border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Find a program..."
              value={programSearch}
              onChange={(e) => setProgramSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-white border rounded-xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-xs font-medium"
            />
            {programSearch && (
              <button 
                onClick={() => setProgramSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program: any, i: number) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={program.name || i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative bg-card rounded-2xl border p-8 shadow-[0_4px_20px_hsl(var(--navy)/0.04)] hover:shadow-[0_20px_40px_hsl(var(--navy)/0.08)] transition-all duration-500 overflow-hidden"
                >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/5 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                    <BookOpen className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy">{program.name || "Program Name"}</h3>
                    <p className="text-xs uppercase tracking-wider text-gold mt-1 font-semibold">
                      {program.description?.includes('.') 
                        ? program.description.split('.')[1]?.trim() 
                        : (program.description || "Full Time")}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Overview</p>
                    <p className="text-sm leading-relaxed italic">
                      "{program.overview || program.description}"
                    </p>
                  </div>

                  <AnimatePresence>
                    {(hoveredIndex === i) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Career Outcomes</p>
                        <div className="flex flex-wrap gap-2">
                          {(program.outcomes || ["Management Professional", "Industry Expert"]).map((outcome: string) => (
                            <span key={outcome} className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium">
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-6 border-t flex items-center justify-between">
                    <Link to={program.link || "#"} className="flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors group/btn">
                      Explore Program
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
