import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experienceData = [
  {
    company: "Freelance",
    role: "Full Stack MERN Developer",
    location: "Remote",
    duration: "2020 - Present",
    description: "Working as a freelance MERN-Stack Developer, creating stunning and modern web applications using MERN stack and various CMS platforms.",
    achievements: [
      "Served 50+ global clients across 30+ countries",
      "Completed 70+ successful projects",
      "Built scalable web applications with modern technologies",
      "Specialized in MERN stack development",
      "Experience with WordPress, Wix, and Framer platforms",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "WordPress", "Tailwind CSS"],
  },
  {
    company: "Various Clients",
    role: "Web Developer",
    location: "Global",
    duration: "2020 - Present",
    description: "Providing web development services to clients worldwide, focusing on responsive design and user experience.",
    achievements: [
      "Delivered pixel-perfect, responsive websites",
      "Implemented secure and performant solutions",
      "Maintained high client satisfaction rates",
      "Worked with diverse industries and requirements",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Framer"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
            <span className="text-cyan-400 text-sm font-medium">Experience</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Professional
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey and contributions in the world of web development, 
            serving clients globally with modern solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="relative"
            >
              <div 
                className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400">
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-cyan-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-cyan-400" />
                    Key Achievements:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}