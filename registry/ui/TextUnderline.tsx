"use client";
import { cn } from "@/lib/utils";
import { motion, cubicBezier } from "motion/react";

interface TextUnderlineProps {
  text: string;
  className?: string;
  lineClassName?: string;
  lineWidth?: number;
  waitTillInView?: boolean;
}

const TextUnderline = ({
  text,
  className,
  lineClassName,
  lineWidth = 6,
  waitTillInView = true,
}: TextUnderlineProps) => {
  const customEasing = cubicBezier(0.25, 0.8, 0.25, 1);

  return (
    <span className={cn("relative inline-block", className)}>
      {text}
      <motion.svg
        viewBox="0 0 200 40"
        className="absolute -bottom-3 left-0 w-full h-5 pointer-events-none"
        preserveAspectRatio="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: waitTillInView }}
        transition={{
          delayChildren: 0.3,
        }}
      >
        <motion.path
          d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20"
          fill="none"
          strokeWidth={lineWidth}
          stroke="currentColor"
          strokeLinecap="round"
          className={cn("text-primary", lineClassName)}
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: {
                duration: 1.5,
                ease: customEasing,
              },
            },
          }}
        />
      </motion.svg>
    </span>
  );
};

export default TextUnderline;
