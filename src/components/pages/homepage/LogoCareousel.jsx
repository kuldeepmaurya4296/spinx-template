"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCarousel({ logos, bgColor = "[#16171A]", direction = "left" }) {
  const isLeft = direction === "left";
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      <motion.div
        className="flex w-max"
        animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }} // Control direction
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicate logos for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="p-10 w-32 h-32 md:w-60 md:h-60 flex items-center justify-center flex-shrink-0 border border-gray-200"
          >
            <Image
              src={logo?.imageUrl}
              alt="Brand Logo"
              width={160}
              height={80}
              className="object-contain w-20"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
