"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PixelCanvasProps {
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  minSize?: number;
  maxSize?: number;
}

interface CardProps {
  icon: React.ReactNode;
  text: string;
  canvasProps?: PixelCanvasProps;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "pixel-canvas": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const PixelCanvas = ({
  gap = 5,
  speed = 35,
  colors = "#f8fafc,#f1f5f9,#cbd5e1",
  noFocus = false,
  minSize = 0.5,
  maxSize = 2,
  className,
}: {
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  minSize?: number;
  maxSize?: number;
  className?: string;
}) => {
  return (
    <pixel-canvas
      data-gap={gap}
      data-speed={speed}
      data-colors={colors}
      data-minSize={minSize}
      data-maxSize={maxSize}
      {...(noFocus ? { "data-no-focus": "" } : {})}
      className={cn("absolute inset-0 size-full w-full max-h-full", className)}
    />
  );
};

const PixelCard = ({ text, icon, canvasProps = {}, className }: CardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <motion.div
        className={cn(
          "max-w-[200px] relative overflow-hidden cursor-pointer select-none",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? "hover" : "default"}
        initial="default"
      >
        <motion.div
          className="absolute w-full h-full top-0 left-0 inset-0 bg-background z-10"
          variants={{
            default: { opacity: 0 },
            hover: {
              opacity: [0, 0.1, 0.2, 0.5, 0.3, 0.6, 0.4, 0.6, 0.7, 0.6], // black out effect
              transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        />

        <motion.div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          variants={{
            default: {
              opacity: 1,
            },
            hover: {
              opacity: 0,
              transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        >
          {icon}
        </motion.div>

        <motion.div
          className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
          variants={{
            default: {
              opacity: 0,
              filter: "blur(3px)",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            },
            hover: {
              filter: "blur(0px)",
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.6,
                ease: "easeInOut",
              },
            },
          }}
        >
          <div className="px-6">
            <p className="max-w-xs text-foreground text-sm text-center font-medium text-balance">
              {text}
            </p>
          </div>
        </motion.div>
        <PixelCanvas {...canvasProps} className="w-full h-full" />
      </motion.div>
    </>
  );
};

export default PixelCard;
