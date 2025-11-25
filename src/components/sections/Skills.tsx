import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      proficiency: 95,
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      proficiency: 90,
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      proficiency: 98,
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      proficiency: 88,
      category: 'Frontend'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      proficiency: 95,
      category: 'Frontend'
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      proficiency: 85,
      category: 'Frontend'
    },
    {
      name: 'Redux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      proficiency: 87,
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      proficiency: 90,
      category: 'Frontend'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      proficiency: 88,
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      proficiency: 87,
      category: 'Backend'
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      proficiency: 85,
      category: 'Backend'
    },
    {
      name: 'Socket.IO',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      proficiency: 82,
      category: 'Backend'
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      proficiency: 82,
      category: 'Backend'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      proficiency: 60,
      category: 'Backend'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      proficiency: 90,
      category: 'Tools'
    },
    {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      proficiency: 80,
      category: 'Design'
    },
    {
      name: 'Full Stack',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      proficiency: 90,
      category: 'Specialization'
    },
    {
      name: 'MVC Pattern',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      proficiency: 88,
      category: 'Architecture'
    },
    {
      name: 'Agile',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      proficiency: 85,
      category: 'Methodology'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Design', 'Specialization', 'Architecture', 'Methodology', 'Database'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(250, 204, 21) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(250, 204, 21) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 max-w-6xl px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-3 text-sm font-medium text-yellow-700 border border-yellow-200 rounded-full bg-yellow-50 dark:bg-yellow-500/10 dark:border-yellow-500/20 dark:text-yellow-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            My Skills
          </motion.div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Technical
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
              Expertise
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={selectedCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative group"
            >
              {/* Skill Card */}
              <div className="relative p-6 transition-all duration-300 border border-gray-200 shadow-md bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 dark:border-gray-800 rounded-2xl hover:shadow-xl group-hover:border-yellow-400/40 dark:group-hover:border-yellow-500/40">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 border-2 border-yellow-400/20 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-500/10 dark:to-amber-500/10 group-hover:scale-110 group-hover:rotate-3">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-10 h-10 drop-shadow-md"
                  />
                </div>

                {/* Skill Name */}
                <h3 className="mb-3 text-lg font-bold text-center text-gray-900 dark:text-white">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-yellow-700 border border-yellow-200 rounded-full bg-yellow-50 dark:bg-yellow-500/10 dark:border-yellow-500/20 dark:text-yellow-400">
                    {skill.category}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="font-bold text-gray-900 dark:text-white">{skill.proficiency}%</span>
                  </div>
                  <div className="relative h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                    />
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full opacity-50 bg-gradient-to-r from-yellow-400 to-amber-500 blur-sm"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-amber-500/10 -z-10 blur-xl group-hover:opacity-100" />
              </div>

              {/* Corner Accent */}
              <div className="absolute w-3 h-3 transition-all duration-300 border-t-2 border-l-2 border-yellow-400 opacity-0 -top-1 -left-1 rounded-tl-xl group-hover:opacity-100" />
              <div className="absolute w-3 h-3 transition-all duration-300 border-b-2 border-r-2 border-yellow-400 opacity-0 -bottom-1 -right-1 rounded-br-xl group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="grid gap-4 mt-12 sm:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Technologies', value: skills.length },
            { label: 'Average Proficiency', value: `${Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}%` },
            { label: 'Years Experience', value: '1+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-5 text-center transition-all duration-300 border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-800 rounded-xl hover:shadow-md hover:border-yellow-400/30 dark:hover:border-yellow-500/30"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="mb-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};