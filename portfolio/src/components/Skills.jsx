import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    {
      name: "React.js",
      percentage: 90,
      color: "#61dafb",
      icon: "fab fa-react",
    },
    {
      name: "Node.js",
      percentage: 80,
      color: "#68a063",
      icon: "fab fa-node-js",
    },
    {
      name: "Express.js",
      percentage: 82,
      color: "#000000",
      icon: "fas fa-server",
    },
    {
      name: "MongoDB",
      percentage: 85,
      color: "#47a248",
      icon: "fas fa-database",
    },
    { name: "JavaScript", percentage: 85, color: "#f7df1e", icon: "fab fa-js" },
    { name: "AWS", percentage: 70, color: "#ff9900", icon: "fab fa-aws" },
    { name: "TypeScript", percentage: 75, color: "#3178c6", icon: "fab fa-js" },
    { name: "Redux", percentage: 73, color: "#FA8072", icon: "fas fa-code" },
  ];

  const certificates = [
    {
      title: "HTML, CSS, Tailwind CSS",
      issuer: "GUVI Platform",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1gxnv1U9Xa7uXv9Ytwl00weA6zd0Oszu4/view?usp=sharing",
    },
    {
      title: "JavaScript",
      issuer: "GUVI Platform",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1_HcxrQ1nSXDUzXRV_olfTv4CmmzWqgkR/view?usp=sharing",
    },
    {
      title: "MERN Stack",
      issuer: "GUVI Platform",
      image:
        "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/13pAO3Nv7-VBUwcZ88ckv81sXzqP8E9QY/view?usp=sharing",
    },
    {
      title: "AWS Cloud",
      issuer: "GUVI Platform",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1Z2POqBt2P9E4J-JLHQ3WXPm8vVx_BKUB/view?usp=sharing",
    },
    {
      title: "AR / VR",
      issuer: "InGage via Naan Mudhalvan",
      image:
        "https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1YCH7hBNr_Y-TCGtXwQTf2hC59F0OcxLr/view?usp=sharing",
    },
    {
      title: "Artificial Intelligence and Applications",
      issuer: "Infosys Springboard via Naan Mudhalvan",
      image:
        "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1xLajeYRezBJ1r1cDjXg5jj0JPs21lSuw/view?usp=sharing",
    },
    {
      title: "Programming Using Java",
      issuer: "Infosys via Infosys Lex",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      link: "https://drive.google.com/file/d/1wV1s3y78WlCS7w6Flrik-Z_InaMH74H8/view?usp=sharing",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24 gradient-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on creating
            scalable, performant applications using the latest industry
            standards.
          </p>
        </div>

        {/* Skills Chart */}
        <div ref={skillsRef} className="mb-20">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technical Proficiency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`text-center group transform transition duration-1000 ease-out ${
                    isVisible
                      ? `opacity-100 translate-y-0 delay-${index * 100}`
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg
                      className="w-24 h-24 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={skill.color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={
                          isVisible
                            ? `${
                                2 * Math.PI * 40 * (1 - skill.percentage / 100)
                              }`
                            : `${2 * Math.PI * 40}`
                        }
                        className="transition-all duration-[1500ms] ease-in-out"
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <i
                        className={`${skill.icon} text-2xl`}
                        style={{ color: skill.color }}
                      ></i>
                    </div>
                  </div>

                  <h4 className="text-white font-semibold text-lg mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-primary-400 font-bold text-xl">
                    {skill.percentage}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Courses & <span className="text-gradient">Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl overflow-hidden hover-lift group block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>

                  <div className="mt-4 flex items-center text-primary-400 text-sm font-medium">
                    <i className="fas fa-certificate mr-2"></i>
                    Certified
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
