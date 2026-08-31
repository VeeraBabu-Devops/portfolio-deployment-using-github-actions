import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full h-16 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
<a
  href="#home"
  className="font-bold text-white whitespace-nowrap"
  onClick={() => setIsOpen(false)}
>
  {/* Desktop */}
  <span className="hidden md:inline text-2xl">
    Paidikondala Veera<span className="text-cyan-400"> Babu</span>
  </span>

  {/* Mobile */}
  <span className="md:hidden text-2xl">
    Veera<span className="text-cyan-400">Babu</span>
  </span>
</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Resume */}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-slate-950 z-40 overflow-y-auto md:hidden">
            <div className="flex flex-col gap-1 p-3">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Resume */}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-center rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
              >
                Resume
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;