import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3, duration: 0.9, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const socials = [
    { icon: Github, href: "https://github.com/minhh4j", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/minhaj-k-bb5617372", label: "LinkedIn" },
    { icon: Mail, href: "mailto:minhajdevv@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen px-6 py-20 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a0800 0%, #100c00 40%, #0d0900 70%, #080600 100%)",
      }}
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

      {/* ── NAVIGATION ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          borderBottom: "1px solid rgba(201,162,39,0.15)",
          background: "rgba(10,8,0,0.75)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-xl font-extrabold cursor-pointer"
            style={{ color: "#fff" }}
          >
            Minhaj<span style={{ color: "#f5d060" }}>.</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "rgba(210,190,130,0.7)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f5d060")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(210,190,130,0.7)")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full md:block"
            style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
              color: "#0a0800",
              boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(201,162,39,0.45)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,162,39,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Hire Me
          </button>
        </div>
      </header>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[320px]"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.13) 0%, transparent 70%)" }}
        />
        <div
          className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 blur-3xl"
          style={{ background: "rgba(212,175,55,0.07)" }}
        />
        <div
          className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 blur-3xl"
          style={{ background: "rgba(212,175,55,0.06)" }}
        />
      </div>

      <div className="container relative z-10 pt-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT TEXT ── */}
          <div className="order-2 space-y-8 lg:order-1">

            {/* Badge */}
            <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
              <span
                className="inline-block px-4 py-2 text-sm font-semibold rounded-full"
                style={{
                  color: "#f5d060",
                  border: "1px solid rgba(201,162,39,0.35)",
                  background: "rgba(201,162,39,0.08)",
                  letterSpacing: "0.04em",
                }}
              >
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(212,175,55,0.3))",
                }}
              >
                Minhaj
              </span>
            </motion.h1>

            {/* Gold divider */}
            <motion.div custom={1.5} variants={textVariants} initial="hidden" animate="visible">
              <div
                className="w-14 h-[2px]"
                style={{ background: "linear-gradient(90deg, #c9a227, transparent)" }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold md:text-3xl lg:text-4xl"
              style={{ color: "rgba(210,190,130,0.85)" }}
            >
              MERN Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-lg font-light leading-relaxed md:text-xl"
              style={{ color: "rgba(210,190,130,0.55)" }}
            >
              Crafting scalable web applications with modern technologies.
              Transforming ideas into elegant digital solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <motion.button
                className="px-8 py-4 font-semibold transition-all duration-300 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                  color: "#0a0800",
                  boxShadow: "0 4px 24px rgba(201,162,39,0.3)",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </motion.button>

              <motion.button
                className="px-8 py-4 font-semibold transition-all duration-300 rounded-full"
                style={{
                  background: "transparent",
                  color: "#f5d060",
                  border: "2px solid rgba(201,162,39,0.6)",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#f5d060";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.6)";
                }}
              >
                Contact
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              custom={5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 pt-2"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-3 transition-all duration-300 rounded-full group"
                  style={{
                    background: "rgba(201,162,39,0.05)",
                    border: "1.5px solid rgba(201,162,39,0.2)",
                  }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.7)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(201,162,39,0.2)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <social.icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: "rgba(210,190,130,0.6)" }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="relative flex justify-center order-1 lg:justify-end lg:order-2">
            <div className="relative w-full max-w-md">

              {/* Outer gold glow ring */}
              <div
                className="absolute inset-0 rounded-[44px] pointer-events-none"
                style={{
                  boxShadow: "0 0 80px rgba(201,162,39,0.18), 0 0 160px rgba(201,162,39,0.08)",
                }}
              />

              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  border: "1px solid rgba(201,162,39,0.25)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(201,162,39,0.1)",
                }}
              >
                <img
                  src="/img3.jpg"
                  alt="Minhaj - MERN Stack Developer Portrait"
                  className="object-cover w-full h-full"
                  style={{ filter: "brightness(0.9) sepia(0.1) saturate(1.05)" }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
                  style={{
                    background: "linear-gradient(to top, rgba(10,8,0,0.6) 0%, transparent 60%)",
                  }}
                />
                {/* Permanent gold bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(10,8,0,0.45), transparent)",
                  }}
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(8,6,0,0.8))" }}
      />
    </section>
  );
};