"use client";
import { motion } from "motion/react";
import React from "react";

interface ContentRevealProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  duration?: number;
  delay?: number;
  contentClassName?: string;
  lineColor?: string;
}

const ContentReveal = ({
  firstContent,
  secondContent,
  duration = 1.5,
  delay = 0,
  contentClassName = "",
  lineColor = "bg-blue-500",
}: ContentRevealProps) => {
  return (
    <div className="relative grid overflow-hidden place-items-start">
      {" "}
      <motion.div
        className="relative"
        style={{ gridArea: "1 / 1" }}
        initial={{ clipPath: "inset(0 0% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 100%)" }}
        transition={{ duration: duration, delay }}
      >
        <div className={`opacity-50 ${contentClassName}`}>{firstContent}</div>
      </motion.div>
      <motion.div
        style={{ gridArea: "1 / 1" }}
        className="w-full"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration, delay }}
      >
        <div className={contentClassName}>{secondContent}</div>
      </motion.div>
      <motion.div
        className={`absolute top-0 bottom-0 w-1 ${lineColor} z-10`} // Use z-10 to ensure it's above content if needed
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ duration, delay }}
      />
    </div>
  );
};

export default ContentReveal;
