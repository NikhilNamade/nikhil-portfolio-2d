import Spline from "@splinetool/react-spline";

const Home = ({ work, contact }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* 🔹 Spline Background */}
      <div className="absolute pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/KtkRQqCKznHIZoND/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 flex items-center justify-center pointer-events-none:">
        <div className="text-center px-4 max-w-4xl">

          <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-blue-400">Nikhil</span>
            <br />
            <span className="text-blue-500">Namade</span>
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Building modern web, 3D, and mobile experiences using MERN, Three.js,
            and Flutter — focused on performance, scalability, and clean design.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                work.current.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              &lt;/&gt; View Projects
            </button>

            <button
              onClick={() =>
                contact.current.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg border border-gray-600 text-white hover:bg-white hover:text-black transition"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
