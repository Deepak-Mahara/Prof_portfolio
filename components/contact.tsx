"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full pt-32 md:pt-40 pb-8 px-6 relative z-10 bg-[#FCFCFC] text-black -mt-8 md:-mt-16">
      {/* Soft gradient overlay blending the hard cut into the background pattern over the Skills section */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#FCFCFC] -translate-y-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-24 pb-32 border-b border-black/5 text-center lg:text-left">

        {/* Left Side: Text and Secondary Button */}
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center lg:items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative mb-12 flex justify-center lg:justify-start">
              <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] relative z-10">
                Let's work<br />together.
              </h2>
              <span className="absolute -top-16 lg:-top-24 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[8rem] lg:text-[14rem] font-bold text-black/5 tracking-tighter select-none z-0">
                04
              </span>
            </div>

            <p className="text-black/60 text-lg sm:text-xl lg:text-2xl font-light mb-12 leading-relaxed relative z-10 max-w-xl mx-auto lg:mx-0">
              I'm currently available for freelance work and open to new opportunities. Let's build something beautiful.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.a
                href="mailto:contact@deepak.com"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-4 bg-black/5 hover:bg-black/10 text-black text-sm lg:text-base font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-none"
              >
                Email Me Directly <Mail className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none relative z-10 mt-8 lg:mt-6">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="text-xs font-bold text-black/50 tracking-[0.2em] uppercase ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-transparent border border-black/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 transition-all duration-300 placeholder:text-black/20 cursor-none"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-xs font-bold text-black/50 tracking-[0.2em] uppercase ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-transparent border border-black/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 transition-all duration-300 placeholder:text-black/20 cursor-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="message" className="text-xs font-bold text-black/50 tracking-[0.2em] uppercase ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full bg-transparent border border-black/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-black/30 focus:bg-white focus:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-black/20 transition-all duration-300 placeholder:text-black/20 resize-none cursor-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              className="mt-4 flex items-center justify-center gap-3 w-full lg:w-max px-8 py-4 lg:px-12 bg-black text-white rounded-full font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] cursor-none"
            >
              Send Message <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 pb-4">
        <p className="text-black/60 text-sm font-medium mb-4 md:mb-0 tracking-wide uppercase">
          © {new Date().getFullYear()} Deepak Profile
        </p>
        <div className="flex items-center gap-8">
          <motion.a whileHover={{ y: -2 }} href="https://github.com/Deepak-Mahara" target="_blank" className="text-black/40 hover:text-black transition-colors" aria-label="GitHub"><Github className="w-6 h-6 cursor-none" /></motion.a>
          <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/deepakmahara" target="_blank" className="text-black/40 hover:text-black transition-colors" aria-label="LinkedIn"><Linkedin className="w-6 h-6 cursor-none" /></motion.a>
        </div>
      </footer>
    </section>
  );
}
