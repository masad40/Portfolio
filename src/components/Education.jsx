import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.A (Honours) in Political Science",
    institution: "National University, Bangladesh",
    year: "Ongoing",
    cgpa: "—",
    description:
      "Studying Political Science with a focus on governance, public policy, international relations, and social issues. Developing strong analytical, research, and communication skills that help me think critically and solve real-world problems.",
    achievements: [
      "Actively involved in presentations and group research work",
      "Developed strong interest in public policy and governance",
      "Balancing academic studies while learning web development",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Arts",
    institution: "Shandhani School And College",
    year: "Completed",
    cgpa: "GPA 5.00 / 5.00",
    description:
      "Completed HSC in Arts. Built a solid foundation in social studies, history, and civic knowledge while developing discipline, responsibility, and study habits.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-16 sm:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-60 sm:w-72 h-60 sm:h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4"
          >
            <span className="text-cyan-400 text-sm font-medium">Education</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Academic
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My academic background — shaping my thinking, discipline, and problem-solving mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10" />

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 pl-12 sm:pl-14 md:pl-0 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="p-5 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400">
                        <GraduationCap size={22} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">
                          {edu.degree}
                        </h3>

                        <p className="text-sm sm:text-base font-semibold text-cyan-400 mb-2">
                          {edu.institution}
                        </p>

                        <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{edu.year}</span>
                          </div>

                          {edu.cgpa !== "—" && (
                            <div className="flex items-center gap-2">
                              <Award size={14} />
                              <span>{edu.cgpa}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                      {edu.description}
                    </p>

                    {edu.achievements && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                          Key Achievements:
                        </h4>

                        <ul className="space-y-2">
                          {edu.achievements.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                              <span className="text-cyan-400 mt-1">✓</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
