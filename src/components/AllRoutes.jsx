import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import PageLayout from "./PageLayout";
import Services from "./Services";
import Education from "./Education";

// Home page component that contains all sections
const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Education></Education>
      <Services></Services>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

// Page wrapper with animations
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function AllRoutes() {
  return (
    <Routes>
      {/* Home route with all sections */}
      <Route
        path="/"
        element={
          <PageWrapper>
            <HomePage />
          </PageWrapper>
        }
      />
      
      {/* Individual section routes */}
      <Route
        path="/about"
        element={
          <PageWrapper>
            <PageLayout title="About Me" subtitle="Learn more about my journey and background">
              <About />
            </PageLayout>
          </PageWrapper>
        }
      />
      
      <Route
        path="/skills"
        element={
          <PageWrapper>
            <PageLayout title="My Skills" subtitle="Technologies and tools I use to bring ideas to life">
              <Skills />
            </PageLayout>
          </PageWrapper>
        }
      />
      
      <Route
        path="/experience"
        element={
          <PageWrapper>
            <PageLayout title="Experience" subtitle="My professional journey and achievements">
              <Experience />
            </PageLayout>
          </PageWrapper>
        }
      />
      
      <Route
        path="/projects"
        element={
          <PageWrapper>
            <PageLayout title="My Projects" subtitle="A showcase of my recent work and creations">
              <Projects />
            </PageLayout>
          </PageWrapper>
        }
      />
      
      <Route
        path="/contact"
        element={
          <PageWrapper>
            <PageLayout title="Get In Touch" subtitle="Let's work together to bring your ideas to life">
              <Contact />
            </PageLayout>
          </PageWrapper>
        }
      />
      
      {/* 404 Not Found page */}
      <Route
        path="*"
        element={
          <PageWrapper>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-8">Page not found</p>
                <motion.a
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go Home
                </motion.a>
              </div>
            </div>
          </PageWrapper>
        }
      />
    </Routes>
  );
}