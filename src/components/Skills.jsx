import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 15 },
      { name: 'CSS', level: 35 },
      { name: 'JavaScript', level: 65 },
      { name: 'Flutter', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-lg text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Always learning and exploring new technologies to stay up-to-date with industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 