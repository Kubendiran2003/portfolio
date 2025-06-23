const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Web Consulting",
  ];

  return (
    <footer className="bg-dark-800 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Kubendiran P
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web
              solutions that drive business growth and deliver exceptional user
              experiences.
            </p>

            <div className="flex space-x-4">
              {[
                {
                  icon: "fab fa-linkedin",
                  href: "https://www.linkedin.com/in/kubendiran2303",
                },
                {
                  icon: "fab fa-github",
                  href: "https://github.com/Kubendiran2003",
                },
                {
                  icon: "fab fa-instagram",
                  href: "https://www.instagram.com/kubendiran_2303?igsh=NnphYTJ4MmYzN2Jx",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="glass rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <i className="fas fa-envelope text-primary-400"></i>
              <span className="text-gray-300">
                kubendiranpalani289@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <i className="fas fa-phone text-primary-400"></i>
              <span className="text-gray-300">+91 6379412516</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <i className="fas fa-map-marker-alt text-primary-400"></i>
              <span className="text-gray-300">Tiruvannamalai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Kubendiran P. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
