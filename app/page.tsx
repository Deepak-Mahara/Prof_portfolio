"use client";

import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax for the DEEPAK text
  const textY = useTransform(scrollY, [0, 1000], [0, 400]);

  // Subtle mouse parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [0, 1], [-5, 5]);
  const parallaxY = useTransform(smoothMouseY, [0, 1], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative flex flex-col w-full">
      <Navbar />

      <section className="min-h-[85vh] relative flex items-center justify-center overflow-hidden px-6 pt-20">

        {/* Responsive corner texts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.5, x: 0 }}
          whileHover={{ opacity: 1, transition: { duration: 0.3, delay: 0 } }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block absolute bottom-12 left-12 z-10 mix-blend-difference text-white pointer-events-auto cursor-none group"
        >
          <p className="text-xs uppercase tracking-widest leading-relaxed transition-colors duration-300">
            Located in<br />India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.5, x: 0 }}
          whileHover={{ opacity: 1, transition: { duration: 0.3, delay: 0 } }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block absolute bottom-12 right-12 z-10 mix-blend-difference text-white pointer-events-auto cursor-none group"
        >
          <p className="text-xl md:text-3xl font-light tracking-tight text-right transition-colors duration-300">
            Freelance<br />Designer & Developer
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
          <motion.h1 
            style={{ x: parallaxX, y: parallaxY }}
            className="text-[25vw] leading-none font-bold tracking-tighter text-black opacity-[0.03] select-none whitespace-nowrap"
          >
            DEEPAK
          </motion.h1>
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
                  Hi, I'm<br />Deepak
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

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-6 mt-6 sm:mt-8 pointer-events-auto">
                  <motion.a
                    href="https://github.com//Deepak-Mahara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/60 hover:text-white transition-all duration-300 cursor-none"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/u/Binary_Commando/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/60 hover:text-white transition-all duration-300 cursor-none flex items-center justify-center"
                    aria-label="LeetCode"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]">
                      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.705-1.099-.705-1.823s.238-1.356.705-1.824l4.319-4.38c.467-.467 1.112-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.361 0l-4.32 4.38c-1.01 1.01-1.517 2.338-1.517 3.844 0 1.505.507 2.833 1.517 3.844l4.332 4.363a5.055 5.055 0 0 0 7.36 0l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.536-1.386-.554-1.9-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/deepakmahara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/60 hover:text-white transition-all duration-300 cursor-none"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
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
