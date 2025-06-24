import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pet Adoption Platform",
      description:
        "A full-featured platform that allows users to browse, adopt, and foster pets. Includes shelter dashboards, pet management, and adoption tracking.",
      image:
        "https://images.pexels.com/photos/5732466/pexels-photo-5732466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://pet-adoption-platform-kp.netlify.app/",
      githubUrl: "https://github.com/Kubendiran2003/Pet_Adoption_Platform",
      featured: true,
    },
    {
      id: 2,
      title: "Sky Tech Makers",
      description:
        "A MERN stack platform to publish blogs, solve interview questions, and use developer tools with secure login, Register and admin approval.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://sky-tech-makers.netlify.app",
      githubUrl: "https://github.com/Kubendiran2003/Sky-Tech-Makers",
      featured: true,
    },
    {
      id: 3,
      title: "SaaS Management Application",
      description:
        "Streamlined platform to manage tenants, products, and subscriptions for SaaS businesses.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://saas-frontend-project.netlify.app",
      githubUrl: "https://github.com/Arunagiri19/saasmanagement",
      featured: true,
    },
    {
      id: 4,
      title: "Dice Game",
      description:
        "A fun dice game built with JavaScript where two players roll dice and compete to get the highest score.",
      image:
        "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://jocular-pothos-ebbb9e.netlify.app",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/Dice_Game",
      featured: false,
    },
    {
      id: 5,
      title: "Coffee Shop Website",
      description:
        "Simple and elegant coffee shop site with a responsive layout, smooth user interaction, and animated transitions.",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gleeful-eclair-801e24.netlify.app/",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/CoffeeShop",
      featured: false,
    },
    {
      id: 6,
      title: "Flipkart Clone",
      description:
        "A static Flipkart homepage clone built with HTML, CSS, and JavaScript, showcasing responsive layout and product sections.",
      image:
        "https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://extraordinary-frangipane-7c7327.netlify.app",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/flipkart-clone",
      featured: false,
    },
    {
      id: 7,
      title: "Hangman Game",
      description:
        "A classic Hangman word guessing game built with React and Tailwind CSS featuring interactive UI and scoring logic.",
      image:
        "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://dashing-medovik-c4ee99.netlify.app",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/hangman_game",
      featured: false,
    },
    {
      id: 8,
      title: "Travel Booking",
      description:
        "A modern travel booking platform with interactive destination exploration and seamless trip planning features.",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["HTML", "CSS"],
      liveUrl: "https://theb4trip.netlify.app",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/TheB4Trip",
      featured: false,
    },
    {
      id: 9,
      title: "Veterinary Clinic",
      description:
        "Responsive website for a veterinary clinic with appointment booking, services overview, and interactive FAQs.",
      image:
        "https://images.pexels.com/photos/6235244/pexels-photo-6235244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://earnest-dodol-5ff618.netlify.app",
      githubUrl:
        "https://github.com/Kubendiran2003/My-Work/tree/main/Veterinary_Clinic",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack
            development and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass rounded-3xl overflow-hidden hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Project Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="flex-1 px-6 py-3 btn-primary text-white rounded-full font-semibold text-center"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="px-6 py-3 btn-outline rounded-full font-semibold"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Slider */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            More <span className="text-gradient">Projects</span>
          </h3>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {otherProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="glass rounded-2xl overflow-hidden hover-lift group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        className="flex-1 px-4 py-2 btn-primary text-white rounded-full text-sm font-semibold text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="w-10 h-10 btn-outline rounded-full flex items-center justify-center"
                      >
                        <i className="fab fa-github text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
