import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Children } from "react";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Tasks",
  description: "mini project",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex align-center justify-between p-5">
              <Header />
              <div >
                <ModeToggle />
              </div>
            </div>
            {children}
          </ThemeProvider></body>
    </html>
  );
}


