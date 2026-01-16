import { motion } from "framer-motion";
import {
  css,
  flutter,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from "../assets";
import {  popUpSpring } from "../utils/motion";

const Skills = () => {
  const tech = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: reactjs },
    { name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Redux", icon: redux },
    { name: "Tailwind", icon: tailwind },
    { name: "Three.js", icon: threejs },
    { name: "GitHub", icon: github },
    { name: "Flutter", icon: flutter },
  ];

  return (
    <section className="w-full bg-[#020617] text-white px-4 sm:px-6 py-16 sm:py-20">
      
      {/* Heading */}
      <motion.h1
        variants={popUpSpring(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14"
      >
        Skills & Technologies
      </motion.h1>

      {/* Skills Grid */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
          sm:gap-8
          place-items-center
        "
      >
        {tech.map((item, index) => (
          <motion.div
            key={item.name}
            variants={popUpSpring(index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="
              group
              w-28 h-28
              sm:w-32 sm:h-32
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-lg
              flex flex-col
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-110
              hover:border-cyan-400/40
              hover:shadow-cyan-500/30
            "
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.name}
              className="
                w-10 h-10
                sm:w-12 sm:h-12
                object-contain
                group-hover:scale-110
                transition
              "
            />

            {/* Label */}
            <p className="mt-3 text-xs sm:text-sm text-white/80 group-hover:text-white transition">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
