import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePharmacyData } from "@/hooks/usePharmacyData";
import DynamicPageSections from "@/components/DynamicPageSections";
import { ExternalLink, GraduationCap, Laptop, BookOpen, PhoneCall } from "lucide-react";

export default function StudentPortalPage() {
  const { data } = usePharmacyData("studentportal");
  const ref = useScrollReveal([data]);
  const content = data || {};

  return (
    <Layout>
      <DynamicPageSections
        pageId="student_portal"
        renderSection={(sectionId) => {
          switch (sectionId) {
            case "header":
              return (
                <PageHeader
                  title={content?.title || "Student ERP & Examination Portal"}
                  subtitle="Access timetables, attendance, laboratory records, and university results"
                  breadcrumbs={[{ label: "Students" }, { label: "Student Portal" }]}
                />
              );

            case "portal_links":
              return (
                <section className="py-16 md:py-24" ref={ref}>
                  <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                      <div className="reveal space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Digital Academic Services</h2>
                        {content?.instructions ? (
                          <div
                            className="text-foreground/75 leading-relaxed whitespace-pre-wrap [&_p]:text-inherit [&>p]:mb-2 last:[&>p]:mb-0"
                            dangerouslySetInnerHTML={{ __html: content.instructions }}
                          />
                        ) : (
                          <p className="text-foreground/75 leading-relaxed text-sm">
                            Current Ishan Institute of Pharmacy students can access their academic attendance records, internal sessional marks, and digital library references via the Ishan ERP. Board and university results are verified directly on official AKTU OneView and BTE UP portals.
                          </p>
                        )}
                        <div className="rounded-2xl overflow-hidden shadow-xl border">
                          <img
                            src={content?.image || "https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Class-Room-3-1024x668.jpg"}
                            alt="Ishan Pharmacy Student Center"
                            className="w-full h-72 object-cover"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <a
                          href="https://erp.aktu.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-5 rounded-2xl border bg-card hover:shadow-lg hover:border-gold/50 transition-all group"
                        >
                          <div className="w-13 h-13 shrink-0 rounded-xl bg-navy/10 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-colors">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-foreground group-hover:text-navy transition-colors">
                                AKTU ERP & OneView Portal
                              </h3>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-navy" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              B.Pharm semester marksheet, admit cards & exam schedule
                            </p>
                          </div>
                        </a>

                        <a
                          href="https://bteup.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-5 rounded-2xl border bg-card hover:shadow-lg hover:border-gold/50 transition-all group"
                        >
                          <div className="w-13 h-13 shrink-0 rounded-xl bg-gold/20 text-gold-dark flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-foreground group-hover:text-navy transition-colors">
                                BTE UP Portal
                              </h3>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-navy" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              D.Pharm annual exam results, verification & registration
                            </p>
                          </div>
                        </a>

                        <a
                          href="https://login.microsoftonline.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-5 rounded-2xl border bg-card hover:shadow-lg hover:border-[#0078d4]/40 transition-all group"
                        >
                          <div className="w-13 h-13 shrink-0 rounded-xl bg-[#0078d4]/10 text-[#0078d4] flex items-center justify-center group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
                            <Laptop className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-foreground group-hover:text-[#0078d4] transition-colors">
                                Institutional Microsoft 365
                              </h3>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[#0078d4]" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Official @ishan.ac student email, Teams lectures & cloud drive
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              );

            case "academic_resources":
              return (
                <section className="py-14 bg-muted/30 border-y">
                  <div className="container-wide max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">Academic Timetables & Sessional Schedules</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      All laboratory batch rotations, sessional assessment dates, and university practical examination notifications are updated on the ERP bulletin board every Monday.
                    </p>
                  </div>
                </section>
              );

            case "cta":
              return (
                <section className="py-12 bg-navy text-white text-center">
                  <div className="container-wide max-w-2xl mx-auto">
                    <PhoneCall className="w-8 h-8 text-gold mx-auto mb-3" />
                    <h4 className="text-lg font-bold mb-2">Need ERP Credentials or Password Reset?</h4>
                    <p className="text-white/80 text-xs mb-4">
                      Contact the IT Helpdesk at IT Lab, Ishan Pharmacy Block or email <span className="text-gold font-medium">ithelpdesk@ishan.ac</span>
                    </p>
                    <a
                      href="tel:+918448797700"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold text-navy text-xs font-bold hover:bg-gold-light transition-colors"
                    >
                      Call Student Support: +91 8448797700
                    </a>
                  </div>
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
