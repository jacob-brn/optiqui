"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Particles from "./animated/Particles";
import { page_routes } from "@/lib/routes-config";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import TextAurora from "../TextAurora";
import { ArrowDownRight } from "lucide-react";
import SlidingBadge from "../SlidingBadge";

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="max-w-none py-40 bg-background w-full relative">
      <Particles
        className="absolute inset-0 pointer-events-none [mask:radial-gradient(50%_100%_at_50%_50%,hsl(var(--foreground))_50%,transparent_100%)]"
        quantity={300}
        staticity={100}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-col z-10 mt-0 lg:mt-12">
        <SlidingBadge />
        <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium text-center px-4 text-balance !leading-[1.16] mt-4 tracking-tighter">
          Make your <TextAurora text="landing page" /> look good in minutes
        </h1>
        <h2 className="max-w-prose text-balance text-center text-muted-foreground text-md px-4 mt-6 font-normal">
          Optiq UI is a building blocks library for speeding up development time
          and making your landing page look polished
        </h2>
        <Link href={`docs/${page_routes[0].href}`}>
          <motion.div
            className={cn("relative mt-6 overflow-hidden rounded-full")}
          >
            {/* Aurora effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{ isolation: "isolate" }}
            >
              <motion.div
                className="absolute w-[15vw] h-[15vw] blur-xl bg-[hsl(var(--color-1))] mix-blend-difference"
                style={{
                  animation:
                    "aurora-1 12s infinite alternate, spin 12s infinite alternate",
                }}
              />
              <motion.div
                className="absolute w-[35vw] h-[35vw] blur-xl bg-[hsl(var(--color-2))] mix-blend-difference"
                style={{
                  animation:
                    "aurora-2 14s infinite alternate, spin 8s infinite alternate",
                }}
              />
              <motion.div
                className="absolute w-[50vw] h-[50vw] blur-xl bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--primary))] mix-blend-difference"
                style={{
                  animation:
                    "aurora-3 12s infinite alternate, spin 12s infinite alternate",
                }}
              />
              <motion.div
                className="absolute w-[70vw] h-[70vw] blur-xl bg-[hsl(var(--foreground))] dark:bg-[hsl(var(--foreground))] mix-blend-difference"
                style={{
                  animation:
                    "aurora-4 14s infinite alternate, spin 8s infinite alternate",
                }}
              />
              <motion.div
                className="absolute w-[90vw] h-[90vw] blur-xl bg-[hsl(var(--color-5))] mix-blend-difference"
                style={{
                  animation:
                    "aurora-5 12s infinite alternate, spin 12s infinite alternate",
                }}
              />
            </motion.div>
            <motion.button
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-12 py-3 flex gap-x-1.5 group relative z-10 rounded-2xl overflow-clip bg-transparent backdrop-blur-sm mix-blend-overlay dark:mix-blend-exclusion text-white"
              )}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="relative overflow-hidden w-5 h-5 z-10">
                {/* First Arrow */}
                <div className="absolute transition-transform duration-500 ease-in-out -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowDownRight className="w-5 h-5 stroke-[2]" />
                </div>
                {/* Second Arrow */}
                <div className="absolute transition-transform duration-500 ease-in-out translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:translate-y-full">
                  <ArrowDownRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>
              <span
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "inherit",
                  content: '""',
                  filter: "blur(4px)",
                }}
              />
            </motion.button>
          </motion.div>
        </Link>

        <div className="mt-12 grid grid-flow-row lg:grid-flow-col gap-x-6 gap-y-2">
          <div className="flex items-center lg:justify-center flex-row gap-x-2 text-neutral-500">
            <FaReact className="size-10 text-neutral-500 stroke-[1.5]" />
            React
          </div>

          <div className="flex items-center lg:justify-center flex-row gap-x-2 text-neutral-500">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="size-10 text-neutral-500 stroke-[0.5px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
            </svg>
            TailwindCSS
          </div>
          <div className="flex items-center lg:justify-center flex-row gap-x-2 text-neutral-500">
            <TbBrandFramerMotion className="size-10 text-neutral-500 stroke-[1.5]" />
            Framer Motion
          </div>
          <div className="flex items-center lg:justify-center flex-row gap-x-2 text-neutral-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="shadcn"
              viewBox="0 0 256 256"
              className="size-8"
              fill="none"
              stroke="currentColor"
            >
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
            shadcn/ui
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
