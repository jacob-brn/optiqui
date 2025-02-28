import { ImageResponse } from "next/og";
import { Icons } from "@/components/icons";

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 500 | 700; style: "normal" }[]
> {
  const [{ base64Font: normal }, { base64Font: semibold }] = await Promise.all([
    import("./geist-regular-otf.json").then((mod) => mod.default || mod),
    import("./geist-semibold-otf.json").then((mod) => mod.default || mod),
  ]);

  return [
    {
      name: "Geist",
      data: Buffer.from(normal, "base64"),
      weight: 500 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: Buffer.from(semibold, "base64"),
      weight: 700 as const,
      style: "normal" as const,
    },
  ];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-black text-white"
        style={{ fontFamily: "Geist Sans" }}
      >
        <div tw="flex border absolute border-neutral-500 border-dashed inset-y-0 left-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-500 border-dashed inset-y-0 right-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-500 border-dashed inset-y-0 left-8 w-[1px]" />
        <div tw="flex border absolute border-neutral-500 border-dashed inset-y-0 right-8 w-[1px]" />
        <div tw="flex border absolute border-neutral-500 inset-x-0 h-[1px] top-16" />
        <div tw="flex border absolute border-neutral-500 inset-x-0 h-[1px] bottom-16" />
        <div tw="flex border absolute border-neutral-500 inset-x-0 h-[1px] top-8" />
        <div tw="flex border absolute border-neutral-500 inset-x-0 h-[1px] bottom-8" />
        <div tw="flex flex-col absolute justify-center items-center inset-0 p-24 w-full h-full">
          {title || description ? (
            <div tw="flex flex-col items-center justify-center text-center w-full h-full">
              <div tw="text-neutral-400 flex text-[32px] font-semibold tracking-tight -mt-4">
                Optiq UI
              </div>
              <div tw="tracking-tight flex flex-col justify-center text-white text-balance font-semibold text-[80px]">
                {title}
              </div>
              <div tw="text-[40px] text-gray-400 mt-6 text-balance font-normal">
                {description}
              </div>
            </div>
          ) : (
            <div tw="flex flex-col items-center justify-center text-center w-full h-full">
              <div tw="flex flex-row items-center justify-center space-x-4">
                <div tw="text-neutral-400 flex text-[32px] font-semibold tracking-tight ml-2">
                  Optiq UI
                </div>
              </div>
              <div tw="text-white flex text-[70px] font-semibold tracking-tight">
                Free Animated Components
              </div>
              <div tw="text-gray-400 text-2xl flex">
                <p>
                  Built with React, Tailwind CSS, shadcn/ui, Typescript and
                  Motion.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
