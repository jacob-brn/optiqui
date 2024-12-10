import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon, CommandIcon, Zap } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export const NAVLINKS = [
  {
    title: "Docs",
    href: `/docs${page_routes[0].href}`,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/jacob01-dev/optiqui"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <FaGithub className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://x.com/jacobdev0"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <FaXTwitter className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-1">
      <Zap className="size-5 sm:size-6 text-primary fill-current stroke-[1]" />
      <span className="text-lg sm:text-xl font-semibold select-none hover:cursor-pointer hover:text-muted-foreground transition-all">
        Optiq UI
      </span>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="dark:text-foreground md:font-semibold font-medium dark:hover:text-foreground/80"
            absolute
            className="flex items-center gap-1 dark:text-muted-foreground text-stone-800 transition-colors dark:hover:text-foreground/80"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
