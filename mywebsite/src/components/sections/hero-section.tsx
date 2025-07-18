"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Hi, I&apos;m Kapil Gulati
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6">Software Engineer & Developer</p>
          <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button asChild variant="default" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 max-w-sm sm:max-w-md mx-auto md:max-w-none">
          <div className="bg-white p-1 rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/500x500/png?text=Kapil+Gulati"
              alt="Kapil Gulati"
              width={500}
              height={500}
              className="rounded-lg w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
