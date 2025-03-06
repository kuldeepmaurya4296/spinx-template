"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    type: "Insight",
    title: "48 Award-Winning Best Website Designs in 2025",
    categories: ["UX", "Web Development", "Website Redesign"],
  },
  {
    type: "Insight",
    title: "25 Web Design Tutorials and Courses for Beginners to Expert Developers in 2024 25 Web Design Tutorials and Courses for Beginners to Expert Developers in 2024",
    categories: ["Web Development"],
  },
  {
    type: "Guide",
    title: "Top Website Design Companies in 2025",
    categories: ["Website Redesign"],
  },
];

export default function LearnSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleClick = (index) => {
    // Toggle hover effect on mobile
    setHoverIndex(hoverIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-20">
      {/* Title */}
      <h2 className="text-6xl md:text-8xl font-bold text-red-500 border-b border-gray-700">
        Learn
      </h2>

      {/* Insights Container */}
      <div className="mt-10 space-y-6">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 border-b border-gray-700 cursor-pointer transition-all duration-300"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
            onClick={() => handleClick(index)} // Enable toggle on mobile
          >
            <p className="text-sm text-gray-400">{item.type}</p>

            {/* Hover Background Effect */}
            <div className="relative inline-block">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoverIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-1/2 h-1/2 w-full bg-gray-700 origin-left"
              />
              <h3 className="text-2xl md:text-4xl font-semibold relative z-10">{item.title}</h3>
            </div>

            {item.categories.length > 0 && (
              <p className="text-gray-500 text-sm mt-2">
                {item.categories.join(", ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* View More */}
      <Link href="#" className="mt-6 text-gray-400 cursor-pointer underline">
        View More Insights
      </Link>
    </section>
  );
}
