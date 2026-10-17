"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type GlareCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlareCard({ children, className }: GlareCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x, y, opacity: 0.18 });
  }

  function onLeave() {
    setGlare((g) => ({ ...g, opacity: 0 }));
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(420px circle at ${glare.x}% ${glare.y}%, rgba(232,90,42,0.22), transparent 55%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
