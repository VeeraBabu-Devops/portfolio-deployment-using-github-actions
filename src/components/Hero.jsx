const base = import.meta.env.BASE_URL
const Hero = () => {
  return (
    <section
      id="home"
           className="scroll-mt-16 pt-12 pb-8 px-6 md:px-12 lg:px-20 bg-slate-950"   
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="text-center md:text-left">

            <p className="text-cyan-400 text-lg md:text-xl font-semibold mb-1">
              Hello 👋
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              I'm{" "}
              <span className="text-cyan-400">
                Veera Babu
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4">
              Software Engineer
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mt-3">
              Cloud | DevOps | Infrastructure Automation
            </p>

            <p className="text-slate-300 text-base md:text-lg mt-3 leading-relaxed">
              AWS • Terraform • Kubernetes • Docker • Jenkins •
              GitHub Actions • Linux • Python
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">

              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
              >
                Explore My Work
              </a>

              <a
                href={`${base}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-cyan-400 text-white font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl"></div>

              <img
                src={`${base}profile.png`}
                alt="Veera Babu"
                className="
                  relative
                  w-64 h-64
                  sm:w-72 sm:h-72
                  md:w-80 md:h-80
                  lg:w-96 lg:h-96
                  object-cover
                  rounded-full
                  border-4 border-cyan-400
                  shadow-lg
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;