"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Slice } from "lucide-react";

export default function LearnSection({ title, data, linkTitle, linkHref }) {
  // console.log("LearnSection Data:", data); // ✅ Debugging Output
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data || data.length === 0) return null; // Don't render if no data is provided

  const handleHover = (index) => setHoverIndex(index);
  const handleClick = (index) => setHoverIndex(hoverIndex === index ? null : index);

  return (
    <section className="py-16 px-4 md:px-20">
      {/* Title */}

      <h2 className="text-6xl md:text-8xl font-bold text-red-500 border-b border-gray-700">
        {title}
      </h2>

      {/* Insights Container */}
      <div className="mt-10 space-y-6">
        {data?.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 border-b border-gray-700 cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick(index)}
          >
            <Link href={`/resources/insights/${item?.slug?.current}`}>
              <p className="text-sm text-gray-400">{item.type}</p>

              {/* Hover Background Effect */}
              <div className="relative inline-block">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoverIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 h-1/2 w-full bg-gray-700 origin-left"
                />
                <h3 className="text-2xl md:text-4xl font-semibold relative z-10">
                  {item.title}
                </h3>
              </div>

              {item.categories.length > 0 && (
                <p className="text-gray-500 text-sm mt-2">
                  {item.categories.join(", ")}
                </p>
              )}
              {item.readTime && (
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                  <Clock width={20} /> {item.readTime} min read
                </p>
              )}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View More Link */}
      {linkTitle && linkHref && (
        <Link href={linkHref} className="mt-6 text-gray-400 cursor-pointer underline">
          {linkTitle}
        </Link>
      )}

    </section>
  );
}
