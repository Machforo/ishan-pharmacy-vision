import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CodeOfConductPage() {
  const ref = useScrollReveal();
  return (
    <Layout>
      <PageHeader title="Code of Conduct" subtitle="Student rules, dress code, and academic integrity guidelines" breadcrumbs={[{ label: "Students" }, { label: "Code of Conduct" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start max-w-6xl mx-auto">
            <div className="reveal space-y-8">
              {[
                { title: "1. Professional Conduct", content: "Pharmacy students are expected to maintain the highest standards of decorum and dignity, reflecting the noble nature of the healthcare profession. Respectful behavior towards faculty, staff, and fellow students is mandatory. Any form of misconduct, including bullying, verbal abuse, or physical altercation, will result in immediate disciplinary action." },
                { title: "2. Dress Code (Pharmacist's Uniform)", content: "As per PCI standards, students must adhere to the prescribed professional dress code, including a clean White Apron/Lab Coat. Clean and formal attire is mandatory during academic hours, laboratory sessions, and hospital visits." },
                { title: "3. Attendance (PCI Regulations)", content: "A strict minimum of 80% attendance in theory and practicals is mandatory for each subject as per Pharmacy Council of India (PCI) and University/Board regulations. Students falling below this threshold will not be permitted to appear for final examinations. Medical leave must be supported by valid documentation." },
                { title: "4. Academic Integrity & Laboratory Ethics", content: "Plagiarism, cheating, or any form of academic or practical dishonesty is strictly prohibited. Falsifying laboratory data or research results will lead to immediate disqualification and potential expulsion, as these acts are contrary to the ethics of the medical and pharmaceutical professions." },
                { title: "5. Laboratory & Library Decorum", content: "Students must maintain strict safety protocols, absolute silence, and decorum in the Laboratories and the Medical Library. Use of mobile phones is strictly prohibited in these areas. Respect for laboratory equipment, chemicals, and research terminals is expected from every student." },
                { title: "6. Zero Tolerance for Ragging", content: "As per UGC and PCI regulations, ragging in any form is a criminal offense. Ishan Pharmacy maintains zero tolerance towards ragging. Offenders will face immediate expulsion, FIR registration, and criminal prosecution." },
              ].map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-sm leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
            <div className="reveal hidden lg:block sticky top-32">
              <div className="rounded-2xl overflow-hidden shadow-2xl border mb-6">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Professionalism" className="w-full h-[500px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
