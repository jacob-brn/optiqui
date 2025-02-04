import HeroSection from "@/components/landing/HeroSection";
import MaxWidthWrapper from "@/components/landing/MaxWidthWrapper";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="min-h-screen">
        <Navbar />
        <HeroSection />
        <Footer />
      </MaxWidthWrapper>
      <Script src="/scripts/pixel.min.js" />
    </>
  );
}
