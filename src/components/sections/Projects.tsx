"use client";

import React from "react";
import { Layers } from "lucide-react";
import ProjectCard from "./ProjectsCards";
import { ProjectData } from "../data/ProjectData";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full relative"
      style={{
        background: "linear-gradient(160deg, #0a0800 0%, #100c00 40%, #0d0900 70%, #080600 100%)",
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,162,39,0.13) 0%, transparent 70%)",
        }}
      />

      {/* ── HEADER ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full"
          style={{
            color: "#f5d060",
            border: "1px solid rgba(201,162,39,0.35)",
            background: "rgba(201,162,39,0.08)",
            letterSpacing: "0.05em",
          }}
        >
          <Layers className="w-4 h-4" style={{ color: "#c9a227" }} />
          My Work
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
          style={{ color: "#fff", letterSpacing: "-0.02em" }}
        >
          Featured{" "}
          <span
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(135deg, #c9a227 0%, #f5d060 50%, #b8891a 100%)",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </h2>

        {/* Decorative gold divider */}
        <div
          className="w-16 h-[2px] mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, #c9a227, transparent)",
          }}
        />

        {/* Subtext */}
        <p
          className="text-base md:text-lg max-w-2xl"
          style={{ color: "rgba(210,190,130,0.65)", lineHeight: "1.75" }}
        >
          Explore my MERN + Next.js projects with modern UI, animations and real-world integrations.
        </p>
      </div>

      {/* ── PROJECT CARDS ── */}
      <div className="relative z-10 w-full">
        {ProjectData?.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(8,6,0,0.9))",
        }}
      />
    </section>
  );
};