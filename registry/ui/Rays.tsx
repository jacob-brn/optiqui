"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Ray = {
  rotate: number;
  opacity: number;
  translateY: number;
};

type CastDirectionType = "from-right" | "from-left" | "from-center";

interface RaysProps {
  className?: string;
  rayColor?: string;
  rayWidth?: string;
  blurAmount?: string;
  castDirection?: CastDirectionType;
  animationDuration?: number;
  animationDelay?: number;
  staggerDelay?: number;
  rays?: Ray[];
}

const POSITION_CLASSES: Record<CastDirectionType, string> = {
  "from-right":
    "absolute -top-1/4 left-full w-[300%] h-[200%] sm:w-[150%] sm:left-0 md:left-full",
  "from-center":
    "absolute -top-[150%] left-1/2 -translate-x-1/2 w-[300%] h-[200%] sm:w-[200%]",
  "from-left":
    "absolute -top-1/4 right-full w-[300%] h-[200%] sm:w-[150%] sm:right-0 md:right-full pointer-events-none",
};

const TRANSFORM_ORIGINS: Record<CastDirectionType, string> = {
  "from-right": "top left",
  "from-center": "top center",
  "from-left": "top right",
};

const RAY_POSITIONS: Record<CastDirectionType, string> = {
  "from-right": "top-0 left-0",
  "from-center": "top-0 left-0",
  "from-left": "top-0 right-0",
};

const Rays = ({
  className,
  rayColor = "white",
  rayWidth,
  blurAmount = "22px",
  castDirection = "from-left",
  animationDuration = 5,
  animationDelay = 0.2,
  staggerDelay = 0.2,
  rays = [
    { rotate: 10, opacity: 60, translateY: 0 },
    { rotate: 2, opacity: 51, translateY: 15 },
    { rotate: -3, opacity: 60, translateY: 30 },
    { rotate: -9, opacity: 30, translateY: 45 },
    { rotate: -10, opacity: 56, translateY: 60 },
    { rotate: 22, opacity: 55, translateY: 75 },
    { rotate: 5, opacity: 55, translateY: 0 },
  ],
}: RaysProps) => {
  const positionClasses = POSITION_CLASSES[castDirection];
  const transformOrigin = TRANSFORM_ORIGINS[castDirection];
  const rayPosition = RAY_POSITIONS[castDirection];

  const baseRotation =
    castDirection === "from-left"
      ? -45
      : castDirection === "from-center"
      ? 0
      : 45;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const rayVariants = {
    hidden: {
      scaleY: 0,
      height: 0,
    },
    visible: (index: number) => ({
      scaleY: 1,
      height: "200%",
      transition: {
        scaleY: {
          duration: 1,
          ease: "easeOut",
        },
        height: {
          duration: 0,
        },
      },
    }),
  };

  return (
    <motion.div
      className={cn(positionClasses, "pointer-events-none", className)}
      style={{
        filter: `blur(${blurAmount})`,
        transform: `rotate(${baseRotation}deg)`,
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {rays.map((ray, index) => {
        const opacityValue = ray.opacity / 100;
        const individualDuration = animationDuration + index;

        return (
          <motion.div
            key={index}
            className={cn(
              "absolute w-[15px] sm:w-[20px] md:w-[30px]",
              rayPosition,
              rayWidth
            )}
            style={{
              background: `linear-gradient(to bottom, ${rayColor} 70%, transparent)`,
              transformOrigin,
              opacity: opacityValue,
            }}
            variants={rayVariants}
            custom={index}
            animate={{
              translateY: [
                ray.translateY,
                ray.translateY + ray.rotate,
                ray.translateY,
              ],
              rotate: [
                ray.rotate,
                ray.rotate + (index % 2 === 0 ? 2 : -2),
                ray.rotate,
              ],
              filter: [
                `blur(${blurAmount})`,
                `blur(${Number.parseInt(blurAmount) - 8}px)`,
                `blur(${blurAmount})`,
              ],
            }}
            transition={{
              translateY: {
                delay: 1.5 + index * animationDelay,
                duration: individualDuration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatType: "reverse",
              },
              rotate: {
                delay: 1.5 + index * animationDelay,
                duration: individualDuration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatType: "reverse",
              },
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default Rays;
