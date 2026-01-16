import { Mail, MapPin, User, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => {
  return (
    <motion.section
      id="about"
      variants={staggerContainer(0.2, 0.1)} // stagger children
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#050816] px-4 text-white"
    >
      {/* Heading */}
      <motion.div
         variants={fadeIn("up", "spring", 0.3, 1)} 
         viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
          About Me
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A dedicated developer focused on developing scalable web and mobile
          solutions using MERN, Three.js, and Flutter.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Left Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)} 
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white/20 flex items-center justify-center mb-4">
              <User size={40} className="sm:w-12 sm:h-12" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold">
              Nikhil B. Namade
            </h3>
            <p className="text-indigo-400 mt-1 text-sm sm:text-base">
              Software Developer
            </p>
          </div>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Chembur, Mumbai</span>
            </div>

            <div className="flex items-center gap-3 break-all sm:break-normal">
              <Mail size={18} />
              <span>nikhilnamade39@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase size={18} />
              <span>Fresher</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 1)} // slightly delayed
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
            About My Journey
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
            Hello! I am{" "}
            <span className="text-white font-medium">Nikhil Namade</span>, a
            passionate full-stack developer eager to begin my professional
            journey in the tech industry. I enjoy building clean, efficient, and
            scalable solutions while continuously learning and improving my
            skills.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
            I work with the{" "}
            <span className="text-white font-medium">MERN stack</span> to
            develop modern web applications, create immersive and interactive
            experiences using{" "}
            <span className="text-white font-medium">Three.js</span>, and build
            cross-platform mobile applications with
            <span className="text-white font-medium"> Flutter</span>. My focus
            is on delivering smooth user experiences, clean code, and
            well-structured architectures.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I am actively seeking opportunities where I can apply my academic
            knowledge, project experience, and problem-solving skills in a
            professional environment while contributing to impactful real-world
            products.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
