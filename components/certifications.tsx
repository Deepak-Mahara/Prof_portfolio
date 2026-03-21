"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type Certification = {
  title: string;
  issuer: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    image: "/certificates/CloudComputing.jpg"
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    image: "/certificates/BitsAndBytes.jpg"
  },
  {
    title: "Computational Theory",
    issuer: "Infosys",
    image: "/certificates/Automation.jpg"

  }
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };

    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  return (
    <>
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
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="group flex flex-col justify-between p-8 md:p-10 border border-white/20 rounded-[2rem] hover:bg-white transition-all duration-500 cursor-none shadow-sm hover:shadow-2xl"
              >
                <div className="flex flex-col gap-6 mb-12 pointer-events-none">
                  <span className="px-4 py-1.5 border border-white/30 group-hover:border-black/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-black/60 self-start transition-colors duration-500">
                    Verified
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-black transition-colors duration-500 leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <div className="pt-6 border-t border-white/20 group-hover:border-black/10 transition-colors mt-auto pointer-events-none">
                  <p className="text-white/50 group-hover:text-black/50 text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-500">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md pointer-events-auto cursor-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#050505] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/5">
                <div>
                  <h3 className="text-white text-lg md:text-2xl font-bold tracking-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 font-medium">
                    Issuer: {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-white/60 hover:text-white transition-all duration-300 p-2 rounded-full border border-transparent hover:border-white/20 hover:bg-white/5 cursor-none"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </button>
              </div>
              <div className="relative flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center min-h-[50vh] bg-black/50">
                {/* Certification Preview Image */}
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certification from ${selectedCert.issuer}`}
                  className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
