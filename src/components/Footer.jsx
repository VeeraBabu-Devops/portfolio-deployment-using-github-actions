const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Veera<span className="text-cyan-400">Babu</span>
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Software Engineer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400">
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#experience"
              className="hover:text-cyan-400 transition"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Veera Babu. All rights reserved.
          </p>

          <p className="text-slate-600 text-xs mt-2">
            Built with React • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;