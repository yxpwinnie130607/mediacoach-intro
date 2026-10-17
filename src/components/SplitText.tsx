"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

type SplitTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

export function SplitText({ text, className, as: Tag = "h1" }: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(/(\s+)/);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn("text-balance", className)} aria-label={text}>
      {words.map((word, i) =>
        word.match(/^\s+$/) ? (
          <span key={`s-${i}`}>{word}</span>
        ) : (
          <span key={`w-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.04 * i,
              }}
            >
              {word}
            </motion.span>
          </span>
        ),
      )}
    </Tag>
  );
}
