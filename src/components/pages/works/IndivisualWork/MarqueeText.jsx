"use client";

import { motion } from "framer-motion";

export default function MarqueeText() {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap border-b border-t py-12 mb-10">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {/* Duplicating content to create seamless infinite scroll */}
        {[...Array(3)].map((_, index) => (
          <p key={index} className="text-2xl md:text-4xl font-medium text-gray-800">
            After thorough evaluation and testing, BEGA's remodeled website is
            up-to-date and presents a new and straightforward website that
            creates new excitement for their company.
          </p>
        ))}
      </motion.div>
    </div>
  );
}
