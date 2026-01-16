import React from "react";

const Navbar = ({ scrollTo }) => {
  return (
    <div
      className="
        fixed
        bottom-4 sm:bottom-5
        z-20
        left-1/2
        transform
        -translate-x-1/2
        px-3
      "
    >
      <div
        className="
          flex
          items-center
          gap-4 sm:gap-6
          bg-white/10
          backdrop-blur-lg
          border border-white/30
          px-4 sm:px-6
          py-2 sm:py-3
          rounded-3xl
          font-semibold
          text-sm sm:text-base
          text-gray-400
          max-w-full
          overflow-x-auto
          scrollbar-thin
          scrollbar-thumb-gray-500
          scrollbar-track-transparent
        "
      >
        <a
          onClick={() =>
            scrollTo.homeRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          Home
        </a>

        <a
          onClick={() =>
            scrollTo.aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          About
        </a>

        <a
          onClick={() =>
            scrollTo.educationRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          Education
        </a>

        <a
          onClick={() =>
            scrollTo.skillRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          Skills
        </a>

        <a
          onClick={() =>
            scrollTo.workRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          Work
        </a>

        <a
          onClick={() =>
            scrollTo.contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer whitespace-nowrap hover:text-white transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
