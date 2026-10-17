"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnet({ children, className, strength = 0.28 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  }

  function onLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={reduce ? undefined : { x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
