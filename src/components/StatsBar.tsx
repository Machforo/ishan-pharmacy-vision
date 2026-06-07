import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";
import { usePharmacyData } from "@/hooks/usePharmacyData";

const defaultStats = [
  { value: "95%", label: "PLACEMENTS" },
  { value: "10", label: "SPECIALIZED LABS" },
  { value: "10,000+", label: "ALUMNI NETWORK" },
  { value: "150+", label: "FACULTY HUB" },
];

function AnimatedCounter({ rawValue }: { rawValue: string }) {
  const numMatch = typeof rawValue === 'string' ? rawValue.match(/^[\d,.]+/) : null;
  const hasNumber = !!numMatch;
  const target = hasNumber ? parseFloat(numMatch[0].replace(/,/g, '')) : NaN;
  const suffix = hasNumber ? rawValue.replace(/^[\d,.]+/, '') : rawValue;

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isNaN(target)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value">
      {isNaN(target) ? rawValue : ((count || target).toLocaleString() + suffix)}
    </span>
  );
}

export default function StatsBar() {
  const ref = useScrollReveal();
  const { data, isLoading } = usePharmacyData("homepage");
  
  // Use a ref to keep the stats stable once they are loaded or if using defaults
  const [statsList, setStatsList] = useState(defaultStats);

  useEffect(() => {
    if (data?.stats?.length > 0) {
      setStatsList(data.stats);
    }
  }, [data]);

  const brands = [
    { name: "PCI", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=PCI" },
    { name: "AKTU", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=AKTU" },
    { name: "BTE UP", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=BTE+UP" },
    { name: "JEECUP", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=JEECUP" },
    { name: "URISE", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=URISE" },
    { name: "CUET", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=CUET" },
    { name: "UP Scholarship", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=Scholarship" },
    { name: "UP Pharmacy Council", logo: "https://placehold.co/150x150/e2e8f0/1e293b?text=UP+Pharmacy+Council" },
  ];

  return (
    <section className="bg-navy relative z-10 overflow-hidden" ref={ref}>
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16 md:mb-24">
          {statsList.map((stat: any, i: number) => (
            <div
              key={stat.label || i}
              className={`text-center reveal delay-${i * 100}`}
            >
              <AnimatedCounter rawValue={stat.value?.toString() || "0"} />
              <p className="stat-label text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logos Marquee */}
        <div className="reveal delay-500 pt-8 border-t border-white/10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-8">
            Approved By & Partnered With
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...brands, ...brands].map((brand, i) => (
                <div key={`${brand.name}-${i}`} className="mx-8 md:mx-12 shrink-0 group">
                  <div className="bg-white p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
