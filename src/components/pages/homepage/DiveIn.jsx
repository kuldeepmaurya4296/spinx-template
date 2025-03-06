'use client';
import { useState } from "react";
import Image from "next/image";

const images = {
  default: "/image-intro1.webp",
  work: "/default.webp",
  expertise: "/image-intro1.webp",
};

export default function DiveIn() {
  const [currentImage, setCurrentImage] = useState(images.default);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-6 md:w-1/2">
        <h1 className="text-5xl md:text-8xl font-bold">
          <span className="text-cyan-400">Dive</span> <span className="text-indigo-400">In</span>
        </h1>
        <div className="space-y-4">
          <p
            className="text-xl md:text-2xl cursor-pointer hover:underline transition-colors duration-200"
            onMouseEnter={() => setCurrentImage(images.work)}
            onMouseLeave={() => setCurrentImage(images.default)}
          >
            Our Work
          </p>
          <p
            className="text-xl md:text-2xl cursor-pointer hover:underline transition-colors duration-200"
            onMouseEnter={() => setCurrentImage(images.expertise)}
            onMouseLeave={() => setCurrentImage(images.default)}
          >
            Our Expertise
          </p>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="md:w-1/2 flex justify-end">
        <Image
          src={currentImage}
          alt="Dynamic Display"
          width={600}
          height={400}
          className="rounded-lg object-cover transition-all duration-300 w-full max-w-md md:max-w-lg"
          priority
        />
      </div>
    </div>
  );
}
