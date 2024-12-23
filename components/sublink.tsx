import { EachRoute } from "@/lib/routes-config";
import Anchor from "./anchor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";

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
    <Anchor activeClassName="text-primary font-semibold" href={href}>
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
      <div
        className={cn(
          "w-full flex flex-row items-center transition-all hover:text-primary gap-x-2 overflow-hidden"
        )}
      >
        {path === href && <div className="w-[2px] h-5 flex bg-primary ml-2" />}
        {titleOrLink}
        {badges?.map((badge, index) => (
          <div
            className="z-10 ml-1 rounded-md bg-foreground text-background px-1.5 py-0.5 text-xs font-medium leading-none  no-underline group-hover:no-underline"
            key={index}
          >
            {badge}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2">{titleOrLink}</div>
      <div
        className={cn(
          "flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",
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
