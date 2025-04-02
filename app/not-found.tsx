// import { buttonVariants } from "@/components/ui/button";
// import Link from "next/link";

import HeroMedia from "@/registry/ui/HeroMedia";
import Macbook from "@/registry/ui/Macbook";
import Image from "next/image";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen max-w-7xl w-full mx-auto flex items-center justify-center flex-col px-5 gap-y-10">
//       <div className="text-center flex flex-col items-center justify-center w-fit gap-2 pb-2">
//         <h2 className="text-7xl font-bold pr-1">404</h2>
//         <p className="text-muted-foreground text-md font-medium">
//           Page not found {":("}
//         </p>
//         <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
//       </div>
//       <Link href="/" className={buttonVariants({})}>
//         Back to homepage
//       </Link>
//       <div className="-z-10 w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_30%_30%_at_50%_50%,#000_70%,transparent_120%)]"></div>
//     </div>
//   );
// }

// "use client";
// import TextHighlight from "@/components/TextHighlight";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// import TextUnderline from "@/components/TextUnderline";
// import TextCircle from "@/components/TextCircle";
// import TextNoise from "@/components/TextNoise";
// import CubicTextAnimation from "@/components/CubicTextAnimation";
// import PixelCard from "@/components/PixelCard";
// import { FaXTwitter } from "react-icons/fa6";
// import Script from "next/script";
// import HeroMedia from "@/components/HeroMedia";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Sample images - replace with your own
//   const slides = [
//     {
//       id: 5,
//       src: (
//         <div className="w-full h-full flex items-center justify-center flex-col gap-6">
//           <PixelCard
//             text="Cool and open-source animated components"
//             icon={<Heart className="w-8 h-8" />}
//             className="w-full h-24 rounded-xl border border-border"
//             canvasProps={{
//               gap: 0,
//               colors: "#D2042D, #FF0033, #C21807, #E30B5C, #FF4D4D, #B22222",
//             }}
//           />
//           <PixelCard
//             text=""
//             icon={<></>}
//             className="w-full h-24 rounded-xl border border-border"
//             canvasProps={{
//               gap: 0,
//               noFocus: true,
//               colors:
//                 "#FF6666, #FFA366, #FFFF99, #99FF99, #99CCFF, #9966CC, #C699FF",
//             }}
//           />
//         </div>
//       ),
//       alt: "Slide 3",
//     },
//     {
//       id: 1,
//       src: (
//         <h1>
//           It's <TextHighlight text="Open Source" />
//         </h1>
//       ),
//       alt: "Slide 1",
//     },
//     {
//       id: 2,
//       src: (
//         <h1>
//           It's <TextUnderline text="Free" />
//         </h1>
//       ),
//       alt: "Slide 2",
//     },
//     {
//       id: 3,
//       src: (
//         <h1>
//           It's made with <TextCircle text="Framer Motion" />
//         </h1>
//       ),
//       alt: "Slide 3",
//     },
//     {
//       id: 4,
//       src: (
//         <h1>
//           Components your{" "}
//           <TextNoise
//             text="website"
//             className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400"
//           />{" "}
//           deserves
//         </h1>
//       ),
//       alt: "Slide 3",
//     },
//     {
//       id: 5,
//       src: (
//         <h1>
//           <CubicTextAnimation text="Beatiful website in minutes" />{" "}
//         </h1>
//       ),
//       alt: "Slide 3",
//     },
//     {
//       id: 5,
//       src: (
//         <div className="max-w-4xl w-full mx-auto">
//           <HeroMedia
//             type="video"
//             iframe={false}
//             className="border border-border"
//             thumbnailUrl="/heromedia-thumbnail.jpg"
//             videoUrl="/optiq-ui-saas-template.mp4"
//             buttonTitle="See video"
//             buttonDescription="Just click play button"
//           />
//         </div>
//       ),
//       alt: "Slide 3",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full mx-auto px-8">
//       {/* Carousel container */}
//       <div className="relative h-screen overflow-hidden rounded-lg flex items-center justify-center">
//         {/* Slides */}
//         <div
//           className="flex transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="w-full flex-shrink-0 flex items-center justify-center"
//             >
//               {slide.src as React.ReactNode}
//               <div className="absolute h-full w-full bg-[radial-gradient(hsl(var(--primary))_0.1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-2]"></div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute -left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Dots indicator */}
//       </div>
//     </div>
//   );
// };

export default function DemoPage() {
  return (
    <div className="pt-24">
      <Macbook>
        <HeroMedia
          type="video"
          iframe={false}
          className="h-full rounded-lg"
          thumbnailUrl="/heromedia-thumbnail.jpg"
          videoUrl="/optiq-ui-saas-template.mp4"
          buttonTitle="See video"
          buttonDescription="Just click play button"
          PopoverTitle="Optiq UI SaaS Template"
          PopoverDescription="Coming out soon!"
        />
      </Macbook>
    </div>
  );
}
