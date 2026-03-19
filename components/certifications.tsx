"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL"
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google"
  },
  {
    title: "Computational Theory",
    issuer: "Infosys"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 px-6 relative z-20 text-white mix-blend-difference pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="relative mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-none relative z-10">
              Certifications
            </h2>
            <span className="absolute -top-12 -left-4 md:-top-16 text-[8rem] md:text-[12rem] font-bold text-white/10 tracking-tighter select-none z-0">
              03
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-8 md:p-10 border border-white/20 rounded-[2rem] hover:bg-white transition-all duration-500 cursor-none shadow-sm hover:shadow-2xl"
            >
              <div className="flex flex-col gap-6 mb-12">
                <span className="px-4 py-1.5 border border-white/30 group-hover:border-black/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-black/60 self-start transition-colors duration-500">
                  Verified
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-black transition-colors duration-500 leading-tight">
                  {cert.title}
                </h3>
              </div>
              <div className="pt-6 border-t border-white/20 group-hover:border-black/10 transition-colors mt-auto">
                <p className="text-white/50 group-hover:text-black/50 text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-500">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
