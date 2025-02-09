// import TextCircle from "@/components/TextCircle";
// import TextHighlight from "@/components/TextHighlight";
// import TextUnderline from "@/components/TextUnderline";
// import { buttonVariants } from "@/components/ui/button";
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen max-w-7xl w-full mx-auto flex items-center justify-center flex-col px-5 gap-y-10">
//       {/* <div className="text-center flex flex-col items-center justify-center w-fit gap-2 pb-2">
//         <h2 className="text-7xl font-bold pr-1">404</h2>
//         <p className="text-muted-foreground text-md font-medium">
//           Page not found {":("}
//         </p>
//         <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
//       </div>
//       <Link href="/" className={buttonVariants({})}>
//         Back to homepage
//       </Link> */}
//       <h1 className="max-w-7xl text-4xl md:text-7xl text-center text-balance font-bold tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground dark:from-neutral-300 to-neutral-700 dark:to-neutral-600 bg-opacity-100 bg-clip-text">
//         It's{" "}
//         <TextUnderline
//           text="Open Source"
//           lineWidth={10}
//           className="tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground dark:from-neutral-300 to-neutral-700 dark:to-neutral-500 to-70% bg-opacity-100 bg-clip-text"
//           lineClassName="text-yellow-400"
//         />{" "}
//       </h1>
//       <h1 className="max-w-7xl text-4xl md:text-7xl text-center text-balance font-bold tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground dark:from-neutral-300 to-neutral-700 dark:to-neutral-600 bg-opacity-100 bg-clip-text">
//         It's{" "}
//         <TextHighlight
//           text="Animated"
//           highlightClassName="rounded-xl bg-fuchsia-500"
//         />{" "}
//       </h1>
//       <h1 className="max-w-7xl text-4xl md:text-7xl text-center text-balance font-bold tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground dark:from-neutral-300 to-neutral-700 dark:to-neutral-600  bg-opacity-100 bg-clip-text">
//         It's made with{" "}
//         <TextCircle
//           text="Framer Motion"
//           className="tracking-tight text-clip text-transparent bg-gradient-to-b from-foreground dark:from-neutral-300 to-neutral-700 dark:to-neutral-500 to-70% bg-opacity-100 bg-clip-text"
//           circleClassName="text-blue-300"
//         />
//       </h1>
//       <div className="absolute h-full w-full bg-[radial-gradient(hsl(var(--primary))_0.1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-2]"></div>
//     </div>
//   );
// }

import TextHighlight from "@/components/TextHighlight";

export default function DemoPage() {
  return (
    <div className="text-2xl lg:text-6xl text-center text-balance text-foreground">
      Cool <TextHighlight text="highlight" /> effect
    </div>
  );
}
