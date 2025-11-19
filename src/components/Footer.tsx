import { Linkedin, Github, Mail, Code2, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: "https://linkedin.com/in/iambhushan07", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/khandaitBhushan", label: "GitHub" },
    { icon: Code2, url: "https://leetcode.com/u/i_am_bhushan/", label: "LeetCode" },
    { icon: Award, url: "https://www.geeksforgeeks.org/user/i_m_bhushan/", label: "GeeksforGeeks" },
    { icon: Mail, url: "mailto:khandaitbhushan6@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-white/[0.02] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="bg-[#1E90FF]/10 p-3 rounded-lg hover:bg-[#1E90FF]/20 hover:scale-110 transition-all duration-300"
              >
                <link.icon className="text-[#1E90FF]" size={20} />
              </a>
            ))}
          </div>

          {/* Name & Title */}
          <div className="text-center">
            <p className="text-white mb-1 text-base">Bhushan Khandait</p>
            <p className="text-white/60 text-base">Java Backend Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-base">
            <a href="#about" className="hover:text-[#1E90FF] transition-colors duration-300">
              About
            </a>
            <a href="#skills" className="hover:text-[#1E90FF] transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#1E90FF] transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#1E90FF] transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/40 text-center pt-6 border-t border-white/10 w-full">
            <p>&copy; {currentYear} Bhushan Khandait. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}