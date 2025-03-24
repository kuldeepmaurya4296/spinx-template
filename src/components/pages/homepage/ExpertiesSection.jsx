"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ExpertiseSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no sections and no title, hide the component
  if (!data?.title && (!data?.sections || data.sections.length === 0)) return null;

  return (
    <div className="px-4 md:px-20 py-20 flex flex-col md:flex-row gap-10">
      {/* Left Section - Title & Description */}
      {data?.title && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          viewport={{ once: true }}
          className="md:w-1/3 h-fit md:sticky top-40 space-y-4"
        >
          <h3 className="text-sm uppercase">Our Expertise</h3>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mt-2">
            {data.title}
          </h2>
        </motion.div>
      )}

      {/* Right Section - Collapsible Sections */}
      {data?.sections && data.sections.length > 0 && (
        <div className="md:w-2/3 space-y-4">
          {data.sections.map((section, index) => (
            section?.title && section?.content && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-md overflow-hidden"
              >
                <button
                  className="w-full text-left flex justify-between items-center p-10 bg-gray-900 hover:bg-gray-800 transition"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-semibold text-2xl md:text-3xl">{section.title}</span>
                  <span className="text-3xl cursor-pointer">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 p-4 bg-white text-black" : "max-h-0"}`}
                >
                  <p className="text-xl md:text-2xl">{section.content}</p>
                  {section.link && (
                    <a href={section.link} className="text-blue-600 font-semibold mt-2 inline-block">
                      Learn More
                    </a>
                  )}
                </div>
              </motion.div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
