"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  slug: string;
  title: string;
  description: string;
  tech?: string[];
  problem: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectDetail({ project }: { project: ProjectProps }) {
  return (
    <main className="min-h-screen bg-white text-black py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-16 md:mb-24"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-start text-left mb-24 md:mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-black">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-black/50 leading-relaxed max-w-2xl">
            {project.description}
          </p>
          
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-sm font-medium hover:opacity-50 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-sm font-medium hover:opacity-50 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Content Sections */}
        <div className="flex flex-col gap-24 md:gap-32 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
              The Problem
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/90">
              {project.problem}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
              The Solution
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/90">
              {project.solution}
            </p>
          </motion.div>
          
          {project.tech && project.tech.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="px-5 py-2 text-sm font-medium tracking-wide border border-black/15 rounded-full text-black/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="pt-12 border-t border-black/10"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
              The Outcome
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-black/90">
              {project.outcome}
            </p>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
