"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { page_routes, ROUTES } from "@/lib/routes-config";
import { ModeToggle } from "../theme-toggle";
import { buttonVariants } from "../ui/button";

const Header = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { scrollY } = useScroll();
  const isMobileOrTablet = useMediaQuery("(max-width: 1023px)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    setIsAtTop(latest === 0);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsScrolled(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className={cn(
        "sticky h-14 mx-auto py-2 px-4 text-foreground font-normal border border-border",
        {
          "bg-background": !isScrolled,
          "bg-muted": isScrolled,
          "!w-[90%] top-4 rounded-full !max-w-[90%]": isMobileOrTablet,
          "sm:w-full top-4 sm:py-4 sm:px-6 rounded-full": !isMobileOrTablet,
        }
      )}
      style={{ zIndex: 9000 }}
      animate={
        isMobileOrTablet
          ? {}
          : {
              width: isScrolled ? "auto" : "66.6667%",
              maxWidth: isScrolled ? "33%" : "66.6667%",
            }
      }
      initial={
        isMobileOrTablet
          ? {}
          : {
              width: "66.6667%",
              maxWidth: "66.6667%",
            }
      }
      transition={
        isMobileOrTablet
          ? {}
          : {
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }
      }
    >
      <motion.nav
        className="flex items-center justify-between h-full relative"
        layout
      >
        <motion.div className="flex flex-row gap-x-1 items-center" layout>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 sm:size-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>

          <span className="text-lg sm:text-xl font-semibold select-none hover:cursor-pointer hover:text-muted-foreground transition-all">
            Optiq UI
          </span>
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-self-center"
          layout
        >
          <Link
            href={`docs/${page_routes[0].href}`}
            className="text-sm sm:text-base hover:text-muted-foreground transition-all"
          >
            Components
          </Link>
        </motion.div>
        {isAtTop && !isMobileOrTablet && (
          <motion.div
            layout
            animate={{
              opacity: isScrolled ? 0 : 1,
              width: isScrolled ? 0 : "auto",
              marginLeft: isScrolled ? 0 : "0.5rem",
            }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="flex flex-row items-center"
          >
            <Link
              href="https://x.com/jacobdev0"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <FaXTwitter className="size-4 sm:size-5" />
            </Link>
            <Link
              href="https://bsky.app/profile/jacobdev.bsky.social"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <FaBluesky className="size-4 sm:size-5" />
            </Link>
            <Link
              href="https://github.com/jacob01-dev/optiqui"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <FaGithub className="size-4 sm:size-5" />
            </Link>
            <ModeToggle />
          </motion.div>
        )}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
