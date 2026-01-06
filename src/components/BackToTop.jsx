import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}