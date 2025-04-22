import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

// Import project images
import project1Image from '../assets/projects/project1.png'
import project2Image from '../assets/projects/project2.png'
import project3Image from '../assets/projects/project3.png'

const projects = [
  {
    title: 'Rakshak',
    description: "A Flutter-based AI women's safety app with gender verification, real-time alerts, anonymous chats, and voice-activated SOS, powered by Firebase.",
    tech: [
      { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
      { name: 'Firebase', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg' },
      { name: 'Tensorflow', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
    ],
    image: project1Image,
    link: 'https://github.com/prayagupa23/rakshak-backup',
    status: 'live',
  },
  {
    title: 'CyberPro',
    description: 'Cyber Pro is a web platform simplifying cybersecurity education with interactive content on ransomware, phishing, and best practices, all in a clean, beginner-friendly UI.',
    tech: [
      { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    ],
    image: project2Image,
    link: 'https://github.com/prayagupa23/Cyber-Pro',
    status: 'live',
  },
  {
    title: 'MuseFlow',
    description: 'An elegant, intuitive music streaming platform offering seamless playback, immersive sound, and effortless exploration of tracks, artists, and curated playlists—optimized for all devices.',
    tech: [
      { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
      { name: 'Supabase', logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' },
      { name: 'Dart', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg' },
      { name: 'Figma', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    ],
    image: project3Image,
    link: 'https://github.com/sparth292/MuseFlow',
    status: 'in-progress',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-primary-dark transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Witness the beauty of code through my lens, as I showcase stunning projects that evoke wonder and appreciation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-8 h-8 bg-white/10 rounded-full p-1.5 backdrop-blur-sm"
                          title={tech.name}
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                      <div className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'live' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status === 'live' ? 'Live' : 'In Progress'}
                      </div>
                    </div>
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center items-center gap-6">
            <motion.a
              href="https://github.com/prayagupa23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/prayag-upadhyaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://x.com/Prayag_23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="25" height="45" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 