import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GithubIcon size={18} />,   href: 'https://github.com/minhh4j',                        label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/minhaj-k-bb5617372/',   label: 'LinkedIn' },
    { icon: <Instagram size={18} />,    href: 'https://www.instagram.com/mnhhaj_/',                 label: 'Instagram' },
    { icon: <MailIcon size={18} />,     href: 'mailto:minhajdevv@gmail.com',                        label: 'Email' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      className="relative py-10 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a0800 0%, #100c00 50%, #080600 100%)",
        borderTop: "1px solid rgba(201,162,39,0.2)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Top gold shimmer */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,162,39,0.07) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">

          {/* Left — Brand */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <h3
              className="mb-1 text-xl font-extrabold"
              style={{ color: "#fff", letterSpacing: "-0.01em" }}
            >
              Minhaj<span style={{ color: "#f5d060" }}>.</span>
            </h3>
            <p className="text-sm" style={{ color: "rgba(210,190,130,0.55)" }}>
              Building amazing web experiences
            </p>
          </motion.div>

          {/* Center — Gold divider (desktop hidden, just decoration) */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block w-[1px] h-10 self-center"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(201,162,39,0.3), transparent)" }}
          />

          {/* Right — Socials + copyright */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-4">
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(201,162,39,0.07)",
                    border: "1px solid rgba(201,162,39,0.2)",
                    color: "rgba(210,190,130,0.65)",
                  }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #c9a227, #f5d060)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#c9a227";
                    (e.currentTarget as HTMLElement).style.color = "#0a0800";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(201,162,39,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.07)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(210,190,130,0.65)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs" style={{ color: "rgba(210,190,130,0.4)" }}>
              © {currentYear}{" "}
              <span style={{ color: "rgba(201,162,39,0.7)" }}>Minhaj</span>
              . All rights reserved.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
};