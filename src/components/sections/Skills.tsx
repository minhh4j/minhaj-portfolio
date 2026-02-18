import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import skills from '../data/Skill';

export const Skills: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
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
      className="relative py-16 overflow-hidden"
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
          className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[320px]"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.13) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.06)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.06)" }}
        />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.03 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(201,162,39) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(201,162,39) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
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
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold rounded-full"
            style={{
              color: "#f5d060",
              border: "1px solid rgba(201,162,39,0.35)",
              background: "rgba(201,162,39,0.08)",
              letterSpacing: "0.05em",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#c9a227" }} />
            My Skills
          </motion.div>

          {/* Gold divider */}
          <div
            className="w-16 h-[2px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a227, transparent)" }}
          />

          <h2
            className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "#fff", letterSpacing: "-0.02em" }}
          >
            Technical{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(210,190,130,0.65)" }}>
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
              className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300"
              style={
                selectedCategory === category
                  ? {
                      background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                      color: "#0a0800",
                      boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
                    }
                  : {
                      background: "rgba(201,162,39,0.05)",
                      color: "rgba(210,190,130,0.7)",
                      border: "1px solid rgba(201,162,39,0.2)",
                    }
              }
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
              <div
                className="relative p-6 transition-all duration-300 rounded-2xl"
                style={{
                  background: "rgba(201,162,39,0.04)",
                  border: "1px solid rgba(201,162,39,0.15)",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.45)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,162,39,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.15)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.04)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-xl group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    border: "1.5px solid rgba(201,162,39,0.25)",
                    background: "rgba(201,162,39,0.08)",
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 drop-shadow-md"
                    style={{ filter: "drop-shadow(0 0 6px rgba(201,162,39,0.2))" }}
                  />
                </div>

                {/* Skill Name */}
                <h3
                  className="mb-3 text-lg font-bold text-center"
                  style={{ color: "#f5d060" }}
                >
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="flex justify-center mb-4">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      color: "rgba(201,162,39,0.85)",
                      border: "1px solid rgba(201,162,39,0.25)",
                      background: "rgba(201,162,39,0.08)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: "rgba(210,190,130,0.55)" }}>Proficiency</span>
                    <span className="font-bold" style={{ color: "#f5d060" }}>{skill.proficiency}%</span>
                  </div>
                  <div
                    className="relative h-2 overflow-hidden rounded-full"
                    style={{ background: "rgba(201,162,39,0.12)" }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #c9a227, #f5d060)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                    />
                    {/* Glow */}
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm"
                      style={{ background: "linear-gradient(90deg, #c9a227, #f5d060)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Hover inner glow */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl -z-10 blur-xl group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)" }}
                />
              </div>

              {/* Corner Accents */}
              <div
                className="absolute w-3 h-3 transition-all duration-300 opacity-0 -top-1 -left-1 rounded-tl-xl group-hover:opacity-100"
                style={{ borderTop: "2px solid #c9a227", borderLeft: "2px solid #c9a227" }}
              />
              <div
                className="absolute w-3 h-3 transition-all duration-300 opacity-0 -bottom-1 -right-1 rounded-br-xl group-hover:opacity-100"
                style={{ borderBottom: "2px solid #c9a227", borderRight: "2px solid #c9a227" }}
              />
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
              className="p-5 text-center transition-all duration-300 rounded-xl"
              style={{
                background: "rgba(201,162,39,0.05)",
                border: "1px solid rgba(201,162,39,0.18)",
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.45)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(201,162,39,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,162,39,0.18)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="mb-1 text-2xl font-bold"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundImage: "linear-gradient(135deg, #c9a227, #f5d060)",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(210,190,130,0.6)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(8,6,0,0.8))" }}
      />
    </section>
  );
};