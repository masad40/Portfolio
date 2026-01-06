import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Download, ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import profile from "../assets/photo.jpg";
import resume from "../../public/Profile (1).pdf";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, url: "https://github.com/masad40", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/masad-webdev/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:tasnifmasad40@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{ left: "10%", top: "20%" }}
        />

        <motion.div
          className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <span className="text-cyan-400 mr-2">👋</span>
              <span className="text-sm font-medium text-gray-300">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ASADUZZAMAN
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MASAD
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-400 h-8"
            >
              <ReactTyped
                strings={[
                  "Full-Stack MERN Developer",
                  "React.js Specialist",
                  "Node.js Expert",
                  "UI/UX Enthusiast",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                showCursor
                cursorChar="|"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences with modern technologies. Specializing in
              full-stack development with 4+ years of experience serving clients globally.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href={resume}
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="mr-2" />
                Download CV
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <ExternalLink size={18} className="ml-2" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start items-center space-x-4 pt-2"
            >
              <span className="text-sm text-gray-500">Follow me:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: "110%", height: "110%", left: "-5%", top: "-5%" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ width: "130%", height: "130%", left: "-15%", top: "-15%" }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                <img src={profile} alt="ASADUZZAMAN" className="w-full h-full object-cover" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-xl">1+</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-cyan-400 font-semibold text-sm">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-current rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
