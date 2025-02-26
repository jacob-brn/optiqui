import { cn } from "@/lib/utils";

const TextNoise = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}): JSX.Element => {
  return (
    <span
      className={cn(
        "bg-background mt-3 relative rounded-md w-fit inline-block px-1.5 py-0.5 border",
        "before:absolute before:top-0 before:left-0 before:w-full before:h-full",
        "before:content-[''] before:opacity-[0.1] before:z-10 before:pointer-events-none",
        "before:bg-[url('/noise.gif')]",
        className
      )}
    >
      <span>{text}</span>
    </span>
  );
};

export default TextNoise;
