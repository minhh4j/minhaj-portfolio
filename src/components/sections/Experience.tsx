import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code2, Calendar } from 'lucide-react';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-20 text-center">
    <motion.h2
      className="mb-4 text-4xl font-bold text-white md:text-5xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="max-w-2xl mx-auto text-lg text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

export const Experience: React.FC = () => {
  const experiences = [
    {
      date: '2024 - Present',
      title: 'MERN Stack Developer',
      company: 'Freelance & Projects',
      description:
        'Created and deployed 5+ full-stack applications using modern industry workflows. Building smooth, clean, and scalable digital experiences backed by secure APIs, smart UI/UX, and reliable real-time features.',
      achievements: [
        'Developed 5+ production-ready full-stack applications',
        'Implemented secure authentication and authorization systems',
        'Optimized application performance and load times',
        'Built responsive UIs with React and modern CSS frameworks'
      ]
    },
  ];

  const education = [
    {
      date: '2022 - 2024',
      title: 'Higher Secondary (+2) Computer Commerce',
      institution: 'PPTMYHSS',
      details:
        'Strengthened interest in technology and digital innovation. This educational foundation pushed the journey into full-stack development, building strong fundamentals in technology, business logic, and modern web development practices.',
      highlights: [
        'Computer Science fundamentals and programming concepts',
        'Database management and data structures',
        'Business logic and digital workflow systems',
        'Web technologies and modern development practices'
      ]
    },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Minhaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full left-10 top-20 w-[500px] h-[500px] bg-yellow-400/5 blur-3xl" />
        <div className="absolute rounded-full bottom-20 right-10 w-[500px] h-[500px] bg-yellow-500/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(250, 204, 21) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(250, 204, 21) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6 max-w-7xl">
        {/* Section Title */}
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey and educational background"
        />

        {/* Download Resume Button */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-4 font-semibold text-black transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-amber-500 shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute top-0 bottom-0 w-1 transform -translate-x-1/2 rounded-full left-1/2 bg-gradient-to-b from-yellow-400 via-yellow-400 to-yellow-400" />

          {/* Experience Section - Right Side */}
          <div className="mb-40">
            {/* Section Label */}
            <motion.div
              className="relative mb-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                <div className="flex items-center justify-center w-24 h-24 bg-yellow-400 rounded-full shadow-2xl shadow-yellow-400/40">
                  <Briefcase className="w-12 h-12 text-black" />
                </div>
              </div>
            </motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative grid grid-cols-2 gap-12 mb-24"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Left Empty Space */}
                <div className="pr-8" />

                {/* Right Content Card */}
                <div className="relative pl-8">
                  {/* Timeline Connector Dot */}
                  <div className="absolute -left-[13px] top-10 w-6 h-6 bg-yellow-400 rounded-full border-[5px] border-black shadow-xl shadow-yellow-400/40" />

                  {/* Card */}
                  <motion.div 
                    className="p-8 transition-all duration-300 border-2 border-gray-800 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl hover:border-yellow-400/50 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                      <span className="px-5 py-2 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-md">
                        {exp.date}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="mb-3 text-3xl font-bold text-white transition-colors group-hover:text-yellow-400">
                      {exp.title}
                    </h3>
                    <p className="flex items-center gap-2 mb-6 text-lg font-semibold text-yellow-400">
                      <Briefcase className="w-5 h-5" />
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-gray-400">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="pt-6 border-t border-gray-700">
                      <h4 className="mb-4 text-sm font-bold tracking-widest text-white uppercase">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400">
                            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section - Left Side */}
          <div className="mb-40">
            {/* Section Label */}
            <motion.div
              className="relative mb-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                <div className="flex items-center justify-center w-24 h-24 bg-yellow-400 rounded-full shadow-2xl shadow-yellow-400/40">
                  <GraduationCap className="w-12 h-12 text-black" />
                </div>
              </div>
            </motion.div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative grid grid-cols-2 gap-12 mb-24"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Left Content Card */}
                <div className="relative pr-8 text-right">
                  {/* Timeline Connector Dot */}
                  <div className="absolute -right-[13px] top-10 w-6 h-6 bg-yellow-400 rounded-full border-[5px] border-black shadow-xl shadow-yellow-400/40" />

                  {/* Card */}
                  <motion.div 
                    className="p-8 transition-all duration-300 border-2 border-gray-800 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl hover:border-yellow-400/50 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Date Badge */}
                    <div className="flex items-center justify-end gap-2 mb-5">
                      <span className="px-5 py-2 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-md">
                        {edu.date}
                      </span>
                      <Calendar className="w-5 h-5 text-yellow-400" />
                    </div>

                    {/* Title & Institution */}
                    <h3 className="mb-3 text-3xl font-bold text-white transition-colors group-hover:text-yellow-400">
                      {edu.title}
                    </h3>
                    <p className="flex items-center justify-end gap-2 mb-6 text-lg font-semibold text-yellow-400">
                      <span>{edu.institution}</span>
                      <GraduationCap className="w-5 h-5" />
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-gray-400">
                      {edu.details}
                    </p>

                    {/* Highlights */}
                    <div className="pt-6 border-t border-gray-700">
                      <h4 className="mb-4 text-sm font-bold tracking-widest text-white uppercase">
                        Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start justify-end gap-3 text-gray-400">
                            <span className="text-sm leading-relaxed text-right">{highlight}</span>
                            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Right Empty Space */}
                <div className="pl-8" />
              </motion.div>
            ))}
          </div>

          {/* Professional Summary - Centered at End */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Final Dot */}
            <div className="absolute transform -translate-x-1/2 left-1/2 -top-12">
              <div className="flex items-center justify-center w-24 h-24 bg-yellow-400 rounded-full shadow-2xl shadow-yellow-400/40 animate-pulse">
                <Award className="w-12 h-12 text-black" />
              </div>
            </div>

            {/* Summary Card */}
            <motion.div 
              className="relative max-w-4xl p-12 mx-auto mt-20 overflow-hidden border-2 shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border-yellow-400/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-400/5" />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="mb-2 text-lg font-bold text-white">
                  Professional Summary
                </h3>
                <p className="mb-10 text-sm gray-300 text-l ">
                  MERN Stack Developer with one year of practical development experience, creating and 
                  deploying 5+ full-stack applications using modern industry workflows. Passionate about 
                  building smooth, clean, and scalable digital experiences backed by secure APIs, smart 
                  UI/UX, and reliable real-time features. Committed to continuous learning and delivering 
                  innovative solutions that solve real-world problems with quality and efficiency.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-10 border-t-2 border-gray-700">
                  {[
                    { icon: Code2, label: 'Technologies', value: '15+' },
                    { icon: Briefcase, label: 'Projects', value: '5+' },
                    { icon: Award, label: 'Experience', value: '1 Year' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center"
                      whileHover={{ y: -5 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 rounded-2xl bg-yellow-400/10 border-yellow-400/40">
                        <stat.icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <div className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};