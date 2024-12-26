import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
      <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
        <h2 className="text-7xl font-bold pr-1">404</h2>
        <p className="text-muted-foreground text-md font-medium">
          Page not found {":("}
        </p>
        <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
      <Link href="/" className={buttonVariants({})}>
        Back to homepage
      </Link>
    </div>
  );
}

// import CubicTextAnimation from "@/components/CubicTextAnimation";

// export default function DemoPage() {
//   return (
//     <div className="relative min-h-[100vh] flex items-center justify-center flex-col bg-foreground dark">
//       <div className="flex flex-col items-center z-10">
//         <CubicTextAnimation
//           text="✨Cool Text Animation✨"
//           animateOnHover
//           className="cursor-pointer text-5xl font-semibold text-background"
//         />
//         <p className="text-muted-foreground mt-6 text-lg">
//           Hover over the text above to see magic
//         </p>
//       </div>
//       <div className="absolute h-full w-full bg-[radial-gradient(hsl(var(--primary))_0.1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
//     </div>
//   );
// }
