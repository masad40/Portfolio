import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 dark:bg-gray-900">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x250?text=Project+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-400 text-xs font-medium">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <Link
              to={`/project/${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-600 transition-all group-hover:shadow-lg shadow-primary/50 text-sm"
            >
              View Details
              <ExternalLink size={16} />
            </Link>
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-all"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
