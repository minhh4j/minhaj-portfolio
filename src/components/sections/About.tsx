import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, Briefcase, Award,  User} from 'lucide-react';
import { toast } from "react-hot-toast";

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const infoItems = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Malappuram, Kerala, India',
      gradient: 'from-yellow-400 to-yellow-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'minhajdevv@gmail.com',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      value: 'Higher Secondary Education in Computer Commerce',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      icon: Briefcase,
      title: 'Freelance',
      value: 'Available',
      gradient: 'from-yellow-400 to-amber-400',
    },
  ];
  
  const handleCopy = () => {
  navigator.clipboard.writeText("minhajdev@gmail.com");
  toast.success("Email copied to clipboard!");
};

  return (
    <section id="about" className="relative overflow-hidden bg-white py-14 dark:bg-black">
      {/* Subtle Background Blur Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-3 text-sm font-medium text-yellow-700 border border-yellow-200 rounded-full bg-yellow-50 dark:bg-yellow-500/10 dark:border-yellow-500/20 dark:text-yellow-400"
          >
            <User className="w-4 h-4" />
            About Me
          </motion.div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Building Scalable <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">Web Experiences</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Passionate about crafting clean, functional, and high-performing web applications.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10 w-56 h-56 overflow-hidden shadow-2xl md:w-64 md:h-64 rounded-3xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="src/public/img2.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
  className="absolute z-20 px-4 py-3 border border-gray-200 shadow-xl -bottom-6 -right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl dark:border-gray-800"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <div className="flex items-center gap-2">
    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500">
      <Award className="w-4 h-4 text-black" />
    </div>
    <div>
      <div className="text-lg font-bold text-gray-900 dark:text-white">1+</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
    </div>
  </div>
</motion.div>

            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Title & Subheading */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl dark:text-white">
                MERN Stack Developer
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500">
                  Turning Ideas into Code
                </span>
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
                <div className="w-6 h-1 bg-yellow-400 rounded-full" />
              </div>
            </motion.div>

            {/* About Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Hi, I'm <span className="font-semibold text-yellow-600 dark:text-yellow-400">Minhaj</span>, a passionate MERN Stack Developer from Malappuram, Kerala.
              I specialize in building responsive, dynamic, and user-friendly web applications using
              <span className="font-medium text-yellow-500"> React, Node.js, Express, and MongoDB</span>.
              I love solving problems through clean, efficient code and creating seamless digital experiences.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              className="grid gap-3 pt-2 sm:grid-cols-2"
              variants={containerVariants}
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="p-4 transition-all duration-300 border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 dark:border-gray-800 rounded-xl hover:shadow-md group-hover:border-yellow-400/30">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}>
                        <item.icon className="w-4 h-4 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2">
             <motion.button
  onClick={handleCopy}
  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 hover:shadow-lg hover:shadow-yellow-500/25"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
>
  <Mail className="w-4 h-4" />
  Copy Email
</motion.button>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
