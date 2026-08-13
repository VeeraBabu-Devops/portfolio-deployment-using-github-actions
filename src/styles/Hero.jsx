function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-sky-400 text-xl font-semibold mb-4">
            Hello 👋
          </p>

          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            I'm <span className="text-sky-400"> Veera Babu</span>
          </h1>

          <h2 className="text-3xl text-slate-300 mt-4">
            Senior Software Engineer
          </h2>

          <p className="text-xl text-slate-400 mt-4">
            Cloud | DevOps | Infrastructure Automation
          </p>

          <p className="text-lg text-slate-300 mt-8 leading-8">
            AWS • Terraform • Kubernetes • Docker • Jenkins • GitHub Actions • Linux • Python
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-lg font-semibold transition">
              Explore Projects
            </button>

            <button className="border-2 border-sky-500 px-8 py-4 rounded-lg hover:bg-sky-500 transition">
              Download Resume
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src="/profile.png"
            alt="Veera Babu"
            className="w-96 h-96 rounded-full border-4 border-sky-400 object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;