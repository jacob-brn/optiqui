import { CopyButton } from "./copy";
import { CodeBlockCommand } from "../code-block-command";
import { cn } from "@/lib/utils";

const Pre = ({
  className,
  __rawString__,
  __npmCommand__,
  __pnpmCommand__,
  __yarnCommand__,
  __bunCommand__,
  __withMeta__,
  __src__,
  __name__,
  ...props
}: React.HTMLAttributes<HTMLPreElement> & {
  __rawString__?: string;
  __npmCommand__?: string;
  __pnpmCommand__?: string;
  __yarnCommand__?: string;
  __bunCommand__?: string;
  __withMeta__?: boolean;
  __src__?: string;
  __name__?: string;
}) => {
  const isNpmCommand =
    __npmCommand__ && __yarnCommand__ && __pnpmCommand__ && __bunCommand__;

  if (isNpmCommand) {
    return (
      <CodeBlockCommand
        __npmCommand__={__npmCommand__}
        __yarnCommand__={__yarnCommand__}
        __pnpmCommand__={__pnpmCommand__}
        __bunCommand__={__bunCommand__}
      />
    );
  }

  return (
    <>
      <pre
        className={cn(
          "mb-4 mt-12 max-h-[650px] overflow-x-auto rounded-lg border py-4",
          className
        )}
        {...props}
      />
      {__rawString__ && __src__ && (
        <CopyButton
          value={__rawString__}
          src={__src__}
          className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
        />
      )}
    </>
  );
};

export default Pre;
