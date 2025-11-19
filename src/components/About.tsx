import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Summary */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#1E90FF]/50 transition-all duration-300">
              <h3 className="text-white mb-4 text-2xl">Summary</h3>
              <p className="text-white/80 leading-relaxed text-base">
                Final-year IT student skilled in Java, Spring Boot, REST APIs, MySQL, Spring Security, JPA/Hibernate. 
                Strong in debugging, DSA, clean architecture, modular backend design, and documentation. 
                Interested in AI engineering and scalable backend systems.
              </p>
            </div>

            {/* Education & Contact */}
            <div className="space-y-6">
              {/* Education */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#1E90FF]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1E90FF]/10 p-3 rounded-lg">
                    <GraduationCap className="text-[#1E90FF]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 text-xl">Education</h3>
                    <p className="text-white/90 text-base">B.Tech in Information Technology</p>
                    <p className="text-white/70 text-base">Priyadarshini College of Engineering</p>
                    <p className="text-white/60 text-base">2022 - 2026 | CGPA: 7.50</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1E90FF]/50 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70 hover:text-[#1E90FF] transition-all duration-300 text-base">
                    <MapPin size={18} className="text-[#1E90FF]" />
                    <span>Nagpur, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 hover:text-[#1E90FF] transition-all duration-300 text-base">
                    <Mail size={18} className="text-[#1E90FF]" />
                    <a href="mailto:khandaitbhushan6@gmail.com">khandaitbhushan6@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 hover:text-[#1E90FF] transition-all duration-300 text-base">
                    <Phone size={18} className="text-[#1E90FF]" />
                    <a href="tel:+919529713527">+91 9529713527</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}