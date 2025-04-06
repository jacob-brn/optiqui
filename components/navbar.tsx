import { ModeToggle } from "@/components/theme-toggle";
import { Eye, Zap } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { ROUTES, getRecurrsiveAllLinks } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import GithubStarsButton from "./GithubStarsButton";

const page_routes = ROUTES.filter(
  (route) => route.title.toLowerCase() === "components"
)
  .map((it) => getRecurrsiveAllLinks(it))
  .flat()
  .sort((a, b) => a.title.localeCompare(b.title));

export const NAVLINKS = [
  {
    title: "Components",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Templates",
    href: `https://www.pro.optiqui.com`,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <GithubStarsButton />
          <div className="md:flex hidden">
            <Search />
          </div>
          <div className="flex ml-2.5 sm:ml-0">
            <Link
              href="https://github.com/jacob-brn/optiqui"
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <FaGithub className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <Link
              href="https://x.com/jacob_brn"
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
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-1">
      <Eye className="size-5 sm:size-6 text-primary mr-1" />
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
