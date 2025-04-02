import HeroSection from "@/components/landing/HeroSection";
import MaxWidthWrapper from "@/components/landing/MaxWidthWrapper";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

export async function generateMetadata() {
  const url = process.env.NEXT_PUBLIC_APP_URL;
  const ogUrl = new URL(`${url}/og`);
  return {
    title: "Optiq UI",
    description: "Make your landing page look good in minutes.",
    openGraph: {
      title: "Optiq UI",
      description: "Make your landing page look good in minutes.",
      type: "article",
      url: `${url}/`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Optiq UI",
      description: "Make your landing page look good in minutes.",
      images: [ogUrl.toString()],
    },
  };
}

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
