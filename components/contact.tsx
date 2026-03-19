"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full pt-32 md:pt-40 pb-8 px-6 relative z-10 bg-[#FCFCFC] text-black -mt-8 md:-mt-16">
      {/* Soft gradient overlay blending the hard cut into the background pattern over the Skills section */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#FCFCFC] -translate-y-full pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center pb-32 border-b border-black/5">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="relative mb-12 flex justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] relative z-10">
              Let's work<br/>together.
            </h2>
            <span className="absolute -top-16 md:-top-24 text-[8rem] md:text-[14rem] font-bold text-black/5 tracking-tighter select-none z-0">
              04
            </span>
          </div>

          <p className="text-black/60 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-16 leading-relaxed relative z-10">
            I'm currently available for freelance work and open to new opportunities. Let's build something beautiful.
          </p>
          
          <div className="flex flex-col items-center gap-8 relative z-10">
            <motion.a 
              href="mailto:contact@deepak.com"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center gap-4 px-10 py-5 bg-black text-white text-xl font-medium rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cursor-none"
            >
              Email Me <Mail className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 pb-4">
        <p className="text-black/60 text-sm font-medium mb-4 md:mb-0 tracking-wide uppercase">
          © {new Date().getFullYear()} Deepak Profile
        </p>
        <div className="flex items-center gap-8">
          <motion.a whileHover={{ y: -2 }} href="#" className="text-black/40 hover:text-black transition-colors" aria-label="GitHub"><Github className="w-6 h-6 cursor-none" /></motion.a>
          <motion.a whileHover={{ y: -2 }} href="#" className="text-black/40 hover:text-black transition-colors" aria-label="LinkedIn"><Linkedin className="w-6 h-6 cursor-none" /></motion.a>
        </div>
      </footer>
    </section>
  );
}
