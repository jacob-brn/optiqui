"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const LivePreviewButton = ({ link }: { link: string }): JSX.Element => {
  const pathname = usePathname();

  return (
    <Link href={link} target="_blank">
      <Button className="gap-x-1.5 w-full mx-auto" variant={"outline"}>
        Live Preview
        <SquareArrowOutUpRight className="size-4" />
      </Button>
    </Link>
  );
};

export default LivePreviewButton;
