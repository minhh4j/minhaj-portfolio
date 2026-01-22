// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';

// export const Hero: React.FC = () => {
//   const textVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.15,
//         duration: 0.8,
//         ease: [0.25, 0.4, 0.25, 1]
//       }
//     })
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: 0.3,
//         duration: 0.9,
//         ease: [0.25, 0.4, 0.25, 1]
//       }
//     }
//   };


//   const socials = [
//     { icon: Github, href: 'https://github.com/minhh4j', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://www.linkedin.com/in/minhaj-k-bb5617372', label: 'LinkedIn' },
//     { icon: Mail, href: 'https://mail.google.com/mail', label: 'Email' }
//   ];

//   return (
//     <section className="relative flex items-center min-h-screen px-6 py-20 overflow-hidden bg-black">
      
//       {/* Background Glow Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 blur-3xl" />
//         <div className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 blur-3xl" />
//       </div>

//       <div className="container relative z-10 mx-auto max-w-7xl">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
//           {/* ---------- LEFT TEXT CONTENT ---------- */}
//           <div className="order-2 space-y-8 lg:order-1">

//             <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
//               <span className="inline-block px-4 py-2 text-sm font-medium text-yellow-400 border rounded-full bg-yellow-400/10 border-yellow-400/20">
//                 👋 Hello, I'm
//               </span>
//             </motion.div>

//             <motion.h1
//               custom={1}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500">
//                 Minhaj
//               </span>
//             </motion.h1>

//             <motion.h2
//               custom={2}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-2xl font-semibold text-gray-300 md:text-3xl lg:text-4xl">
//               MERN Stack Developer
//             </motion.h2>

//             <motion.p
//               custom={3}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="max-w-xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">
//               Crafting scalable web applications with modern technologies.
//               Transforming ideas into elegant digital solutions.
//             </motion.p>

//             <motion.div
//               custom={4}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-wrap gap-4">

//               <motion.button
//                 className="px-8 py-4 font-semibold text-black transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-amber-500 shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/30"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}>
//                 Hire Me
//               </motion.button>

//               <motion.button
//                 className="px-8 py-4 font-semibold text-yellow-400 transition-all duration-300 bg-transparent border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 >
//                 Contact
//               </motion.button>

//             </motion.div>

//             <motion.div
//               custom={5}
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex items-center gap-4 pt-2">

//               {socials.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   className="p-3 transition-all duration-300 bg-black border-2 border-gray-800 rounded-full hover:border-yellow-400 hover:bg-yellow-400/10 group"
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}>
//                   <social.icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-yellow-400" />
//                 </motion.a>
//               ))}

//             </motion.div>
//           </div>

//           {/* ---------- RIGHT IMAGE CONTENT ---------- */}
//           <div className="relative flex justify-center order-1 lg:justify-end lg:order-2">
//             <div className="relative w-full max-w-md">

//               {/* Main Image (Background Box Removed) */}
//               <motion.div
//                 variants={imageVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="relative z-10 w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}>
                
//                 <img
//                   src="/img3.jpg"
//                   alt="Minhaj - MERN Stack Developer Portrait"
//                   className="object-cover w-full h-full" />
                
//                 <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hover:opacity-100" />
//               </motion.div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };
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
      transition: {
        delay: 0.3,
        duration: 0.9,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const socials = [
    { icon: Github, href: "https://github.com/minhh4j", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/minhaj-k-bb5617372",
      label: "LinkedIn",
    },
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
      className="relative flex items-center min-h-screen px-6 py-20 overflow-hidden bg-black"
    >
      {/* ✅ NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-xl font-extrabold text-white cursor-pointer"
          >
            Minhaj<span className="text-yellow-400">.</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-gray-300 transition hover:text-yellow-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden px-5 py-2 text-sm font-bold text-black transition rounded-full md:block bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600"
          >
            Hire Me
          </button>
        </div>
      </header>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 blur-3xl" />
        <div className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500/5 blur-3xl" />
      </div>

      <div className="container relative z-10 pt-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT TEXT */}
          <div className="order-2 space-y-8 lg:order-1">
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-yellow-400 border rounded-full bg-yellow-400/10 border-yellow-400/20">
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500">
                Minhaj
              </span>
            </motion.h1>

            <motion.h2
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold text-gray-300 md:text-3xl lg:text-4xl"
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl text-lg font-light leading-relaxed text-gray-400 md:text-xl"
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
                className="px-8 py-4 font-semibold text-black transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-amber-500 shadow-yellow-400/20 hover:shadow-xl hover:shadow-yellow-400/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </motion.button>

              <motion.button
                className="px-8 py-4 font-semibold text-yellow-400 transition-all duration-300 bg-transparent border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
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
                  className="p-3 transition-all duration-300 bg-black border-2 border-gray-800 rounded-full hover:border-yellow-400 hover:bg-yellow-400/10 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-yellow-400" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center order-1 lg:justify-end lg:order-2">
            <div className="relative w-full max-w-md">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/img3.jpg"
                  alt="Minhaj - MERN Stack Developer Portrait"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hover:opacity-100" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
