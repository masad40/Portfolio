import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ExternalLink, Github, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">
              Project Not Found
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-gray-300 hover:text-cyan-400"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1200x600?text=Project+Image";
            }}
          />
        </motion.div>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
            {project.fullDescription || project.description}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <ExternalLink size={20} />
              Live Demo
            </motion.a>
          )}
          {project.repo && (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all"
            >
              <Github size={20} />
              View Repository
            </motion.a>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-medium text-sm border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  Challenges
                </span>
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-cyan-400 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-300">
                      {challenge}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Future Improvements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  Future Plans
                </span>
              </h3>
              <ul className="space-y-3">
                {project.future.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-purple-400 font-bold">
                      →
                    </span>
                    <span className="text-gray-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
