import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";
import Work from "../components/Work.jsx";
import { useRef } from "react";
import ContactForm from "../components/ContactForm.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import { heroBG } from "../assets/index.js";
import Home from "../components/Home.jsx";
const HomeMain = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="bg-black">
      {/* HERO SECTION */}
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen relative z-10"
        style={{ backgroundImage: `url(${heroBG})` }}
      >
        <div ref={homeRef}>
          <Home work={workRef} contact={contactRef}/>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div  className="relative z-10 flex flex-col gap-32 px-5 py-5">
        <div
          id="about"
          ref={aboutRef}
          className=" bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
        >
          <About />
        </div>
        <div
          id="education"
          ref={educationRef}
          className=" bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
        >
          <Education/>
        </div>
        <div
          id="skills"
          ref={skillRef}
          className=" bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
        >
          <Skills />
        </div>

        <div
          id="work"
          ref={workRef}
          className=" bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12"
        >
          <Work />
        </div>
        <div id="contact" ref={contactRef}>
          <ContactForm />
        </div>
      </div>

      <Navbar
        scrollTo={{
          homeRef,
          aboutRef,
          educationRef,
          skillRef,
          workRef,
          contactRef,
        }}
      />
    </div>
  );
}

export default HomeMain
