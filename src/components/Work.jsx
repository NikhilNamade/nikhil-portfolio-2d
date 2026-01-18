import { Github, ExternalLink, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, popUpSpring, staggerContainer } from "../utils/motion";
import { ArrowRight } from "lucide-react";
import {projects} from "../hoc/data.js"
import {useNavigate } from "react-router-dom";
import { useState } from "react";

const Work = () => {


  return (
    <motion.section
      variants={staggerContainer(0.2, 0.1)} // stagger children
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
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
          <ProjectStrip key={index} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/project/${index}`, { state: { project } });
  };
  return (
    <motion.div
      variants={popUpSpring(0.1)}
      viewport={{ once: true }}
      onClick={handleClick}
      className="
        bg-[#0b1220]
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
        cursor-pointer
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

        <p className="text-gray-400 text-sm leading-relaxed">
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

const ProjectStrip = ({ project, index }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left + 20,
      y: e.clientY - rect.top + 20,
    });
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => navigate(`/project/${index}`, { state: { project } })}
      className="
        relative
        w-full
        flex
        items-center
        justify-between
        gap-6
        px-6
        py-5
        rounded-2xl
        bg-[#020617]
        border
        border-white/10
        cursor-pointer
        overflow-hidden
        transition
        hover:bg-[#020617]/80
      "
    >
      {/* Left content */}
      <div className="flex flex-col gap-2 z-10">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>

        <p className="text-sm text-gray-400">{project.tech.join(" • ")}</p>
      </div>

      {/* Arrow */}
      <ArrowRight size={22} className="text-gray-400 z-10" />

      {/* Hover Image */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: pos.x + 24,
              y: pos.y + 24,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="
        fixed
        top-1/2
        left-1/2
        w-58
        h-42
        rounded-xl
        overflow-hidden
        pointer-events-none
        z-50
        shadow-2xl
        border
        border-white/10
        bg-black
      "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
