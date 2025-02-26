import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Leftbar } from "@/components/leftbar";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <div className="w-full container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Leftbar key="leftbar" />
          <div className="w-full md:col-span-full xl:col-span-1">
            {children}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
