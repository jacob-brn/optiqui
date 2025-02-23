"use client";
import React from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const useSmoothMotionValue = (initial: number) => {
  const motionValue = useMotionValue(initial);
  const smoothMotionValue = useSpring(motionValue, {
    damping: 10,
    stiffness: 150,
    mass: 0.4,
  });
  return { motionValue, smoothMotionValue };
};

interface TextScanEffectProps {
  text: string | React.ReactNode;
  color?: string;
  noise?: boolean;
  className?: string;
}
const TextScanEffect = ({
  text,
  color = "#F43F5E",
  noise = true,
  className,
}: TextScanEffectProps) => {
  const { motionValue: textY, smoothMotionValue: smoothTextY } =
    useSmoothMotionValue(50);
  const { motionValue: overlayY, smoothMotionValue: smoothOverlayY } =
    useSmoothMotionValue(50);

  const clipPath = (y: number) =>
    `polygon(0% ${y}%, 100% ${y}%, 100% 100%, 0% 100%)`;
  const textClipPathY = useTransform(smoothTextY, clipPath);
  const overlayClipPath = useTransform(smoothOverlayY, clipPath);
  const overlayTop = useTransform(smoothOverlayY, (y) => `${y}%`);

  const handleMouseMove =
    (motionValue: any) => (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      motionValue.set(y);
    };

  return (
    <div
      className={cn(
        "relative bg-background font-sans px-8 rounded-xl overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove(overlayY)}
      onMouseLeave={() => {
        textY.set(50);
        overlayY.set(50);
      }}
    >
      <motion.div
        className={cn(
          "absolute inset-0 pointer-events-none bg-gradient-to-t from-black rounded-xl",
          noise &&
            "before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/noise.gif')] before:z-10 before:content-[''] before:opacity-[0.1] before:pointer-events-none"
        )}
        style={{
          clipPath: overlayClipPath,
          backgroundImage: `linear-gradient(to bottom, ${color} 5%, ${color} 10%, black 100%)`,
        }}
      />
      <motion.div
        className={cn("absolute inset-0 w-full border-t-2")}
        style={{ top: overlayTop, borderColor: color }}
      />
      <div className="relative h-full p-4">
        <div className="relative h-full" onMouseMove={handleMouseMove(textY)}>
          <div className="text-5xl font-bold text-black dark:text-white pb-[0.3em]">
            {text}
          </div>
          <motion.div
            className="absolute top-0 left-0 text-5xl font-bold text-white/85 dark:text-transparent/85 pb-[0.3em]"
            style={{
              WebkitTextStroke: `1.5px ${color}`,
              clipPath: textClipPathY,
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TextScanEffect;
