import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code2 } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending email (replace with actual EmailJS or API integration)
    try {
      // Example: Using mailto as fallback
      const mailtoLink = `mailto:khandaitbhushan6@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      }, 1000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-12 text-center text-4xl sm:text-5xl">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white mb-4 text-2xl">Let's Connect</h3>
                <p className="text-white/80 mb-6 text-base leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:khandaitbhushan6@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-[#1E90FF] transition-all duration-300 group text-base"
                >
                  <div className="bg-[#1E90FF]/10 p-3 rounded-lg group-hover:bg-[#1E90FF]/20 transition-colors duration-300">
                    <Mail className="text-[#1E90FF]" size={20} />
                  </div>
                  <span>khandaitbhushan6@gmail.com</span>
                </a>

                <a
                  href="tel:+919529713527"
                  className="flex items-center gap-4 text-white/80 hover:text-[#1E90FF] transition-all duration-300 group text-base"
                >
                  <div className="bg-[#1E90FF]/10 p-3 rounded-lg group-hover:bg-[#1E90FF]/20 transition-colors duration-300">
                    <Phone className="text-[#1E90FF]" size={20} />
                  </div>
                  <span>+91 9529713527</span>
                </a>

                <div className="flex items-center gap-4 text-white/80 text-base">
                  <div className="bg-[#1E90FF]/10 p-3 rounded-lg">
                    <MapPin className="text-[#1E90FF]" size={20} />
                  </div>
                  <span>Nagpur, Maharashtra</span>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-white mb-4 text-xl">Connect on Social</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/iambhushan07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E90FF]/10 p-3 rounded-lg hover:bg-[#1E90FF]/20 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="text-[#1E90FF]" size={24} />
                  </a>
                  <a
                    href="https://github.com/khandaitBhushan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E90FF]/10 p-3 rounded-lg hover:bg-[#1E90FF]/20 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="text-[#1E90FF]" size={24} />
                  </a>
                  <a
                    href="https://leetcode.com/u/i_am_bhushan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E90FF]/10 p-3 rounded-lg hover:bg-[#1E90FF]/20 hover:scale-110 transition-all duration-300"
                  >
                    <Code2 className="text-[#1E90FF]" size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-base">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#1E90FF] transition-colors duration-300 text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#1E90FF] transition-colors duration-300 text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#1E90FF] transition-colors duration-300 resize-none text-base"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#1E90FF] text-white px-8 py-4 text-lg rounded-lg hover:bg-[#1873CC] transition-all duration-300 hover:shadow-lg hover:shadow-[#1E90FF]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : status === "error" ? (
                    "Error - Try Again"
                  ) : (
                    <>
                      <Send size={22} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}