"use client";

import React, { useState } from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type IconProps = {
  containerClassName?: string;
  icon: React.ReactElement;
  iconClassName?: string;
};

const AnimatedIcon: React.FC<IconProps> = ({
  containerClassName,
  icon,
  iconClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathVariants = {
    visible: {
      pathLength: 1, // Path is fully visible
      pathOffset: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    erased: {
      pathOffset: [0, 1, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={cn(
        "size-5 rounded-sm bg-muted p-4 relative grid content-center justify-center text-white border-accent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] cursor-pointer",
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.props.viewBox || "0 0 24 24"} // Ensure viewBox is passed correctly
        className={cn("size-5", iconClassName)}
      >
        {React.Children.map(icon.props.children, (child) => {
          if (React.isValidElement(child) && child.type === "path") {
            return (
              <motion.path
                {...(child.props as SVGMotionProps<SVGPathElement>)}
                variants={pathVariants}
                initial="visible" // Initially fully visible
                animate={isHovered ? "erased" : "visible"} // Erase on hover, redraw when not hovered
                fill="transparent" // Ensure the fill is transparent to focus on the stroke
                stroke="currentColor" // Use stroke to make the path visible
                strokeWidth={1.5} // Adjust stroke width as needed
              />
            );
          }
          return child;
        })}
      </motion.svg>
    </div>
  );
};

export default AnimatedIcon;
