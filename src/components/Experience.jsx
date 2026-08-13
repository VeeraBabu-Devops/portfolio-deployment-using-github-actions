const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white px-6 md:px-12 lg:px-20 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.2em] mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Professional Journey
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            My professional experience and career journey in software engineering and IT.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-cyan-500/40 md:-translate-x-1/2"></div>

          {/* Experience 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16">

            {/* Date */}
            <div className="flex items-start md:justify-end md:pt-3">
              <div className="relative z-10 flex items-center gap-4 md:block">
                
                {/* Mobile / Desktop Dot */}
                <div className="w-7 h-7 rounded-full border-2 border-cyan-400 bg-slate-950 flex items-center justify-center md:absolute md:right-[-66px] md:top-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                </div>

                <p className="text-cyan-400 font-semibold text-base md:text-lg">
                  July 2023 – Present
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="mt-5 md:mt-0 ml-10 md:ml-0 md:pr-4">
              <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">

                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  Software Engineer
                </h3>

                <h4 className="text-cyan-400 text-lg md:text-xl font-medium mb-3">
                  Fourp Technology Solutions
                </h4>

                <p className="text-slate-300 text-sm md:text-base mb-5">
                  IT Department • Chennai
                </p>

                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">

                  <p>
                    Working as a Software Engineer with Fourp Technology Solutions
                    since July 2023.
                  </p>

                  <p>
                    Responsible for carrying out assigned responsibilities with
                    professionalism, efficiency, accountability, and adherence to
                    organizational processes and guidelines.
                  </p>

                  <p>
                    Continuously developing technical knowledge and professional
                    skills while contributing to organizational and project
                    requirements.
                  </p>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1.5 rounded-full text-xs border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                    Software Engineering
                  </span>

                  <span className="px-3 py-1.5 rounded-full text-xs border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                    IT
                  </span>

                  <span className="px-3 py-1.5 rounded-full text-xs border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                    Professional Development
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;