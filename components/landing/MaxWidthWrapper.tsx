import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-7xl", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
