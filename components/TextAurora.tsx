"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const TextAurora = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}): JSX.Element => {
  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      {text}
      <motion.div className="absolute inset-0 pointer-events-none mix-blend-lighten dark:mix-blend-darken">
        <motion.div
          className="absolute w-[50vw] h-[50vw] mix-blend-overlay blur-xl bg-[hsl(var(--color-1))] animate-aurora-border repeat-infinite direction-alternate-reverse"
          style={{
            animation:
              "aurora-1 10s 12s infinite alternate, spin 10s 6s infinite alternate",
          }}
        />
        <motion.div
          className="absolute w-[50vw] h-[50vw] mix-blend-overlay blur-xl bg-[hsl(var(--color-2))] animate-aurora-border repeat-infinite direction-alternate-reverse"
          style={{
            animation:
              "aurora-2 10s 12s infinite alternate, spin 10s 8s infinite alternate",
          }}
        />
        <motion.div
          className="absolute w-[55vw] h-[55vw] mix-blend-overlay blur-xl bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--primary))] animate-aurora-border repeat-infinite direction-alternate-reverse"
          style={{
            animation:
              "aurora-3 10s 12s infinite alternate, spin 10s 10s infinite alternate",
          }}
        />
        <motion.div
          className="absolute w-[50vw] h-[50vw] mix-blend-overlay blur-xl bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--foreground))] animate-aurora-border repeat-infinite direction-alternate-reverse"
          style={{
            animation:
              "aurora-4 10s 14s infinite alternate, spin 10s 12s infinite alternate",
          }}
        />
        <motion.div
          className="absolute w-[55vw] h-[55vw] mix-blend-overlay blur-xl bg-[hsl(var(--color-5))] animate-aurora-border repeat-infinite direction-alternate-reverse"
          style={{
            animation:
              "aurora-5 10s 12s infinite alternate, spin 10s 14s infinite alternate",
          }}
        />
      </motion.div>
    </span>
  );
};

export default TextAurora;
