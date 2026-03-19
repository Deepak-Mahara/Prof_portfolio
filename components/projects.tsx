"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="w-full pt-16 md:pt-24 pb-16 md:pb-24 px-6 relative z-30 pointer-events-none mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          {/* Section heading with faded number separator */}
          <div className="relative mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter mix-blend-difference text-white leading-none relative z-10">
              Selected<br/>Work
            </h2>
            <span className="absolute -top-12 -left-4 md:-top-16 text-[8rem] md:text-[12rem] font-bold text-black/5 tracking-tighter select-none z-0 mix-blend-normal">
              01
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <div 
                key={project.slug} 
                className={`block group ${isFeatured ? 'md:col-span-2' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: index % 2 === 0 ? -1 : 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                  className="relative flex flex-col p-10 md:p-16 bg-white/60 backdrop-blur-xl border border-black/5 rounded-[2rem] md:rounded-[3rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] transition-shadow overflow-hidden h-full"
                  style={{ perspective: 1000 }}
                >
                  {/* Subtle Link stretching across the card under the buttons so the whole card continues to route */}
                  <Link href={`/project/${project.slug}`} className="absolute inset-0 z-10 pointer-events-auto cursor-none" />

                  <div className="flex flex-col h-full z-10 text-black pointer-events-none">
                    <h3 className={`font-bold tracking-tight mb-4 group-hover:opacity-20 transition-opacity duration-500 ${isFeatured ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl'}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-black/70 font-light leading-relaxed mb-12 flex-grow group-hover:opacity-20 transition-opacity duration-500 ${isFeatured ? 'text-xl md:text-2xl lg:text-3xl max-w-3xl' : 'text-lg md:text-xl'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-auto group-hover:opacity-20 transition-opacity duration-500">
                      {project.tech?.map(tech => (
                        <span 
                          key={tech} 
                          className="px-4 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase border border-black/10 rounded-full text-black/80 bg-white/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glassmorphic Hover Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="flex flex-wrap justify-center items-center gap-4 pointer-events-auto relative z-30">
                      <Link 
                        href={`/project/${project.slug}`}
                        className="flex flex-1 items-center justify-center gap-3 px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-black/90 transition-colors shadow-2xl cursor-none hover:scale-[1.02] active:scale-95 duration-300"
                      >
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                      </Link>
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center p-4 border border-black/20 bg-white text-black hover:bg-black hover:text-white rounded-full transition-all shadow-2xl cursor-none hover:scale-[1.05] active:scale-95 duration-300"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
