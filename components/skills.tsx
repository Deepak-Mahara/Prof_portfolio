"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["C++", "Java", "C", "Kotlin", "Python", "Android SDK"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 px-6 relative z-20 text-white mix-blend-difference pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-20 md:mb-32">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-none relative z-10">
              Skills &<br />Expertise
            </h2>
            <span className="absolute -top-12 -left-4 md:-top-16 text-[8rem] md:text-[12rem] font-bold text-white/10 tracking-tighter select-none z-0">
              02
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-8 border-b border-white/20 pb-6 uppercase text-white/50">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.skills.map(skill => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-6 py-3 border border-white/30 rounded-full text-base font-medium hover:bg-white hover:text-black hover:border-white transition-colors duration-300 shadow-sm hover:shadow-xl cursor-none"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
