import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIshanLawData } from "@/hooks/useIshanLawData";

export default function DirectorMessagePage() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("aboutus");
  const defaultImage = "/assets/director.jpg"; // Placeholder path for now
  const msg = data?.directorMessage || {
      name: "Dr. D.K. Garg",
      designation: "Founder Chairman, Ishan Group",
      message: `Welcome to Ishan Institute of Pharmacy. As we navigate an era of significant pharmaceutical and social transformation, I believe that legal education must go beyond textbooks—it is a vital force that shapes the defenders of justice. At Ishan Pharmacy, our philosophy is rooted in the belief that every student has the potential to become a champion of the rule of law when nurtured with practice-oriented guidance.

Our vision for Ishan Pharmacy is to create an ecosystem that prioritizes clinical legal education and ethical practice. We aim for the holistic development of our students, focusing not just on pharmaceutical scholarship, but on fostering critical reasoning, social empathy, and professional integrity. We want our graduates to be advocates who can lead with conscience and innovate in the pursuit of justice.

I warmly invite you to join the Ishan Pharmacy community and experience an education designed to prepare you for both professional success and social impact. Explore our programs and see how we can help you achieve your legal aspirations. We look forward to welcoming you to our campus in Knowledge Park.`,
      image: defaultImage
  };

  return (
    <Layout>
      <PageHeader
        title="Director's Message"
        subtitle="A vision for academic excellence and student success"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Director's Message" }]}
      />

      <section className="py-20 md:py-28" ref={ref}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14">
              <div className="reveal-left">
                <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_hsl(var(--navy)/0.1)] border bg-card">
                  {msg.image ? (
                      <img src={msg.image} alt={msg.name} className="w-full h-auto object-cover" />
                  ) : (
                      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-3">
                            <span className="text-3xl font-bold text-navy">{msg.name ? msg.name.charAt(0) : "D"}</span>
                          </div>
                          <p className="text-sm font-semibold text-foreground">{msg.name}</p>
                          <p className="text-xs text-muted-foreground">{msg.designation}</p>
                        </div>
                      </div>
                  )}
                </div>
              </div>

              <div className="reveal-right space-y-8">
                <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
                   {msg.message}
                </p>

                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground">{msg.name}</p>
                  <p className="text-sm text-muted-foreground">{msg.designation}</p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl border">
                  <img src="https://placehold.co/1024x768/e2e8f0/1e293b?text=Ishan+Campus" alt="Ishan Pharmacy Campus" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </Layout>
  );
}
