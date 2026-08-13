function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sky-400 font-semibold uppercase tracking-wider mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building reliable cloud infrastructure
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm Veera Babu, a Cloud and DevOps professional focused on
            AWS infrastructure, automation, CI/CD, containerization,
            and Infrastructure as Code.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            I enjoy designing scalable cloud environments, automating
            deployments, and improving application reliability using
            modern DevOps practices.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-white">
              ☁️ Cloud
            </h3>
            <p className="text-slate-400">
              AWS infrastructure, networking, security, compute,
              storage, and cloud-native services.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-white">
              ⚙️ DevOps
            </h3>
            <p className="text-slate-400">
              CI/CD automation using Jenkins, GitHub Actions,
              Docker, Git, and modern deployment practices.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-semibold mb-3 text-white">
              🏗️ Infrastructure
            </h3>
            <p className="text-slate-400">
              Infrastructure as Code using Terraform with
              scalable and reusable AWS configurations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;