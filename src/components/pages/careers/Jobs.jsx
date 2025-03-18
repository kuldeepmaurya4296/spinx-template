"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Jobs({ title, data }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data || data.length === 0) return null; // Don't render if no data is provided

  return (
    <section className="py-12 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-red-500 border-b border-gray-700 pb-2">
        {title}
      </h2>

      {/* Insights Container */}
      <div className="mt-8 space-y-6">
        {data.map((item, index) => (
          <Link href={item.link || "#"} key={index} aria-label={item.title}>
            <motion.div
              className="relative p-4 md:p-6 border-b border-gray-700 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-20  dark:hover:bg-gray-800 rounded-lg"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Hover Background Effect */}
              <div className="relative w-full">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoverIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 h-1/2 w-full bg-gray-800 dark:bg-gray-700 origin-left"
                />
                <h3 className="text-xl md:text-3xl font-semibold relative z-10">
                  {item.title}
                </h3>
              </div>

              {item.categories.length > 0 && (
                <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-0">
                  {item.categories.join(", ")}
                </p>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
