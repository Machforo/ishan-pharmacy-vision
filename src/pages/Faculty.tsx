import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultFaculty = [
  { name: "Dr. Sandeep Singh", designation: "Principal", dept: "Pharmaceutics", qualification: "PhD (Pharmacy), M.Pharm", specialisation: "Drug Delivery Systems & Formulation", bio: "Extensive experience in pharmaceutical formulation research. Author of several peer-reviewed papers on novel drug delivery.", publications: "12 Research Papers" },
  { name: "Prof. Rajesh Khanna", designation: "Professor", dept: "Pharmacology", qualification: "M.Pharm, UGC NET", specialisation: "Clinical Pharmacology & Toxicology", bio: "Deep expertise in pharmacological interactions and toxicity studies. Focuses on evidence-based drug evaluation.", publications: "8 Publications" },
  { name: "Ms. Anjali Sharma", designation: "Assistant Professor", dept: "Pharmacy Practice", qualification: "M.Pharm, Hospital Training", specialisation: "Clinical Pharmacy & Patient Counselling", bio: "Specialises in hospital pharmacy and clinical patient counselling. Mentors students for community health camps." },
  { name: "Mr. Vivek Verma", designation: "Assistant Professor", dept: "Pharmaceutical Chemistry", qualification: "M.Pharm", specialisation: "Medicinal Chemistry & Drug Synthesis", bio: "Expertise in organic synthesis and drug design. Bridges industrial chemistry practice with academic theory." },
  { name: "Dr. Megha Gupta", designation: "Associate Professor", dept: "Pharmacognosy", qualification: "PhD (Pharmacognosy), M.Pharm", specialisation: "Herbal Drug Technology & Phytochemistry", bio: "Focuses on medicinal plant extraction and herbal formulations. Actively guides student research on traditional medicine.", publications: "15 Publications" },
  { name: "Prof. Amit Das", designation: "Assistant Professor", dept: "Pharmacology", qualification: "M.Pharm, UGC NET", specialisation: "Biochemistry & Pharmacokinetics", bio: "Dedicated to understanding drug metabolism and kinetic models in the human body and their therapeutic implications." },
  { name: "Ms. Neha Singh", designation: "Assistant Professor", dept: "Pharmaceutical Chemistry", qualification: "M.Pharm", specialisation: "Pharmaceutical Analysis & Quality Control", bio: "Passionate about analytical methods and quality standards in pharmaceutical manufacturing and testing." },
  { name: "Mr. Karan Bajaj", designation: "Assistant Professor", dept: "Pharmaceutics", qualification: "M.Pharm", specialisation: "Dosage Form Design & Biopharmaceutics", bio: "Brings industry experience in dosage form manufacturing. Emphasises practical lab techniques and GMP compliance." },
];

export default function FacultyPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");

  const faculty = data?.faculty?.length > 0 ? data.faculty : defaultFaculty;
  const departments = ["All", ...Array.from(new Set(faculty.map((f: any) => f.dept || f.department || "General"))).filter(Boolean) as string[]];

  const [filter, setFilter] = useState("All");
  const [facultySearch, setFacultySearch] = useState("");

  const filtered = faculty.filter((f: any) => {
    const matchesDept = filter === "All" || (f.dept || f.department) === filter;
    const matchesSearch = facultySearch.trim() === "" || 
      f.name.toLowerCase().includes(facultySearch.toLowerCase()) || 
      (f.specialisation || f.specialization || "").toLowerCase().includes(facultySearch.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <Layout>
      <PageHeader
        title="Faculty Directory"
        subtitle="Distinguished pharmaceutical scientists and industry experts shaping future healthcare professionals"
        breadcrumbs={[{ label: "Faculty" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Academic Excellence</p>
              <h2 className="font-bold text-foreground leading-tight">Guided by Expert Mentors</h2>
              <p className="text-foreground/70 leading-relaxed">
                Ishan Pharmacy's faculty combines academic scholarship with industry experience — permanent faculty hold M.Pharm and PhD qualifications in specialised pharmaceutical domains; visiting industry experts bring current manufacturing insights; together they prepare students not just to understand pharmacy but to practice it at the highest level.
              </p>
            </div>
            <div className="reveal hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Faculty" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>

          <div className="reveal max-w-2xl mx-auto mb-12 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search faculty by name or specialization..."
              value={facultySearch}
              onChange={(e) => setFacultySearch(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-card border rounded-2xl outline-none focus:border-gold focus:ring-4 focus:ring-gold/5 transition-all text-sm"
            />
            {facultySearch && (
              <button 
                onClick={() => setFacultySearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="reveal flex flex-wrap gap-2 mb-10 justify-center">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors active:scale-[0.97] ${
                  filter === d ? "bg-navy text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((f: any, i: number) => (
              <div key={f.name || i} className={`reveal delay-${Math.min(i % 4, 3)}00 bg-card rounded-xl border p-6 text-center hover:shadow-[0_4px_20px_hsl(var(--navy)/0.06)] transition-shadow`}>
                <div className="w-20 h-20 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-4 overflow-hidden">
                  {f.image ? (
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-bold text-navy">
                      {f.name?.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground text-sm">{f.name}</h3>
                <p className="text-xs text-gold font-medium mt-1">{f.designation}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.qualification}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs font-semibold text-foreground/80 mb-2">{f.specialisation || f.specialization}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed text-left line-clamp-3">{f.bio}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">{f.dept || f.department}</span>
                  {f.publications && <span className="text-xs font-medium text-gold">{f.publications}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
