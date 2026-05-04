import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import EnquiryCTA from "@/components/EnquiryCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PrincipalMessagePage() {
  const ref = useScrollReveal();
  
  const msg = {
      name: "Dr. Sandeep Singh", // Placeholder name
      designation: "Principal, Ishan Institute of Pharmacy",
      message: `Welcome to Ishan Institute of Pharmacy, where we transform healthcare aspirants into practice-ready professionals. In an era where the pharmaceutical landscape is rapidly evolving, our mission is to produce pharmacists and industry leaders who are not only masters of theoretical knowledge but also deeply committed to ethical healthcare practices.

What distinguishes Ishan Pharmacy is our unwavering focus on practical and clinical training. We believe that pharmacy is a life-saving discipline, best mastered through rigorous hands-on experience. Our curriculum is purposefully structured to integrate academic scholarship with laboratory experiments from the very first semester. Whether it is formulating drugs in our advanced Pharmaceutics Lab or learning clinical applications, our students learn by doing.

We provide our scholars with premier resources, including 10 specialized laboratories, a comprehensive medical library, a dedicated herbal garden, and mentorship from a faculty composed of distinguished industry practitioners and researchers. Our dedicated Placement Cell further ensures that students aspiring for careers in manufacturing, research, or clinical practice receive specialized guidance from day one.

I invite you to join our community and embark on a journey that will build a formidable foundation for your career in healthcare. At Ishan Pharmacy, we don't just teach pharmacy; we prepare you to practice it with excellence and integrity.`,
      image: "" // Removing generic unsplash
  };

  return (
    <Layout>
      <PageHeader
        title="Principal's Message"
        subtitle="Producing ethical and practice-ready healthcare professionals"
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Principal's Message" }]}
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
                        <div className="text-center p-6">
                          <div className="w-24 h-24 mx-auto rounded-full bg-gold-light flex items-center justify-center mb-3">
                            <span className="text-3xl font-bold text-navy">{msg.name ? msg.name.charAt(0) : "P"}</span>
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
                  <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80" alt="Ishan Pharmacy Academics" className="w-full h-64 object-cover" />
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
