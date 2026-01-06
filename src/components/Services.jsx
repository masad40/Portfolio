import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Full-Stack Development", 
    desc: "Complete web applications using React, Node.js, MongoDB, and Express",
    icon: Code,
    features: ["MERN Stack", "API Development", "Database Design", "Authentication"]
  },
  { 
    title: "Frontend Development", 
    desc: "Pixel-perfect, responsive, and interactive user interfaces",
    icon: Palette,
    features: ["React/Next.js", "Tailwind CSS", "Animations", "Mobile-First"]
  },
  { 
    title: "Performance Optimization", 
    desc: "Fast, SEO-friendly, and scalable web applications",
    icon: Zap,
    features: ["Speed Optimization", "SEO", "Code Splitting", "Caching"]
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4"
          >
            <span className="text-cyan-400 text-sm font-medium">Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services I
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services to bring your digital vision to life 
            with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">Get Started</span>
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help bring your ideas to life.
            </p>
            <motion.button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
