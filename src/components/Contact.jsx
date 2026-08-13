const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Let's Connect
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 text-lg">
            I'm always open to discussing software engineering opportunities,
            cloud projects, DevOps, and technology.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              If you would like to connect with me regarding a job opportunity,
              project, or professional discussion, feel free to reach out.
            </p>

            {/* Email */}
            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                Email
              </p>

              <a
                href="mailto:pveerababudevops@gmail.com"
                className="text-white hover:text-cyan-400 transition"
              >
                pveerababudevops@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                Location
              </p>

              <p className="text-white">
                Hyderabad, Telangana, India
              </p>
            </div>

            {/* Availability */}
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                Availability
              </p>

              <p className="text-white">
                Open to Software Engineering Opportunities
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              Professional Profiles
            </h3>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/veera-babu-devops/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-slate-700 rounded-xl p-5 mb-4 hover:border-cyan-400 hover:bg-slate-800 transition"
            >
              <p className="text-cyan-400 font-semibold">
                LinkedIn
              </p>

              <p className="text-slate-300 mt-1">
                Connect with me professionally →
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VeeraBabu-Devops"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-slate-700 rounded-xl p-5 mb-4 hover:border-cyan-400 hover:bg-slate-800 transition"
            >
              <p className="text-cyan-400 font-semibold">
                GitHub
              </p>

              <p className="text-slate-300 mt-1">
                Explore my projects and code →
              </p>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-cyan-400 text-slate-950 rounded-xl p-5 font-semibold text-center hover:bg-cyan-300 transition"
            >
              View My Resume →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;