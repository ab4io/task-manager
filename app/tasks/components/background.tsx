"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function BackgroundBeamsD() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
      
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Task Management has never been this easy
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Welcome to TaskMaster, your ultimate task management partner. We offer reliable, scalable, and 
        customizable solutions to streamline your business operations. Whether you&apos;re managing projects, 
        tracking deadlines, or coordinating teams, TaskMaster has everything you need to stay on top of your tasks.
        </p>
        <div className="flex items-center justify-center">
        <Link href={'/tasks'}>
        <HoverBorderGradient className="bg-white text-black dark:bg-black dark:text-white">Get Started</HoverBorderGradient>
        </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
