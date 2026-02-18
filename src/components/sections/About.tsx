import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, Briefcase, Award, User } from 'lucide-react';
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
    { icon: MapPin,       title: 'Location',  value: 'Malappuram, Kerala, India' },
    { icon: Mail,         title: 'Email',      value: 'minhajdevv@gmail.com' },
    { icon: GraduationCap,title: 'Education', value: 'Higher Secondary Education in Computer Commerce' },
    { icon: Briefcase,    title: 'Freelance',  value: 'Available' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("minhajdev@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-14"
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

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.07)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.06)" }}
        />
        <div
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[280px]"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.11) 0%, transparent 70%)" }}
        />
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
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full"
            style={{
              color: "#f5d060",
              border: "1px solid rgba(201,162,39,0.35)",
              background: "rgba(201,162,39,0.08)",
              letterSpacing: "0.05em",
            }}
          >
            <User className="w-4 h-4" style={{ color: "#c9a227" }} />
            About Me
          </div>

          {/* Gold divider */}
          <div
            className="w-16 h-[2px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a227, transparent)" }}
          />

          <h2
            className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            Building Scalable{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                backgroundClip: "text",
              }}
            >
              Web Experiences
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(210,190,130,0.65)" }}>
            Passionate about crafting clean, functional, and high-performing web applications.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">

          {/* ── Image Section ── */}
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Outer gold glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: "0 0 60px rgba(201,162,39,0.15), 0 0 120px rgba(201,162,39,0.07)" }}
              />

              <motion.div
                className="relative z-10 w-56 h-56 overflow-hidden shadow-2xl md:w-64 md:h-64 rounded-3xl"
                style={{
                  border: "1px solid rgba(201,162,39,0.3)",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(201,162,39,0.1)",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/img2.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                  style={{ filter: "brightness(0.9) sepia(0.1) saturate(1.05)" }}
                />
                {/* Gold bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(10,8,0,0.4), transparent)" }}
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute z-20 px-4 py-3 -bottom-6 -right-6 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(10,8,0,0.9)",
                  border: "1px solid rgba(201,162,39,0.35)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(201,162,39,0.1)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: "linear-gradient(135deg, #c9a227, #f5d060)" }}
                  >
                    <Award className="w-4 h-4" style={{ color: "#0a0800" }} />
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ color: "#f5d060" }}>1+</div>
                    <div className="text-xs" style={{ color: "rgba(210,190,130,0.6)" }}>Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text Section ── */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h3
                className="text-2xl font-bold leading-tight md:text-3xl"
                style={{ color: "#fff", letterSpacing: "-0.01em" }}
              >
                MERN Stack Developer
                <span
                  className="block mt-1"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                    backgroundClip: "text",
                  }}
                >
                  Turning Ideas into Code
                </span>
              </h3>
              {/* Divider */}
              <div className="flex items-center gap-2 mt-3">
                <div
                  className="w-12 h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #c9a227, #f5d060)" }}
                />
                <div
                  className="w-6 h-[3px] rounded-full"
                  style={{ background: "#c9a227", opacity: 0.5 }}
                />
              </div>
            </motion.div>

            {/* About Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed"
              style={{ color: "rgba(210,190,130,0.65)" }}
            >
              Hi, I'm{" "}
              <span className="font-semibold" style={{ color: "#f5d060" }}>Minhaj</span>
              , a passionate MERN Stack Developer from Malappuram, Kerala. I specialize in building
              responsive, dynamic, and user-friendly web applications using{" "}
              <span className="font-medium" style={{ color: "rgba(245,208,96,0.85)" }}>
                React, Node.js, Express, and MongoDB
              </span>
              . I love solving problems through clean, efficient code and creating seamless digital experiences.
            </motion.p>

            {/* Info Cards */}
            <motion.div className="grid gap-3 pt-2 sm:grid-cols-2" variants={containerVariants}>
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group"
                >
                  <div
                    className="p-4 transition-all duration-300 rounded-xl"
                    style={{
                      background: "rgba(201,162,39,0.05)",
                      border: "1px solid rgba(201,162,39,0.15)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.4)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.08)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(201,162,39,0.1)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.15)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.05)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className="p-2.5 rounded-xl shadow-md flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #c9a227 0%, #f5d060 100%)" }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: "#0a0800" }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1 text-sm font-bold" style={{ color: "#f5d060" }}>
                          {item.title}
                        </h4>
                        <p className="text-xs" style={{ color: "rgba(210,190,130,0.6)" }}>
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
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                  color: "#0a0800",
                  boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(201,162,39,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,162,39,0.3)";
                }}
              >
                <Mail className="w-4 h-4" />
                Copy Email
              </motion.button>
            </motion.div>
          </motion.div>
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