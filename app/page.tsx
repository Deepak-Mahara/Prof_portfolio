"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax for the DEEPAK text
  const textY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <main className="relative flex flex-col w-full">
      <Navbar />
      
      <section className="min-h-[85vh] relative flex items-center justify-center overflow-hidden px-6 pt-20">
        
        {/* Responsive corner texts */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block absolute bottom-12 left-12 z-10 mix-blend-difference text-white pointer-events-none"
        >
          <p className="text-xs uppercase tracking-widest leading-relaxed">
            Located in<br/>India
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block absolute bottom-12 right-12 z-10 mix-blend-difference text-white pointer-events-none"
        >
          <p className="text-xl md:text-3xl font-light tracking-tight text-right">
            Freelance<br/>Designer & Developer
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-30"
        >
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-black/40">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-16 md:h-24 bg-gradient-to-b from-black/40 to-transparent"
          />
        </motion.div>

        {/* Decorative large background text behind the centerpiece with Parallax */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y: textY }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/4 md:top-[30%] left-1/2 -translate-x-1/2 z-0 pointer-events-none w-full text-center flex justify-center items-center"
        >
          <h1 className="text-[25vw] leading-none font-bold tracking-tighter text-black opacity-[0.03] select-none whitespace-nowrap">
            DEEPAK
          </h1>
        </motion.div>

        {/* Main Centerpiece Container */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="relative z-20 flex items-center justify-center w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[600px] lg:h-[600px] mt-4 md:mt-0"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            {/* Soft shadow/glow layer for depth */}
            <div className="absolute inset-0 rounded-full bg-black/20 blur-[60px] md:blur-[100px] scale-110 pointer-events-none" />
            
            <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center shadow-2xl transition-transform duration-700 group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center px-4 flex flex-col items-center justify-center"
              >
                <h1 className="text-white text-6xl sm:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] mb-4 group-hover:tracking-tight transition-all duration-500">
                  Hi, I'm<br/>Deepak
                </h1>
                <h2 className="text-white/90 text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 group-hover:text-white transition-colors duration-500">
                  Full Stack Developer
                </h2>
                <p className="text-white/50 text-[10px] sm:text-xs md:text-sm font-light max-w-[200px] lg:max-w-[300px] leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                  Building elegant web experiences and robust architectures.
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 lg:mt-10 pointer-events-auto cursor-auto">
                  <motion.a 
                    href="#projects" 
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-white text-black text-[10px] sm:text-xs font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg cursor-none"
                  >
                    View Projects
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full border border-white/30 text-white text-[10px] sm:text-xs font-medium hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-none"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Replaced hard dividers with natural flowing negative margins attached inside the components themselves */}
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
