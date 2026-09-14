import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FlaskConical, GraduationCap, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import DynamicPageSections from "@/components/DynamicPageSections";

export default function ThankYouPage() {
  return (
    <Layout>
      <DynamicPageSections
        pageId="thank_you"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "confirmation_card":
              return (
                <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 bg-background">
                  <div className="max-w-3xl w-full bg-card rounded-3xl border shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-5/12 bg-navy p-10 flex items-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-40">
                        <img
                          src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg"
                          alt="Ishan Pharmacy Campus"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
                      </div>

                      <div className="relative z-10 text-white text-center md:text-left">
                        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg shadow-gold/20">
                          <CheckCircle2 className="w-8 h-8 text-navy" />
                        </div>
                        <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Your journey towards a distinguished pharmaceutical career begins here. We look forward to connecting with you.
                        </p>
                      </div>
                    </div>

                    <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-foreground mb-4">Enquiry Received Successfully</h3>

                      <div className="space-y-3.5 mb-8 text-foreground/80">
                        <p className="text-sm leading-relaxed">
                          Thank you! Your enquiry about pharmacy programs at Ishan Institute of Pharmacy has been successfully received. Our admissions counsellor will call you within 2 working hours — or by 10 AM on the next working day.
                        </p>
                        <p className="text-sm leading-relaxed">
                          An information packet containing the PCI-approved syllabus and fee details is on its way. For instant assistance, WhatsApp us directly at{" "}
                          <a href="https://wa.me/918448797700" target="_blank" rel="noreferrer" className="text-navy font-bold hover:underline">
                            +91 8448797700
                          </a>.
                        </p>
                      </div>

                      <div className="pt-6 border-t">
                        <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                          Explore Pharmacy Programs
                        </h4>
                        <div className="flex flex-col gap-2.5">
                          <Link
                            to="/courses/b-pharm"
                            className="group flex items-center justify-between p-3 rounded-xl bg-muted hover:bg-gold/10 transition-colors"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-gold-dark" /> Bachelor of Pharmacy (B.Pharm - 4 Yrs)
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                          </Link>

                          <Link
                            to="/courses/d-pharm"
                            className="group flex items-center justify-between p-3 rounded-xl bg-muted hover:bg-gold/10 transition-colors"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-gold-dark" /> Diploma in Pharmacy (D.Pharm - 2 Yrs)
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                          </Link>

                          <Link
                            to="/facilities/pharmaceutical-chemistry"
                            className="group flex items-center justify-between p-3 rounded-xl bg-muted hover:bg-gold/10 transition-colors"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors flex items-center gap-2">
                              <FlaskConical className="w-4 h-4 text-navy" /> 10 Specialized Pharmacy Labs
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors" />
                          </Link>
                        </div>
                      </div>

                      <div className="mt-8 text-center md:text-left">
                        <Link to="/" className="text-xs font-bold text-muted-foreground hover:text-navy hover:underline transition-colors">
                          ← Return to Homepage
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );

            case "explore_links":
              return (
                <section className="py-8 bg-muted/20 border-t text-center">
                  <p className="text-xs text-muted-foreground">
                    Have questions about admissions? Email us at <strong className="text-navy">admissions@ishan.ac</strong>
                  </p>
                </section>
              );

            default:
              return null;
          }
        }}
      />
    </Layout>
  );
}
