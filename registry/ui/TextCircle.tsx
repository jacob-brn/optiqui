"use client";
import { cn } from "@/lib/utils";
import { motion, cubicBezier } from "motion/react";

interface TextCircleProps {
  text: string;
  className?: string;
  circleClassName?: string;
  waitTillInView?: boolean;
}

const TextCircle = ({
  text,
  className,
  circleClassName,
  waitTillInView = true,
}: TextCircleProps): JSX.Element => {
  const customEasing = cubicBezier(0.25, 0.8, 0.25, 1);

  return (
    <span className={cn("relative inline-block", className)}>
      {text}
      <motion.svg
        viewBox="0 0 390 167"
        className={
          "absolute top-[-6px] left-[-6px] pointer-events-none overflow-visible w-[calc(100%+12px)] h-[calc(100%+12px)] z-[-1]"
        }
        preserveAspectRatio="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: waitTillInView }}
        transition={{
          delayChildren: 0.3,
        }}
      >
        <motion.path
          d="M29.8526 139.355C30.4449 141.724 42.601 141.682 44.9881 143.008C54.8978 148.513 69.0435 148.342 79.9562 150.837C98.4198 155.057 118.083 152.854 136.845 155.534C165.45 159.62 194.179 161.24 222.96 163.595C243.487 165.274 263.969 165.45 284.546 165.45C297.001 165.45 308.944 163.923 321.312 163.305C330.734 162.834 340.604 159.404 349.205 155.534C356.489 152.256 363.746 151.277 370.603 146.661C383.581 137.926 387.885 129.651 387.885 113.955C387.885 104.478 382.193 98.2181 377.678 90.5268C371.801 80.5143 366.182 72.2619 358.136 63.6193C317.552 20.0296 250.626 5.22335 193.211 2.67157C164.775 1.40773 137.271 1.29348 109.183 6.78888C94.8671 9.58988 80.1095 11.352 66.8504 17.807C55.9866 23.096 46.064 28.6531 36.1156 35.4361C29.0822 40.2315 19.1678 44.777 14.7172 52.3692C10.7303 59.1704 6.56763 67.8538 5.03281 75.6813C2.57305 88.2261 0.47635 102.224 5.32276 114.825C9.47471 125.62 18.3181 135.965 28.8088 141.21C35.2718 144.442 40.9317 144.574 48.6415 144.574"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          className={cn("stroke-[10px] text-primary", circleClassName)}
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

export default TextCircle;
