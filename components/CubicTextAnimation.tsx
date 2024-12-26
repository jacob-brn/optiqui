"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  delay,
} from "framer-motion";
import { useEffect, useRef } from "react";

const topLetterVariants = {
  initial: {
    opacity: 0,
    filter: "blur(4px)",
    transform: "rotateX(-90deg) translateY(-50%)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transform: "rotateX(0deg) translateY(0%)",
  },
};

const bottomLetterVariants = {
  initial: {
    opacity: 1,
    filter: "blur(0px)",
    transform: "rotateX(0deg) translateY(0%)",
  },
  animate: {
    opacity: 0,
    filter: "blur(4px)",
    transform: "rotateX(90deg) translateY(50%)",
  },
};

const CubicTextAnimation = ({
  text,
  animateOnHover = false,
  className,
}: {
  text: string;
  animateOnHover?: boolean;
  className?: string;
}) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const controls = useAnimationControls();
  const isAnimating = useMotionValue(false);

  useEffect(() => {
    if (!animateOnHover) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            controls.start("animate");
            hasAnimated.current = true;
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [controls, animateOnHover]);

  const handleMouseEnter = () => {
    if (animateOnHover && !isAnimating.get()) {
      isAnimating.set(true);
      controls.start("animate");
    } else {
      isAnimating.set(true);
      controls.start("initial");
      delay(() => {
        isAnimating.set(false);
      }, text.length * 50);
    }
  };

  return (
    <div
      className={cn(
        "inline-block perspective-[1000px] transform-gpu",
        className
      )}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      {text.split("").map((char, i) => (
        <motion.div
          key={i}
          className="relative inline-block"
          style={{
            transformStyle: "preserve-3d",
            transition: `transform ${0.5}s ${i * 0.05}s`,
          }}
          animate={controls}
          initial="initial"
        >
          <motion.span
            key={`front-${i}`}
            className="inline-block"
            variants={topLetterVariants}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          <motion.span
            key={`back-${i}`}
            className="absolute top-0 left-0"
            variants={bottomLetterVariants}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{
              transformOrigin: "bottom center",
              backfaceVisibility: "hidden",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default CubicTextAnimation;
