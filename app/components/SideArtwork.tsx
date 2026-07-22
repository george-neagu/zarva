"use client";

import Image, { type ImageProps } from "next/image";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

type SideArtworkProps = {
  src: ImageProps["src"];
  width: number;
  height: number;
  direction: "left" | "right";
  className: string;
  style?: CSSProperties;
};

export default function SideArtwork({ src, width, height, direction, className, style }: SideArtworkProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, x: direction === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Image src={src} alt="" width={width} height={height} className="h-auto w-full" />
    </motion.div>
  );
}
