import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state; // get project object

  if (!project) return <p className="text-white">Project not found</p>;
  return (
    <div className="w-full min-h-screen bg-[#020617] text-white px-4 sm:px-6 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {project.title}
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl">
          {project.description}
        </p>
      </motion.div>

      {/* Image / Screenshot */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      )}

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left: Tech Stack & Status */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#1e293b] text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Status</h2>
          <p
            className={`text-sm font-medium ${
              project.status ? "text-green-400" : "text-yellow-400"
            }`}
          >
            {project.status ? "✅ Completed" : "🚧 In Progress"}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Github size={18} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right: Detailed Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Details</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>
      </motion.div>

      {/* Optional: Gallery */}

      <div className="max-w-6xl mx-auto mt-12">
        {project.gallery && project.gallery.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Gallery</h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden scale-100 hover:scale-110 transition-transform duration-300  shadow-lg"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
