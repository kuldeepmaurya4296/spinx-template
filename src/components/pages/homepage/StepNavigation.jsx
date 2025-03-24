"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepNavigation({ steps }) {
  const [activeContainer, setActiveContainer] = useState(steps[0]?.id || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row h-screen overflow-hidden px-4 md:px-20 py-5"
    >
      {steps.map((step) => {
        const isActive = activeContainer === step.id;

        return (
          <motion.div
            key={step.id}
            className={`relative border border-gray-800 ${isActive ? "cursor-default" : "cursor-pointer"} w-full md:h-full`}
            initial={false}
            animate={{
              flex: isActive ? 5 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            onClick={() => setActiveContainer(step.id)}
          >
            {/* Container content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-white text-black overflow-auto flex flex-col md:flex-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rotated title for open container */}
                  <div className="w-full md:w-24 h-16 md:h-full flex items-center justify-center text-black bg-white">
                    <div className="transform md:rotate-270 flex gap-4 items-center whitespace-nowrap">
                      <span className="text-lg md:text-2xl font-bold">{step.number}</span>
                      <span className="text-lg md:text-2xl font-bold">{step.title}</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="max-w-3xl">
                      <div className="whitespace-pre-line text-xl md:text-2xl leading-relaxed">
                        {step.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Vertical title bar */}
            <div
              className={`absolute inset-0 flex items-center justify-center md:opacity-100 transition-opacity duration-300 ${
                isActive ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex items-center justify-center h-full">
                <div className="transform md:rotate-270 flex gap-4 items-center whitespace-nowrap">
                  <span className="text-lg md:text-2xl font-bold">{step.number}</span>
                  <span className="text-lg md:text-2xl font-bold">{step.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
