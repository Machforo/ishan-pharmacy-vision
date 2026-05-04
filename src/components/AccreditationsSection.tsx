import { useScrollReveal } from "@/hooks/useScrollReveal";

// Force-hardcoded — bypasses CMS to ensure pharmacy logos always show
const accreditations = [
  { name: "PCI", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/PCI-150x150.png" },
  { name: "AKTU", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/AKTU-150x150.png" },
  { name: "BTE UP", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/BTE-up-150x150.jpg" },
  { name: "JEECUP", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/Jeecup-150x150.png" },
  { name: "URISE", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/URISE.png" },
  { name: "CUET", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/CUET-150x150.jpg" },
  { name: "UP Scholarship", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/Scholarship-UP-150x150.jpg" },
  { name: "UP Pharmacy Council", url: "https://pharmacy.ishan.ac/wp-content/uploads/2023/07/UP-Pharmacy-Council-150x150.png" },
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
