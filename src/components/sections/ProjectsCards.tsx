"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: any;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 1, 1, 1, 0]
  );

  // Image zoom
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Text slight parallax
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [-35, 0, 35]);

  return (
    <div
      ref={ref}
      className="sticky top-0 flex items-center justify-center h-screen"
      style={{
        paddingTop: `${index * 26}px`, // stack gap
      }}
    >
      <motion.article
        style={{ y, scale: cardScale, opacity }}
        className="relative w-full max-w-7xl overflow-hidden rounded-[2rem]
                   border border-yellow-400/30 bg-gradient-to-br from-gray-950 via-black to-gray-950
                   px-6 py-6 sm:px-10 sm:py-10
                   shadow-[0_20px_80px_rgba(0,0,0,0.65)]
                   backdrop-blur will-change-transform"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,200,50,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-[-140px] bottom-[-140px] h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.8fr)] items-center">
          {/* TEXT */}
          <motion.div style={{ y: textY }} className="space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-yellow-300">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full" />
              Featured Project
            </div>

            <div className="flex items-center gap-3">
              <project.icon className="text-yellow-400 w-9 h-9" />
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                {project.name}
              </h3>
            </div>

            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-wider text-yellow-400 uppercase">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-100 border border-yellow-500/20 rounded-2xl bg-white/5"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="mb-3 text-sm font-semibold tracking-wider text-yellow-400 uppercase">
                Key Features
              </h4>
              <ul className="grid gap-2.5 text-sm sm:text-[0.95rem] text-gray-200 sm:grid-cols-2">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-yellow-400 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
           {/* Buttons */}
<div className="flex flex-wrap gap-4 pt-2">
  {/* ✅ Live Demo only if available */}
  {project.liveUrl && project.liveUrl !== "#" && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-black rounded-2xl
                 bg-gradient-to-r from-yellow-400 to-amber-500
                 hover:from-yellow-500 hover:to-amber-600 transition"
    >
      <ExternalLink className="w-4 h-4" />
      Live Demo
    </a>
  )}

  {/* ✅ Github always */}
  {project.githubUrl && project.githubUrl !== "#" && (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-yellow-300
                 border border-yellow-500/40 rounded-2xl hover:bg-yellow-500/10 transition"
    >
      <Github className="w-4 h-4" />
      View Code
    </a>
  )}
</div>

          </motion.div>

          {/* IMAGE */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gray-950 border border-yellow-500/25">
            <motion.img
              src={project.image}
              alt={project.name}
              style={{ scale: imageScale }}
              className="object-cover w-full h-full origin-center will-change-transform"
            />

            {/* bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none h-2/3 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

            {/* Modules Count */}
            <div className="absolute bottom-4 right-4 inline-flex items-center rounded-full border border-yellow-500/40 bg-black/70 px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-yellow-200 backdrop-blur">
              {project.modules.length} Modules
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;
