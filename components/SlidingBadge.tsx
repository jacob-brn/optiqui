"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BadgeMessagesProps {
  emoji: string;
  text: JSX.Element;
  link: string;
}

const SlidingBadge = ({
  messages,
  className,
}: {
  messages: BadgeMessagesProps[];
  className?: string;
}): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const SLIDING_INTERVAL = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < messages.length - 1)
        setCurrentIndex((prevIndex) => prevIndex + 1);
      else setCurrentIndex(0);
    }, SLIDING_INTERVAL);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Link href={messages[currentIndex].link} target="_blank">
      <motion.div
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs rounded-full overflow-hidden",
          className
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex items-center"
          >
            {messages[currentIndex].emoji}
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-px mx-2 h-4"
            />
            {messages[currentIndex].text}
            <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default SlidingBadge;
