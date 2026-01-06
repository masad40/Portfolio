import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Coffee, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, number: "15+", label: "Projects Built", description: "Real-world practice projects" },
    { icon: Clock, number: "2000+", label: "Hours Practiced", description: "Hands-on coding & learning" },
    { icon: Users, number: "5+", label: "Team Work", description: "Collaborative coding experience" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee", description: "Staying focused & consistent" },
  ];

  const skills = [
    "MERN Stack Development",
    "REST API Development",
    "Authentication & Security",
    "Responsive UI with Tailwind",
    "State Management (Hooks)",
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Turning Ideas into
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real Web Experiences
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a MERN-Stack Developer who loves building clean, scalable and
            user-focused web applications — always learning, improving and shipping.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm <span className="text-cyan-400 font-semibold">ASADUZZAMAN</span> —
              a passionate developer who has invested over{" "}
              <span className="text-cyan-400 font-semibold">2000+ hours</span> learning and
              building projects. My journey started with curiosity and turned into a
              commitment to create modern web applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in the{" "}
              <span className="text-cyan-400 font-semibold">MERN stack</span> —
              focusing on clean architecture, performance, and real-world usability.
              Every project I build helps me push a step further.
            </p>

            {/* skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What I Do Best</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <CheckCircle size={16} className="text-cyan-400" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
              <ArrowRight size={18} className="ml-2" />
            </motion.button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-white" />
                  </div>

                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  <div className="text-white font-semibold mt-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
