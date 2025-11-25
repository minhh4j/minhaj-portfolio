import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
export const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: theme === 'dark' ? '#FFD700' : '#121212',
      transition: {
        duration: 0.2
      }
    }
  };
  return <motion.nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'}`} initial="hidden" animate="visible" variants={navbarVariants}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a href="#home" className="text-2xl font-bold text-secondary dark:text-primary" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          Portfolio
        </motion.a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <motion.a key={link.name} href={link.href} className="text-secondary dark:text-white hover:text-primary dark:hover:text-primary transition-colors" variants={linkVariants} whileHover="hover">
              {link.name}
            </motion.a>)}
          <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon size={20} className="text-primary" /> : <MoonIcon size={20} className="text-secondary" />}
          </motion.button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button onClick={toggleTheme} className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <SunIcon size={20} className="text-primary" /> : <MoonIcon size={20} className="text-secondary" />}
          </motion.button>
          <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-secondary dark:text-white" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div className="md:hidden bg-white dark:bg-secondary shadow-lg" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map(link => <motion.a key={link.name} href={link.href} className="text-secondary dark:text-white hover:text-primary dark:hover:text-primary py-2 transition-colors" whileHover={{
          x: 5
        }} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </motion.a>)}
          </div>
        </motion.div>}
    </motion.nav>;
};