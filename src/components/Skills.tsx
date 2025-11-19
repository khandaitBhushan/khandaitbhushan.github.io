import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "C++", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring JPA", "Hibernate"],
    },
    {
      title: "Backend & APIs",
      skills: ["REST APIs", "JWT", "JSON", "Microservices"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "Database Design", "Query Optimization"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Maven", "Docker", "Postman", "IntelliJ IDEA"],
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Data Structures", "Algorithms", "Design Patterns", "Clean Architecture"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1E90FF]/50 hover:shadow-lg hover:shadow-[#1E90FF]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-white mb-4 text-xl">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#1E90FF]/10 text-[#1E90FF] rounded-lg border border-[#1E90FF]/20 hover:bg-[#1E90FF]/20 hover:border-[#1E90FF]/40 transition-all duration-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}