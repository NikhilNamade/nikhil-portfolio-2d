const Home = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Dotted background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Heading */}
        <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="text-blue-400">Nikhil</span>
          <br />
          <span className="text-blue-500">Namade</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Building modern web, 3D, and mobile experiences using MERN, Three.js,
          and Flutter — focused on performance, scalability, and clean design.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            &lt;/&gt; View Projects
          </button>

          <button className="px-6 py-3 rounded-lg border border-gray-600 text-white hover:bg-white hover:text-black transition">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
