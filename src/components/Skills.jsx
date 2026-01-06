import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostgresql,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFigma,
  SiVercel,
  SiDocker,
  SiWordpress,
  SiFramer,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating beautiful and interactive user interfaces",
    skills: [
      { name: "React", icon: SiReact, level: 95, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
    
      { name: "Next.js", icon: SiNextdotjs, level: "Learning", color: "#000000" },
      { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, level: 90, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
      
    ],
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side applications",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 88, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, level: 85, color: "#47A248" },
      
      { name: "Firebase", icon: SiFirebase, level: 82, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development tools and deployment platforms I use daily",
    skills: [
      { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: 92, color: "#181717" },
      
      { name: "Vercel", icon: SiVercel, level: 88, color: "#000000" },
      { name: "Figma", icon: SiFigma, level: 80, color: "#F24E1E" },
    
      { name: "Framer", icon: SiFramer, level: 78, color: "#0055FF" },
    ],
  },
];

const SkillCard = ({ skill, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <skill.icon 
                className="text-2xl" 
                style={{ color: skill.color }}
              />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
            <span className="text-cyan-400 text-sm font-medium">My Skills</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technologies &
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks 
            I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
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
              Ready to bring your ideas to life?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together using these technologies.
            </p>
            <motion.button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}