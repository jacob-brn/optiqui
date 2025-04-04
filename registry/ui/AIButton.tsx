"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, HTMLMotionProps } from "motion/react";

interface AIButtonProps extends HTMLMotionProps<"button"> {
  text: string | React.ReactNode;
  className?: string;
  sparkleClassName?: string;
}

const AIButton = ({
  text,
  className,
  sparkleClassName,
  ...props
}: AIButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const transition = {
    duration: 0.35,
    ease: [0.6, 0.3, 0.2, 1],
    type: "spring",
    damping: 25,
    stiffness: 200,
    mass: 1,
  };

  const variants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -30 : 30,
    }),
  };

  return (
    <motion.button
      className={cn(
        "dark:bg-white bg-black  px-6 py-2 rounded-3xl font-semibold tracking-tight overflow-hidden relative flex flex-row justify-center items-center hover:bg-opacity-90 disabled:opacity-70 disabled:pointer-events-none",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
      {...props}
    >
      <div className="flex items-center justify-center">
        <AnimatePresence
          mode="popLayout"
          initial={false}
          custom={isHovered ? 1 : -1}
        >
          {isHovered ? (
            <motion.div
              key="ai"
              custom={1}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="flex items-center justify-center bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={cn("size-6", sparkleClassName)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={"currentColor"}
                  stroke={"currentColor"}
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="generate"
              custom={-1}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default AIButton;
