import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function SportsPage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("campuslife");
  const sports = data?.sports;
  const content = sports?.content;
  const specs = sports?.specs?.length > 0 ? sports.specs : [
    { label: "Outdoor", value: "Cricket Ground, Basketball Court" },
    { label: "Indoor", value: "Table Tennis, Badminton, Chess" },
    { label: "Annual Event", value: "Sports Meet" },
    { label: "Teams", value: "Inter-College Tournaments" }
  ];

  return (
    <Layout>
      <PageHeader title="Sports" subtitle="Inter-college competitions, annual sports meet, and campus recreational facilities" breadcrumbs={[{ label: "Campus", href: "/infrastructure" }, { label: "Sports" }]} />
      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-lg">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" alt="Sports Meet" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-4 rounded-xl shadow-xl font-bold hidden md:block">
                ANNUAL SPORTS MEET
              </div>
            </div>
            <div className="reveal-right space-y-6">
              <h2 className="text-3xl font-bold text-foreground leading-tight">Fitness & Sportsmanship</h2>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
              {content || "Ishan Pharmacy promotes physical fitness and sportsmanship through a comprehensive sports program. The campus features facilities for cricket, basketball, badminton, volleyball, table tennis, and athletics. The annual sports meet is a highlight of the academic calendar, bringing together students from across the Ishan Group in a spirit of healthy competition."}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((s: any, i: number) => (
                <div key={s.label || i} className="px-4 py-3 rounded-lg border bg-card text-sm text-foreground/80 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                  <span className="font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" alt="Basketball Court" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden border">
                <img src="https://pharmacy.ishan.ac/wp-content/uploads/2023/10/Tug-of-War-1024x768.jpg" alt="Cricket Match" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </Layout>
  );
}
