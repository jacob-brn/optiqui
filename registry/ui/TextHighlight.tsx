"use client";
import { cn } from "@/lib/utils";
import { motion, cubicBezier } from "motion/react";

type highlightLayerType = {
  opacity: number;
  rotate: number;
  delay: number;
  direction: number;
};

interface TextHighlightProps {
  text: string;
  customOverlays?: highlightLayerType[];
  textClassName?: string;
  highlightClassName?: string;
  waitTillInView?: boolean;
}

const TextHighlight = ({
  text,
  customOverlays,
  textClassName,
  highlightClassName,
  waitTillInView = true,
}: TextHighlightProps): JSX.Element => {
  const highlightDuration = 0.5;
  const highlightLayers = customOverlays || [
    { opacity: 0.5, rotate: 0, delay: 0, direction: 1 },
    { opacity: 0.3, rotate: -0.7, delay: 0.4, direction: -1 },
    { opacity: 0.4, rotate: 0.7, delay: 0.8, direction: 1 },
  ];

  const customEase = cubicBezier(0.25, 0.1, 0.25, 1);

  return (
    <span className="relative inline-block">
      <span
        className={cn(
          "relative z-10 text-foreground dark:mix-blend-lighten",
          textClassName
        )}
      >
        {text}
      </span>
      <motion.span
        transition={{ delay: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: waitTillInView }}
      >
        {highlightLayers.map((layer, index) => (
          <motion.span
            key={index}
            className={cn("absolute inset-0 bg-primary", highlightClassName)}
            style={{
              originX: layer.direction > 0 ? 0 : 1,
              originY: 1,
              opacity: layer.opacity,
            }}
            variants={{
              visible: {
                scaleX: 1,
                rotate: layer.rotate,
              },
              hidden: {
                scaleX: 0,
                rotate: 0,
              },
            }}
            transition={{
              duration: highlightDuration,
              delay: layer.delay + highlightDuration,
              ease: customEase,
            }}
          />
        ))}
      </motion.span>
    </span>
  );
};

export default TextHighlight;
