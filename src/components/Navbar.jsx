import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu, X, Home, User, Code, FolderOpen,
  Mail, GraduationCap, Wrench
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 One source of truth
  const navItems = [
    { id: "home", label: "Home", route: "/", icon: Home },
    { id: "about", label: "About", route: "/about", icon: User },
    { id: "education", label: "Education", route: "/education", icon: GraduationCap },
    { id: "services", label: "Services", route: "/services", icon: Wrench },
    { id: "skills", label: "Skills", route: "/skills", icon: Code },
    { id: "projects", label: "Projects", route: "/projects", icon: FolderOpen },
    { id: "contact", label: "Contact", route: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 👇 Navigation logic (simple + reliable)
  const handleNavigation = async (item) => {
    // If already home page
    if (item.route === "/" && location.pathname === "/") {
      scrollToSection(item.id);
    } else {
      await navigate(item.route);
      if (item.route === "/") scrollToSection(item.id);
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-11/12">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation(navItems[0])}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ASADUZZAMAN
            </span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.route;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 shadow-lg"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Icon size={16} className="mr-2" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl z-50 border-l border-gray-700 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <span className="text-lg font-bold text-white">Menu</span>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.route;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavigation(item)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all ${
                          isActive
                            ? "bg-cyan-500/20 text-cyan-400 shadow-lg"
                            : "bg-blue-950 text-white hover:bg-white/10"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <Icon size={20} className="mr-3" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
