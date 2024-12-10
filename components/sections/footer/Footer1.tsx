"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";

const blurLayers = [
  {
    zIndex: 1,
    blur: "0.078125px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)",
  },
  {
    zIndex: 2,
    blur: "0.15625px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)",
  },
  {
    zIndex: 3,
    blur: "0.3125px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)",
  },
  {
    zIndex: 4,
    blur: "0.625px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)",
  },
  {
    zIndex: 5,
    blur: "1.25px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)",
  },
  {
    zIndex: 6,
    blur: "2.5px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
  },
  {
    zIndex: 7,
    blur: "5px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)",
  },
  {
    zIndex: 8,
    blur: "10px",
    mask: "linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)",
  },
];

const footerSocials = [
  { icon: FaXTwitter, href: "#" },
  { icon: FaGithub, href: "#" },
];

const footerLinks = {
  product: [
    { text: "Pricing", href: "#" },
    { text: "Sign in", href: "#" },
    { text: "Sign up", href: "#" },
  ],
  company: [
    { text: "Terms and Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ],
  support: [
    { text: "Contact us", href: "#" },
    { text: "About us", href: "#" },
  ],
};

const Footer = (): JSX.Element => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [-70, 80]);

  return (
    <footer className="w-full" ref={footerRef}>
      <div className="max-w-7xl mx-auto pb-24 relative">
        <div className="grid items-center justify-center relative overflow-hidden">
          <motion.h3
            className="text-8xl lg:text-9xl font-[900] tracking-tighter uppercase text-center mx-auto"
            style={{
              mask: "radial-gradient(56% 83% at 50% 17.7%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.4) 100%)",
              y: yOffset,
            }}
          >
            optiqui
          </motion.h3>
          <div className="absolute inset-0 w-full h-full">
            {blurLayers.map((layer, index) => (
              <div
                key={index}
                className="absolute inset-0 pointer-events-none rounded-none"
                style={{
                  zIndex: layer.zIndex,
                  backdropFilter: `blur(${layer.blur})`,
                  WebkitBackdropFilter: `blur(${layer.blur})`,
                  maskImage: layer.mask,
                  WebkitMaskImage: layer.mask,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="px-2">
          <div className="w-full max-w-3xl mx-auto flex justify-between flex-col xl:flex-row mt-24 border border-border rounded-md px-9 py-6 relative overflow-hidden [box-shadow:0px_0px_80px_-90px_#fff_inset]">
            <div className="absolute bottom-0 inset-0 -z-10 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_30%_at_60%_0%,#000_70%,transparent_100%),radial-gradient(ellipse_60%_100%_at_90%_100%,#000_70%,transparent_100%)]"></div>
            <div className="py-6 grid gap-y-3">
              <h3 className="font-semibold text-md">
                Are you ready to get started?
              </h3>
              <p className="max-w-xs text-muted-foreground dark:text-neutral-300">
                With Optiq UI, you can build beatiful landing page in minutes.
              </p>
            </div>

            <div className="grid items-center gap-y-3">
              <Link
                href="#"
                className="group flex items-center gap-6 rounded-sm border-accent border bg-background px-6 py-4 transition-colors hover:bg-neutral-200  dark:bg-background dark:hover:bg-neutral-900 group overflow-hidden"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-300 dark:bg-white/10">
                  <span className="text-xl font-bold text-muted-foreground dark:text-neutral-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                      />
                      <path
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Join Optiq UI
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-neutral-400">
                    Start{" "}
                    <span className="text-neutral-900 dark:text-neutral-300">
                      building
                    </span>{" "}
                    now
                  </p>
                </div>
                <div className="relative flex items-center justify-center w-min h-min">
                  <ArrowRight className="h-[1.9rem] w-[1.9rem] p-1.5 rounded-full bg-white text-black" />
                  <div className="absolute rounded-full bg-black text-white w-full h-full p-4 left-12 top-12 transition-all duration-1000 ease-in-out group-hover:left-[calc(50%-1rem)] group-hover:top-[calc(50%-1rem)] group-hover:rotate-[360deg] grid items-center">
                    <ArrowRight className="h-5 w-5 absolute top-[calc(50%-0.625rem)] left-[calc(50%-0.625rem)]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-5xl mx-auto px-8 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="absolute top-0 w-full h-[0.85px] lg:h-[0.5px] bg-muted-foreground [mask:radial-gradient(50%_100%_at_50%_50%,hsl(var(--foreground))_-30%,transparent_100%)]" />
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span className="text-foreground text-xl font-semibold">
              Optiq UI
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Make your landing page look good in minutes.
          </p>
          <div className="flex space-x-4 mt-6">
            {footerSocials.map((footerSocial, index) => (
              <Link
                href={footerSocial.href}
                className="text-neutral-500 transition-all hover:text-foreground"
                key={index}
              >
                <footerSocial.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-6">
          <h3 className="text-foreground font-bold mb-4">Product</h3>
          <ul className="space-y-3">
            {footerLinks.product.map((footerLink, index) => (
              <li
                key={index}
                className="w-max group transition-all duration-300 hover:translate-x-1"
              >
                <Link
                  href={footerLink.href}
                  className="w-full text-muted-foreground transition-all group-hover:text-foreground"
                >
                  {footerLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-foreground font-bold mb-4">Company</h3>
          <ul className="space-y-3">
            {footerLinks.company.map((footerLink, index) => (
              <li
                key={index}
                className="w-max group transition-all duration-300 hover:translate-x-1"
              >
                <Link
                  href={footerLink.href}
                  className="w-full text-muted-foreground transition-all group-hover:text-foreground"
                >
                  {footerLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-foreground font-bold mb-4">Support</h3>
          <ul className="space-y-3">
            {footerLinks.support.map((footerLink, index) => (
              <li
                key={index}
                className="w-max group transition-all duration-300 hover:translate-x-1"
              >
                <Link
                  href={footerLink.href}
                  className="w-full text-muted-foreground transition-all group-hover:text-foreground"
                >
                  {footerLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
