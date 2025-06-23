import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutImg}
                alt="About"
                className="w-full max-w-md mx-auto rounded-3xl object-cover border-2 border-primary-400 shadow-2xl hover-lift transition-all duration-300"
              />

              {/* Floating Stats Cards */}
              <div className="absolute -top-8 right-7 glass rounded-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">10+</div>
                  <div className="text-xs text-gray-300">Technologies</div>
                </div>
              </div>

              <div
                className="absolute -bottom-8 left-8 glass rounded-2xl p-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">15+</div>
                  <div className="text-xs text-gray-300">Projects</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Passionate About Creating
                <span className="text-gradient block">Digital Solutions</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I'm{" "}
                <span className="text-primary-400 font-semibold">
                  Kubendiran P
                </span>
                , a self-taught Full Stack Developer with a passion for creating
                innovative web solutions. I specialize in the MERN stack and
                have experience building scalable applications that deliver
                exceptional user experiences. My programming journey began with
                curiosity and grew into a passion for writing clean, efficient
                code. I'm always eager to learn and take on projects that push
                my limits.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: "fab fa-react",
                  title: "Frontend",
                  desc: "React, Next.js, TypeScript",
                },
                {
                  icon: "fas fa-server",
                  title: "Backend",
                  desc: "Node.js, Express, APIs",
                },
                {
                  icon: "fas fa-database",
                  title: "Database",
                  desc: "MongoDB, MySQL",
                },
                { icon: "fab fa-aws", title: "Cloud", desc: "AWS, Deployment" },
              ].map((skill, index) => (
                <div key={index} className="glass rounded-xl p-4 hover-lift">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <i className={`${skill.icon} text-primary-400`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-gray-400">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 btn-primary text-white rounded-full font-semibold"
              >
                Let's Work Together
              </a>
              <a
                href="#projects"
                className="px-8 py-3 btn-outline rounded-full font-semibold"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
