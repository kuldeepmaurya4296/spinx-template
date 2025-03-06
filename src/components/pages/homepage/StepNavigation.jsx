"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const containers = [
  {
    id: "discovery",
    title: "Discovery",
    number: "01",
    content: `The first phase of a good web development project is Discovery. In short, it's the process of learning.

SPINX needs to learn as m begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.`,
  },
  {
    id: "strategy",
    title: "Strategy",
    number: "02",
    content:
      "The Strategy phase involves planning the website's structure, user flows, and content strategy. We'll define the site architecture, create user journeys, and establish the technical requirements needed to achieve your business goals.",
  },
  {
    id: "design",
    title: "Design",
    number: "03",
    content:
      "During the Design phase, we create the visual language of your website. This includes wireframes, mockups, and interactive prototypes. We focus on creating an intuitive user interface that aligns with your brand identity while ensuring optimal user experience.",
  },
  {
    id: "programming",
    title: "Programming",
    number: "04",
    content:
      "The Programming phase is where we bring the designs to life. Our development team codes the frontend and backend of your website, implementing all the planned features and functionality while ensuring cross-browser compatibility and responsive design.",
  },
  {
    id: "evaluation",
    title: "Evaluation",
    number: "05",
    content:
      "In the Evaluation phase, we thoroughly test the website for functionality, usability, and performance. We conduct quality assurance tests, fix bugs, and optimize the site for speed and accessibility before moving to launch.",
  },
  {
    id: "launch",
    title: "Launch",
    number: "06",
    content:
      "The Launch phase involves deploying your website to the production environment. We ensure a smooth transition, provide training if needed, and monitor the site's performance after going live to address any issues that might arise.",
  },
]

export default function StepNavigation() {
  const [activeContainer, setActiveContainer] = useState("discovery")

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden px-4 md:px-20 py-5">
      {containers.map((container) => {
        const isActive = activeContainer === container.id

        return (
          <motion.div
            key={container.id}
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
            onClick={() => setActiveContainer(container.id)}
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
                      <span className="text-lg md:text-2xl font-bold">{container.number}</span>
                      <span className="text-lg md:text-2xl font-bold">{container.title}</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="max-w-3xl">
                      <div className="whitespace-pre-line text-xl md:text-2xl leading-relaxed">
                        {container.content}
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
                  <span className="text-lg md:text-2xl font-bold">{container.number}</span>
                  <span className="text-lg md:text-2xl font-bold">{container.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
