import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen max-w-7xl w-full mx-auto flex items-center justify-center flex-col px-5 gap-y-10">
      <div className="text-center flex flex-col items-center justify-center w-fit gap-2 pb-2">
        <h2 className="text-7xl font-bold pr-1">404</h2>
        <p className="text-muted-foreground text-md font-medium">
          Page not found {":("}
        </p>
        <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
      <Link href="/" className={buttonVariants({})}>
        Back to homepage
      </Link>
      <div className="-z-10 w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_30%_30%_at_50%_50%,#000_70%,transparent_120%)]"></div>
    </div>
  );
}
