import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { useIshanLawData } from "@/hooks/useIshanLawData";

const defaultHighlights = [
  "PCI Approved & AKTU/BTE Affiliated",
  "10 Specialised Laboratories",
  "Focus on Clinical Pharmacy Practice",
  "Strategic Location in Greater Noida",
];

export default function AboutSection() {
  const ref = useScrollReveal();
  const { data } = useIshanLawData("homepage");
  const apiAbout = data?.aboutIshanLaw;
  const about = {
    title: apiAbout?.title || "Excellence in Pharmaceutical Education & Research",
    description: apiAbout?.description || "Ishan Institute of Pharmacy, established as a premier center for pharmaceutical sciences, is dedicated to producing competent healthcare professionals. Recognized by the Pharmacy Council of India (PCI) and affiliated to AKTU and BTE UP, we combine rigorous academic curriculum with hands-on training in our 10 specialised labs.",
    image: (apiAbout?.image && apiAbout.image.length > 5) ? apiAbout.image : "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_hsl(var(--navy)/0.1)] bg-muted border">
              <img
                src={about.image}
                alt="Ishan Pharmacy Campus"
                className="w-full h-[400px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-xl shadow-[0_4px_24px_hsl(var(--navy)/0.12)] p-5 border">
              <p className="text-3xl font-bold text-navy">PCI</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Approved</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">About Ishan Pharmacy</p>
            <h2 className="font-bold text-foreground leading-tight">
              A Legacy of Healthcare Excellence in Greater Noida
            </h2>
            <p className="text-foreground/70 leading-relaxed whitespace-pre-wrap">
              {about.description}
            </p>
            <div className="space-y-3 pt-2">
              {defaultHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-navy hover:text-navy/80 transition-colors group"
            >
              Learn More About Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
