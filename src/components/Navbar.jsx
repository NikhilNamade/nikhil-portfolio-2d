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

  // Move bubble exactly under item
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

  // Update active bubble position
  useEffect(() => {
    moveBubble(active, setActiveStyle);
  }, [active]);

  // 🔥 Scroll Spy Logic
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
      {
        threshold: 0.6, // 60% section visible
      }
    );

    navItems.forEach((item) => {
      const section = scrollTo[item.ref]?.current;
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [scrollTo]);

  return (
    <div className="nav-wrap" ref={containerRef}>
      {/* Hover bubble */}
      {hoverStyle && (
        <div
          className="bubble hover"
          style={{
            left: hoverStyle.left,
            width: hoverStyle.width,
          }}
        />
      )}

      {/* Active bubble */}
      {activeStyle && (
        <div
          className="bubble active"
          style={{
            left: activeStyle.left,
            width: activeStyle.width,
          }}
        />
      )}

      <div className="nav">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`nav-link ${active === index ? "active" : ""}`}
            onClick={() =>
              scrollTo[item.ref].current.scrollIntoView({ behavior: "smooth" })
            }
            onMouseEnter={() => moveBubble(index, setHoverStyle)}
            onMouseLeave={() => setHoverStyle(null)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
