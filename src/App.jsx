import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";

import { AnimatePresence } from "framer-motion";
import BackToTop from "./components/BackToTop";
import ParticlesBg from "./components/ParticlesBg";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-noise  opacity-5 pointer-events-none" />
      
      <div className="w-11/12 mx-auto">
        <Navbar />
      <ParticlesBg />

      <AnimatePresence mode="wait">
        <main key={location.pathname} className="relative z-10 ">
          <AllRoutes />
        </main>
      </AnimatePresence>

      <BackToTop />
      <Footer />
      </div>
    </div>
  );
}