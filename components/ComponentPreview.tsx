import React from "react";
import { cn } from "@/lib/utils";

const ComponentPreview = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative border border-border rounded-md py-6 mb-5 [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset] z-0 [&_a]:no-underline",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ComponentPreview;
