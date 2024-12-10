// demo/[[...slug]]/page.tsx
"use client";
import FeaturesSection from "@/components/sections/features/FeaturesSection1";
import Faq1 from "@/components/sections/faq/Faq1";
import HeroSection from "@/components/sections/hero/HeroSection1";
import TrustedBy1 from "@/components/sections/trusted_by/TrustedBy1";
import PricingSection from "@/components/sections/pricing/PricingSection1";
import { Header } from "@/components/sections/header/Header1";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { FaBluesky, FaGithub, FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/sections/footer/Footer1";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection1";

type SectionKey =
  | "hero"
  | "features"
  | "trusted_by"
  | "faq"
  | "pricing"
  | "header"
  | "footer"
  | "testimonials";
type SectionNumber = "1" | "2";

type Sections = {
  [K in SectionKey]?: {
    [N in SectionNumber]?: React.ComponentType;
  };
};

const sections: Sections = {
  hero: {
    "1": HeroSection,
  },
  trusted_by: {
    "1": TrustedBy1,
  },
  faq: {
    "1": Faq1,
  },
  features: {
    "1": FeaturesSection,
  },
  pricing: {
    "1": PricingSection,
  },
  header: {
    "1": Header,
  },
  footer: {
    "1": Footer,
  },
  testimonials: {
    "1": TestimonialsSection,
  },
};

export default function DemoPage({
  params: { slug = [] },
}: {
  params: { slug?: string[] };
}) {
  const [feature, section] = slug as [SectionKey?, SectionNumber?];

  if (!feature || !section || !sections[feature]?.[section]) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="w-[200px] flex items-center justify-center flex-col">
          <h1 className="text-center text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-900">
            404
          </h1>
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
        </div>
      </div>
    );
  }

  const Component = sections[feature][section];
  return (
    <div className="min-h-screen relative">
      <Component />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-full flex items-center justify-center py-1 px-8 gap-x-4 z-[999999] border-primary border-y-4 border-x-[3px] text-foreground opacity-30 transition-all duration-700 hover:opacity-100">
        <Link
          href={"https://x.com/jacobdev0"}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-accent"
        >
          <FaXTwitter className="w-4 h-4" />
        </Link>
        <Link
          href="https://bsky.app/profile/jacobdev.bsky.social"
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-accent"
        >
          <FaBluesky className="w-4 h-4" />
        </Link>
        <ModeToggle />
        <Link
          href={"https://github.com/jacob01-dev/optiqui"}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-accent"
        >
          <FaGithub className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
