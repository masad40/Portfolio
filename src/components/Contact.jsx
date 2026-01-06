import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tasnifmasad40@gmail.com",
      href: "mailto:tasnifmasad40@gmail.com",
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801616259928",
      href: "tel:+8801616259928",
      description: "Call me directly"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+8801642672025",
      href: "https://wa.me/8801642672025",
      description: "Chat on WhatsApp"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangladesh",
      href: "#",
      description: "Available worldwide"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
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
            <span className="text-cyan-400 text-sm font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'm always open to discussing new opportunities 
            and creative ideas. Let's bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I typically 
                respond within 24 hours and I'm always excited to discuss new projects.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                            {info.label}
                          </h4>
                          <p className="text-gray-300 font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Available for new projects
                  </h4>
                  <p className="text-sm text-gray-400">
                    Currently accepting new freelance opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Clock size={20} className="text-cyan-400 mr-3" />
            <span className="text-gray-300">
              <span className="font-semibold text-white">Response Time:</span> Usually within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}