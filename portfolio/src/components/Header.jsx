import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="text-xl font-bold text-white">Kubendiran P</span>
        </a>

        {/* Nav Links - Only show on large screens */}
        <ul className="hidden lg:flex items-center space-x-8">
          {[
            { href: "#", text: "Home" },
            { href: "#about", text: "About" },
            { href: "#skills", text: "Skills" },
            { href: "#projects", text: "Projects" },
            { href: "#experience", text: "Experience" },
            { href: "#contact", text: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Get In Touch - always visible */}
        <div className="flex items-center space-x-4">
          {/* Icon button for small screens */}
          <a
            href="#contact"
            className="sm:hidden w-10 h-10 btn-primary text-white rounded-full flex items-center justify-center"
          >
            <i className="fas fa-user text-lg"></i>
          </a>

          {/* Text button for medium and up */}
          <a
            href="#contact"
            className="hidden sm:block px-6 py-2 btn-primary text-white rounded-full font-medium"
          >
            Get In Touch
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
