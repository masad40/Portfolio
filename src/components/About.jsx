import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Coffee, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      icon: Users, 
      number: "10+", 
      label: "Happy Clients",
      description: "Satisfied clients worldwide"
    },
    { 
      icon: Award, 
      number: "20+", 
      label: "Projects Done",
      description: "Successfully completed projects"
    },
    { 
      icon: Clock, 
      number: "1+", 
      label: "Years Experience",
      description: "In web development"
    },
    { 
      icon: Coffee, 
      number: "3+", 
      label: "Countries Served",
      description: "Global client base"
    },
  ];

  const skills = [
    "Full-Stack Development",
    "MERN Stack Expertise",
    "Responsive Design",
    "API Development",
    "Database Design",
    
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-cyan-400 text-sm font-medium">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate MERN-Stack Developer with expertise in modern web technologies, 
            creating scalable solutions that drive business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Hello! I'm <span className="text-cyan-400 font-semibold">ASADUZZAMAN</span>, 
                a passionate MERN-Stack Developer with over 4 years of experience in creating 
                stunning and functional web applications. My journey began with curiosity about 
                how websites work, and it has evolved into a deep passion for crafting digital solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I specialize in the <span className="text-cyan-400 font-semibold">MERN stack</span> 
                (MongoDB, Express.js, React, Node.js) and have extensive experience with various 
                CMS platforms including WordPress, Wix, and Framer. I believe in writing clean, 
                maintainable code and creating user experiences that make a difference.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white mb-4">What I Do Best</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    {/* Number */}
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-white font-semibold mb-1">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}