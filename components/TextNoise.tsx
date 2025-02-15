import { cn } from "@/lib/utils";

const TextNoise = ({
  text,
  textClassName,
  overlayClassName,
}: {
  text: string;
  textClassName?: string;
  overlayClassName?: string;
}): JSX.Element => {
  return (
    <span
      className={cn(
        "bg-background mt-3 relative rounded-md w-fit inline-block px-1.5 py-0.5 border",
        textClassName
      )}
    >
      {text}
      <span
        className={cn(
          "absolute top-0 left-0 w-full h-full z-10 pointer-events-none bg-[url('/noise.gif')] opacity-[0.08]",
          overlayClassName
        )}
      />
    </span>
  );
};

export default TextNoise;
