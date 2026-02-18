import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',       href: '#home' },
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact',    href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? "rgba(10,8,0,0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(201,162,39,0.15)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
        padding: isScrolled ? "12px 0" : "20px 0",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6 max-w-7xl">

        {/* ── LOGO ── */}
        <motion.a
          href="#home"
          className="text-2xl font-extrabold relative group"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated glow behind logo on hover */}
          <span
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
            style={{ background: "rgba(201,162,39,0.2)" }}
          />
          <span className="relative">
            MINHAJ<span style={{ color: "#f5d060" }}>.</span>
          </span>
        </motion.a>

        {/* ── DESKTOP NAV ── */}
        <div className="items-center hidden space-x-1 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold group overflow-hidden rounded-lg"
              style={{ color: activeLink === link.name ? "#f5d060" : "rgba(210,190,130,0.65)" }}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink('')}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover background pill */}
              <motion.span
                className="absolute inset-0 rounded-lg"
                style={{ background: "rgba(201,162,39,0.08)", originX: 0 }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Gold underline slide */}
              <motion.span
                className="absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full"
                style={{ background: "linear-gradient(90deg, #c9a227, #f5d060)" }}
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />

              <motion.span
                className="relative"
                whileHover={{ color: "#f5d060", y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {link.name}
              </motion.span>
            </motion.a>
          ))}

          {/* Hire Me CTA */}
          <motion.a
            href="#contact"
            className="relative ml-4 px-5 py-2 text-sm font-bold rounded-full overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
              color: "#0a0800",
              boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
            }}
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(201,162,39,0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,162,39,0.3)";
            }}
          >
            {/* Shimmer sweep on hover */}
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
              }}
              initial={{ backgroundPosition: "200% 0" }}
              whileHover={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <span className="relative">Hire Me</span>
          </motion.a>
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(201,162,39,0.08)",
              border: "1px solid rgba(201,162,39,0.25)",
              color: "#f5d060",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <XIcon size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <MenuIcon size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,8,0,0.97)",
              borderTop: "1px solid rgba(201,162,39,0.15)",
              borderBottom: "1px solid rgba(201,162,39,0.15)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-5 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative flex items-center gap-3 py-3 px-3 rounded-xl text-sm font-semibold group transition-all duration-200"
                  style={{ color: "rgba(210,190,130,0.7)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 6 }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#f5d060";
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(210,190,130,0.7)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {/* Gold dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "#c9a227" }}
                  />
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Hire Me */}
              <motion.a
                href="#contact"
                className="mt-3 py-3 text-center text-sm font-bold rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                  color: "#0a0800",
                  boxShadow: "0 4px 20px rgba(201,162,39,0.25)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};