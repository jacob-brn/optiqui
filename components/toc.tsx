import { getDocsTocs } from "@/lib/markdown";
import TocObserver from "./toc-observer";

export default async function Toc({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);

  return (
    <div className="2xl:flex hidden toc flex-[1.5] min-w-[238px] py-8 sticky top-16 h-[95.95vh] flex-col">
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-medium text-sm">On this page</h3>
        <div className="pb-2 pt-0.5 overflow-y-auto">
          <TocObserver data={tocs} />
        </div>
      </div>
    </div>
  );
}
