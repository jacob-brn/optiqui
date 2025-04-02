import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Optiq UI",
  description: "Make your landing page look good in minutes.",
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          defaultTheme="dark"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative top-0 bg-primary py-2 md:py-0">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
              <Link href={"https://www.pro.optiqui.com/"} className="group">
                <span className="font-semibold text-sm text-white dark:text-foreground">
                  Introducing Optiq UI Pro - Collection of premium templates for
                  building your next product 50% faster
                  <ArrowRight className="hidden lg:inline-block h-4 w-4 ml-1 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
