"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.16,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[420px] items-center justify-center px-6 pb-12 text-[#fff1d5] sm:px-10 lg:min-h-[516px] lg:px-16 lg:pb-16"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -mt-[66%] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero.svg')" }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <motion.h1
        id="hero-heading"
        className="relative z-10 max-w-[900px] text-center text-[2.15rem] font-bold leading-[1.22] tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.35rem]"
        style={{ fontFamily: "var(--font-travels)" }}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={headingVariants}
      >
        <motion.span className="block" variants={lineVariants}>
          Aglomerație de gusturi.
        </motion.span>
        <motion.span className="block" variants={lineVariants}>
          Selecție cu sens.
        </motion.span>
      </motion.h1>
    </section>
  );
}
