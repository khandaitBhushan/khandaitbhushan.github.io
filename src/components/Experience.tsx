import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-8 border-l-2 border-[#1E90FF]/30">
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#1E90FF] rounded-full border-4 border-[#030303]"></div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#1E90FF]/50 hover:shadow-lg hover:shadow-[#1E90FF]/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1E90FF]/10 p-3 rounded-lg">
                      <Briefcase className="text-[#1E90FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-xl">Java Developer Intern</h3>
                      <p className="text-[#1E90FF] text-base">Babhale Infotech Solutions LLP</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 md:ml-auto text-base">
                    <Calendar size={16} />
                    <span>Aug 2025 - Oct 2025</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-white/80 ml-16 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-1">•</span>
                    <span>Built and deployed Spring Boot modules with secure authentication and authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-1">•</span>
                    <span>Developed RESTful APIs with proper error handling and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-1">•</span>
                    <span>Optimized SQL queries and database schemas for improved performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-1">•</span>
                    <span>Conducted debugging, testing, and created comprehensive technical documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-1">•</span>
                    <span>Participated in deployment builds and production releases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}