import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { DialogTitle } from "./ui/dialog";
import DocsMenu from "./docs-menu";
import { AnimatePresence } from "framer-motion";

export function Leftbar() {
  return (
    <aside className="xl:flex hidden flex-[1.5] min-w-[238px] w-full sticky top-16 flex-col h-[93.75vh] overflow-y-auto pl-2 border-r border-border no-scrollbar">
      <div className="py-4">
        <AnimatePresence>
          <DocsMenu />
        </AnimatePresence>
      </div>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <AnimatePresence>
              <NavMenu isSheet />
            </AnimatePresence>
          </div>
          <div className="mx-2 px-5">
            <AnimatePresence>
              <DocsMenu isSheet />
            </AnimatePresence>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
