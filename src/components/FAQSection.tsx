import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What programs are offered at Ishan Pharmacy?",
    answer: "Ishan Institute of Pharmacy offers the 2-year Diploma in Pharmacy (D.Pharm) and the 4-year Bachelor of Pharmacy (B.Pharm) programs."
  },
  {
    question: "Is Ishan Pharmacy approved by the PCI?",
    answer: "Yes, Ishan Institute of Pharmacy is fully approved by the Pharmacy Council of India (PCI) and affiliated with AKTU and BTE UP."
  },
  {
    question: "How does the institute support placements?",
    answer: "We have a dedicated placement cell that connects students with top pharmaceutical companies, hospitals, and clinical research organizations for internships and full-time roles."
  },
  {
    question: "What is the focus of practical training?",
    answer: "Practical training is emphasized through our 10 specialized laboratories, ensuring hands-on experience in drug formulation, analysis, and clinical pharmacology."
  },
  {
    question: "Are there opportunities for industrial visits?",
    answer: "Yes, we regularly organize industrial visits to leading pharmaceutical manufacturing units to give students a real-world understanding of large-scale production and quality control."
  },
  {
    question: "What are the eligibility criteria for D.Pharm and B.Pharm?",
    answer: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics with at least 50% marks (45% for SC/ST) from a recognized board."
  }
];

export default function FAQSection() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">Common Inquiries</p>
            <h2 className="reveal delay-100 text-3xl md:text-5xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`border rounded-2xl overflow-hidden transition-shadow duration-300 ${openIndex === i ? "border-gold shadow-lg shadow-gold/5" : "border-muted hover:border-gold/30"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIndex === i ? "bg-gold text-white" : "bg-muted text-navy/40"}`}>
                      <MessageSquare size={18} />
                    </div>
                    <span className="font-bold text-navy text-base md:text-lg leading-tight">{faq.question}</span>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${openIndex === i ? "bg-gold/10 rotate-180" : "bg-muted/50 rotate-0"}`}>
                    <ChevronDown size={20} className={openIndex === i ? "text-gold" : "text-navy/20"} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 leading-relaxed bg-card">
                        <div className="pl-14 border-l-2 border-gold/20 ml-5 py-2">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
