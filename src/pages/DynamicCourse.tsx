import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIshanLawData } from "@/hooks/useIshanLawData";
import { Clock, GraduationCap, IndianRupee, Users, CheckCircle2 } from "lucide-react";
import NotFound from "./NotFound";

export default function DynamicCourse() {
  const { courseId } = useParams();
  const { data, isLoading } = useIshanLawData("courses");

  if (isLoading) return <div className="min-h-screen flex flex-col"><Navbar /><div className="flex-1 flex items-center justify-center text-xl text-navy animate-pulse">Loading Academic Program...</div></div>;
  
  // Clean string to match slugs
  const sanitizeSlug = (str: string) => str?.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const fallbackCourses = [
    {
      programName: "B.Pharm",
      duration: "4 Years (Degree)",
      eligibility: "10+2 with Physics, Chemistry & Biology/Mathematics with minimum 45% marks (40% for SC/ST). UPSEE/CUET score accepted.",
      annualIntake: "60 Seats",
      annualFee: "₹75,000 per year",
      overview: "The Bachelor of Pharmacy (B.Pharm) at Ishan Institute of Pharmacy is a 4-year professional undergraduate degree approved by the Pharmacy Council of India (PCI) and affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU). The program provides comprehensive training in pharmaceutical sciences, drug discovery, clinical pharmacy, and quality assurance — preparing students for careers across the pharmaceutical industry, hospitals, research, and regulatory agencies.",
      curriculumStructure: "The curriculum spans 8 semesters covering Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmacy Practice, and related life sciences. Practical laboratory training in all 10 specialized labs, industrial visits, and a final-year project are integral components. The program follows AKTU and PCI syllabus standards.",
      careerScope: "B.Pharm graduates can work as pharmacists in hospitals, community pharmacies, and pharmaceutical companies. Career options include Production Officer, Quality Control/Assurance Analyst, Drug Regulatory Officer, Medical Representative, Clinical Research Associate, or pursue M.Pharm/MBA for advanced roles.",
      image: "https://placehold.co/1024x769/e2e8f0/1e293b?text=Latest+Equipments"
    },
    {
      programName: "D.Pharm",
      duration: "2 Years (Diploma)",
      eligibility: "10+2 with Physics, Chemistry & Biology/Mathematics with minimum 45% marks. JEECUP score accepted.",
      annualIntake: "60 Seats",
      annualFee: "₹45,000 per year",
      overview: "The Diploma in Pharmacy (D.Pharm) at Ishan Institute of Pharmacy is a 2-year program approved by the Pharmacy Council of India (PCI) and affiliated with the Board of Technical Education, Uttar Pradesh (BTE UP). It is the entry-level qualification for registered pharmacists in India. The program offers a solid foundation in pharmaceutical sciences, dispensing, and patient counselling.",
      curriculumStructure: "The curriculum covers Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Human Anatomy & Physiology, Health Education, and Biochemistry & Clinical Pathology. Practical training in the institutional labs and a hospital internship are mandatory components of the program.",
      careerScope: "D.Pharm graduates are eligible to register as pharmacists with the UP Pharmacy Council. They can work as retail/hospital pharmacists, medical representatives, in pharmaceutical manufacturing, or pursue B.Pharm for further career advancement.",
      image: "https://placehold.co/1024x683/e2e8f0/1e293b?text=Pharmacy+Lab"
    },
  ];

  const courseList = data?.courses?.length > 0 ? data.courses : fallbackCourses;
  const course = courseList.find((c: any) => sanitizeSlug(c.programName).includes(sanitizeSlug(courseId || '')));

  if (!course) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-navy py-20 md:py-32 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src={course.image || "https://placehold.co/1024x769/e2e8f0/1e293b?text=Latest+Equipments"} 
             className="w-full h-full object-cover opacity-20 mix-blend-overlay scale-110" 
             alt="Background"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              {course.programName}
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed font-light">
              Forge your legacy at Ishan Institute of Pharmacy with our comprehensive {course.duration} program.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container-wide py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Program Overview</h2>
              <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.overview || "Program overview details will be updated shortly."}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Curriculum Structure</h2>
              <div className="bg-card border rounded-2xl p-6 shadow-sm">
                 <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.curriculumStructure || "Curriculum structure will be updated shortly."}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-5 text-gold-underline">Career Scope</h2>
              <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">{course.careerScope || "Career scope will be updated shortly."}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-navy text-primary-foreground rounded-2xl p-8 sticky top-32 shadow-[0_8px_30px_hsl(var(--navy)/0.2)]">
              <h3 className="text-2xl font-bold mb-8">Quick Facts</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Duration</p>
                    <p className="font-semibold text-lg">{course.duration || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Annual Fee</p>
                    <p className="font-semibold text-lg">{course.annualFee || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Annual Intake</p>
                    <p className="font-semibold text-lg">{course.annualIntake || "N/A"}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60 mb-1">Eligibility</p>
                    <p className="font-semibold">{course.eligibility || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl transition-colors shadow-lg active:scale-[0.98]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
