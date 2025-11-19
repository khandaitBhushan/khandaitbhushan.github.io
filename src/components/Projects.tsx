import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Resume Analyzer AI",
      description: "AI-powered resume analyzer built with Spring AI and Docker for intelligent resume parsing and analysis.",
      tech: ["Spring AI", "Docker", "Java", "REST API"],
      liveUrl: "https://khandaitbhushan.github.io/ResumeAnalyzer/",
      githubUrl: "https://github.com/khandaitBhushan/ResumeAnalyzer",
    },
    {
      title: "My Personal Drive",
      description: "Personal cloud storage solution using local storage as drive storage for file management and sharing.",
      tech: ["Spring Boot", "Spring JPA", "MySQL", "REST API"],
      githubUrl: "https://github.com/khandaitBhushan/MyPersonalDrive",
    },
    {
      title: "E-Commerce Backend",
      description: "Comprehensive e-commerce backend with product management, cart functionality, and order processing.",
      tech: ["Spring Boot", "MySQL", "REST API", "Spring Security"],
      githubUrl: "https://github.com/khandaitBhushan/EcommerceApp",
    },
    {
      title: "Nearby Service Finder",
      description: "Location-based service finder backend with geospatial queries and service provider management.",
      tech: ["Spring Boot", "MySQL", "JPA", "REST API"],
      githubUrl: "https://github.com/khandaitBhushan/ServiceFinderBackendSpringUtility",
    },
    {
      title: "Movie Show Booking System",
      description: "Complete movie ticket booking system with seat selection, theater management, and booking workflows.",
      tech: ["Spring Boot", "MySQL", "Spring MVC", "JPA"],
      githubUrl: "https://github.com/khandaitBhushan/MovieShowBooking",
    },
    {
      title: "Weather App REST API",
      description: "Weather information API with real-time data fetching and caching mechanisms.",
      tech: ["Spring Boot", "REST API", "External API Integration"],
      githubUrl: "https://github.com/khandaitBhushan/Weather-App-RestAPI",
    },
    {
      title: "Movie Catalog REST API",
      description: "Movie catalog API with CRUD operations, search functionality, and rating system.",
      tech: ["Spring Boot", "MySQL", "REST API", "JPA"],
      githubUrl: "https://github.com/khandaitBhushan/MovieCatalogRestAPI",
    },
    {
      title: "Hostel Reservation System",
      description: "Student hostel management system with room allocation, booking, and payment tracking.",
      tech: ["Java", "JDBC", "Maven", "MySQL"],
      githubUrl: "https://github.com/khandaitBhushan/hostel-reservation-system",
    },
    {
      title: "Garage Management System",
      description: "Automotive garage management with service tracking, customer management, and billing.",
      tech: ["Java", "JDBC", "Maven", "MySQL"],
      githubUrl: "https://github.com/khandaitBhushan/GarageSystem",
    },
    {
      title: "Lossless File Compressor",
      description: "File compression tool using Huffman coding algorithm for efficient lossless compression.",
      tech: ["Java", "Huffman Algorithm", "Data Structures"],
      githubUrl: "https://github.com/khandaitBhushan/java-lossless-text-file-compressor",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1E90FF]/50 hover:shadow-lg hover:shadow-[#1E90FF]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <h3 className="text-white mb-3 group-hover:text-[#1E90FF] transition-colors duration-300 text-lg">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#1E90FF]/10 text-[#1E90FF] rounded-lg border border-[#1E90FF]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1E90FF] hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#1E90FF] hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}