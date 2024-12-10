import MaxWidthWrapper from "./MaxWidthWrapper";
import { Header as Header1 } from "@/components/sections/header/Header1";
import FeaturesSection from "@/components/sections/features/FeaturesSection1";
import HeroSection from "../sections/hero/HeroSection1";
import TrustedBy1 from "../sections/trusted_by/TrustedBy1";
import PricingSection from "../sections/pricing/PricingSection1";
import Faq1 from "../sections/faq/Faq1";

const DemosSection = (): JSX.Element => {
  return (
    <MaxWidthWrapper className="min-h-screen w-full max-w-7xl mx-auto flex flex-col items-center px-12 py-20 gap-y-12">
      <div className="py-12">
        <h3 className="text-6xl font-bold text-center bg-gradient-to-b from-foreground to-muted-foreground dark:from-white dark:to-muted bg-clip-text text-transparent tracking-tight pb-2 mb-0">
          Sections Demos
        </h3>
        <p className="text-muted-foreground text-base max-w-md mt-4 text-center text-balance mx-auto">
          Here are some demos of our sections that you can copy and use for your
          landing page.
        </p>
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border py-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <Header1 />
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border overflow-hidden pt-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <HeroSection />
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border py-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <FeaturesSection />
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border py-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <TrustedBy1 />
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border py-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <PricingSection />
      </div>
      <div className="max-w-5xl mx-auto w-full border border-border py-20 rounded-md [box-shadow:0px_-20px_90px_-100px_hsl(var(--foreground))_inset]">
        <Faq1 />
      </div>
    </MaxWidthWrapper>
  );
};

export default DemosSection;
