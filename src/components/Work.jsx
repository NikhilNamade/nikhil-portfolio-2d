import { Github, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, popUpSpring, staggerContainer } from "../utils/motion";
import {
  _3dWebsite,
  alumconnect,
  ecoomerce,
  eventapp,
  imageeditor,
  portfoliogen,
  railwayconcession,
} from "../assets/index.js";

const Work = () => {
  const projects = [
    {
      title: "AlumConnect",
      description:
        "AlumConnect is a MERN-stack based alumni networking platform that facilitates seamless interaction between alumni and students. It features user authentication, profile management, real-time messaging, and cloud-based media handling, ensuring a scalable and engaging community experience.",
      image: alumconnect,
      tech: ["MERN", "Socket.io", "Cloudinary"],
      github: "",
      demo: "",
      status: false,
    },
    {
      title: "3D Website",
      description:
        "A Dogstudio-inspired 3D web experience developed with React, Three.js, React Three Fiber, and GSAP ScrollTrigger. Implements scroll-linked animations, camera transitions, and interactive 3D elements while maintaining responsiveness and performance.",
      image: _3dWebsite,
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      github: "https://github.com/NikhilNamade/threejsdog.git",
      demo: "https://threejsdog.vercel.app/",
      status: true,
    },
    {
      title: "Railway Concession System",
      description:
        "The Railway Concession System is a web-based application that digitizes the student railway concession process by enabling online applications, verification, and approval, reducing paperwork and improving efficiency.",
      image: railwayconcession,
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
      github: "https://github.com/NikhilNamade/railway.git",
      demo: "https://railway-concession-system.onrender.com/",
      status: true,
    },
    {
      title: "Portfolio Geng.",
      description:
        "A dynamic portfolio generator built with modern web technologies that transforms user input into a responsive, template-based portfolio. Features include real-time preview, reusable components, and customizable sections for projects, skills, and experience.",
      image: portfoliogen,
      tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Cloudinary"],
      github: "https://github.com/NikhilNamade/portfolio-generator.git",
      demo: "https://portfolio-generator-lemon-three.vercel.app/",
      status: true,
    },
    {
      title: "VisualFix",
      description:
        "A modern color grading web application developed using HTML5 Canvas API. The project focuses on real-time color manipulation, smooth UI interactions, and accurate image rendering to deliver professional-grade color adjustment tools in the browser.",
      image: imageeditor,
      tech: ["HTML5", "TailwindCss", "JavaScript", "Canvas-API"],
      github: "https://github.com/NikhilNamade/imageEditor.git",
      demo: "https://image-editor-roan-psi.vercel.app/",
      status: true,
    },
    {
      title: "Sort My Events",
      description:
        "A cross-platform Flutter application with a Go backend implementing RESTful APIs for event CRUD operations, user registration, and organizer interaction.",
      image: eventapp,
      tech: ["Flutter", "Go", "REST API", "Maps SDK"],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: true,
    },
    {
      title: "Shop Your Choice",
      description:
        "A full-stack e-commerce platform with a responsive website and Flutter mobile app supporting product browsing, checkout, and admin management.",
      image: ecoomerce,
      tech: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Cloudinary",
        "Flutter",
      ],
      github: "https://github.com/NikhilNamade/gorestapi.git",
      demo: "",
      status: false,
    },
  ];

  return (
    <motion.section
      variants={staggerContainer(0.2, 0.1)} // stagger children
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="
        w-full
        bg-[#020617]
        flex
        flex-col
        items-center
        px-4 sm:px-6
        py-16 sm:py-20
        text-white
      "
    >
      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", "spring", 0.3, 1)}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center"
      >
        Work
      </motion.h2>

      {/* Grid */}
      <div
        className="
          grid
          gap-6 sm:gap-8
          w-full
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={popUpSpring(0.1)}
      viewport={{ once: true, amount: 0.3 }}
      className="
        bg-[#0b1220]
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="w-full h-40 sm:h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        {!project.status && (
          <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Clock size={14} />
            In Progress
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[#1e293b] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3">
          {project.status ? (
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          ) : (
            <p className="text-sm text-yellow-400 font-medium">
              🚧 Project is currently in progress
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
