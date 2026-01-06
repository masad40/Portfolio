import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  GraduationCap,
  Wrench,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { href: "#home", label: "Home", route: "/", icon: Home },
    { href: "#about", label: "About", route: "/about", icon: User },
    { href: "#education", label: "Education", route: "/education", icon: GraduationCap },
    { href: "#services", label: "Services", route: "/services", icon: Wrench },
    { href: "#skills", label: "Skills", route: "/skills", icon: Code },
    { href: "#experience", label: "Experience", route: "/experience", icon: Briefcase },
    { href: "#projects", label: "Projects", route: "/projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", route: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item) => {
    if (location.pathname === "/" && item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      item.href === "#home" ? navigate("/") : navigate(item.route);
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
            onClick={() => navigate("/")}
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.route ||
                (location.pathname === "/" && item.href === "#home");

              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 shadow-lg"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} className="mr-2" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile button */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80
              bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800
              shadow-2xl z-50 md:hidden border-l border-white/10"
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
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive =
                      location.pathname === item.route ||
                      (location.pathname === "/" && item.href === "#home");

                    return (
                      <motion.button
                        key={item.href}
                        onClick={() => handleNavigation(item)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-500/20 text-cyan-400 shadow-lg"
                            : "text-white hover:bg-white/10"
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
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
