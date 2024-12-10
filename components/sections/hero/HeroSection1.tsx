"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20, filter: "blur(3px)" },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = () => {
  const radialGradientColors = ["#e11d48", "#0c0a09"];
  const color = useMotionValue(radialGradientColors[0]);
  const bgImage = useMotionTemplate`radial-gradient(90% 80% at 50% 100%, ${color} 10%, #0c0a09)`;

  useEffect(() => {
    animate(color, radialGradientColors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.main
      className="relative py-36 md:py-40 xl:py-64 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-primary bg-[radial-gradient(closest-side,#000_82%,hsl(var(--primary)))] dark:bg-[radial-gradient(closest-side,#000_82%,hsl(var(--primary)))] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]`}
        style={{ zIndex: 1 }}
      ></div>
      <div
        className="relative max-w-7xl mx-auto text-center"
        style={{ zIndex: 10 }}
      >
        <Link href="#">
          <motion.div className="w-max mx-auto" variants={itemVariants}>
            <Badge className="mb-8 text-sm p-1 px-6 group rounded-full select-none cursor-pointer bg-transparent border border-primary group">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-primary group-hover:text-white">
                Join waiting list
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="none"
                className="size-4 ml-1 transition-all duration-300 stroke-[url(#gradient)] group-hover:translate-x-[3px] group-hover:stroke-white"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Badge>
          </motion.div>
        </Link>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-center dark:text-foreground text-background tracking-tight"
          variants={itemVariants}
        >
          Create your next <span className="text-primary">SaaS</span>
        </motion.h1>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-center dark:text-foreground text-background tracking-tight"
          variants={itemVariants}
        >
          in <span className="text-primary">minutes</span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-prose mx-auto px-16 mt-6 text-md xl:text-lg"
          variants={itemVariants}
        >
          Stop wasting time and money on building from scratch every time. Optiq
          UI will help you build your next SaaS in minutes.
        </motion.p>
        <div className="max-w-xl grid grid-flow-row xl:grid-flow-col mt-6 mx-auto gap-x-6 gap-y-4 px-16">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
                filter: "blur(5px)",
              },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Link href="#" className="w-full">
              <Button className="group w-full">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 ml-1 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
                filter: "blur(5px)",
              },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Link href="#" className="w-full">
              <Button className="group w-full" variant="outline">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 ml-1 group-hover:translate-y-[2px] transition-all duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ backgroundImage: bgImage }}
        className="absolute h-full inset-0 z-0"
      />
    </motion.main>
  );
};

export default HeroSection;
