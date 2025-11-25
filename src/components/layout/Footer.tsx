import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, Instagram } from 'lucide-react';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/minhh4j',
    label: 'GitHub'
  }, {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/minhaj-k-bb5617372/',
    label: 'LinkedIn'
  }, {
    icon: <Instagram size={20} />,
    href: 'https://www.instagram.com/mnhhaj_/',
    label: 'Twitter'
  }, {
    icon: <MailIcon size={20} />,
    href: 'minhajdevv@gmail.com',
    label: 'Email'
  }];
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };
  return <motion.footer className="py-10 border-t border-gray-200 bg-light dark:bg-secondary dark:border-gray-800" initial="hidden" whileInView="visible" viewport={{
    once: true
  }} variants={footerVariants}>
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <h3 className="mb-2 text-xl font-bold text-secondary dark:text-primary">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building amazing web experiences
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
            <div className="flex mb-4 space-x-4">
              {socialLinks.map((link, index) => <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 transition-colors bg-gray-200 rounded-full dark:bg-gray-800 text-secondary dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-secondary" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} aria-label={link.label}>
                  {link.icon}
                </motion.a>)}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>;
};