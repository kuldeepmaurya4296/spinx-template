"use client";

import { motion } from "framer-motion";

export default function MarqueeText({ text, speed = 10 }) {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap border-b border-t py-12 mb-10">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {/* Duplicate content for a seamless loop */}
        {[...Array(3)].map((_, index) => (
          <p key={index} className="text-2xl md:text-4xl font-medium text-gray-800">
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
