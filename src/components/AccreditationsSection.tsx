import { useScrollReveal } from "@/hooks/useScrollReveal";

// Force-hardcoded — bypasses CMS to ensure pharmacy logos always show
const accreditations = [
  { name: "PCI", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=PCI" },
  { name: "AKTU", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=AKTU" },
  { name: "BTE UP", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=BTE+UP" },
  { name: "JEECUP", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=JEECUP" },
  { name: "URISE", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=URISE" },
  { name: "CUET", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=CUET" },
  { name: "UP Scholarship", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=Scholarship" },
  { name: "UP Pharmacy Council", url: "https://placehold.co/150x150/e2e8f0/1e293b?text=UP+Pharmacy+Council" },
];

export default function AccreditationsSection() {
  const ref = useScrollReveal();

  return (
    <section id="accreditations" className="py-16 md:py-20 border-y bg-muted/30" ref={ref}>
      <div className="container-wide">
        <p className="reveal text-center text-xs font-bold uppercase tracking-[0.25em] text-gold mb-1">
          Approved By &amp; Partnered With
        </p>
        <p className="reveal text-center text-xs text-muted-foreground/60 mb-10">
          Ishan Institute of Pharmacy holds all mandatory approvals from India's premier regulatory bodies
        </p>
        <div className="reveal delay-100 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {accreditations.map((acc) => (
            <div
              key={acc.name}
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <img
                src={acc.url}
                alt={acc.name}
                className="h-14 md:h-16 w-auto object-contain"
                loading="lazy"
              />
              <span className="text-[10px] font-semibold text-muted-foreground tracking-wide">{acc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
