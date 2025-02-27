"use client";

import { copyToClipboardWithMeta } from "./markdown/copy";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NpmCommands } from "@/types/unist";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import * as React from "react";

export function CodeBlockCommand({
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
}: React.ComponentProps<"pre"> & NpmCommands) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [packageManager, setPackageManager] = React.useState<
    string | undefined
  >("npm");

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const tabs = React.useMemo(() => {
    return {
      pnpm: __pnpmCommand__,
      npm: __npmCommand__,
      yarn: __yarnCommand__,
      bun: __bunCommand__,
    };
  }, [__npmCommand__, __pnpmCommand__, __yarnCommand__, __bunCommand__]);

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager as "pnpm" | "npm" | "yarn" | "bun"];

    if (!command) {
      return;
    }

    copyToClipboardWithMeta(command);
    setHasCopied(true);
    console.log(command);
  }, [packageManager, tabs]);

  return (
    <div className="relative mt-6 max-h-[650px] overflow-x-auto rounded-xl border border-zinc-900 bg-[#0d1117] not-prose">
      <Tabs
        defaultValue={packageManager}
        onValueChange={(value) => {
          setPackageManager(value);
        }}
      >
        <div className="flex items-center justify-between border-zinc-900 px-3 pt-2.5">
          <TabsList className="h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1 mb-0">
            {Object.entries(tabs).map(([key, value]) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        {Object.entries(tabs).map(([key, value]) => {
          return (
            <TabsContent key={key} value={key} className="mt-0 !bg-[#0d1117]">
              <pre className="!px-4 py-5 !bg-[#0d1117]">
                <code
                  className="relative font-mono text-sm leading-none"
                  data-language="bash"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          );
        })}
      </Tabs>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2.5 top-2 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3"
        onClick={copyCommand}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
    </div>
  );
}
