"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Links = [
  { text: "Docs", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Pricing", href: "#" },
];

const Logo = (): JSX.Element => {
  return (
    <div className="flex items-center gap-x-1 group hover:cursor-pointer">
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
      <span className="text-lg sm:text-xl font-semibold select-none group-hover:cursor-pointer text-background group-hover:text-muted-foreground dark:text-foreground dark:group-hover:text-muted-foreground transition-all">
        Optiq UI
      </span>
    </div>
  );
};

const NavLinkCursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}): JSX.Element => {
  return (
    <motion.div
      className="absolute z-0 h-10 rounded-full bg-background dark:bg-secondary"
      animate={position}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 14,
        bounce: 0.05,
        duration: 0.1,
      }}
    />
  );
};

const NavBarLink = ({
  text,
  link,
  setPosition,
}: {
  text: string;
  link: string;
  setPosition: ({
    left,
    width,
    opacity,
  }: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}): JSX.Element => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      href={link}
      className="px-6 font-medium z-10 text-md relative mix-blend-exclusion text-background dark:text-foreground"
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
    >
      {text}
    </Link>
  );
};

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}): JSX.Element => {
  const pathVariants = {
    closed: {
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    },
    open: {
      d: "M6 18L18 6M6 6l12 12",
    },
  };

  const menuVariants = {
    initial: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
    },
    animate: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.5,
      },
    },
  };

  const linkVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center xl:hidden"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          transition={{ duration: 0.3 }}
        />
      </motion.svg>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="dark:bg-neutral-900 dark:text-foreground bg-foreground text-background flex rounded-lg absolute top-16 backdrop-blur-sm inset-x-0 z-10 flex-col items-start justify-start w-full px-4 py-6"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="flex flex-col w-full gap-4 px-4 text-base font-medium"
              variants={linkVariants}
            >
              {Links.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="hover:text-primary dark:hover:text-primary transition-all duration-300 hover:translate-x-2 text-start text-background dark:text-foreground"
                >
                  {item.text}
                </Link>
              ))}
              <div className="flex flex-col gap-y-2 w-full">
                <Button
                  variant="outline"
                  className="w-full px-6 text-secondary-foreground"
                >
                  Log in
                </Button>
                <Button variant="secondary" className="w-full px-6">
                  Sign up
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Header = (): JSX.Element => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 sticky top-5 z-[60]">
      <div
        className={cn(
          "dark:bg-neutral-900 dark:text-foreground bg-foreground text-background flex flex-row justify-between items-center max-w-7xl mx-auto px-6 py-2.5 w-full inset-x-0 relative lg:rounded-full",
          { "rounded-full": !isOpen },
          { "rounded-lg": isOpen }
        )}
      >
        <div className="">
          <Link href={"#"}>
            <Logo />
          </Link>
        </div>
        <div
          className="hidden xl:flex items-center justify-center gap-x-4 relative h-full"
          onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
        >
          {Links.map((item, index) => (
            <NavBarLink
              key={index}
              text={item.text}
              link={item.href}
              setPosition={setPosition}
            />
          ))}
          <NavLinkCursor position={position} />
        </div>
        <div className="hidden xl:flex items-center gap-x-2">
          <Button
            variant={"outline"}
            className="px-6 text-secondary-foreground"
          >
            Log in
          </Button>
          <Button variant={"secondary"} className="px-6">
            Sign up
          </Button>
        </div>
        <div className="flex justify-center items-center xl:hidden">
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export { Header };
