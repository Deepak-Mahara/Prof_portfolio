"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 text-white pointer-events-none mix-blend-difference">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-lg md:text-xl tracking-widest uppercase pointer-events-auto"
        >
          DSM
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300 transition-opacity hover:opacity-80"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="ml-4 px-6 py-2.5 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Resume
          </a>
        </motion.nav>

        {/* Mobile Toggle */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:hidden pointer-events-auto p-2"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6 pointer-events-auto"
          >
            <div className="flex justify-between items-center w-full mb-12 mix-blend-difference">
              <div className="font-bold text-lg tracking-widest uppercase">
                DSM
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-2xl font-light tracking-widest uppercase items-center justify-center flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-50 transition-opacity"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length + 0.2 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
