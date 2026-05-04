import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Users } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or acted on this popup
    const hasInteracted = localStorage.getItem("Ishan Institute of Pharmacy_exit_intent_interacted");
    if (hasInteracted) return;

    const handleMouseOut = (e: MouseEvent) => {
      // Trigger if mouse leaves the top of the viewport
      if (!e.relatedTarget && e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("Ishan Institute of Pharmacy_exit_intent_interacted", "true");
  };

  const handleAction = () => {
    setIsVisible(false);
    localStorage.setItem("Ishan Institute of Pharmacy_exit_intent_interacted", "true");
    // The link itself will handle the navigation/call
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
          className="absolute inset-0"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-card rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted"
          >
            <X size={24} />
          </button>

          {/* Left Side - Visual */}
          <div className="md:w-5/12 bg-navy p-12 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mb-8 shadow-xl"
            >
              <Users className="w-12 h-12 text-navy" />
            </motion.div>
            <h3 className="text-white font-bold text-3xl mb-4 italic">Wait!</h3>
            <p className="text-white/70 text-base leading-relaxed">
              Don't leave without finding the right path for your career.
            </p>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-7/12 p-10 md:p-14 bg-card flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Still <span className="text-gold">Confused?</span>
            </h2>
            <p className="text-foreground/75 text-lg mb-10 leading-relaxed">
              Our expert admissions counselors are here to help you choose the perfect program based on your goals.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+918448797700"
                onClick={handleAction}
                className="flex items-center justify-center gap-3 w-full py-5 bg-navy text-white font-bold rounded-2xl shadow-xl hover:bg-navy-dark transition-all transform hover:-translate-y-1 active:scale-[0.98]"
              >
                <Phone size={20} />
                Call Expert Counselor
              </a>
              <button
                onClick={handleDismiss}
                className="w-full py-4 text-navy/60 font-bold hover:text-navy hover:bg-muted rounded-2xl transition-all"
              >
                I'll Explore More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
