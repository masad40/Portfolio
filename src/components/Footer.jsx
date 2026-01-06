import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

   const socialLinks = [
    { icon: Github, url: "https://github.com/masad40", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/masad-webdev/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:tasnifmasad40@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    ASADUZZAMAN
                  </h3>
                  <p className="text-gray-400 text-sm">Full-Stack MERN Developer</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about creating exceptional digital experiences with modern technologies. 
                Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
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
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:tasnifmasad40@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    tasnifmasad40@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+8801722930883"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    +880 1616259928
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-gray-300">Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} ASADUZZAMAN. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}