import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  badges,
  isSheet,
}: EachRoute & { level: number; isSheet: boolean }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);

  useEffect(() => {
    if (path != href && path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const Comp = (
    <Anchor activeClassName="text-foreground font-semibold" href={href}>
      {title}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className="font-bold sm:text-base text-foreground">{title}</h4>
  );

  if (!items) {
    return (
      <div className="relative group flex h-8 w-full items-center rounded-md px-2 font-normal text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground gap-x-1">
        {path === href && (
          <motion.div
            layoutId="active-bg"
            className="absolute inset-0 bg-secondary rounded-md"
            initial={{
              opacity: 0,
              scale: 0.95,
              x: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              x: 10,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 200,
              },
            }}
          />
        )}
        <div className="relative z-10 flex items-center gap-x-1.5 w-full justify-between">
          {titleOrLink}
          <div className="flex">
            {badges?.map((badge, index) => (
              <div
                className={cn(
                  "z-10 rounded-[4px] bg-foreground text-background px-2 py-0.5 text-xs font-medium leading-none no-underline group-hover:no-underline mr-1.5",
                  badge.toLowerCase() === "pro" && "bg-primary text-white",
                  badge.toLowerCase() === "soon" && "bg-muted text-foreground"
                )}
                key={index}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2">{titleOrLink}</div>
      <div
        className={cn(
          "flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-0.5",
          level > 0 && "pl-4 border-l ml-2"
        )}
      >
        {items?.map((innerLink) => {
          const modifiedItems = {
            ...innerLink,
            href: `${href + innerLink.href}`,
            level: level + 1,
            isSheet,
          };
          return <SubLink key={modifiedItems.href} {...modifiedItems} />;
        })}
      </div>
    </div>
  );
}
