import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const certifications = [
    {
      title: "Java Programming",
      issuer: "GeeksforGeeks",
      url: "https://media.geeksforgeeks.org/courses/certificates/e5e7f56725036a7e1d8dbc446b091b8a.pdf",
    },
    {
      title: "SQL Basic Certificate",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/6509fdedb98b",
    },
    {
      title: "Problem Solving Certificate",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/173893d7ccc3",
    },
    {
      title: "Java Basic Certificate",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/23b1e1757f4d",
    },
    {
      title: "Java DSA Course",
      issuer: "PW Skills",
      url: "https://pwskills.com/learn/certificate/49b64d95-5777-4780-9ec8-6e726ed47979/",
    },
    {
      title: "AICTE Internship Certificate",
      issuer: "AICTE EduSkills",
      url: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=9fe195292f2edb7d267e40417db0ec2b",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1E90FF]/50 hover:shadow-lg hover:shadow-[#1E90FF]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#1E90FF]/10 p-3 rounded-lg group-hover:bg-[#1E90FF]/20 transition-colors duration-300">
                    <Award className="text-[#1E90FF]" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white mb-2 group-hover:text-[#1E90FF] transition-colors duration-300 text-lg">
                      {cert.title}
                    </h3>
                    <p className="text-white/60 text-base">{cert.issuer}</p>
                  </div>
                  <ExternalLink 
                    size={18} 
                    className="text-[#1E90FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}