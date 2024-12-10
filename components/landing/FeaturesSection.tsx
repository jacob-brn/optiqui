"use client";
import AnimatedIconsCard from "./animated/AnimatedIconsCard";
import CursorHoverCard from "./animated/CursorHoverCard";
import GlobeCard from "./animated/GlobeCard";
import MaxWidthWrapper from "./MaxWidthWrapper";
import LockCard from "./animated/LockCard";

const FeaturesSection = (): JSX.Element => {
  return (
    <MaxWidthWrapper className="min-h-screen flex items-center justify-center relative flex-shrink">
      <section className="z-10 w-full max-w-7xl mx-auto py-24 px-4 xl:px-12 flex-grow items-center justify-center grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-y-12 xl:gap-0">
        <GlobeCard />
        <CursorHoverCard />
        <AnimatedIconsCard />
        <LockCard />
      </section>
    </MaxWidthWrapper>
  );
};

export default FeaturesSection;
