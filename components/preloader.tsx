"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  { text: "Hello",      lang: "en" },
  { text: "Bonjour",    lang: "fr" },
  { text: "こんにちは",  lang: "ja" },
  { text: "Ciao",       lang: "it" },
  { text: "Hola",       lang: "es" },
  { text: "नमस्ते",     lang: "hi" },
];

// Duration each greeting is visible (ms)
const STEP_DURATION = 300;
// Extra hold on the final greeting (ms)
const FINAL_HOLD   = 620;
// Fade-out duration for the curtain (ms) — matches framer exit duration
const EXIT_DURATION = 700;

export function Preloader() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(false); // controls whether preloader renders

  useEffect(() => {
    if (typeof window === "undefined") return;

    setVisible(true);

    let step = 0;

    const advance = () => {
      step += 1;
      if (step < greetings.length) {
        setIndex(step);
        const delay = step === greetings.length - 1 ? FINAL_HOLD : STEP_DURATION;
        timer = window.setTimeout(advance, delay);
      } else {
        // All greetings shown — begin exit
        setVisible(false);
      }
    };

    let timer = window.setTimeout(advance, STEP_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black pointer-events-all"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              lang={greetings[index].lang}
              className="text-white text-5xl sm:text-7xl lg:text-5xl  tracking-tighter select-none"
            >
              {greetings[index].text}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
