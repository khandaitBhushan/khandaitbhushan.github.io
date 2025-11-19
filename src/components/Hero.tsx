import { motion } from "motion/react";
import { Download, Calendar } from "lucide-react";
import profileImage from "../assets/profile.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Bhushan Khandait"
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-[#1E90FF]/30 shadow-lg shadow-[#1E90FF]/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1E90FF]/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bhushan Khandait
          </motion.h1>

          <motion.div
            className="text-[#1E90FF] mb-8 text-2xl sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Java Backend Developer
          </motion.div>

          <motion.p
            className="text-white/80 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting scalable backend systems with Spring Boot, REST APIs, and modern Java technologies.
            Passionate about clean architecture and solving complex problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* VIEW / DOWNLOAD RESUME */}
            <a
              href="https://drive.google.com/file/d/1EYM1osNUX3crkBPS6S6YBUPSjn-WiHsU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 text-lg rounded-lg hover:bg-[#1873CC] transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/50 hover:-translate-y-0.5"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              View Resume
            </a>

            {/* BOOK CALL */}
            <a
              href="mailto:khandaitbhushan6@gmail.com?subject=Book a Free Call&body=Hi Bhushan, I would like to schedule a free call with you."
              className="group inline-flex items-center gap-2 bg-white/5 text-white px-8 py-4 text-lg rounded-lg border border-[#1E90FF]/50 hover:bg-[#1E90FF]/10 hover:border-[#1E90FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/30 hover:-translate-y-0.5"
            >
              <Calendar size={22} className="group-hover:animate-pulse" />
              Book a Free Call
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#1E90FF]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
