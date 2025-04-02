"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES, getRecurrsiveAllLinks } from "@/lib/routes-config";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaXTwitter } from "react-icons/fa6";
import { ArrowDownRight, Heart, Star } from "lucide-react";
import SlidingBadge from "@/registry/ui/SlidingBadge";
import PixelCard from "@/registry/ui/PixelCard";
import HeroMedia from "@/registry/ui/HeroMedia";
import TextCubic from "@/registry/ui/TextCubic";
import Macbook from "@/registry/ui/Macbook";

const page_routes = ROUTES.filter(
  (route) => route.title.toLowerCase() === "components"
)
  .map((it) => getRecurrsiveAllLinks(it))
  .flat()
  .sort((a, b) => a.title.localeCompare(b.title));

interface BadgeMessagesProps {
  emoji: string;
  text: JSX.Element;
  link: string;
}

const BadgesMessages: BadgeMessagesProps[] = [
  {
    emoji: "❤️",
    text: (
      <>
        Follow me on <FaXTwitter className="ml-1 text-xs" />
      </>
    ),
    link: "https://x.com/jacobdev0",
  },
  {
    emoji: "✨",
    text: <>Star on Github</>,
    link: "https://github.com/jacob01-dev/optiqui",
  },
];

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="max-w-7xl py-32 lg:py-36 bg-background w-full relative grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-7xl mx-auto flex justify-start items-start flex-col z-10 mt-0 px-8">
        <SlidingBadge messages={BadgesMessages} className="mb-6" />
        <h1 className="max-w-xl text-4xl md:text-7xl text-left text-balance font-bold tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground to-neutral-600 dark:to-neutral-400 to-70% bg-opacity-50 bg-clip-text">
          Make your website look good in minutes
        </h1>
        <h2 className="max-w-xl text-balance text-left text-muted-foreground text-md mt-6 font-normal">
          Free and open-source animated components built with{" "}
          <span className="font-semibold">TailwindCSS</span>,
          <span className="font-semibold"> Framer Motion</span> and
          <span className="font-semibold"> Typescript</span>.
        </h2>
        <Link href={`docs${page_routes[0].href}`}>
          <motion.button
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "mt-6 py-3 flex gap-x-1.5 group relative z-10 text-white hover:text-white/90  dark:text-foreground bg-gradient-to-t from-neutral-600 to-neutral-900 dark:from-background dark:to-neutral-900"
            )}
            style={{
              transform: "translateZ(0)",
              willChange: "transform",
            }}
          >
            <span className="relative z-10">Browse Components</span>
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
          </motion.button>
        </Link>

        <div className="mt-10 grid grid-flow-col lg:grid-flow-col gap-x-6 gap-y-2 relative">
          <div className="flex items-center lg:justify-center flex-row gap-x-4 overflow-x-scroll [scrollbar-width:none]">
            <div className="flex items-center lg:justify-center flex-row gap-x-1 text-neutral-500 lg:text-base">
              <FaReact className="md:h-6 md:w-6 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[1.5]" />
              React
            </div>

            <div className="flex items-center lg:justify-center flex-row gap-x-1 text-neutral-500 lg:text-base">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="md:h-6 md:w-6 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
              </svg>
              TailwindCSS
            </div>
            <div className="flex items-center lg:justify-center flex-row gap-x-1 text-neutral-500 lg:text-base whitespace-nowrap">
              <TbBrandFramerMotion className="md:h-6 md:w-6 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[1.5]" />
              Framer Motion
            </div>
            <div className="flex items-center lg:justify-center flex-row gap-x-1 text-neutral-500 lg:text-base whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="shadcn"
                viewBox="0 0 256 256"
                className="md:h-6 md:w-6 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-[1.5]"
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
      </div>
      <div className="hidden xl:flex flex-col w-full h-full px-8 gap-y-6 pt-72">
        <Macbook>
          <HeroMedia
            type="video"
            thumbnailUrl="/heromedia-thumbnail.jpg"
            videoUrl="/optiq-ui-saas-template.mp4"
            className="border border-border"
            buttonTitle="See video"
            buttonDescription="Just click play button"
            PopoverTitle="Optiq UI SaaS Template"
            PopoverDescription="Coming out soon!"
          />
        </Macbook>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
