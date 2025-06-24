import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      details: [
        "314, Vadamathur,",
        "Tiruvannamalai, Tamil Nadu",
        "606702, India",
      ],
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: ["kubendiranpalani289@gmail.com", "Available 24/7"],
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      details: ["+91 63XXXXXX16", "Mon - Fri: 9AM - 10PM"],
    },
    {
      icon: "fas fa-briefcase",
      title: "Services",
      details: [
        "Full Stack Development",
        "Web Applications",
        "Frontend Development",
      ],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      alert("Message sent successfully! I'll get back to you soon.");
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you build
            amazing web applications. Let's discuss your project and create
            something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 px-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-3xl p-6 sm:p-8 w-full hover-lift ">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <i className={`${info.icon} text-primary-400`}></i>
                    </div>
                    <div className="break-words">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-gray-300 text-sm sm:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-3xl p-6 sm:p-8 w-full hover-lift ">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: "fab fa-linkedin",
                    href: "https://www.linkedin.com/in/kubendiran2303",
                  },
                  {
                    icon: "fab fa-github",
                    href: "https://github.com/Kubendiran2003",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover-lift"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-3xl p-6 sm:p-8 w-full hover-lift ">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">
                  Available for work
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                I'm currently accepting new projects and collaborations. Let's
                discuss how we can work together to achieve your goals.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-6 sm:p-8 w-full hover-lift ">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 outline-none resize-y"
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 btn-primary text-white rounded-xl font-semibold text-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner animate-spin"></i>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
