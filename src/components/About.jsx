import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-64 h-64 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-48 h-48 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 text-left"
            >
              <p className="text-lg text-gray-300 mb-4">
                Hello! I'm a passionate software developer with a keen interest in building innovative solutions. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-300">
                My journey in software development has been driven by curiosity and a constant desire to learn. I believe in writing clean, efficient code and creating user-friendly applications that make a difference.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2 text-white">Problem Solver</h3>
              <p className="text-gray-400">Turning complex challenges into elegant solutions</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2 text-white">Fast Learner</h3>
              <p className="text-gray-400">Always eager to explore new technologies</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl mb-2 text-white">Team Player</h3>
              <p className="text-gray-400">Collaborative approach to development</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 