"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ScrollImageProps {
  src: string;
  height?: string;
}

export default function ScrollImage({ src, height = "130vh" }: ScrollImageProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // More dramatic movement
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        style={{ y, scale, opacity }}
      />
    </div>
  );
}