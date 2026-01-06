import { motion } from "framer-motion";

export default function PageLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen pt-20">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>
      )}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}