"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  heading: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  handleMouseEnterProp?: () => void;
  handleMouseLeaveProp?: () => void;
  [key: string]: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  heading,
  description,
  content,
  className,
  handleMouseEnterProp,
  handleMouseLeaveProp,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    handleMouseEnterProp?.();
  };

  const handleMouseLeave = () => {
    handleMouseLeaveProp?.();
  };

  return (
    <div className="py-0 flex items-center justify-center">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
        className={cn(
          "bg-border dark:bg-background overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-xl",
          "flex flex-col md:flex-row",
          "h-[280px] w-full",
          "md:[&:nth-last-child(-n+2)]:border-b-0",
          "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
          "transition-all duration-200 ease-linear",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
        {...props}
      >
        <div className="p-8 flex flex-col justify-between flex-grow [transform-style:preserve-3d]">
          <div>
            <h3 className="text-xl font-semibold text-foreground transition duration-0 ease-linear transform-gpu">
              {heading}
            </h3>
            <p className="text-muted-foreground mt-2 text-base transition duration-0 ease-linear transform-element">
              {description}
            </p>
          </div>
          <div className="flex flex-grow justify-center items-end relative mt-6 md:mt-0 transition-all duration-0 ease-linear transform-element">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
