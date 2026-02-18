"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
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

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #0a0800 0%, #100c00 40%, #0d0900 70%, #080600 100%)",
      }}
    >
      {/* Gold grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <motion.article
        style={{ y }}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Glow Background — gold tones */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-120px] right-[-80px] w-[360px] h-[360px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(255,200,50,0.12) 0%, transparent 70%)" }}
          />
          {/* Subtle center shimmer */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 80%)",
            }}
          />
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2">

          {/* TEXT SIDE */}
          <div
            className={`flex flex-col justify-center px-6 md:px-12 space-y-5
            ${isReversed ? "md:order-2" : "md:order-1"}`}
          >
            {/* Decorative gold rule */}
            <div
              className="w-12 h-[2px]"
              style={{ background: "linear-gradient(90deg, #c9a227, #f5d060)" }}
            />

            {/* TITLE */}
            <h3
              className="text-3xl md:text-5xl font-bold"
              style={{
                color: "#f5d060",
                textShadow: "0 0 40px rgba(212,175,55,0.25)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.name}
            </h3>

            {/* DESCRIPTION */}
            <p style={{ color: "rgba(210,190,130,0.7)" }} className="text-base md:text-lg max-w-xl">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex gap-3 flex-wrap pt-2">
              {project.techStack?.map((tech: any, i: number) => (
                <img
                  key={i}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  className="w-6 h-6 md:w-8 md:h-8 transition"
                  style={{ opacity: 0.75, filter: "sepia(0.4) saturate(1.2)" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                />
              ))}
            </div>

            {/* FEATURES */}
            <ul className="text-sm space-y-1 max-w-md" style={{ color: "rgba(200,175,110,0.65)" }}>
              {project.features?.slice(0, 3).map((feature: string, i: number) => (
                <li key={i} className="flex gap-2 items-start">
                  <span style={{ color: "#c9a227" }}>◆</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* MODULES */}
            <div className="flex gap-2 flex-wrap pt-2">
              {project.modules?.map((mod: any, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #c9a227, #f5d060)",
                    color: "#0a0800",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {mod.name}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="group px-6 py-3 flex items-center gap-2 font-semibold transition-all duration-300 ease-out hover:translate-x-2"
                  style={{
                    background: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
                    color: "#0a0800",
                    boxShadow: "0 4px 24px rgba(201,162,39,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  Live
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="group px-6 py-3 flex items-center gap-2 font-semibold transition-all duration-300 ease-out hover:translate-x-2"
                  style={{
                    background: "transparent",
                    color: "#f5d060",
                    border: "1px solid rgba(201,162,39,0.5)",
                    boxShadow: "0 0 20px rgba(201,162,39,0.08)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,162,39,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.9)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,39,0.5)";
                  }}
                >
                  <Github
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div
            className={`relative h-full w-full ${isReversed ? "md:order-1" : "md:order-2"}`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.85) sepia(0.15) saturate(1.1)" }}
            />

            {/* Gold-tinted overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,8,0,0.7) 0%, rgba(10,8,0,0.1) 40%, transparent 100%)",
              }}
            />

            {/* Side fade toward text */}
            <div
              className="absolute inset-0"
              style={{
                background: isReversed
                  ? "linear-gradient(to left, rgba(10,8,0,0) 60%, rgba(10,8,0,0.6) 100%)"
                  : "linear-gradient(to right, rgba(10,8,0,0) 60%, rgba(10,8,0,0.6) 100%)",
              }}
            />

            {/* Subtle gold shimmer on image edge */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: isReversed
                  ? "inset -1px 0 60px rgba(201,162,39,0.08)"
                  : "inset 1px 0 60px rgba(201,162,39,0.08)",
              }}
            />
          </div>

        </div>
      </motion.article>
    </div>
  );
};

export default ProjectCard;