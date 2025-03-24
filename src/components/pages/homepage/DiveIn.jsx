"use client";
import { useState } from "react";
import Image from "next/image";

export default function DiveIn({ data }) {
  const defaultImage = data?.images?.default || "/fallback.webp";
  const [currentImage, setCurrentImage] = useState(defaultImage);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-12">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-6 md:w-1/2">
        <h1 className="text-5xl md:text-8xl font-bold">
          <span className="text-cyan-400">{data?.titlePart1}</span>{" "}
          <span className="text-indigo-400">{data?.titlePart2}</span>
        </h1>
        <div className="space-y-4">
          {data?.sections?.map((section, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl cursor-pointer hover:underline transition-colors duration-200"
              onMouseEnter={() =>
                setCurrentImage(data?.images?.[section.imageKey] || defaultImage)
              }
              onMouseLeave={() => setCurrentImage(defaultImage)}
            >
              {section.label}
            </p>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-end">
        <Image
          src={currentImage}
          alt={`Image for ${data?.titlePart1} ${data?.titlePart2}`}
          width={600}
          height={400}
          className="rounded-lg object-cover transition-all duration-300 w-full max-w-md md:max-w-lg"
          priority
        />
      </div>
    </div>
  );
}
