import DemosSection from "@/components/landing/DemosSection";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import MaxWidthWrapper from "@/components/landing/MaxWidthWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MaxWidthWrapper className="min-h-screen pt-4">
      <Header />
      <HeroSection />
      <DemosSection />
      <Footer />
    </MaxWidthWrapper>
  );
}
