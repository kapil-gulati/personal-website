"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m Kapil Gulati
          </h1>
          <p className="text-xl md:text-2xl mb-6">Software Engineer & Developer</p>
          <p className="text-lg mb-8">
            I build modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex space-x-4">
            <Button asChild variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-1 rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/500x500/png?text=Kapil+Gulati"
              alt="Kapil Gulati"
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
