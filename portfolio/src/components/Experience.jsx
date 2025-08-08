const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Infosys",
      period: "Jul 2025 – Present",
      description:
        "Contributing to full-stack enterprise application development within Infosys’ agile teams. Working on real-world use cases involving React, Node.js, API integration, and more.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Core Java",
        "REST APIs",
        "Git & GitHub",
        "Agile Methodologies",
        "Unit Testing",
      ],
      achievements: [
        "Working on real-time enterprise applications for global clients",
        "Participated in internal training and mentorship sessions",
        "Contributed to backend APIs and frontend UI using MERN stack and Core Java",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "Jan 2025 - Present",
      description:
        "Developing custom web applications for clients using MERN stack. Built 15+ projects including e-commerce platforms, learning management systems, and business websites.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      achievements: [
        "Delivered 15+ successful projects",
        "98% client satisfaction rate",
        "Reduced development time by 40% using reusable components",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      period: "2024 - 2025",
      description:
        "Focused on mastering frontend technologies and building responsive, user-friendly interfaces. Created multiple portfolio projects and contributed to open-source.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      achievements: [
        "Built 10+ responsive websites",
        "Learned modern JavaScript frameworks",
        "Contributed to 3 open-source projects",
      ],
    },
  ];

  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "2nd Place",
      description:
        "National Level Technical Symposium at Chennai Institute of Technology",
      year: "2023",
    },
    {
      icon: "fas fa-medal",
      title: "Man of the Series",
      description: "Outstanding performance in district-level cricket matches",
      year: "2018",
    },
    {
      icon: "fas fa-code",
      title: "Full Stack Certification",
      description: "MERN Stack development certification from GUVI platform",
      year: "2025",
    },
    {
      icon: "fas fa-certificate",
      title: "Java Certification",
      description:
        "Successfully completed Programming Using Java course from Infosys Lex",
      year: "2025",
    },
  ];

  return (
    <section id="experience" className="py-24 gradient-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            A timeline of my professional growth, key milestones, and notable
            achievements in web development and beyond.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-300 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:items-start relative ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <div className="glass rounded-2xl p-8 hover-lift mt-12 lg:mt-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-primary-400 font-semibold mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-center text-gray-300"
                          >
                            <i className="fas fa-check-circle text-primary-400 mr-3"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Notable <span className="text-gradient">Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover-lift group"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <i
                    className={`${achievement.icon} text-2xl text-primary-400`}
                  ></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <span className="text-primary-400 font-semibold text-sm">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
