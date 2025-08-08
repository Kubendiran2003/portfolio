import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-bg relative overflow-hidden flex items-center">
      {/* Animated particles background */}
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Kubendiran P
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gradient">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Crafting exceptional digital experiences with the MERN stack. I
              build scalable, user-friendly web applications that solve
              real-world problems and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-4 btn-primary text-white rounded-full font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1oIKa4PoHxcGwecufInFr4IR-5SLSGgsO/view?usp=sharing"
                target="_blank"
                className="px-8 py-4 btn-outline rounded-full font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </a>
            </div>

            <div className="flex space-x-6 pt-4">
              {[
                {
                  icon: "fab fa-linkedin",
                  href: "https://www.linkedin.com/in/kubendiran2303",
                },
                {
                  icon: "fab fa-github",
                  href: "https://github.com/Kubendiran2003",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-500 transition-all duration-300 hover-lift"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Cards */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Profile Card */}
              <div className="col-span-2 glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-400"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      MERN Stack Developer
                    </h3>
                    <p className="text-gray-400">Available for work</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Projects Completed</span>
                    <span className="text-primary-400 font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Years Experience</span>
                    <span className="text-primary-400 font-semibold">
                      Fresher
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Technologies</span>
                    <span className="text-primary-400 font-semibold">10+</span>
                  </div>
                </div>
              </div>

              {/* Skills Preview Card */}
              <div className="glass rounded-2xl p-6 hover-lift">
                <h4 className="text-white font-semibold mb-4">Top Skills</h4>
                <div className="space-y-3">
                  {[
                    { name: "React.js", level: 90 },
                    { name: "Node.js", level: 80 },
                    { name: "MongoDB", level: 85 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="glass rounded-2xl p-6 hover-lift">
                <h4 className="text-white font-semibold mb-4">Quick Stats</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">
                      98%
                    </div>
                    <div className="text-xs text-gray-400">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-400">
                      24/7
                    </div>
                    <div className="text-xs text-gray-400">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full animate-float"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/20 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
