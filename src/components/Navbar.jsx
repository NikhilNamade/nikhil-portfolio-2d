import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", ref: "homeRef" },
  { label: "About", ref: "aboutRef" },
  { label: "Education", ref: "educationRef" },
  { label: "Skills", ref: "skillRef" },
  { label: "Work", ref: "workRef" },
  { label: "Contact", ref: "contactRef" },
];

const Navbar = ({ scrollTo }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const [active, setActive] = useState(0);
  const [hoverStyle, setHoverStyle] = useState(null);
  const [activeStyle, setActiveStyle] = useState(null);

  const moveBubble = (index, setStyle) => {
    const item = itemRefs.current[index];
    const container = containerRef.current;
    if (!item || !container) return;

    const itemRect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setStyle({
      left: itemRect.left - containerRect.left,
      width: itemRect.width,
    });
  };

  useEffect(() => {
    moveBubble(active, setActiveStyle);
  }, [active]);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = navItems.findIndex(
              (item) => scrollTo[item.ref].current === entry.target
            );
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = scrollTo[item.ref]?.current;
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [scrollTo]);

  return (
    <div
      ref={containerRef}
      className="
        fixed bottom-3 left-1/2 -translate-x-1/2
        z-50
        rounded-full border border-neutral-600
        bg-gradient-to-b from-[#141414] to-[#242424]
        py-1
        backdrop-blur-md
      "
    >
      {/* Hover Bubble */}
      {hoverStyle && (
        <div
          className="
            absolute top-0 h-full rounded-full
            bg-gradient-to-b from-neutral-600 to-neutral-800
            shadow-[inset_0_2px_6px_#ffffff29]
            transition-all duration-300
            z-10
          "
          style={hoverStyle}
        />
      )}

      {/* Active Bubble */}
      {activeStyle && (
        <div
          className="
            absolute top-0 h-full rounded-full
            bg-gradient-to-b from-[#f2f2f2] to-[#b3b3b3]
            shadow-[inset_0_2px_6px_#ffffff]
            transition-all duration-300
            z-20
          "
          style={activeStyle}
        />
      )}

      <div className="relative flex">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() =>
              scrollTo[item.ref].current.scrollIntoView({ behavior: "smooth" })
            }
            onMouseEnter={() => moveBubble(index, setHoverStyle)}
            onMouseLeave={() => setHoverStyle(null)}
            className={`
              relative z-30
              px-3 py-2 sm:px-5
              text-xs sm:text-sm
              font-medium
              transition-colors duration-300
              ${
                active === index
                  ? "text-black"
                  : "text-neutral-300 hover:text-white"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
