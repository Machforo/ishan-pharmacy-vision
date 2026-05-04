import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AnnouncementPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("Ishan Institute of Pharmacy_announcement_seen");
    if (hasSeen) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("Ishan Institute of Pharmacy_announcement_seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-navy transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                <Bell size={32} />
              </div>
              
              <h2 className="text-3xl font-bold text-navy mb-4">Admissions Open 2025-26</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Admissions are now open for D.Pharm and B.Pharm programs at Ishan Institute of Pharmacy, Greater Noida. PCI Approved — limited seats available for the 2025-26 session.
              </p>

              <div className="space-y-3">
                <Link
                  to="/admissions"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-navy-dark transition-all transform hover:-translate-y-1"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
                <button
                  onClick={handleClose}
                  className="w-full py-3 text-sm font-semibold text-muted-foreground hover:text-navy transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            <div className="bg-muted/50 p-4 text-center border-t">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                Limited Seats Available | Scholarship Options Open
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
