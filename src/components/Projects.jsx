import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Blood-Donation",
    description: "BloodCare is a MERN stack based blood donation platform that connects blood donors with those in need, making the donation process seamless, efficient, and life-saving. The platform allows users to register as donors, create donation requests, search for donors, donate funds, and manage requests based on their roles (Donor, Volunteer, Admin).",
    image: "https://i.ibb.co.com/bjHyzjTN/blood-donation.png",
    category: "Full Stack",
    technologies: ["React", "Stripe", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://bloodcare-11.netlify.app/",
    githubUrl: "https://github.com/masad40/Blood-Care-client",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "ImportWave is a modern web application where users can browse global products, manage exports, and save items to their My Imports list with a single click.It features a clean UI, secure authentication, and a smart dashboard for managing trade activities.",
    image: "https://i.ibb.co.com/Mx4JTC5f/Screenshot-2026-01-06-055435.png",
    category: "Full Stack",
    technologies: ["React.js","Node.js", "MongoDB", "Express", "Tailwind"],
    liveUrl: "https://import-wave.netlify.app/",
    githubUrl: "https://github.com/masad40/ImportWave-Client",
    featured: true
  },
  {
    id: 3,
    title: "Game-Hub",
    description: "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    image: "https://i.ibb.co.com/bMHZGhvz/Screenshot-2026-01-06-062923.png",
    category: "Frontend",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    liveUrl: "https://gamehub-a-9.netlify.app/",
    githubUrl: "https://github.com/masad40/Game-hub",
    featured: false
  },
  {
    id: 4,
    title: "Digi-Mart",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
    image: "https://i.ibb.co.com/zTQrFPDH/Screenshot-2026-01-06-064055.png",
    category: "Frontend",
    technologies: ["HTML5", " JavaScript", ".Tailwind", "CSS3"],
    liveUrl: "https://digimart-007.netlify.app/",
    githubUrl: "https://github.com/masad40/PH-A08",
    featured: false
  },
  {
    id: 5,
    title: "English Janala",
    description: "English learning platform",
    image: "https://i.ibb.co.com/W4NqsWG9/Screenshot-2026-01-06-064720.png",
    category: "Frontend",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://masad40.github.io/English-Janala/",
    githubUrl: "https://github.com/masad40/English-Janala",
    featured: false
  },
  {
    id: 6,
    title: "Green-Earth",
    description: "Green-Earth",
    image: "https://i.ibb.co.com/qM6c65t3/Screenshot-2026-01-06-065108.png",
    category: "Frontend",
    technologies: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://green-earth-ph-06.netlify.app/",
    githubUrl: "https://github.com/masad40/Green-Earth",
    featured: false
  }
];

const categories = ["All", "Full Stack", "Frontend"];

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
              Featured
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">
            {project.category}
          </div>

          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex space-x-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={16} className="mr-1" />
                Code
              </a>
            </div>
            
            {/* <motion.button
              className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn"
              whileHover={{ x: 5 }}
            >
              View etails
              <ArroDwRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
            <span className="text-cyan-400 text-sm font-medium">My Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring modern web applications 
            built with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} className="mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm always excited to work on new challenges.
            </p>
            <motion.button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}