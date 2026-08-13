const Skills = () => {
  const skillGroups = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "SQL"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: "☁️",
      skills: [
        "AWS",
        "EC2",
        "S3",
        "VPC",
        "IAM",
        "CloudFront",
        "Route 53",
        "Load Balancing"
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: "⚙️",
      skills: [
        "Git",
        "GitHub",
        "Jenkins",
        "GitHub Actions",
        "Maven",
        "SonarQube",
        "Nexus"
      ]
    },
    {
      title: "Containers & IaC",
      icon: "🚀",
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform"
      ]
    },
    {
      title: "Operating Systems",
      icon: "🐧",
      skills: [
        "Linux",
        "Ubuntu",
        "Shell Commands"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Technical Expertise
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 text-lg">
            Technologies and tools I use for software development,
            cloud infrastructure, automation, and deployment.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-7 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
            >

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">
                  {group.icon}
                </span>

                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;