'use client'
import { useState } from "react";

export default function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "Discovery", content: "A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don’t know these things first, the rest is pointless.A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don’t know these things first, the rest is pointless." },
    { title: "Strategy & Planning", content: "Our strategy and planning ensure that we create a digital solution tailored to your business goals.A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don’t know these things first, the rest is pointless." },
    { title: "Website Solutions", content: "We craft high-quality website solutions that are both functional and visually appealing.A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don’t know these things first, the rest is pointless." },
    { title: "Mobile Apps & Responsive Websites", content: "Our team specializes in creating mobile applications and responsive websites for seamless user experiences.A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don’t know these things first, the rest is pointless." },
  ];

  return (
    <div className="px-4 md:px-20 py-20 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/3 h-fit md:sticky top-40 space-y-4">
        <h3 className="text-sm uppercase ">Our Expertise</h3>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mt-2">
          We are innovators in creative web design in Los Angeles.
        </h2>
      </div>
      <div className="md:w-2/3 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-700 rounded-md overflow-hidden">
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
              <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
