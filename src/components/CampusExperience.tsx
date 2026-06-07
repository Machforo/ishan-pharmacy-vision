import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { usePharmacyData } from "@/hooks/usePharmacyData";
const defaultGalleryImages = [
  { title: "Pharmaceutics Lab", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80", category: "Practical" },
  { title: "Library", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80", category: "Research" },
  { title: "Clinical Sessions", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80", category: "Training" },
  { title: "Health Camp", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80", category: "Service" },
  { title: "Academic Excellence", img: "https://images.unsplash.com/photo-1587854692152-cbe668df9731?auto=format&fit=crop&w=800&q=80", category: "Campus" },
  { title: "Pharmacology Lab", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", category: "Training" },
  { title: "Event Plenary", img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80", category: "Events" },
  { title: "Lush Greenery", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", category: "Environment" },
];

export default function CampusExperience() {
  const ref = useScrollReveal();
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const { data } = usePharmacyData("homepage");
  const galleryImages = data?.lifeAtIshan?.length > 0 
    ? data.lifeAtIshan.map((img: any) => ({ img: img.image || img.url || img, category: "Campus", title: "Life at Ishan" })) 
    : (data?.gallery?.length > 0 ? data.gallery.map((img: any) => ({ img: img.image || img.url || img, category: "Campus", title: "Life at Ishan" })) : defaultGalleryImages);

  // Subtle rotation of images in specific tiles to keep it "dynamic"
  useEffect(() => {
    const interval = setInterval(() => {
      const tileToChange = Math.floor(Math.random() * 8);
      const nextImage = Math.floor(Math.random() * galleryImages.length);
      setActiveIndices(prev => {
        const next = [...prev];
        next[tileToChange] = nextImage;
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 bg-navy text-white overflow-hidden min-h-screen flex flex-col justify-center snap-start" ref={ref}>
      <div className="container-wide">
        <div className="mb-10 md:mb-12">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3 opacity-80">Life at Ishan Pharmacy</p>
          <h2 className="reveal delay-100 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Where <span className="text-gold">Healthcare Professionals</span> Are Formed
          </h2>
        </div>

        {/* High-Density Masonry Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[180px]">
          {/* Main Hero Tile */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndices[0]}
                src={galleryImages[activeIndices[0] % galleryImages.length].img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold text-gold uppercase tracking-widest">{galleryImages[activeIndices[0] % galleryImages.length].category}</span>
              <h3 className="text-lg md:text-xl font-bold mt-1">{galleryImages[activeIndices[0] % galleryImages.length].title}</h3>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[1]} src={galleryImages[activeIndices[1] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[2]} src={galleryImages[activeIndices[2] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[3]} src={galleryImages[activeIndices[3] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[4]} src={galleryImages[activeIndices[4] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[5]} src={galleryImages[activeIndices[5] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[6]} src={galleryImages[activeIndices[6] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[7]} src={galleryImages[activeIndices[7] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[8]} src={galleryImages[activeIndices[8] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <motion.img key={activeIndices[9]} src={galleryImages[activeIndices[9] % galleryImages.length].img} className="absolute inset-0 w-full h-full object-cover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800"; }} />
          </div>
        </div>
      </div>
    </section>
  );
}
