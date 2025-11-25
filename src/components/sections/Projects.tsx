import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Users,
  Shield,
  Briefcase,
  Gamepad2,
  Scissors,
  ShoppingBag,
} from "lucide-react";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "Pet Food E-Commerce",
      description:
        "A MERN stack e-commerce platform for pet products with secure payments, user authentication, and real-time product management.",
      techStack: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
      features: [
        "Razorpay secure payment integration",
        "JWT authentication for users and admins",
        "Dynamic product management with categories",
        "Order tracking and user dashboard",
      ],
      modules: [
        { name: "Admin", icon: Shield, color: "from-yellow-400 to-amber-500" },
        { name: "User", icon: Users, color: "from-amber-400 to-yellow-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: ShoppingBag,
    },
    {
      id: 2,
      name: "Salon Booking System",
      description:
        "A modern salon booking platform built with MERN stack featuring secure payments, appointment management, and authentication.",
      techStack: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
      features: [
        "Razorpay payment gateway integration",
        "Clerk authentication system",
        "Slot booking and appointment management",
        "Separate Admin and User dashboards",
      ],
      modules: [
        { name: "Admin", icon: Shield, color: "from-yellow-400 to-amber-500" },
        { name: "User", icon: Users, color: "from-amber-400 to-yellow-500" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: Scissors,
    },
    {
      id: 3,
      name: "GameTick Turf Booking",
      description:
        "A real-time turf booking web app with live chat, notifications, and secure payments using Razorpay and Socket.io.",
      techStack: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
      features: [
        "Socket.io real-time notifications",
        "Razorpay payment gateway",
        "Live chat between users and owners",
        "Dynamic turf availability & booking management",
      ],
      modules: [
        { name: "Admin", icon: Shield, color: "from-yellow-400 to-amber-500" },
        { name: "User", icon: Users, color: "from-amber-400 to-yellow-500" },
        { name: "Owner", icon: Briefcase, color: "from-yellow-500 to-amber-600" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: Gamepad2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6 max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-3 text-sm font-medium text-yellow-400 border border-yellow-500 rounded-full bg-yellow-500/10">
            <Layers className="w-4 h-4" />
            My Work
          </div>
          <h2 className="mb-3 text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-400">
            Explore my full-stack MERN projects with modern integrations and real-world functionality.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative group"
            >
              <motion.div
                className="relative p-8 overflow-hidden transition-all duration-500 border border-yellow-500/20 bg-gradient-to-br from-gray-900 to-black rounded-3xl hover:shadow-2xl hover:shadow-yellow-500/20"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="space-y-6 lg:w-2/3">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-8 h-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-400">{project.description}</p>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-yellow-400">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 border border-yellow-500/20 rounded-xl"
                          >
                            <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                            {tech.name}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-yellow-400">
                        Key Features
                      </h4>
                      <ul className="grid gap-2 text-sm text-gray-400 sm:grid-cols-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-2 h-2 mt-1.5 bg-yellow-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-3">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-yellow-400 border border-yellow-500/40 rounded-xl hover:bg-yellow-500/10"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3 lg:w-1/3">
                    <h4 className="text-sm font-semibold text-yellow-400">
                      Modules
                    </h4>
                    {project.modules.map((module, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 border border-yellow-500/20 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900"
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${module.color}`}
                        >
                          <module.icon className="w-4 h-4 text-black" />
                        </div>
                        <div className="text-sm text-gray-300">{module.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
