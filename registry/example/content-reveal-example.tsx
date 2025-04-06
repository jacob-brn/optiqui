import { Button } from "@/components/ui/button";
import ContentReveal from "../ui/ContentReveal";
import Image from "next/image";

export default function ContentRevealExample() {
  return (
    <div className="h-full py-24 flex items-center justify-center flex-col gap-y-6 not-prose px-4">
      <ContentReveal
        firstContent={
          <div className="flex flex-col bg-gray-200 p-4 rounded-lg cursor-pointer">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1555988776-c3f17e5cb789?q=100&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                width={256}
                height={256}
                quality={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="max-w-64 mt-2 flex flex-col">
              <h1 className="text-2xl text-black">Old Content</h1>
              <p className="text-sm text-neutral-600">
                This is the old content that will be replaced
              </p>
            </div>
          </div>
        }
        secondContent={
          <div className="flex flex-col bg-gray-200 p-4 rounded-lg cursor-pointer">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                width={256}
                height={256}
                quality={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="max-w-64 mt-2 flex flex-col">
              <h1 className="text-2xl text-black">New Content</h1>
              <p className="text-sm text-neutral-600">
                This is the new content that replaced the old content
              </p>
            </div>
          </div>
        }
        contentClassName="text-4xl font-bold"
        lineColor="bg-blue-500"
        duration={2}
      />
    </div>
  );
}
