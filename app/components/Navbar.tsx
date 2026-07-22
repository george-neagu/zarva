"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

const links = [
  { label: "Acasă", href: "#acasa" },
  { label: "Despre noi", href: "#despre-noi" },
  { label: "Produse", href: "#produse" },
  { label: "Comunitate", href: "#comunitate" },
  { label: "Galerie foto", href: "#galerie-foto" },
  { label: "Contact", href: "#contact" },
] as const;

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.09,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative z-20 w-full bg-transparent text-[#fff1d5]">
      <nav
        aria-label="Navigație principală"
        className="mx-auto flex min-h-24 max-w-[1460px] items-center justify-between px-6 sm:px-10 lg:min-h-[168px] lg:px-16"
      >
        <motion.a
          href="#acasa"
          aria-label="Zar'vă — pagina principală"
          className="transition-opacity hover:opacity-80"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={itemVariants}
        >
          <Image
            src="/assets/logo.svg"
            alt=""
            width={438}
            height={122}
            priority
            className="h-auto w-[108px] sm:w-[132px] lg:w-[150px]"
          />
        </motion.a>

        <button
          type="button"
          className="relative z-20 flex size-11 items-center justify-center rounded-full border border-[#fff1d5]/50 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Meniu</span>
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <motion.ul
          className="hidden items-center gap-10 text-[0.95rem] font-bold lg:flex xl:gap-[4.7rem]"
          style={{ fontFamily: "var(--font-gotham)" }}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={listVariants}
        >
          {links.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <a
                href={link.href}
                className="whitespace-nowrap transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-current"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-24 z-10 overflow-hidden bg-[#5f1905] shadow-xl transition-[max-height,visibility] duration-300 lg:hidden ${isOpen ? "visible max-h-[32rem]" : "invisible max-h-0"}`}
        >
          <motion.ul
            className="flex flex-col px-6 pb-7 text-base font-bold sm:px-10"
            style={{ fontFamily: "var(--font-gotham)" }}
            initial={false}
            animate={isOpen && !reduceMotion ? "visible" : "hidden"}
            variants={listVariants}
          >
            {links.map((link) => (
              <motion.li key={link.href} className="border-t border-[#fff1d5]/20" variants={itemVariants}>
                <a href={link.href} className="block py-4" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </header>
  );
}
